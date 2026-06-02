import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  BadgeCheck,
  Boxes,
  CheckCircle2,
  FileText,
  Handshake,
  Layers3,
  PackageCheck,
  PackagePlus,
  ShieldCheck,
  Sparkles,
  Sprout
} from "lucide-react";
import { ActionButton } from "@/components/ActionButton";
import { CapabilityCard } from "@/components/CapabilityCard";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeading } from "@/components/SectionHeading";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "东方草本温养产品体系 | 云明宇琛",
  description:
    "云明宇琛东方草本温养产品体系，围绕艾草温养贴、草本眼贴、艾草足浴包与东方草本礼盒组合，为养生馆、美容院、SPA、社群团购、TikTok Shop 与海外华人渠道提供样品测试、包装定制与产品合作支持。",
  openGraph: {
    title: "东方草本温养产品体系 | 云明宇琛",
    description:
      "刘凌云中式养生 IP 与东方草本温养产品合作体系，面向门店、社群、电商与海外华人渠道。",
    type: "website",
    locale: "zh_CN"
  }
};

const productCategories = [
  {
    title: "艾草温养贴",
    description:
      "以东方草本温养理念为基础，适合居家日常护理、门店体验、会员礼品与私域复购场景。可根据合作需求提供样品测试、包装定制与产品资料支持。",
    image: "/images/herbal-care.jpg",
    tags: ["日常温养", "居家护理", "门店体验", "贴牌合作"],
    suitableChannels: "养生馆、美容院、SPA、私域复购",
    cooperationMethod: "样品测试、包装定制、产品资料支持、贴牌合作"
  },
  {
    title: "草本眼贴 / 眼罩",
    description:
      "面向长期用眼、熬夜、情绪紧绷等现代生活场景，适合美容院、SPA、女性私域、礼品组合与短视频内容展示。",
    image: "/images/showcase/silver-patch-package.jpg",
    tags: ["女性场景", "睡前放松", "美容院", "SPA", "礼品组合"],
    suitableChannels: "美容院、SPA、女性社群、礼品渠道",
    cooperationMethod: "样品组合、贴牌包装、礼盒方案、内容素材建议"
  },
  {
    title: "艾草足浴包",
    description:
      "适合家庭日常足浴、睡前放松、门店体验后带回家使用，也适合社群团购、节日礼品与海外华人家庭场景。",
    image: "/images/gift-box.jpg",
    tags: ["家庭泡脚", "睡前仪式", "社群团购", "华人市场"],
    suitableChannels: "社群团购、TikTok Shop、家庭用户、门店",
    cooperationMethod: "基础包装、礼盒组合、渠道套装、小批量试单"
  },
  {
    title: "东方草本礼盒 / 渠道组合",
    description:
      "可根据不同渠道需求，将艾草温养贴、足浴包、草本眼贴等产品组合成门店礼盒、会员礼包、节日礼盒或渠道专属产品套装。",
    image: "/images/showcase/moxibustion-gift-box.jpg",
    tags: ["门店礼品", "会员福利", "节日礼盒", "渠道套装"],
    suitableChannels: "节日礼品、会员礼品、渠道合作、企业定制",
    cooperationMethod: "产品组合、礼盒设计、品牌贴牌、渠道专属方案"
  }
];

const cooperationModes = [
  {
    icon: PackageCheck,
    title: "样品测试",
    description:
      "适合第一次了解产品的合作伙伴，可先通过样品了解产品形态、包装、内容素材与渠道反馈。"
  },
  {
    icon: Boxes,
    title: "小批量试单",
    description:
      "适合门店、社群或电商渠道进行初步销售测试，不建议一开始大量压货。"
  },
  {
    icon: PackagePlus,
    title: "包装定制",
    description:
      "根据合作需求提供包装规格、礼盒方案、品牌贴牌与产品组合建议。"
  },
  {
    icon: Handshake,
    title: "OEM / ODM 合作",
    description:
      "根据产品方向、包装要求与合作规模，提供进一步定制合作支持。"
  }
];

