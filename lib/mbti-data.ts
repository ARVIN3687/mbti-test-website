export type MBTIDimension = "EI" | "SN" | "TF" | "JP"

export interface MBTIQuestion {
  id: number
  question: string
  optionA: string
  optionB: string
  dimension: MBTIDimension
  // optionA maps to E/S/T/J, optionB maps to I/N/F/P
}

export const mbtiQuestions: MBTIQuestion[] = [
  // E/I Dimension (10 questions)
  {
    id: 1,
    question: "在社交聚会中，你通常会：",
    optionA: "主动和很多人交谈，享受热闹的氛围",
    optionB: "只和少数几个熟悉的人深入交流",
    dimension: "EI",
  },
  {
    id: 2,
    question: "工作一天后，你更倾向于：",
    optionA: "约朋友出去吃饭或娱乐来放松",
    optionB: "独自待在家里休息、看书或看剧",
    dimension: "EI",
  },
  {
    id: 3,
    question: "当你需要解决一个问题时，你倾向于：",
    optionA: "和别人讨论，通过交流来理清思路",
    optionB: "自己安静地思考，想清楚了再说",
    dimension: "EI",
  },
  {
    id: 4,
    question: "你认为自己更像是：",
    optionA: "一个善于社交、精力充沛的人",
    optionB: "一个深思熟虑、内敛安静的人",
    dimension: "EI",
  },
  {
    id: 5,
    question: "在团队合作中，你通常会：",
    optionA: "积极发言，主导讨论方向",
    optionB: "先倾听他人意见，必要时再表达自己的看法",
    dimension: "EI",
  },
  {
    id: 6,
    question: "周末你更喜欢：",
    optionA: "参加各种活动，和不同的人互动",
    optionB: "享受独处时光，做自己喜欢的事",
    dimension: "EI",
  },
  {
    id: 7,
    question: "你的朋友圈通常是：",
    optionA: "广泛的，认识各行各业很多人",
    optionB: "精简的，只有几个非常亲密的好友",
    dimension: "EI",
  },
  {
    id: 8,
    question: "在电话和文字消息之间，你更偏好：",
    optionA: "打电话，因为可以即时交流",
    optionB: "发文字消息，可以慢慢组织语言",
    dimension: "EI",
  },
  {
    id: 9,
    question: "面对新环境或新工作，你会：",
    optionA: "很快适应并主动结交新朋友",
    optionB: "需要一些时间来适应和观察",
    dimension: "EI",
  },
  {
    id: 10,
    question: "你在哪种情况下更有创造力？",
    optionA: "和别人一起头脑风暴时",
    optionB: "独自一人安静思考时",
    dimension: "EI",
  },

  // S/N Dimension (10 questions)
  {
    id: 11,
    question: "你更关注的是：",
    optionA: "当下的具体事实和细节",
    optionB: "未来的可能性和全局图景",
    dimension: "SN",
  },
  {
    id: 12,
    question: "你在学习新知识时，偏好：",
    optionA: "循序渐进，从基础开始一步步学",
    optionB: "先了解整体框架，再填充细节",
    dimension: "SN",
  },
  {
    id: 13,
    question: "你如何描述自己的思维方式？",
    optionA: "实际的、注重经验和事实",
    optionB: "想象力丰富、喜欢探索抽象概念",
    dimension: "SN",
  },
  {
    id: 14,
    question: "做决定时，你更依赖：",
    optionA: "过去的经验和已被证实的方法",
    optionB: "直觉和对未来趋势的判断",
    dimension: "SN",
  },
  {
    id: 15,
    question: "在阅读时，你更喜欢：",
    optionA: "叙事清晰、内容具体的纪实类作品",
    optionB: "富有想象力和隐喻的文学或科幻作品",
    dimension: "SN",
  },
  {
    id: 16,
    question: "你对日常生活的态度是：",
    optionA: "喜欢稳定的日常惯例和可预测的安排",
    optionB: "容易感到无聊，渴望变化和新体验",
    dimension: "SN",
  },
  {
    id: 17,
    question: "别人可能形容你为：",
    optionA: "脚踏实地、注重实际的人",
    optionB: "有远见、充满创意的人",
    dimension: "SN",
  },
  {
    id: 18,
    question: "在解决问题时，你倾向于：",
    optionA: "使用已被验证有效的方法",
    optionB: "尝试全新的、没人用过的方法",
    dimension: "SN",
  },
  {
    id: 19,
    question: "你对细节的态度是：",
    optionA: "非常注重细节，会检查每一个环节",
    optionB: "更关注大方向，细节可以之后再完善",
    dimension: "SN",
  },
  {
    id: 20,
    question: "你更信任的是：",
    optionA: "亲眼看到、亲手触到的具体证据",
    optionB: "内心的预感和第六感",
    dimension: "SN",
  },

  // T/F Dimension (10 questions)
  {
    id: 21,
    question: "在做重要决定时，你更看重：",
    optionA: "逻辑分析和客观事实",
    optionB: "个人价值观和对他人的影响",
    dimension: "TF",
  },
  {
    id: 22,
    question: "当朋友向你倾诉烦恼时，你通常会：",
    optionA: "帮他们分析问题，提供解决方案",
    optionB: "先表示理解和同情，给予情感支持",
    dimension: "TF",
  },
  {
    id: 23,
    question: "你认为公平意味着：",
    optionA: "按照同一标准对待所有人",
    optionB: "根据每个人的具体情况做不同考量",
    dimension: "TF",
  },
  {
    id: 24,
    question: "在工作中遇到冲突时，你倾向于：",
    optionA: "客观地分析对错，坚持自己认为正确的立场",
    optionB: "尽量考虑大家的感受，寻求和谐的解决方式",
    dimension: "TF",
  },
  {
    id: 25,
    question: "你更欣赏别人说你：",
    optionA: "聪明、能力强、思维清晰",
    optionB: "善良、体贴、善解人意",
    dimension: "TF",
  },
  {
    id: 26,
    question: "面对批评，你的第一反应是：",
    optionA: "分析批评是否合理和有建设性",
    optionB: "感受到被批评的情绪冲击",
    dimension: "TF",
  },
  {
    id: 27,
    question: "你认为做决策时应该：",
    optionA: "把个人情感放在一边，用理性分析",
    optionB: "考虑到自己和他人的感受",
    dimension: "TF",
  },
  {
    id: 28,
    question: "在评价他人的工作时，你会：",
    optionA: "直接指出问题所在，不管对方是否会不高兴",
    optionB: "先肯定优点，再委婉地提出改进建议",
    dimension: "TF",
  },
  {
    id: 29,
    question: "你更容易被什么打动：",
    optionA: "精妙的逻辑推理和有力的论证",
    optionB: "真挚的情感表达和感人的故事",
    dimension: "TF",
  },
  {
    id: 30,
    question: "在团队中，你通常扮演的角色是：",
    optionA: "分析问题并提出最优方案的策略者",
    optionB: "关注团队氛围和成员感受的协调者",
    dimension: "TF",
  },

  // J/P Dimension (10 questions)
  {
    id: 31,
    question: "你更喜欢哪种生活方式？",
    optionA: "有计划、有规律的生活",
    optionB: "灵活、随性的生活",
    dimension: "JP",
  },
  {
    id: 32,
    question: "当你有一个重要任务时，你通常会：",
    optionA: "提前制定详细计划并按时完成",
    optionB: "在截止日期前才开始集中精力完成",
    dimension: "JP",
  },
  {
    id: 33,
    question: "你的办公桌/房间通常是：",
    optionA: "整齐有序的，东西都在固定的位置",
    optionB: "看起来有些凌乱，但你知道东西在哪里",
    dimension: "JP",
  },
  {
    id: 34,
    question: "计划好的事情突然改变，你的反应是：",
    optionA: "感到困扰，更喜欢按原计划进行",
    optionB: "觉得无所谓，能很快适应新情况",
    dimension: "JP",
  },
  {
    id: 35,
    question: "出去旅行时，你偏好：",
    optionA: "提前规划好详细行程和住宿",
    optionB: "只定大方向，其余走到哪儿算哪儿",
    dimension: "JP",
  },
  {
    id: 36,
    question: "你认为规则和制度：",
    optionA: "是必要的，可以保证事情顺利进行",
    optionB: "有时太死板，应该根据情况灵活调整",
    dimension: "JP",
  },
  {
    id: 37,
    question: "在购物时，你通常会：",
    optionA: "列好购物清单，按计划购买",
    optionB: "随心所欲地逛，看到喜欢的就买",
    dimension: "JP",
  },
  {
    id: 38,
    question: "做完一件事后，你更想：",
    optionA: "立刻开始下一件事，保持高效",
    optionB: "先放松一下，不急着开始新任务",
    dimension: "JP",
  },
  {
    id: 39,
    question: "你对截止日期的态度是：",
    optionA: "严格遵守，甚至会提前完成",
    optionB: "认为这只是一个参考，有弹性的",
    dimension: "JP",
  },
  {
    id: 40,
    question: "你更喜欢哪种工作方式？",
    optionA: "按照既定流程和步骤执行",
    optionB: "根据当下情况随机应变",
    dimension: "JP",
  },
]

