import type { Metadata } from "next";
import Image from "next/image";
import { ArrowLeft, CheckCircle2, Landmark, Leaf, ShieldCheck, Sprout } from "lucide-react";
import { ActionButton } from "@/components/ActionButton";
import { SectionHeading } from "@/components/SectionHeading";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "草本源头与生产流程 | 云明宇琛",
  description:
    "云明宇琛草本源头与生产流程页面，展示蕲春艾都文化、艾草收割、晾晒、制绒、包装与发货等东方草本产品合作基础信息。",
  openGraph: {
    title: "草本源头与生产流程 | 云明宇琛",
    description:
      "从蕲春产区文化到生产流程，帮助合作伙伴理解东方草本温养产品背后的文化来处与交付路径。",
    type: "website",
    locale: "zh_CN"
  }
};

const originHighlights = [
  {
    icon: Sprout,
    title: "草本来源",
    description: "关注草本来源、产区文化与原料呈现方式，让产品表达更有来处。"
  },
  {
    icon: Landmark,
    title: "蕲艾文化",
    description: "蕲春素有“中国艾都”之称，蕲艾文化与传统艾灸技艺具有深厚文化基础。"
  },
  {
    icon: Leaf,
    title: "日常养护场景",
    description: "把传统草本文化放回现代家庭、门店体验与社群分享的日常场景中。"
  },
  {
    icon: ShieldCheck,
    title: "合规渠道表达",
    description: "用清晰、温和、长期的方式表达文化价值，避免把产品做成普通贴牌货。"
  }
];

const processImages = [
  {
    src: "/images/herbal-origin/mugwort-harvest.webp",
    alt: "艾草田间人工收割场景",
    title: "艾草收割",
    description: "以产区场景展示草本来源，让渠道先理解产品故事的起点。"
  },
  {
    src: "/images/herbal-origin/mugwort-drying-yard.webp",
    alt: "艾草自然晾晒场景",
    title: "艾草晾晒",
    description: "呈现艾草采收后的基础处理场景，便于合作方了解原料状态。"
  },
  {
    src: "/images/herbal-origin/sun-dried-mugwort.webp",
    alt: "艾草自然晾晒后的真实状态",
    title: "晾晒后状态",
    description: "用更直观的细节图展示晾晒后的草本形态。"
  },
  {
    src: "/images/herbal-origin/mugwort-velvet-processing-equipment.webp",
    alt: "艾草制绒设备展示",
    title: "艾草制绒",
    description: "通过设备与工艺场景，展示草本原料进一步加工的基础流程。"
  },
  {
    src: "/images/herbal-origin/lei-huo-jiu-filling.webp",
    alt: "雷火灸灌装流程展示",
    title: "灌装流程",
    description: "展示局部生产流程，不公开具体工厂名称与内部合作细节。"
  },
  {
    src: "/images/herbal-origin/short-moxa-sticks-custom.webp",
    alt: "短艾柱定制流程展示",
    title: "短艾柱定制",
    description: "呈现不同规格产品的定制方向，便于渠道理解产品形态。"
  },
  {
    src: "/images/herbal-origin/moxa-processing-packaging.webp",
    alt: "艾草制绒工艺流程展示",
    title: "制绒工艺",
    description: "展示工艺流程与基础品质表达，帮助产品沟通更清晰。"
  },
  {
    src: "/images/herbal-origin/packing-shipping.webp",
    alt: "草本产品打包发货流程展示",
    title: "打包发货",
    description: "展示成品整理、包装与发货场景，让合作交付更有画面感。"
  }
];

export default function SourcePage() {
  return (
    <main id="top" className="overflow-hidden bg-herb-50">
      <SiteHeader />

      <section className="bg-paper-grain py-16 lg:py-24">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-herb-200 bg-white/70 px-4 py-2 text-sm font-medium text-herb-700">
              <Sprout aria-hidden="true" className="h-4 w-4 text-gold-500" />
              Qichun, Hubei
            </div>
            <h1 className="text-4xl font-semibold leading-tight text-herb-900 sm:text-5xl">
              草本源头与生产流程
            </h1>
            <p className="mt-6 text-lg leading-9 text-herb-700">
              蕲春素有“中国艾都”之称，蕲艾文化与传统艾灸技艺具有深厚的文化基础。云明宇琛在东方草本温养产品体系中，重视草本来源、传统文化、日常养护场景与现代家庭需求的结合。
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ActionButton href="/products" variant="primary" icon={Leaf}>
                查看产品体系
              </ActionButton>
              <ActionButton href="/#contact" variant="ghost" icon={CheckCircle2}>
                获取资料包
              </ActionButton>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-herb-200 bg-white p-4 shadow-soft">
            <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-herb-50">
              <Image
                src="/images/herbal-origin/qichun-qiai-industry-park.webp"
                alt="湖北蕲春国家级蕲艾产业示范园与蕲艾文化展示"
                fill
                className="object-contain p-2"
                sizes="(min-width: 1024px) 48vw, 100vw"
                priority
              />
            </div>
            <p className="px-2 pt-3 text-sm font-semibold text-herb-800">
              湖北蕲春｜东方草本文化源头
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="section-shell">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {originHighlights.map((item) => (
              <article
                key={item.title}
                className="rounded-lg border border-herb-200 bg-herb-50 p-5 shadow-sm"
              >
                <item.icon aria-hidden="true" className="mb-4 h-6 w-6 text-herb-700" />
                <h2 className="text-base font-semibold text-herb-900">{item.title}</h2>
                <p className="mt-2 text-sm leading-7 text-herb-700">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-herb-50 py-20">
        <div className="section-shell">
          <SectionHeading
            eyebrow="生产流程"
            title="从草本来源到包装发货"
            description="以下图片用于展示东方草本产品合作中的基础流程与素材表达方向，不公开具体工厂名称、供应商信息和内部合作细节。"
          />
          <div className="grid gap-6 md:grid-cols-2">
            {processImages.map((item) => (
              <article
                key={item.title}
                className="overflow-hidden rounded-lg border border-herb-200 bg-white shadow-sm"
              >
                <div className="relative aspect-[16/10] bg-herb-100">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-herb-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-herb-700">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="section-shell">
          <div className="flex flex-col gap-4 rounded-lg border border-herb-200 bg-herb-50 p-6 shadow-soft sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-gold-500">下一步</p>
              <h2 className="mt-2 text-2xl font-semibold text-herb-900">
                想了解产品体系与合作方式？
              </h2>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <ActionButton href="/products" variant="primary" icon={Leaf}>
                查看产品体系
              </ActionButton>
              <ActionButton href="/" variant="ghost" icon={ArrowLeft}>
                返回首页
              </ActionButton>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter description="草本源头与生产流程展示" />
    </main>
  );
}
