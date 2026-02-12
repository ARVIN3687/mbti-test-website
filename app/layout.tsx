import type { Metadata } from 'next'
import { Noto_Sans_SC, Space_Mono } from 'next/font/google'

import './globals.css'

const _notoSansSC = Noto_Sans_SC({ subsets: ['latin'], variable: '--font-noto-sans-sc' })
const _spaceMono = Space_Mono({ weight: ['400', '700'], subsets: ['latin'], variable: '--font-space-mono' })

export const metadata: Metadata = {
  title: 'MBTI 性格测试',
  description: '探索你的 MBTI 人格类型 — 通过专业测试题目发现真实的自己',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN">
      <body className={`${_notoSansSC.variable} ${_spaceMono.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
