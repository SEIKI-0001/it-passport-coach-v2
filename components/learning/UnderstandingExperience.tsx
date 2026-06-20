"use client";

import { ArrowRight, CheckCircle2, Lightbulb, ListChecks, RotateCcw, XCircle } from "lucide-react";
import { useState } from "react";
import type { ExperienceChoice, UnderstandingExperience as UnderstandingExperienceType } from "@/types/content";

export function UnderstandingExperience({
  experience,
  practiceHref
}: {
  experience: UnderstandingExperienceType;
  practiceHref: string;
}) {
  const [selectedChoiceId, setSelectedChoiceId] = useState<string | null>(null);
  const choices = experience.choices ?? [];
  const selectedChoice = choices.find((choice) => choice.id === selectedChoiceId);

  function selectChoice(choice: ExperienceChoice) {
    setSelectedChoiceId(choice.id);
  }

  function reset() {
    setSelectedChoiceId(null);
  }

  return (
    <div className="understanding-card">
      <div className="understanding-header">
        <span className="pill pill-blue">まず体験</span>
        <h2>{experience.title}</h2>
        <p>{experience.situation}</p>
      </div>

      <div className="understanding-question">
        <Lightbulb size={20} aria-hidden />
        <div>
          <span>考えてみる</span>
          <strong>{experience.question}</strong>
        </div>
      </div>

      {experience.interactionType === "choice" ? (
        <div className="understanding-choices" aria-label="理解体験の選択肢">
          {choices.map((choice) => {
            const isSelected = selectedChoiceId === choice.id;
            const isRevealed = Boolean(selectedChoiceId);
            const isCorrect = isRevealed && choice.isCorrect;
            const isWrongSelection = isRevealed && isSelected && !choice.isCorrect;

            return (
              <button
                aria-pressed={isSelected}
                className={`understanding-choice ${isCorrect ? "is-correct" : ""} ${
                  isWrongSelection ? "is-wrong" : ""
                }`}
                disabled={isRevealed}
                key={choice.id}
                type="button"
                onClick={() => selectChoice(choice)}
              >
                {isRevealed ? (
                  isCorrect ? (
                    <CheckCircle2 size={18} aria-hidden />
                  ) : isWrongSelection ? (
                    <XCircle size={18} aria-hidden />
                  ) : (
                    <span className="choice-dot" aria-hidden />
                  )
                ) : (
                  <span className="choice-dot" aria-hidden />
                )}
                <span>{choice.label}</span>
              </button>
            );
          })}
        </div>
      ) : (
        <div className="understanding-steps">
          {[...(experience.steps ?? [])]
            .sort((a, b) => a.order - b.order)
            .map((step) => (
              <div className="understanding-step" key={step.id}>
                <span>{step.order}</span>
                <div>
                  <strong>{step.label}</strong>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
        </div>
      )}

      {selectedChoice ? (
        <div className={`understanding-feedback ${selectedChoice.isCorrect ? "is-correct" : "is-wrong"}`}>
          <span className={selectedChoice.isCorrect ? "pill" : "pill pill-danger"}>
            {selectedChoice.isCorrect ? "気づきOK" : "ここで困る"}
          </span>
          <p className="learning-copy">{selectedChoice.feedback}</p>
          <div className="understanding-result-grid">
            <div>
              <span>結果を見る</span>
              <p>{experience.resultExplanation}</p>
            </div>
            <div>
              <span>だから必要</span>
              <p>{experience.conceptExplanation}</p>
            </div>
            <div>
              <span>用語にする</span>
              <p>{experience.connectionToTerm}</p>
            </div>
          </div>
          <div className="button-row">
            {!selectedChoice.isCorrect ? (
              <button className="button button-secondary" type="button" onClick={reset}>
                <RotateCcw size={17} aria-hidden />
                もう一度考える
              </button>
            ) : null}
            <a className="button button-secondary" href="#topic-explanation">
              <ListChecks size={17} aria-hidden />
              説明で整理
            </a>
            <a className="button button-secondary" href="#topic-visual">
              図解で確認
            </a>
            <a className="button button-primary" href={practiceHref}>
              問題で確かめる
              <ArrowRight size={17} aria-hidden />
            </a>
          </div>
        </div>
      ) : null}
    </div>
  );
}
