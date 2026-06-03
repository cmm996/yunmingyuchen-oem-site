import Image from "next/image";
import {
  BadgeCheck,
  CheckCircle2,
  FileText,
  Leaf,
  PackageCheck,
  PackagePlus,
  Palette,
  ReceiptText,
  ShieldCheck,
  Sparkles,
  Sprout
} from "lucide-react";
import { ActionButton } from "@/components/ActionButton";
import { ContactForm } from "@/components/ContactForm";
import { ProductShowcaseCarousel } from "@/components/ProductShowcaseCarousel";
import { SectionHeading } from "@/components/SectionHeading";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

const heroShowcaseItems = [
  {
    src: "/images/showcase/moxibustion-gift-box.jpg",
    alt: "东方草本温养礼盒包装展示",
    title: "产品组合",
    description: "适合门店陈列、节日礼品、渠道样品与自有品牌包装测试。",
    tags: ["产品组合", "包装方案", "渠道样品"]
  },
  {
    src: "/images/herbal-care.jpg",
    alt: "艾草温养产品展示",
    title: "艾草温养贴",
    description: "用于门店体验、居家护理、社群复购与贴牌测试。",
    tags: ["日常温养", "样品测试", "贴牌合作"]
  },
  {
    src: "/images/showcase/moxibustion-sample-tray.jpg",
    alt: "东方草本样品组合展示",
    title: "样品试单",
    description: "从样品组合、小批量试单和包装测试逐步推进合作。",
    tags: ["样品测试", "小批量", "资料支持"]
  }
];

const sourcePreviewImages = [
  {
    src: "/images/herbal-origin/mugwort-harvest.webp",
    alt: "艾草田间人工收割场景",
    title: "艾草收割"
  },
  {
    src: "/images/herbal-origin/mugwort-drying-yard.webp",
    alt: "艾草自然晾晒场景",
    title: "艾草晾晒"
  },
  {
    src: "/images/herbal-origin/mugwort-velvet-processing-equipment.webp",
    alt: "艾草制绒设备展示",
    title: "艾草制绒"
  },
  {
    src: "/images/herbal-origin/packing-shipping.webp",
    alt: "草本产品打包发货流程展示",
    title: "打包发货"
  }
];

const productPreviewItems = [
  {
    title: "艾草温养贴",
    image: "/images/herbal-care.jpg",
    description: "适合门店体验、居家护理、私域复购与贴牌合作。"
  },
  {
    title: "艾草足浴包",
    image: "/images/gift-box.jpg",
    description: "适合家庭泡脚、节日礼品、社群团购与华人市场。"
  },
  {
    title: "草本眼贴",
    image: "/images/showcase/silver-patch-package.jpg",
    description: "适合美容院、SPA、女性社群与礼品组合。"
  },
  {
    title: "东方草本礼盒",
    image: "/images/showcase/moxibustion-gift-box.jpg",
    description: "适合会员礼品、渠道套装、企业定制与品牌组合。"
  }
];

const supportPreviewItems = [
  {
    icon: PackageCheck,
    title: "样品测试",
    description: "先看产品形态、包装质感与渠道反馈，再决定合作节奏。"
  },
  {
    icon: Palette,
    title: "包装定制",
    description: "按渠道定位、预算和礼盒场景规划不同包装方案。"
  },
  {
    icon: FileText,
    title: "内容素材",
    description: "提供产品资料、渠道文案和海外华人市场表达建议。"
  },
  {
    icon: ShieldCheck,
    title: "合规表达",
    description: "用日常温养、居家护理、东方草本生活方式做长期表达。"
  }
];

