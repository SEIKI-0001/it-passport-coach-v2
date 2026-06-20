import type { TopicVisual } from "@/types/content";

export const topicVisuals: TopicVisual[] = [
  {
    topicId: "strategy-business-model",
    mode: "flow",
    title: "価値とお金の流れ",
    subtitle: "誰に価値を届け、どこから収益が戻るかを見る",
    nodes: [
      { label: "顧客", detail: "使う人・困っている人", icon: "user", tone: "blue" },
      { label: "価値提供", detail: "商品・サービス・便利さ", icon: "spark", tone: "brand" },
      { label: "支払い", detail: "購入・月額・手数料", icon: "calculator", tone: "accent" },
      { label: "企業", detail: "収益を次の改善へ回す", icon: "briefcase", tone: "neutral" }
    ],
    groups: [
      {
        label: "周辺プレイヤー",
        detail: "利用者と支払者が違う場合もあります",
        icon: "network",
        tone: "yellow",
        items: ["仕入先", "広告主", "提携先"]
      }
    ],
    callout: "利用者 = 支払者とは限らない、がよくあるひっかけです。"
  },
  {
    topicId: "strategy-break-even",
    mode: "balance",
    title: "売上線と総費用線が交わる点",
    subtitle: "交点を超えると黒字、手前は赤字",
    nodes: [
      { label: "固定費", detail: "売れなくてもかかる", icon: "briefcase", tone: "danger" },
      { label: "変動費", detail: "売れるほど増える", icon: "calculator", tone: "yellow" },
      { label: "売上", detail: "販売数に比例して増える", icon: "spark", tone: "brand" }
    ],
    callout: "固定費 ÷ 1個あたりの限界利益 = 損益分岐点販売数量"
  },
  {
    topicId: "strategy-legal-security",
    mode: "category-grid",
    title: "何を守る権利かで分ける",
    subtitle: "対象物を4つの箱に入れると整理しやすい",
    groups: [
      {
        label: "著作権",
        detail: "文章・画像・音楽・プログラム",
        icon: "book",
        tone: "blue",
        items: ["表現物", "コピー禁止", "無断配布に注意"]
      },
      {
        label: "特許権",
        detail: "技術的な発明",
        icon: "spark",
        tone: "brand",
        items: ["発明", "技術アイデア", "出願が重要"]
      },
      {
        label: "商標権",
        detail: "商品名・ロゴ・ブランド",
        icon: "briefcase",
        tone: "accent",
        items: ["名前", "ロゴ", "識別マーク"]
      },
      {
        label: "個人情報",
        detail: "個人を特定できる情報",
        icon: "shield",
        tone: "danger",
        items: ["氏名", "メール", "組み合わせで特定"]
      }
    ],
    callout: "アイデアそのものと、文章・画像などの表現物は分けて考えます。"
  },
  {
    topicId: "management-project",
    mode: "timeline",
    title: "WBSで分けて、ガントで並べる",
    subtitle: "作業の分解と日程の見える化は別もの",
    lanes: [
      {
        label: "要件整理",
        detail: "何を作るか決める",
        segments: [{ label: "2日", width: 28, tone: "blue" }]
      },
      {
        label: "設計",
        detail: "画面・データ・役割",
        segments: [
          { label: "待ち", width: 18, tone: "neutral" },
          { label: "3日", width: 36, tone: "brand" }
        ]
      },
      {
        label: "実装",
        detail: "作る",
        segments: [
          { label: "待ち", width: 42, tone: "neutral" },
          { label: "4日", width: 44, tone: "accent" }
        ]
      },
      {
        label: "テスト",
        detail: "品質確認",
        segments: [
          { label: "待ち", width: 72, tone: "neutral" },
          { label: "2日", width: 26, tone: "yellow" }
        ]
      }
    ],
    callout: "WBSは作業の分解。ガントチャートは日程の見える化です。"
  },
  {
    topicId: "management-service",
    mode: "flow",
    title: "障害対応から再発防止まで",
    subtitle: "早く戻す対応と、原因をなくす対応を分ける",
    nodes: [
      { label: "インシデント", detail: "使えない・困った", icon: "shield", tone: "danger" },
      { label: "一時対応", detail: "まず通常状態へ戻す", icon: "check", tone: "accent" },
      { label: "原因調査", detail: "なぜ起きたか探す", icon: "file", tone: "blue" },
      { label: "問題管理", detail: "根本原因を管理", icon: "book", tone: "brand" },
      { label: "変更管理", detail: "安全に改善を反映", icon: "app", tone: "neutral" }
    ],
    callout: "インシデント管理は早く戻す。問題管理は根本原因を扱います。"
  },
  {
    topicId: "management-audit",
    mode: "flow",
    title: "監査は独立した目で確認する",
    subtitle: "調べて、評価して、報告し、改善状況を追う",
    nodes: [
      { label: "監査計画", detail: "目的と範囲を決める", icon: "file", tone: "blue" },
      { label: "予備調査", detail: "概要をつかむ", icon: "book", tone: "neutral" },
      { label: "本調査", detail: "証跡を確認", icon: "check", tone: "brand" },
      { label: "評価", detail: "適切か判断", icon: "shield", tone: "yellow" },
      { label: "報告", detail: "改善を提案", icon: "briefcase", tone: "accent" },
      { label: "フォローアップ", detail: "改善状況を確認", icon: "spark", tone: "brand" }
    ],
    callout: "監査人は直接修正する人ではなく、独立して評価・提案する人です。"
  },
  {
    topicId: "technology-binary",
    mode: "branch",
    title: "スイッチが増えると表せる数が倍になる",
    subtitle: "1ビット増えるごとに 2倍",
    nodes: [
      { label: "1ビット", detail: "0 / 1 = 2通り", icon: "spark", tone: "blue" },
      { label: "2ビット", detail: "00 / 01 / 10 / 11 = 4通り", icon: "network", tone: "brand" },
      { label: "3ビット", detail: "000 から 111 = 8通り", icon: "server", tone: "accent" }
    ],
    callout: "1バイトは一般的に8ビット。10進数の感覚に引っぱられないのがコツです。"
  },
  {
    topicId: "technology-database-normalization",
    mode: "table-split",
    title: "繰り返しを表に分ける",
    subtitle: "同じ顧客名・商品名を何度も書かない",
    groups: [
      {
        label: "分ける前",
        detail: "注文表に情報が重複",
        icon: "database",
        tone: "danger",
        items: ["注文ID", "顧客名", "住所", "商品名", "価格"]
      },
      {
        label: "顧客表",
        detail: "顧客の情報を一か所に",
        icon: "user",
        tone: "blue",
        items: ["顧客ID", "顧客名", "住所"]
      },
      {
        label: "商品表",
        detail: "商品の情報を一か所に",
        icon: "book",
        tone: "brand",
        items: ["商品ID", "商品名", "価格"]
      },
      {
        label: "注文表",
        detail: "IDでつなぐ",
        icon: "file",
        tone: "accent",
        items: ["注文ID", "顧客ID", "商品ID"]
      }
    ],
    callout: "主キーで一意にし、外部キーで表どうしをつなぎます。"
  },
  {
    topicId: "technology-network-ip",
    mode: "network",
    title: "同じ住所帯か、外へ出るか",
    subtitle: "ネットワーク部で行き先の近さを判断する",
    nodes: [
      { label: "端末", detail: "192.168.1.23", icon: "app", tone: "blue" },
      { label: "同じネットワーク", detail: "192.168.1.x", icon: "network", tone: "brand" },
      { label: "ルータ", detail: "外への出口", icon: "server", tone: "accent" },
      { label: "インターネット", detail: "別ネットワークへ", icon: "globe", tone: "neutral" },
      { label: "相手サーバ", detail: "203.0.113.10", icon: "server", tone: "yellow" }
    ],
    callout: "サブネットマスクは、IPアドレスのどこまでがネットワーク部かを示します。"
  },
  {
    topicId: "technology-cache",
    mode: "flow",
    title: "近くにコピーがあればすぐ使う",
    subtitle: "なければ元データを取りに行き、次のためにコピーを置く",
    nodes: [
      { label: "利用者", detail: "同じ情報をもう一度見たい", icon: "user", tone: "blue" },
      { label: "キャッシュ確認", detail: "近くのコピーを探す", icon: "database", tone: "brand" },
      { label: "ヒット", detail: "あればすぐ返す", icon: "check", tone: "accent" },
      { label: "ミス", detail: "なければ元データへ", icon: "server", tone: "yellow" },
      { label: "更新", detail: "古いコピーは捨てる", icon: "spark", tone: "neutral" }
    ],
    callout: "キャッシュは速さのためのコピーです。古くなる可能性があるので、有効期限や更新もセットで考えます。"
  },
  {
    topicId: "technology-dns",
    mode: "network",
    title: "名前から住所を探してからアクセスする",
    subtitle: "DNSはページ本体ではなくIPアドレスを返す",
    nodes: [
      { label: "ブラウザ", detail: "example.com を入力", icon: "globe", tone: "blue" },
      { label: "DNSリゾルバ", detail: "代わりに調べる", icon: "book", tone: "brand" },
      { label: "ルートDNS", detail: "担当を案内", icon: "network", tone: "neutral" },
      { label: "TLD DNS", detail: ".com の担当", icon: "server", tone: "accent" },
      { label: "権威DNS", detail: "IPアドレスを回答", icon: "check", tone: "yellow" }
    ],
    callout: "IPアドレスを得てから、Webサーバへアクセスします。"
  },
  {
    topicId: "technology-security-crypto",
    mode: "crypto",
    title: "公開鍵で閉めて、秘密鍵で開ける",
    subtitle: "誰でも暗号化できるが、開けられるのは秘密鍵の持ち主だけ",
    nodes: [
      { label: "送信者", detail: "受信者の公開鍵を使う", icon: "user", tone: "blue" },
      { label: "公開鍵", detail: "閉める鍵", icon: "lock", tone: "brand" },
      { label: "暗号文", detail: "読めない形", icon: "shield", tone: "accent" },
      { label: "秘密鍵", detail: "開ける鍵", icon: "key", tone: "yellow" },
      { label: "受信者", detail: "元の文を読む", icon: "user", tone: "neutral" }
    ],
    callout: "電子署名では秘密鍵の使い方が変わるため、暗号化の場面と分けて覚えます。"
  },
  {
    topicId: "technology-algorithm",
    mode: "algorithm",
    title: "順番、判断、繰り返しで読む",
    subtitle: "判断のYes/Noを追うと処理の流れが見える",
    nodes: [
      { label: "開始", detail: "材料を確認", icon: "spark", tone: "brand" },
      { label: "処理", detail: "手順を実行", icon: "check", tone: "blue" },
      { label: "判断", detail: "条件は満たした？", icon: "shield", tone: "yellow" },
      { label: "Yes", detail: "次へ進む", icon: "check", tone: "brand" },
      { label: "No", detail: "処理へ戻る", icon: "network", tone: "accent" },
      { label: "終了", detail: "結果を出す", icon: "file", tone: "neutral" }
    ],
    callout: "繰り返しは、いつ終わるかの条件を必ず確認します。"
  }
];

export function getTopicVisual(topicId: string): TopicVisual | undefined {
  return topicVisuals.find((visual) => visual.topicId === topicId);
}
