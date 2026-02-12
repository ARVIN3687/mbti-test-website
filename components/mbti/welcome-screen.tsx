"use client"

import { Brain, Sparkles, Users, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

interface WelcomeScreenProps {
  onStart: () => void
}

export function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <div className="mx-auto w-full max-w-2xl text-center">
        {/* Header badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground">
          <Sparkles className="h-4 w-4 text-accent" />
          <span>40 道专业测试题目</span>
        </div>

        {/* Main heading */}
        <h1 className="mb-4 text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
          发现你的
          <span className="text-primary"> MBTI </span>
          人格类型
        </h1>

        <p className="mx-auto mb-10 max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">
          通过科学的 MBTI 性格测试，深入了解你的思维方式、行为模式和人际互动偏好，探索真实的自己。
        </p>

        {/* Feature cards */}
        <div className="mb-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <Brain className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="font-medium text-card-foreground">四大维度</p>
              <p className="text-sm text-muted-foreground">E/I, S/N, T/F, J/P</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
              <Zap className="h-5 w-5 text-accent" />
            </div>
            <div>
              <p className="font-medium text-card-foreground">快速测试</p>
              <p className="text-sm text-muted-foreground">约 10 分钟完成</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <Users className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="font-medium text-card-foreground">16 种类型</p>
              <p className="text-sm text-muted-foreground">精准分析你的性格</p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <Button
          onClick={onStart}
          size="lg"
          className="h-14 rounded-xl px-10 text-lg font-semibold shadow-lg transition-all hover:scale-105 hover:shadow-xl"
        >
          开始测试
          <Sparkles className="ml-2 h-5 w-5" />
        </Button>

        <p className="mt-6 text-sm text-muted-foreground">
          完全免费 · 无需注册 · 即时出结果
        </p>
      </div>
    </div>
  )
}