function PreviewCard({
  title,
  image,
  description
}: {
  title: string;
  image: string;
  description: string;
}) {
  return (
    <article className="overflow-hidden rounded-lg border border-herb-200 bg-white shadow-sm">
      <div className="relative aspect-[4/3] bg-herb-100">
        <Image
          src={image}
          alt={`${title}展示`}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 25vw, 50vw"
        />
      </div>
      <div className="p-5">
        <h3 className="text-base font-semibold text-herb-900">{title}</h3>
        <p className="mt-2 text-sm leading-7 text-herb-700">{description}</p>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <main id="top" className="overflow-hidden bg-herb-50">
      <SiteHeader />

      <section className="relative bg-paper-grain pb-20 pt-12 sm:pt-16 lg:pb-28">
        <div className="section-shell grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-herb-200 bg-white/70 px-4 py-2 text-sm font-medium text-herb-700">
              <Leaf aria-hidden="true" className="h-4 w-4 text-gold-500" />
              刘凌云中式养生 IP + 云明宇琛产品合作
            </div>
            <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-herb-900 sm:text-5xl lg:text-6xl">
              刘凌云中式养生 IP × 东方草本温养产品合作
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-9 text-herb-700">
              云明宇琛围绕刘凌云老师的中式养生理念，打造适合门店、社群、电商与海外华人渠道的东方草本温养产品体系，提供样品测试、包装定制、OEM/ODM 与内容支持。
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ActionButton href="/teacher" variant="primary" icon={ReceiptText}>
                了解刘凌云老师
              </ActionButton>
              <ActionButton href="/products" variant="secondary" icon={Sparkles}>
                查看产品体系
              </ActionButton>
              <ActionButton href="#contact" variant="ghost" icon={PackagePlus}>
                获取资料包
              </ActionButton>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -left-6 top-8 h-28 w-28 rounded-full border border-gold-300/60" />
            <div className="absolute -right-8 bottom-10 h-40 w-40 rounded-full border border-herb-300/50" />
            <ProductShowcaseCarousel items={heroShowcaseItems} />
          </div>
        </div>
      </section>

      <section className="bg-white py-20" id="teacher-preview">
        <div className="section-shell">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
            <div className="relative overflow-hidden rounded-lg border border-herb-200 bg-herb-50 p-4 shadow-soft">
              <div className="relative min-h-[420px] overflow-hidden rounded-md bg-paper-grain">
                <Image
                  src="/images/liulingyun-teacher.png"
                  alt="刘凌云老师东方养生内容展示"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 42vw, 100vw"
                />
              </div>
            </div>
            <div>
              <SectionHeading
                align="left"
                eyebrow="刘凌云老师"
                title="中式养生与家庭温养生活方式老师"
                description="刘凌云老师长期关注中式养生、女性养心、情绪安顿与家和万事兴。云明宇琛以她的内容理念为源头，把东方草本温养产品与现代家庭、门店和渠道场景连接起来。"
              />
              <ActionButton href="/teacher" variant="primary" icon={ReceiptText}>
                查看老师介绍页
              </ActionButton>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-herb-50 py-20" id="herbal-origin">
        <div className="section-shell">
          <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              align="left"
              eyebrow="草本源头"
              title="草本源头与生产流程"
              description="从蕲春产区文化、艾草收割晾晒、制绒加工到打包发货，呈现东方草本产品从源头到交付的基础流程。"
            />
            <ActionButton href="/source" variant="ghost" icon={Sprout}>
              查看草本源头
            </ActionButton>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {sourcePreviewImages.map((item) => (
              <PreviewCard
                key={item.title}
                title={item.title}
                image={item.src}
                description={item.alt}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20" id="product-system">
        <div className="section-shell">
          <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              align="left"
              eyebrow="产品体系"
              title="东方草本温养产品体系"
              description="围绕门店体验、家庭日常、社群复购和海外华人市场，形成更适合渠道合作的产品组合。"
            />
            <ActionButton href="/products" variant="primary" icon={Sparkles}>
              查看完整产品体系
            </ActionButton>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {productPreviewItems.map((item) => (
              <PreviewCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-herb-50 py-20" id="cooperation-support">
        <div className="section-shell">
          <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              align="left"
              eyebrow="合作支持"
              title="从样品、包装到内容表达，支持渠道逐步推进"
              description="合作支持围绕样品测试、包装定制、内容素材与合规表达展开，让合作方先看清产品和路径，再决定下一步。"
            />
            <ActionButton href="/support" variant="primary" icon={PackageCheck}>
              查看合作支持
            </ActionButton>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {supportPreviewItems.map((item) => (
              <article
                key={item.title}
                className="rounded-lg border border-white/20 bg-white/85 p-5 shadow-sm"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-gold-100 text-herb-800">
                  <item.icon aria-hidden="true" className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold text-herb-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-herb-700">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper-grain py-20" id="contact">
        <div className="section-shell">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <SectionHeading
                align="left"
                eyebrow="联系合作"
                title="提交合作需求，获取东方草本产品资料包"
                description="留下你的渠道类型、所在地区和感兴趣产品，我们会根据合作阶段沟通更适合的资料、样品和包装方案。"
              />
              <div className="space-y-4 rounded-lg border border-herb-200 bg-white/80 p-5 text-sm leading-7 text-herb-700">
                {[
                  "适合咨询产品资料、样品方案、贴牌包装和渠道内容支持。",
                  "具体价格、生产周期和包装细节，会按产品规格与订单计划单独确认。",
                  "支持本地客户与海外华人渠道沟通，资料表达可按市场做调整。"
                ].map((item) => (
                  <div key={item} className="flex gap-3">
                    <CheckCircle2
                      aria-hidden="true"
                      className="mt-1 h-5 w-5 shrink-0 text-herb-700"
                    />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
