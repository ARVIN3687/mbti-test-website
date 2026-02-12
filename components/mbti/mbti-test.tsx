"use client"

import { useCallback, useState } from "react"
import { mbtiQuestions, mbtiTypes, type MBTIType } from "@/lib/mbti-data"
import { WelcomeScreen } from "./welcome-screen"
import { QuestionCard } from "./question-card"
import { ResultScreen } from "./result-screen"

type Screen = "welcome" | "test" | "result"

export function MBTITest() {
  const [screen, setScreen] = useState<Screen>("welcome")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<number, "A" | "B">>({})

  const handleStart = useCallback(() => {
    setScreen("test")
    setCurrentIndex(0)
    setAnswers({})
  }, [])

  const handleAnswer = useCallback((questionId: number, answer: "A" | "B") => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }))
  }, [])

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => Math.min(prev + 1, mbtiQuestions.length - 1))
  }, [])

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0))
  }, [])

  const calculateResult = useCallback(() => {
    const scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 }

    for (const q of mbtiQuestions) {
      const answer = answers[q.id]
      if (!answer) continue

      switch (q.dimension) {
        case "EI":
          if (answer === "A") scores.E++
          else scores.I++
          break
        case "SN":
          if (answer === "A") scores.S++
          else scores.N++
          break
        case "TF":
          if (answer === "A") scores.T++
          else scores.F++
          break
        case "JP":
          if (answer === "A") scores.J++
          else scores.P++
          break
      }
    }

    const type = [
      scores.E >= scores.I ? "E" : "I",
      scores.S >= scores.N ? "S" : "N",
      scores.T >= scores.F ? "T" : "F",
      scores.J >= scores.P ? "J" : "P",
    ].join("")

    return { type, scores }
  }, [answers])

  const handleFinish = useCallback(() => {
    setScreen("result")
  }, [])

  const handleRestart = useCallback(() => {
    setScreen("welcome")
    setCurrentIndex(0)
    setAnswers({})
  }, [])

  if (screen === "welcome") {
    return <WelcomeScreen onStart={handleStart} />
  }

  if (screen === "test") {
    return (
      <QuestionCard
        questions={mbtiQuestions}
        answers={answers}
        currentIndex={currentIndex}
        onAnswer={handleAnswer}
        onNext={handleNext}
        onPrev={handlePrev}
        onFinish={handleFinish}
      />
    )
  }

  const { type, scores } = calculateResult()
  const resultType: MBTIType = mbtiTypes[type] || mbtiTypes["INFJ"]

  return (
    <ResultScreen result={resultType} scores={scores} onRestart={handleRestart} />
  )
}
