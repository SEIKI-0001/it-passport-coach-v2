export type StudyDomain = "strategy" | "management" | "technology";

export type Difficulty = "intro" | "standard" | "exam";

export type Topic = {
  id: string;
  domain: StudyDomain;
  title: string;
  summary: string;
  beginnerExplanation: string;
  analogy: string;
  diagramText: string;
  keyTerms: string[];
  commonTraps: string[];
  relatedPastExamThemes: string[];
  reviewPriority: number;
  recommendedMinutes: number;
  bookReferenceNotes: Record<string, string>;
  minigameId?: string;
};

export type TopicVisualIcon =
  | "app"
  | "book"
  | "briefcase"
  | "calculator"
  | "check"
  | "database"
  | "file"
  | "globe"
  | "key"
  | "lock"
  | "network"
  | "server"
  | "shield"
  | "spark"
  | "user";

export type TopicVisualTone = "brand" | "blue" | "accent" | "yellow" | "danger" | "neutral";

export type TopicVisualNode = {
  label: string;
  detail?: string;
  icon?: TopicVisualIcon;
  tone?: TopicVisualTone;
};

export type TopicVisualLane = {
  label: string;
  detail?: string;
  segments: Array<{
    label: string;
    width: number;
    tone?: TopicVisualTone;
  }>;
};

export type TopicVisualMode =
  | "flow"
  | "balance"
  | "category-grid"
  | "timeline"
  | "branch"
  | "table-split"
  | "network"
  | "crypto"
  | "algorithm";

export type TopicVisual = {
  topicId: string;
  mode: TopicVisualMode;
  title: string;
  subtitle: string;
  nodes?: TopicVisualNode[];
  groups?: Array<{
    label: string;
    detail?: string;
    icon?: TopicVisualIcon;
    tone?: TopicVisualTone;
    items: string[];
  }>;
  lanes?: TopicVisualLane[];
  callout?: string;
};

export type QuestionChoice = {
  id: "a" | "b" | "c" | "d";
  text: string;
};

export type Question = {
  id: string;
  topicId: string;
  domain: StudyDomain;
  prompt: string;
  choices: QuestionChoice[];
  correctChoiceId: QuestionChoice["id"];
  explanation: string;
  trap?: string;
  difficulty: Difficulty;
  relatedPastExamTheme: string;
};

export type Book = {
  id: string;
  title: string;
  notes: string;
};

export type MiniGameDefinition = {
  id: string;
  topicId: string;
  title: string;
  objective: string;
  estimatedMinutes: number;
};
