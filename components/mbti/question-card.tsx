"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import type { MBTIQuestion } from "@/lib/mbti-data"

const dimensionLabels: Record<string, { label: string; description: string }> = {
  EI: { label: "能量方向", description: "外向 (E) vs 内向 (I)" },
  SN: { label: "认知方式", description: "感觉 (S) vs 直觉 (N)" },
  TF: { label: "决策方式", description: "思考 (T) vs 情感 (F)" },
  JP: { label: "生活态度", description: "判断 (J) vs 感知 (P)" },
}

interface QuestionCardProps {
  questions: MBTIQuestion[]
  answers: Record<number, "A" | "B">
  currentIndex: number
  onAnswer: (questionId: number, answer: "A" | "B") => void
  onNext: () => void
  onPrev: () => void
  onFinish: () => void
}

export function QuestionCard({
  questions,
  answers,
  currentIndex,
  onAnswer,
  onNext,
  onPrev,
  onFinish,
}: QuestionCardProps) {
  const question = questions[currentIndex]
  const progress = ((Object.keys(answers).length) / questions.length) * 100
  const isLast = currentIndex === questions.length - 1
  const allAnswered = Object.keys(answers).length === questions.length
  const currentAnswer = answers[question.id]
  const dimInfo = dimensionLabels[question.dimension]

  const [animating, setAnimating] = useState(false)

  const handleSelect = (choice: "A" | "B") => {
    onAnswer(question.id, choice)
    if (!isLast) {
      setAnimating(true)
      setTimeout(() => {
        onNext()
        setAnimating(false)
      }, 300)
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 py-8">
      <div className="mx-auto w-full max-w-2xl">
        {/* Progress header */}
        <div className="mb-8">
          <div className="mb-3 flex items-center justify-between text-sm">
            <span className="font-medium text-foreground">
              {currentIndex + 1} / {questions.length}
            </span>
            <span className="text-muted-foreground">
              已完成 {Math.round(progress)}%
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Dimension badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground">
          <div className="h-2 w-2 rounded-full bg-primary" />
          {dimInfo.label} — {dimInfo.description}
        </div>

        {/* Question */}
        <div
          className={`transition-all duration-300 ${
            animating ? "translate-x-4 opacity-0" : "translate-x-0 opacity-100"
          }`}
        >
          <h2 className="mb-8 text-pretty text-2xl font-bold leading-relaxed text-foreground md:text-3xl">
            {question.question}
          </h2>

          {/* Options */}
          <div className="flex flex-col gap-4">
            <button
              onClick={() => handleSelect("A")}
              className={`group relative w-full rounded-xl border-2 p-5 text-left transition-all hover:shadow-md ${
                currentAnswer === "A"
                  ? "border-primary bg-primary/5 shadow-md"
                  : "border-border bg-card hover:border-primary/50"
              }`}
            >
              <div className="flex items-start gap-4">
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold transition-colors ${
                    currentAnswer === "A"
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground group-hover:bg-primary/20 group-hover:text-primary"
                  }`}
                >
                  A
                </span>
                <span className={`text-base leading-relaxed md:text-lg ${
                  currentAnswer === "A" ? "font-medium text-foreground" : "text-card-foreground"
                }`}>
                  {question.optionA}
                </span>
              </div>
            </button>

            <button
              onClick={() => handleSelect("B")}
              className={`group relative w-full rounded-xl border-2 p-5 text-left transition-all hover:shadow-md ${
                currentAnswer === "B"
                  ? "border-primary bg-primary/5 shadow-md"
                  : "border-border bg-card hover:border-primary/50"
              }`}
            >
              <div className="flex items-start gap-4">
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold transition-colors ${
                    currentAnswer === "B"
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground group-hover:bg-primary/20 group-hover:text-primary"
                  }`}
                >
                  B
                </span>
                <span className={`text-base leading-relaxed md:text-lg ${
                  currentAnswer === "B" ? "font-medium text-foreground" : "text-card-foreground"
                }`}>
                  {question.optionB}
                </span>
              </div>
            </button>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-8 flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={onPrev}
            disabled={currentIndex === 0}
            className="gap-2"
          >
            <ChevronLeft className="h-4 w-4" />
            上一题
          </Button>

          <div className="flex gap-2">
            {isLast && allAnswered ? (
              <Button
                onClick={onFinish}
                className="gap-2 px-8 shadow-lg transition-all hover:scale-105"
              >
                查看结果
                <Sparkles className="h-4 w-4" />
              </Button>
            ) : (
              <Button
                variant="outline"
                onClick={onNext}
                disabled={isLast}
                className="gap-2"
              >
                下一题
                <ChevronRight className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>

        {/* Question dots - mini navigation */}
        <div className="mt-8 flex flex-wrap justify-center gap-1.5">
          {questions.map((q, i) => (
            <button
              key={q.id}
              onClick={() => {
                // We pass through onNext/onPrev to get to the target
                // But for simplicity, just let parent handle direct jump
              }}
              className={`h-2.5 w-2.5 rounded-full transition-all ${
                i === currentIndex
                  ? "w-6 bg-primary"
                  : answers[q.id]
                  ? "bg-primary/40"
                  : "bg-secondary"
              }`}
              aria-label={`跳到第 ${i + 1} 题`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function Sparkles({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
      <path d="M20 3v4" />
      <path d="M22 5h-4" />
    </svg>
  )
}
