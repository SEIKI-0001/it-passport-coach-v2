import {
  AppWindow,
  BookOpen,
  BriefcaseBusiness,
  Calculator,
  CheckCircle2,
  Database,
  FileText,
  Globe2,
  KeyRound,
  LockKeyhole,
  Network,
  Server,
  ShieldCheck,
  Sparkles,
  UserRound
} from "lucide-react";
import type { ComponentType } from "react";
import { getTopicVisual } from "@/data/topic-visuals";
import type { Topic, TopicVisual, TopicVisualIcon, TopicVisualNode } from "@/types/content";

type VisualGroup = NonNullable<TopicVisual["groups"]>[number];
type VisualLane = NonNullable<TopicVisual["lanes"]>[number];

const iconMap: Record<TopicVisualIcon, ComponentType<{ size?: number; "aria-hidden"?: boolean }>> = {
  app: AppWindow,
  book: BookOpen,
  briefcase: BriefcaseBusiness,
  calculator: Calculator,
  check: CheckCircle2,
  database: Database,
  file: FileText,
  globe: Globe2,
  key: KeyRound,
  lock: LockKeyhole,
  network: Network,
  server: Server,
  shield: ShieldCheck,
  spark: Sparkles,
  user: UserRound
};

export function TopicVisual({ topic, compact = false }: { topic: Topic; compact?: boolean }) {
  const visual = getTopicVisual(topic.id);

  if (!visual) {
    return (
      <div className="visual-card visual-fallback">
        <p className="learning-copy">{topic.diagramText}</p>
      </div>
    );
  }

  return (
    <div className={`visual-card visual-card-${visual.mode} ${compact ? "visual-card-compact" : ""}`}>
      <div className="visual-header">
        <div>
          <span className="pill">図解</span>
          <h3>{visual.title}</h3>
          <p>{visual.subtitle}</p>
        </div>
      </div>

      {visual.mode === "balance" ? (
        <BalanceVisual nodes={visual.nodes ?? []} />
      ) : visual.mode === "category-grid" ? (
        <CategoryGridVisual groups={visual.groups ?? []} />
      ) : visual.mode === "timeline" ? (
        <TimelineVisual lanes={visual.lanes ?? []} />
      ) : visual.mode === "branch" ? (
        <BranchVisual nodes={visual.nodes ?? []} />
      ) : visual.mode === "table-split" ? (
        <TableSplitVisual groups={visual.groups ?? []} />
      ) : visual.mode === "crypto" ? (
        <CryptoVisual nodes={visual.nodes ?? []} />
      ) : visual.mode === "algorithm" ? (
        <AlgorithmVisual nodes={visual.nodes ?? []} />
      ) : visual.mode === "network" ? (
        <NetworkVisual nodes={visual.nodes ?? []} />
      ) : (
        <FlowVisual nodes={visual.nodes ?? []} />
      )}

      <div className="visual-caption">
        <strong>読み方</strong>
        <p>{visual.callout ?? topic.diagramText}</p>
      </div>
    </div>
  );
}

function FlowVisual({ nodes }: { nodes: TopicVisualNode[] }) {
  return (
    <div className="visual-flow" aria-label="流れ図">
      {nodes.map((node, index) => (
        <VisualNode key={node.label} node={node} showArrow={index < nodes.length - 1} />
      ))}
    </div>
  );
}

function NetworkVisual({ nodes }: { nodes: TopicVisualNode[] }) {
  return (
    <div className="visual-network" aria-label="ネットワーク図">
      {nodes.map((node, index) => (
        <VisualNode key={node.label} node={node} showArrow={index < nodes.length - 1} />
      ))}
    </div>
  );
}

function CryptoVisual({ nodes }: { nodes: TopicVisualNode[] }) {
  return (
    <div className="visual-crypto" aria-label="暗号化の流れ">
      {nodes.map((node, index) => (
        <VisualNode key={node.label} node={node} showArrow={index < nodes.length - 1} />
      ))}
    </div>
  );
}

function BalanceVisual({ nodes }: { nodes: TopicVisualNode[] }) {
  return (
    <div className="visual-balance" aria-label="損益分岐点グラフ">
      <div className="chart-area">
        <span className="chart-axis chart-axis-y">金額</span>
        <span className="chart-axis chart-axis-x">販売数量</span>
        <span className="chart-line chart-line-revenue" />
        <span className="chart-line chart-line-cost" />
        <span className="chart-break-even">損益分岐点</span>
        <span className="chart-profit">黒字</span>
        <span className="chart-loss">赤字</span>
      </div>
      <div className="visual-node-row">
        {nodes.map((node) => (
          <VisualBadge key={node.label} node={node} />
        ))}
      </div>
    </div>
  );
}

