import type { Metadata } from "next";
import {
  BadgeCheck,
  Boxes,
  BriefcaseBusiness,
  Camera,
  CheckCircle2,
  CircleDollarSign,
  Factory,
  FileText,
  Globe2,
  Handshake,
  HeartHandshake,
  Landmark,
  Layers3,
  MessageCircle,
  PackageCheck,
  Palette,
  Plane,
  ReceiptText,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Sprout,
  Store,
  Users
} from "lucide-react";
import { ActionButton } from "@/components/ActionButton";
import { AudienceCard } from "@/components/AudienceCard";
import { CapabilityCard } from "@/components/CapabilityCard";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { SectionHeading } from "@/components/SectionHeading";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SupportList } from "@/components/SupportList";

export const metadata: Metadata = {
  title: "合作支持 | 样品试单、包装定制与渠道资料 | 云明宇琛",
  description:
    "云明宇琛合作支持页面，面向养生馆、美容院、SPA、社群团长、跨境卖家与海外华人渠道，展示样品测试、包装定制、合作流程、渠道资料与合规表达边界。",
  openGraph: {
    title: "合作支持 | 云明宇琛",
    description:
      "从样品试单、包装方案到渠道资料与合规表达，帮助合作伙伴清楚推进东方草本温养产品合作。",
    type: "website",
    locale: "zh_CN"
  }
};

const audiences = [
  {
    icon: Store,
    title: "养生馆 / 中医养生门店",
    description: "适合引入门店体验品、会员伴手礼与日常养护组合。"
  },
  {
    icon: Sparkles,
    title: "美容院 / SPA 会所",
    description: "适合搭配放松体验、女性护理与门店零售转化。"
  },
  {
    icon: Users,
    title: "社群团长 / 私域团购",
    description: "适合以样品体验、资料包和复购组合做社群成交。"
  },
  {
    icon: ShoppingBag,
    title: "TikTok Shop 商家",
    description: "适合围绕东方草本生活方式搭建短视频内容场景。"
  },
  {
    icon: Plane,
    title: "跨境电商卖家",
    description: "适合做海外华人市场、礼盒套装与内容本地化表达。"
  },
  {
    icon: Landmark,
    title: "华人渠道商 / 批发商",
    description: "适合按地区、渠道和客群规划产品组合与包装层级。"
  },
  {
    icon: MessageCircle,
    title: "养生老师 / IP 主理人",
    description: "适合围绕个人内容定位定制产品线和课程周边。"
  },
  {
    icon: BriefcaseBusiness,
    title: "想做自有品牌的创业者",
    description: "适合从小批量试单开始，逐步验证包装、内容和渠道。"
  }
];

const sampleSupportItems = [
  "可先沟通目标市场与销售渠道",
  "根据渠道类型推荐样品组合",
  "可提供基础包装版、贴牌测试版、礼盒组合版",
  "正式价格根据规格、包装、数量和交付要求单独确认",
  "官网不公开真实底价，保护渠道合作空间"
];

const capabilities = [
  {
    icon: BadgeCheck,
    title: "支持 OEM/ODM 贴牌",
    description: "可围绕客户定位规划产品、规格、组合与品牌呈现方式。"
  },
  {
    icon: Palette,
    title: "支持包装定制",
    description: "可按渠道、预算与礼盒场景设计不同包装方案。"
  },
  {
    icon: PackageCheck,
    title: "支持样品测试",
    description: "先看样品、再定方向，让合作判断更踏实。"
  },
  {
    icon: Boxes,
    title: "支持小批量试单",
    description: "适合新渠道、新品牌先做市场反馈验证。"
  },
  {
    icon: Factory,
    title: "支持工厂环境查看",
    description: "按合作进度安排查看生产与品控相关环境。"
  },
  {
    icon: Camera,
    title: "支持产品视频素材拍摄",
    description: "围绕产品展示、包装开箱和使用场景规划素材。"
  },
  {
    icon: Globe2,
    title: "支持中文/英文市场资料",
    description: "便于国内渠道、海外华人市场和跨境业务沟通。"
  },
  {
    icon: FileText,
    title: "支持海外渠道内容表达",
    description: "帮助客户把东方草本理念转化成更清晰的销售内容。"
  },
  {
    icon: Handshake,
    title: "支持现有品牌或自有品牌合作",
    description: "已有品牌可做延展，新品牌可从基础套装起步。"
  },
  {
    icon: CircleDollarSign,
    title: "支持按预算做包装方案",
    description: "从基础装、体验装到礼盒装，匹配不同渠道节奏。"
  }
];

