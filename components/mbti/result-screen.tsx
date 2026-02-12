"use client"

import { Award, Briefcase, RefreshCw, ThumbsDown, ThumbsUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { MBTIType } from "@/lib/mbti-data"

interface ResultScreenProps {
  result: MBTIType
  scores: {
    E: number; I: number
    S: number; N: number
    T: number; F: number
    J: number; P: number
  }
  onRestart: () => void
}

function ScoreBar({ labelA, labelB, scoreA, scoreB }: {
  labelA: string
  labelB: string
  scoreA: number
  scoreB: number
}) {
  const total = scoreA + scoreB
  const percentA = total > 0 ? Math.round((scoreA / total) * 100) : 50

  return (
    <div className="mb-5">
      <div className="mb-2 flex items-center justify-between text-sm">
        <span className={`font-semibold ${percentA >= 50 ? "text-primary" : "text-muted-foreground"}`}>
          {labelA} {percentA}%
        </span>
        <span className={`font-semibold ${percentA < 50 ? "text-primary" : "text-muted-foreground"}`}>
          {labelB} {100 - percentA}%
        </span>
      </div>
      <div className="h-3 w-full overflow-hidden rounded-full bg-secondary">
        <div
          className="h-full rounded-full bg-primary transition-all duration-700"
          style={{ width: `${percentA}%` }}
        />
      </div>
    </div>
  )
}

export function ResultScreen({ result, scores, onRestart }: ResultScreenProps) {
  return (
    <div className="flex min-h-screen flex-col items-center px-4 py-12">
      <div className="mx-auto w-full max-w-2xl">
        {/* Result header */}
        <div className="mb-10 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground">
            <Award className="h-4 w-4 text-accent" />
            <span>你的测试结果</span>
          </div>

          <div className="mb-3 flex items-center justify-center gap-3">
            {result.type.split("").map((letter, i) => (
              <span
                key={i}
                className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-2xl font-bold text-primary-foreground shadow-lg md:h-20 md:w-20 md:text-3xl"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {letter}
              </span>
            ))}
          </div>

          <h1 className="mb-2 text-3xl font-bold text-foreground md:text-4xl">
            {result.title}
          </h1>
          <p className="mx-auto max-w-lg text-pretty text-base leading-relaxed text-muted-foreground">
            {result.description}
          </p>
        </div>

        {/* Score breakdown */}
        <div className="mb-8 rounded-2xl border border-border bg-card p-6">
          <h3 className="mb-5 text-lg font-semibold text-card-foreground">维度分析</h3>
          <ScoreBar labelA="外向 (E)" labelB="内向 (I)" scoreA={scores.E} scoreB={scores.I} />
          <ScoreBar labelA="感觉 (S)" labelB="直觉 (N)" scoreA={scores.S} scoreB={scores.N} />
          <ScoreBar labelA="思考 (T)" labelB="情感 (F)" scoreA={scores.T} scoreB={scores.F} />
          <ScoreBar labelA="判断 (J)" labelB="感知 (P)" scoreA={scores.J} scoreB={scores.P} />
        </div>

        {/* Strengths & Weaknesses */}
        <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="mb-4 flex items-center gap-2">
              <ThumbsUp className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold text-card-foreground">性格优势</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {result.strengths.map((s) => (
                <span
                  key={s}
                  className="rounded-lg bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="mb-4 flex items-center gap-2">
              <ThumbsDown className="h-5 w-5 text-accent" />
              <h3 className="text-lg font-semibold text-card-foreground">成长空间</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {result.weaknesses.map((w) => (
                <span
                  key={w}
                  className="rounded-lg bg-accent/10 px-3 py-1.5 text-sm font-medium text-accent"
                >
                  {w}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Career suggestions */}
        <div className="mb-10 rounded-2xl border border-border bg-card p-6">
          <div className="mb-4 flex items-center gap-2">
            <Briefcase className="h-5 w-5 text-primary" />
            <h3 className="text-lg font-semibold text-card-foreground">适合职业</h3>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {result.careers.map((c) => (
              <div
                key={c}
                className="flex items-center justify-center rounded-xl border border-border bg-background p-3 text-center text-sm font-medium text-foreground"
              >
                {c}
              </div>
            ))}
          </div>
        </div>

        {/* Restart */}
        <div className="text-center">
          <Button
            onClick={onRestart}
            variant="outline"
            size="lg"
            className="gap-2 rounded-xl px-8"
          >
            <RefreshCw className="h-4 w-4" />
            重新测试
          </Button>
        </div>
      </div>
    </div>
  )
}