function CategoryGridVisual({ groups }: { groups: VisualGroup[] }) {
  return (
    <div className="visual-category-grid" aria-label="分類図">
      {groups?.map((group) => (
        <div className={`visual-group tone-${group.tone ?? "neutral"}`} key={group.label}>
          <VisualIcon icon={group.icon} />
          <strong>{group.label}</strong>
          {group.detail ? <span>{group.detail}</span> : null}
          <ul>
            {group.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function TimelineVisual({ lanes }: { lanes: VisualLane[] }) {
  return (
    <div className="visual-timeline" aria-label="ガントチャート">
      <div className="timeline-scale">
        <span>開始</span>
        <span>中盤</span>
        <span>完了</span>
      </div>
      {lanes?.map((lane) => (
        <div className="timeline-row" key={lane.label}>
          <div className="timeline-label">
            <strong>{lane.label}</strong>
            {lane.detail ? <span>{lane.detail}</span> : null}
          </div>
          <div className="timeline-track">
            {lane.segments.map((segment) => (
              <span
                className={`timeline-segment tone-${segment.tone ?? "neutral"}`}
                key={`${lane.label}-${segment.label}`}
                style={{ width: `${segment.width}%` }}
              >
                {segment.label}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function BranchVisual({ nodes }: { nodes: TopicVisualNode[] }) {
  return (
    <div className="visual-branch" aria-label="枝分かれ図">
      {nodes.map((node, index) => (
        <div className={`branch-level branch-level-${index + 1}`} key={node.label}>
          <VisualBadge node={node} />
          <div className="branch-options" aria-hidden>
            {Array.from({ length: 2 ** (index + 1) }, (_, optionIndex) => (
              <span key={optionIndex}>{optionIndex.toString(2).padStart(index + 1, "0")}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function TableSplitVisual({ groups }: { groups: VisualGroup[] }) {
  const source = groups?.[0];
  const targets = groups?.slice(1) ?? [];

  return (
    <div className="visual-table-split" aria-label="正規化の表分割図">
      {source ? <DataTable group={source} /> : null}
      <div className="split-arrow" aria-hidden>
        分ける
      </div>
      <div className="split-targets">
        {targets.map((group) => (
          <DataTable group={group} key={group.label} />
        ))}
      </div>
    </div>
  );
}

function AlgorithmVisual({ nodes }: { nodes: TopicVisualNode[] }) {
  return (
    <div className="visual-algorithm" aria-label="フローチャート">
      {nodes.map((node, index) => (
        <div className={`algo-node ${node.label === "判断" ? "algo-decision" : ""}`} key={node.label}>
          <VisualIcon icon={node.icon} />
          <strong>{node.label}</strong>
          {node.detail ? <span>{node.detail}</span> : null}
          {index < nodes.length - 1 ? <i aria-hidden /> : null}
        </div>
      ))}
    </div>
  );
}

function VisualNode({ node, showArrow }: { node: TopicVisualNode; showArrow?: boolean }) {
  return (
    <div className="visual-node-wrap">
      <VisualBadge node={node} />
      {showArrow ? <span className="visual-arrow" aria-hidden /> : null}
    </div>
  );
}

function VisualBadge({ node }: { node: TopicVisualNode }) {
  return (
    <div className={`visual-node tone-${node.tone ?? "neutral"}`}>
      <VisualIcon icon={node.icon} />
      <strong>{node.label}</strong>
      {node.detail ? <span>{node.detail}</span> : null}
    </div>
  );
}

function VisualIcon({ icon }: { icon?: TopicVisualIcon }) {
  const Icon = icon ? iconMap[icon] : Sparkles;
  return (
    <span className="visual-icon">
      <Icon size={20} aria-hidden />
    </span>
  );
}

function DataTable({ group }: { group: VisualGroup }) {
  return (
    <div className={`data-table tone-${group.tone ?? "neutral"}`}>
      <div className="data-table-title">
        <VisualIcon icon={group.icon} />
        <div>
          <strong>{group.label}</strong>
          {group.detail ? <span>{group.detail}</span> : null}
        </div>
      </div>
      <ul>
        {group.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