const processSteps = [
  "沟通需求",
  "确认产品方向",
  "提供样品或样品方案",
  "确认包装与规格",
  "签订合作合同",
  "支付定金",
  "安排生产",
  "验货与发货"
];

const reasons = [
  {
    icon: MessageCircle,
    title: "刘凌云老师 IP 内容背书",
    description:
      "围绕中式养生、女性养心、家和万事兴等主题，形成长期信任资产。"
  },
  {
    icon: Sprout,
    title: "东方草本产品供应链整合",
    description:
      "围绕艾草温养贴、艾草足浴包、草本眼贴/眼膜等方向，支持样品测试和贴牌合作。"
  },
  {
    icon: Layers3,
    title: "渠道内容素材支持",
    description:
      "为门店、社群、直播和海外华人市场提供更容易讲清楚的产品表达。"
  },
  {
    icon: ShieldCheck,
    title: "合规话术与长期表达",
    description:
      "避免夸大功效，用日常温养、居家护理、传统草本养护等方式表达产品价值。"
  },
  {
    icon: HeartHandshake,
    title: "产品不是孤立商品，而是老师理念的日常载体",
    description:
      "我们将刘凌云老师长期倡导的心安、家和、顺应自然、女性养心和日常温养理念，转化为更容易被家庭、门店和社群理解的东方草本产品体系。"
  }
];

const supportItems = [
  "产品资料包",
  "样品方案",
  "产品卖点文案",
  "短视频素材建议",
  "门店陈列建议",
  "社群团购文案",
  "私域转化话术",
  "海外华人市场表达建议",
  "中文/英文基础介绍资料"
];