export interface MBTIType {
  type: string
  title: string
  description: string
  strengths: string[]
  weaknesses: string[]
  careers: string[]
  color: string
}

export const mbtiTypes: Record<string, MBTIType> = {
  ISTJ: {
    type: "ISTJ",
    title: "检查者",
    description:
      "安静、认真、可靠。通过专注和细致来保证成功。实际、有序、注重事实、逻辑清晰、坚定不移。对自己和他人都很负责任。",
    strengths: ["可靠", "耐心", "细致", "有责任感", "逻辑清晰"],
    weaknesses: ["固执", "不善表达情感", "对变化抗拒"],
    careers: ["会计师", "审计师", "项目经理", "法官"],
    color: "bg-blue-600",
  },
  ISFJ: {
    type: "ISFJ",
    title: "保护者",
    description:
      "安静、友善、有责任感、尽职尽责。坚守承诺，全力以赴完成任务。善于关注他人的感受和需求。",
    strengths: ["善良", "体贴", "忠诚", "耐心", "务实"],
    weaknesses: ["过于自我牺牲", "不善拒绝", "抵触变化"],
    careers: ["护士", "教师", "社会工作者", "行政助理"],
    color: "bg-green-600",
  },
  INFJ: {
    type: "INFJ",
    title: "咨询师",
    description:
      "有洞察力和创造力，寻求理想与现实之间的平衡。对人性有深刻的理解，善于激励他人实现自己的潜能。",
    strengths: ["有洞察力", "理想主义", "善于倾听", "有创造力", "坚定"],
    weaknesses: ["过于完美主义", "容易疲惫", "难以面对冲突"],
    careers: ["心理咨询师", "作家", "教育者", "人力资源"],
    color: "bg-teal-600",
  },
  INTJ: {
    type: "INTJ",
    title: "策略家",
    description:
      "有独创性和强烈的内驱力来实现自己的想法和目标。能快速看到外部事件中的规律并发展出全面的解释和策略。",
    strengths: ["独立", "有远见", "果断", "自信", "追求效率"],
    weaknesses: ["傲慢", "缺乏耐心", "不善社交"],
    careers: ["科学家", "工程师", "战略顾问", "企业家"],
    color: "bg-indigo-600",
  },
  ISTP: {
    type: "ISTP",
    title: "工匠",
    description:
      "灵活、宽容，善于观察，行动迅速。喜欢分析因果关系，用逻辑思维解决问题。享受动手操作的乐趣。",
    strengths: ["适应力强", "冷静", "善于观察", "逻辑思维强", "独立"],
    weaknesses: ["不善表达感情", "冒险", "注意力分散"],
    careers: ["工程师", "技工", "飞行员", "法医科学家"],
    color: "bg-slate-600",
  },
  ISFP: {
    type: "ISFP",
    title: "艺术家",
    description:
      "安静、友善、敏感、善良。享受当下，热爱生活中的美好事物。不喜欢争论和冲突，按照自己的价值观生活。",
    strengths: ["善良", "有审美", "适应力强", "忠诚", "有同理心"],
    weaknesses: ["过于敏感", "缺乏远见", "回避冲突"],
    careers: ["艺术家", "设计师", "音乐家", "兽医"],
    color: "bg-pink-600",
  },
  INFP: {
    type: "INFP",
    title: "治愈者",
    description:
      "理想主义者，忠于自己的价值观和重要的人。渴望生活与内心价值观一致。充满好奇心，善于发现事物的潜力。",
    strengths: ["有同理心", "创造力强", "开放", "热情", "忠诚"],
    weaknesses: ["过于理想化", "不切实际", "容易情绪化"],
    careers: ["作家", "心理咨询师", "教师", "非营利组织"],
    color: "bg-purple-600",
  },
  INTP: {
    type: "INTP",
    title: "思想家",
    description:
      "寻求对感兴趣的事物建立逻辑解释。理论导向，对抽象思维和分析有浓厚兴趣。安静、内敛、灵活、适应力强。",
    strengths: ["分析能力强", "客观", "好奇", "创新", "独立"],
    weaknesses: ["社交困难", "不切实际", "拖延"],
    careers: ["科学家", "程序员", "数学家", "哲学家"],
    color: "bg-cyan-600",
  },
  ESTP: {
    type: "ESTP",
    title: "冒险家",
    description:
      "灵活、宽容，采取务实的方法来获得直接的结果。对理论和概念不感兴趣，更喜欢用行动来解决问题。",
    strengths: ["大胆", "直率", "善于社交", "观察力强", "务实"],
    weaknesses: ["不耐烦", "冒险", "不考虑后果"],
    careers: ["企业家", "销售", "运动员", "消防员"],
    color: "bg-orange-600",
  },
  ESFP: {
    type: "ESFP",
    title: "表演者",
    description:
      "外向、友好、乐于接受一切。热爱生活、热爱人、热爱物质享受。喜欢与他人合作，将常识和灵活的方法带入工作中。",
    strengths: ["热情", "乐观", "善于社交", "有趣", "适应力强"],
    weaknesses: ["注意力分散", "冲动", "过于敏感"],
    careers: ["演员", "活动策划", "销售", "导游"],
    color: "bg-yellow-600",
  },
  ENFP: {
    type: "ENFP",
    title: "倡导者",
    description:
      "热情、富有想象力。将生活视为充满可能性的舞台。善于发现事物之间的联系，渴望获得他人的认可和支持。",
    strengths: ["热情", "创造力强", "善于沟通", "有洞察力", "乐观"],
    weaknesses: ["注意力分散", "过于理想化", "情绪化"],
    careers: ["记者", "咨询师", "创业者", "广告创意"],
    color: "bg-amber-600",
  },
  ENTP: {
    type: "ENTP",
    title: "辩论家",
    description:
      "聪明、机智、有创新精神。善于寻找新的解决方案。善于分析和理解他人。不喜欢按部就班，喜欢有挑战性的问题。",
    strengths: ["机智", "善辩", "创新", "适应力强", "学习能力强"],
    weaknesses: ["好辩", "缺乏后续执行力", "不敏感"],
    careers: ["律师", "创业者", "咨询顾问", "发明家"],
    color: "bg-red-600",
  },
  ESTJ: {
    type: "ESTJ",
    title: "管理者",
    description:
      "务实、现实、注重事实。果断、能快速做出决定。善于组织项目和人员来完成任务。注重效率和结果。",
    strengths: ["组织能力强", "果断", "忠诚", "有耐心", "可靠"],
    weaknesses: ["固执", "不灵活", "对情感不敏感"],
    careers: ["经理", "军官", "法官", "财务分析师"],
    color: "bg-emerald-600",
  },
  ESFJ: {
    type: "ESFJ",
    title: "提供者",
    description:
      "热心、有责任感、善于合作。希望周围的环境和谐愉快。善于与人打交道，总是乐于助人，为他人着想。",
    strengths: ["忠诚", "善良", "善于社交", "有责任感", "实际"],
    weaknesses: ["过于无私", "敏感", "不善处理批评"],
    careers: ["教师", "医护人员", "行政经理", "客服"],
    color: "bg-lime-600",
  },
  ENFJ: {
    type: "ENFJ",
    title: "教育家",
    description:
      "热情、有同理心、有责任感。善于激励和引导他人。非常关注他人的感受和需求，是天生的领导者和教练。",
    strengths: ["有领导力", "善于倾听", "有同理心", "有组织力", "可靠"],
    weaknesses: ["过于理想化", "自我牺牲", "对批评敏感"],
    careers: ["教师", "培训师", "心理咨询师", "公关经理"],
    color: "bg-rose-600",
  },
  ENTJ: {
    type: "ENTJ",
    title: "指挥官",
    description:
      "坦率、果断、天生的领导者。善于发现低效的流程和制度，并加以改进。喜欢制定长期计划并组织实施。",
    strengths: ["自信", "果断", "有战略眼光", "效率高", "有领导力"],
    weaknesses: ["不耐烦", "傲慢", "情感表达不足"],
    careers: ["CEO", "企业家", "律师", "管理顾问"],
    color: "bg-violet-600",
  },
}