const recommendedExpressions = [
  "日常温养",
  "居家护理",
  "草本生活方式",
  "睡前仪式",
  "家庭自我照顾",
  "门店体验",
  "会员礼品",
  "社群复购"
];

const highRiskExpressions = [
  "治疗",
  "根治",
  "包好",
  "止痛",
  "祛湿排毒",
  "调理妇科",
  "改善慢病",
  "风湿",
  "宫寒",
  "失眠",
  "肩颈痛",
  "腰腿痛"
];

const kitItems = [
  "产品清单",
  "样品政策",
  "包装方案",
  "渠道内容建议",
  "合规表达参考",
  "合作流程说明"
];

export default function ProductsPage() {
  return (
    <main className="overflow-hidden bg-herb-50">
      <SiteHeader />

      <section className="bg-paper-grain pb-20 pt-12 sm:pt-16 lg:pb-24">
        <div className="section-shell grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-herb-200 bg-white/75 px-4 py-2 text-sm font-medium text-herb-700">
              <Sprout aria-hidden="true" className="h-4 w-4 text-gold-500" />
              刘凌云中式养生 IP × 东方草本产品合作
            </div>
            <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-herb-900 sm:text-5xl lg:text-6xl">
              东方草本温养产品体系
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-9 text-herb-700">
              从艾草温养贴、草本眼贴到足浴包与礼盒组合，为养生馆、美容院、SPA、社群团购、TikTok Shop 与海外华人渠道提供样品测试、包装定制与产品合作支持。
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ActionButton href="/#contact" variant="primary" icon={FileText}>
                获取产品资料包
              </ActionButton>
              <ActionButton href="/#contact" variant="secondary" icon={PackageCheck}>
                申请样品试单
              </ActionButton>
            </div>
            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {["适合渠道测试", "支持包装定制", "提供内容素材"].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-lg border border-white/70 bg-white/65 px-4 py-3 text-sm font-medium text-herb-800"
                >
                  <CheckCircle2 aria-hidden="true" className="h-4 w-4 text-herb-600" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 top-10 h-28 w-28 rounded-full border border-gold-300/60" />
            <div className="absolute -right-8 bottom-8 h-36 w-36 rounded-full border border-herb-300/50" />
            <div className="relative overflow-hidden rounded-lg border border-white/70 bg-white p-4 shadow-soft">
              <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-herb-100">
                <Image
                  src="/images/showcase/moxibustion-gift-box.jpg"
                  alt="东方草本温养产品组合展示"
                  fill
                  priority
                  className="object-cover"
                  sizes="(min-width: 1024px) 48vw, 100vw"
                />
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3 text-center text-xs font-medium text-herb-700">
                <span className="rounded-md bg-herb-50 px-3 py-2">产品组合</span>
                <span className="rounded-md bg-herb-50 px-3 py-2">包装方案</span>
                <span className="rounded-md bg-herb-50 px-3 py-2">渠道素材</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="section-shell">
          <div className="grid gap-10 rounded-lg border border-herb-200 bg-herb-50 p-6 shadow-soft lg:grid-cols-[0.78fr_1.22fr] lg:p-8">
            <div>
              <p className="mb-3 text-sm font-semibold text-gold-500">
                IP 与产品体系
              </p>
              <h2 className="text-3xl font-semibold leading-tight text-herb-900 sm:text-4xl">
                不是简单贴牌，而是 IP 与产品体系的结合
              </h2>
            </div>
            <p className="text-base leading-8 text-herb-700">
              云明宇琛的东方草本产品体系，不是单纯寻找低价产品贴牌销售，而是围绕刘凌云老师的传统养生传承背景、女性养心理念、家庭温养经验与东方草本生活方式，逐步形成适合内容传播、门店体验、社群复购与海外华人渠道合作的产品方向。
            </p>
          </div>
        </div>
      </section>

      <section className="bg-herb-50 py-20" id="categories">
        <div className="section-shell">
          <SectionHeading
            eyebrow="产品分类"
            title="围绕门店、社群、电商与海外华人渠道规划产品方向"
            description="产品页只展示合作方向与表达边界，具体规格、包装、价格和交付方案会在确认合作意向后进一步沟通。"
          />
          <div className="grid gap-6 lg:grid-cols-2">
            {productCategories.map((product) => (
              <ProductCard key={product.title} {...product} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="section-shell">
          <SectionHeading
            eyebrow="合作方式"
            title="产品合作方式"
            description="建议从样品和小批量开始，把产品形态、包装表达、渠道反馈和内容素材先跑通，再推进更深度的定制合作。"
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {cooperationModes.map((item) => (
              <CapabilityCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-herb-900 py-20 text-white">
        <div className="section-shell">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <SectionHeading
              align="left"
              tone="light"
              eyebrow="合规边界"
              title="产品表达合规边界"
              description="云明宇琛东方草本产品定位为日常护理、居家温养、门店体验与生活方式产品。公开传播中不使用医疗功效承诺。我们更重视真实、长期、合规的产品表达方式。"
            />
            <div className="grid gap-5">
              <div className="rounded-lg border border-white/15 bg-white/10 p-6">
                <div className="mb-4 flex items-center gap-3 text-gold-100">
                  <BadgeCheck aria-hidden="true" className="h-5 w-5" />
                  <h3 className="text-lg font-semibold">推荐表达</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {recommendedExpressions.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-sm text-herb-50"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-lg border border-white/15 bg-white/10 p-6">
                <div className="mb-4 flex items-center gap-3 text-gold-100">
                  <ShieldCheck aria-hidden="true" className="h-5 w-5" />
                  <h3 className="text-lg font-semibold">高风险表达</h3>
                </div>
                <p className="mb-4 text-sm leading-7 text-herb-50">
                  以下内容仅作为合作渠道宣传时应规避的表达示例，不作为产品卖点使用：
                </p>
                <div className="flex flex-wrap gap-2">
                  {highRiskExpressions.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/15 bg-herb-950/40 px-3 py-1.5 text-sm text-herb-50"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper-grain py-20">
        <div className="section-shell">
          <div className="grid gap-10 rounded-lg border border-herb-200 bg-white/82 p-6 shadow-soft lg:grid-cols-[0.85fr_1.15fr] lg:p-8">
            <div>
              <p className="mb-3 text-sm font-semibold text-gold-500">
                资料包与样品
              </p>
              <h2 className="text-3xl font-semibold leading-tight text-herb-900 sm:text-4xl">
                想了解完整产品资料？
              </h2>
              <p className="mt-4 text-base leading-8 text-herb-700">
                提交合作需求，获取产品清单、样品政策、包装方案与渠道内容建议。
              </p>
              <div className="mt-6">
                <ActionButton href="/#contact" variant="primary" icon={Sparkles}>
                  获取产品资料包 / 申请样品试单
                </ActionButton>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {kitItems.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-lg border border-herb-200 bg-herb-50 px-4 py-4 text-sm font-medium text-herb-800"
                >
                  <Layers3 aria-hidden="true" className="h-4 w-4 shrink-0 text-herb-700" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-herb-200 bg-white py-10">
        <div className="section-shell flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <h2 className="text-xl font-semibold text-herb-900">云明宇琛</h2>
            <p className="mt-2 text-sm text-herb-700">
              东方草本温养产品体系与渠道合作支持
            </p>
            <p className="mt-4 max-w-2xl text-xs leading-6 text-herb-600">
              本页面内容仅用于产品合作与日常养护场景介绍，不构成专业健康建议。
            </p>
          </div>
          <nav className="flex flex-wrap gap-4 text-sm font-medium text-herb-700">
            <Link className="focus-ring rounded-full hover:text-herb-900" href="/">
              返回首页
            </Link>
            <Link className="focus-ring rounded-full hover:text-herb-900" href="/#cooperation-support">
              合作支持
            </Link>
            <Link className="focus-ring rounded-full hover:text-herb-900" href="/#contact">
              联系合作
            </Link>
          </nav>
        </div>
      </footer>
    </main>
  );
}