export default function SupportPage() {
  return (
    <main id="top" className="overflow-hidden bg-herb-50">
      <SiteHeader />

      <section className="bg-paper-grain py-16 lg:py-24">
        <div className="section-shell">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-herb-200 bg-white/70 px-4 py-2 text-sm font-medium text-herb-700">
              <Handshake aria-hidden="true" className="h-4 w-4 text-gold-500" />
              合作支持
            </div>
            <h1 className="text-4xl font-semibold leading-tight text-herb-900 sm:text-5xl">
              样品试单、包装定制与渠道资料一起规划
            </h1>
            <p className="mt-6 text-lg leading-9 text-herb-700">
              云明宇琛围绕合作方最关心的资料获取、样品测试、小批量试单、包装方案、渠道素材与合规表达，提供更清晰的合作推进路径。
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ActionButton href="/#contact" variant="primary" icon={ReceiptText}>
                获取资料包
              </ActionButton>
              <ActionButton href="/products" variant="ghost" icon={PackageCheck}>
                查看产品体系
              </ActionButton>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="section-shell">
          <SectionHeading
            eyebrow="合作对象"
            title="我们适合谁合作"
            description="适合已经有渠道、门店、社群、电商账号或自有品牌计划的合作方，从样品测试开始逐步推进。"
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {audiences.map((audience) => (
              <AudienceCard key={audience.title} {...audience} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-herb-50 py-20">
        <div className="section-shell">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <SectionHeading
              align="left"
              eyebrow="样品试单"
              title="先拿资料和样品，再决定合作节奏"
              description="不建议一开始大量压货。更稳的方式，是先确认渠道、产品组合和包装方向，再用样品或小批量试单验证反馈。"
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {sampleSupportItems.map((item, index) => (
                <div
                  key={item}
                  className="flex gap-4 rounded-lg border border-herb-200 bg-white p-5 shadow-sm"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-herb-800 text-sm font-semibold text-gold-100">
                    {index + 1}
                  </span>
                  <p className="text-sm font-medium leading-7 text-herb-800">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-herb-800 py-20 text-white">
        <div className="section-shell">
          <SectionHeading
            eyebrow="合作能力"
            title="从产品到内容，帮渠道更快进入销售场景"
            description="我们对外展示合作能力，不公开内部资源细节，把重点放在客户能获得的支持上。"
            tone="light"
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {capabilities.map((capability) => (
              <CapabilityCard key={capability.title} {...capability} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="section-shell">
          <div className="rounded-lg border border-herb-200 bg-white p-6 shadow-soft lg:p-8">
            <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="mb-2 text-sm font-semibold text-gold-500">合作流程</p>
                <h2 className="text-2xl font-semibold text-herb-900">
                  从拿样到生产，每一步清楚可控
                </h2>
              </div>
              <p className="max-w-xl text-sm leading-7 text-herb-700">
                流程适合用于确认样品、包装方案、合同和定金节点，让双方预期更明确。
              </p>
            </div>
            <ProcessTimeline steps={processSteps} />
            <div className="mt-8 rounded-lg border border-gold-300 bg-herb-50 px-6 py-5 text-center text-base leading-8 text-herb-800">
              常规订单在确认包装方案与定金后，约 21 天左右完成生产交付，具体周期以产品规格、订单数量和包装复杂度为准。
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="section-shell">
          <div className="grid gap-10 rounded-lg border border-herb-200 bg-herb-50 p-6 shadow-soft lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:p-8">
            <div>
              <p className="mb-3 text-sm font-semibold text-gold-500">
                差异化合作
              </p>
              <h2 className="text-2xl font-semibold leading-tight text-herb-900">
                为什么我们不是普通贴牌工厂
              </h2>
              <p className="mt-4 text-sm leading-7 text-herb-700">
                我们不只是提供产品，更提供 IP、内容与渠道表达。普通贴牌更多停留在产品和包装，我们希望把刘凌云老师的中式养生内容、东方草本产品和渠道表达一起打通，让合作更有信任基础。
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {reasons.map((reason) => (
                <CapabilityCard key={reason.title} {...reason} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-herb-50 py-20">
        <div className="section-shell">
          <div className="rounded-lg border border-herb-200 bg-white p-6 shadow-soft lg:p-8">
            <div className="mb-8">
              <p className="mb-3 text-sm font-semibold text-gold-500">
                渠道资料
              </p>
              <h2 className="text-2xl font-semibold leading-tight text-herb-900">
                给渠道的不只是货，还有可落地的内容资料
              </h2>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-herb-700">
                围绕门店、社群、直播和海外华人市场，提供更容易讲清楚、用得上的基础素材。
              </p>
            </div>
            <SupportList items={supportItems} />
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="section-shell">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-lg border border-herb-200 bg-herb-50 p-6 shadow-soft lg:p-8">
              <p className="mb-3 text-sm font-semibold text-gold-500">
                信息边界
              </p>
              <h2 className="text-2xl font-semibold leading-tight text-herb-900">
                合作资源保护与信息边界
              </h2>
              <p className="mt-4 text-sm leading-7 text-herb-700">
                为保护合作客户与供应链资源，官网不公开具体工厂名称、供应商信息、真实底价、批文编号和内部合作细节。相关资料将在确认合作意向后，按照合作阶段分层沟通。
              </p>
            </div>
            <div className="rounded-lg border border-herb-800 bg-herb-900 p-6 text-white shadow-soft lg:p-8">
              <p className="mb-3 text-sm font-semibold text-gold-300">
                合规表达
              </p>
              <h2 className="text-2xl font-semibold leading-tight">
                我们坚持合规、真实、长期的产品表达
              </h2>
              <p className="mt-4 text-sm leading-7 text-herb-50">
                我们的产品定位为东方草本生活方式与日常温养护理产品，不替代专业判断或建议。我们会为合作渠道提供合规表达建议，避免医疗化、绝对化、恐吓式和夸大化宣传，帮助产品以“日常温养、居家护理、家庭关怀、东方草本生活方式”的方式被用户理解。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper-grain py-16">
        <div className="section-shell">
          <div className="grid gap-10 rounded-lg border border-herb-200 bg-white p-6 shadow-soft lg:grid-cols-[0.9fr_1.1fr] lg:p-8">
            <div>
              <p className="mb-3 text-sm font-semibold text-gold-500">
                资料包转化
              </p>
              <h2 className="text-2xl font-semibold leading-tight text-herb-900">
                提交合作需求，获取东方草本产品合作资料包
              </h2>
              <p className="mt-4 text-sm leading-7 text-herb-700">
                适合想先了解产品方向、样品方案、贴牌路径和渠道素材的合作方。我们会根据你的渠道类型与目标市场，沟通更适合的资料与样品组合。
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <ActionButton href="/#contact" variant="primary" icon={ReceiptText}>
                  获取产品资料包
                </ActionButton>
                <ActionButton href="/#contact" variant="ghost" icon={PackageCheck}>
                  申请样品与贴牌方案
                </ActionButton>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "第一阶段主推产品方向",
                "样品申请说明",
                "贴牌合作流程",
                "包装方案示例",
                "渠道销售素材建议",
                "合规宣传话术参考"
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-lg border border-herb-200 bg-white px-4 py-4 text-sm font-medium text-herb-800"
                >
                  <CheckCircle2
                    aria-hidden="true"
                    className="h-4 w-4 shrink-0 text-herb-600"
                  />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <SiteFooter description="样品试单、包装定制与渠道资料支持" />
    </main>
  );
}
