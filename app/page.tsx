import Image from "next/image";
import {
  BadgeCheck,
  Boxes,
  BriefcaseBusiness,
  Building2,
  Camera,
  ChartNoAxesCombined,
  CheckCircle2,
  CircleDollarSign,
  ClipboardList,
  Factory,
  FileText,
  Globe2,
  Handshake,
  HeartHandshake,
  Landmark,
  Layers3,
  Leaf,
  MessageCircle,
  PackageCheck,
  PackagePlus,
  Palette,
  Plane,
  ReceiptText,
  ScrollText,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Sprout,
  Store,
  Users,
  WandSparkles
} from "lucide-react";
import { ActionButton } from "@/components/ActionButton";
import { AudienceCard } from "@/components/AudienceCard";
import { CapabilityCard } from "@/components/CapabilityCard";
import { ContactForm } from "@/components/ContactForm";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { ProductCard } from "@/components/ProductCard";
import { ProductShowcaseCarousel } from "@/components/ProductShowcaseCarousel";
import { SectionHeading } from "@/components/SectionHeading";
import { SiteHeader } from "@/components/SiteHeader";
import { SupportList } from "@/components/SupportList";
import { VideoFeature } from "@/components/VideoFeature";

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

const products = [
  {
    title: "艾草温养贴",
    description:
      "结合刘凌云老师对“日常温养、家庭养护、顺应节律”的理解，适合门店体验、居家护理、社群团购和品牌贴牌场景，支持不同规格、包装和组合定制。",
    image: "/images/herbal-care.jpg",
    suitableChannels: "养生馆、美容院、社群团购、跨境卖家",
    cooperationMethod: "现货样品、贴牌包装、组合套装、小批量试单",
    tags: ["居家温养", "日常护理", "门店体验", "贴牌定制"]
  },
  {
    title: "艾草足浴包",
    description:
      "足浴是现代家庭更容易坚持的日常温养方式之一。围绕家庭放松、生活节律和日常护理场景，适合礼盒组合、社群复购和节日礼品合作。",
    image: "/images/gift-box.jpg",
    suitableChannels: "养生门店、礼品渠道、社群团长、华人渠道商",
    cooperationMethod: "基础包装、贴牌测试、礼盒组合、规格定制",
    tags: ["礼盒组合", "社群复购", "节日礼品", "规格定制"]
  },
  {
    title: "草本眼贴 / 眼膜",
    description:
      "面向现代女性长期用眼、熬夜、情绪紧绷等生活场景，适合美容院、SPA、直播带货和女性护理场景，支持贴牌、套装和渠道定制。",
    image: "/images/sample-kit.jpg",
    suitableChannels: "美容院、SPA 会所、直播渠道、女性护理渠道",
    cooperationMethod: "样品测试、贴牌套装、渠道组合、内容素材配套",
    tags: ["女性护理", "套装定制", "直播场景", "渠道定制"]
  }
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

const sampleSupportItems = [
  "可先沟通目标市场与销售渠道",
  "根据渠道类型推荐样品组合",
  "可提供基础包装版、贴牌测试版、礼盒组合版",
  "正式价格根据规格、包装、数量和交付要求单独确认",
  "官网不公开真实底价，保护渠道合作空间"
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

const qingchengVideo = {
  youtubeId: "6ulLxTnArOs",
  youtubeUrl: "https://youtu.be/6ulLxTnArOs",
  title: "观看刘凌云老师青城山养生纪实",
  subtitle: "Watch Liu Lingyun’s Qingcheng Mountain Wellness Story",
  paragraphs: [
    "本片记录刘凌云老师在青城山的养生文化交流与日常修行片段。画面中呈现了竹林山居、草本研磨、传统温养体验与道家生活场景，展现她对中式养生、道家智慧、女性养心、情绪安顿与家和万事兴的长期关注。",
    "刘凌云老师倡导，真正的养生不只是外在养护，更是心安、家和、顺应自然。云明宇琛也希望通过内容与东方草本温养产品，把传统养生智慧转化为现代家庭可以理解、可以感知、可以融入日常的生活方式。"
  ],
  note:
    "本视频仅用于中式养生文化交流与东方温养理念展示，不构成医疗建议，也不作为任何产品功效证明。"
};

const herbalOriginHighlights = [
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

const herbalOriginImages = [
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
    src: "/images/herbal-origin/sun-dried-mugwort.webp",
    alt: "艾草自然晾晒后的真实状态",
    title: "晾晒后状态"
  },
  {
    src: "/images/herbal-origin/mugwort-velvet-processing-equipment.webp",
    alt: "艾草制绒设备展示",
    title: "艾草制绒"
  },
  {
    src: "/images/herbal-origin/lei-huo-jiu-filling.webp",
    alt: "雷火灸灌装流程展示",
    title: "灌装流程"
  },
  {
    src: "/images/herbal-origin/short-moxa-sticks-custom.webp",
    alt: "短艾柱定制流程展示",
    title: "短艾柱定制"
  },
  {
    src: "/images/herbal-origin/moxa-processing-packaging.webp",
    alt: "艾草制绒工艺流程展示",
    title: "制绒工艺"
  },
  {
    src: "/images/herbal-origin/packing-shipping.webp",
    alt: "草本产品打包发货流程展示",
    title: "打包发货"
  }
];

const heroShowcaseItems = [
  {
    src: "/images/showcase/moxibustion-gift-box.jpg",
    alt: "东方草本温养礼盒包装展示",
    title: "礼盒包装方案",
    description: "适合门店陈列、节日礼品、渠道样品与自有品牌包装测试。",
    tags: ["包装方案", "礼盒组合", "渠道样品"]
  },
  {
    src: "/images/showcase/moxibustion-kit-open.jpg",
    alt: "东方草本温养套盒打开展示",
    title: "产品组合展示",
    description: "围绕家庭温养、门店体验与社群团购场景规划组合内容。",
    tags: ["产品组合", "门店体验", "社群团购"]
  },
  {
    src: "/images/showcase/moxibustion-sample-tray.jpg",
    alt: "东方草本温养样品组合展示",
    title: "样品试单支持",
    description: "可先从样品组合、小批量试单和贴牌测试版逐步推进。",
    tags: ["样品测试", "小批量试单", "贴牌测试"]
  },
  {
    src: "/images/showcase/herbal-jars-set.jpg",
    alt: "东方草本膏类产品组合展示",
    title: "草本产品矩阵",
    description: "根据渠道定位规划不同产品方向、规格层级与内容素材。",
    tags: ["产品矩阵", "渠道素材", "规格定制"]
  },
  {
    src: "/images/showcase/moxibustion-device.jpg",
    alt: "东方温养工具细节展示",
    title: "温养工具细节",
    description: "用于展示产品质感、包装细节与东方草本生活方式场景。",
    tags: ["产品细节", "场景展示", "内容素材"]
  },
  {
    src: "/images/showcase/blue-patch-package.jpg",
    alt: "蓝色草本贴类包装展示",
    title: "贴类包装方案",
    description: "可根据品牌定位、渠道客群与预算规划基础包装和贴牌包装。",
    tags: ["贴类产品", "包装定制", "品牌贴牌"]
  },
  {
    src: "/images/showcase/silver-patch-package.jpg",
    alt: "银色草本贴类包装展示",
    title: "渠道包装测试",
    description: "适合先做样品沟通、渠道反馈收集与不同包装方向测试。",
    tags: ["渠道测试", "包装方向", "样品沟通"]
  },
  {
    src: "/images/showcase/herbal-balm-jar.jpg",
    alt: "东方草本膏罐产品展示",
    title: "草本膏类展示",
    description: "用于产品资料包、渠道介绍和内容素材中的视觉展示。",
    tags: ["草本膏类", "资料包", "视觉素材"]
  }
];

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
              刘凌云中式养生 IP 与东方草本温养产品合作
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-9 text-herb-700">
              云明宇琛围绕中式养生、道家智慧、黄帝内经、女性养心、情绪养生与家和万事兴，打造刘凌云老师的东方养生内容体系，并为养生馆、美容院、社群团长、跨境卖家和华人渠道商提供东方草本产品 OEM/ODM、样品测试、包装定制与渠道内容支持。
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ActionButton href="/teacher" variant="primary" icon={ReceiptText}>
                了解刘凌云老师
              </ActionButton>
              <ActionButton href="#contact" variant="secondary" icon={PackageCheck}>
                咨询产品 OEM/ODM 合作
              </ActionButton>
            </div>
            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {[
                "刘凌云老师 IP 背书",
                "中式养生内容体系",
                "东方草本温养产品",
                "支持样品与贴牌",
                "适合海外华人渠道"
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-lg border border-white/70 bg-white/60 px-4 py-3 text-sm font-medium text-herb-800"
                >
                  <CheckCircle2 aria-hidden="true" className="h-4 w-4 text-herb-600" />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -left-6 top-8 h-28 w-28 rounded-full border border-gold-300/60" />
            <div className="absolute -right-8 bottom-10 h-40 w-40 rounded-full border border-herb-300/50" />
            <ProductShowcaseCarousel items={heroShowcaseItems} />
          </div>
        </div>
      </section>

      <section className="bg-white py-20" id="teacher">
        <div className="section-shell">
          <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
            <div className="relative overflow-hidden rounded-lg border border-herb-200 bg-herb-50 p-4 shadow-soft">
              <div className="relative min-h-[520px] overflow-hidden rounded-md bg-paper-grain">
                <Image
                  src="/images/liulingyun-teacher.png"
                  alt="刘凌云老师东方养生内容展示"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 42vw, 100vw"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-herb-900/70 to-transparent p-6">
                  <div className="rounded-lg border border-white/40 bg-white/88 p-5 shadow-lift backdrop-blur">
                    <p className="text-sm font-semibold text-gold-500">
                      刘凌云老师
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold text-herb-900">
                      中式养生与家庭温养生活方式老师
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <SectionHeading
                align="left"
                eyebrow="刘凌云老师 IP"
                title="刘凌云老师：用中式养生与道家智慧，陪伴现代家庭安顿身心"
                description="刘凌云老师长期关注中式养生、黄帝内经、道家智慧、女性养心、情绪养生与家和万事兴。我们不把养生做成焦虑式营销，而是用温和、真实、长期的内容表达，帮助用户理解日常温养、情绪稳定、家庭和气与生活节律的重要性。"
              />
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "中式养生内容体系",
                  "女性养心与情绪养生",
                  "家庭温养生活方式",
                  "长期信任型内容表达"
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-lg border border-herb-200 bg-herb-50 px-4 py-4 text-sm font-medium text-herb-800"
                  >
                    <CheckCircle2
                      aria-hidden="true"
                      className="h-4 w-4 text-herb-600"
                    />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <VideoFeature
        eyebrow="青城山养生纪实"
        title={qingchengVideo.title}
        subtitle={qingchengVideo.subtitle}
        paragraphs={qingchengVideo.paragraphs}
        note={qingchengVideo.note}
        youtubeId={qingchengVideo.youtubeId}
        youtubeUrl={qingchengVideo.youtubeUrl}
        ctaLabel="在 YouTube 观看完整视频"
      />

      <section className="bg-herb-50 py-20" id="herbal-origin">
        <div className="section-shell">
          <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div>
              <SectionHeading
                align="left"
                eyebrow="草本源头"
                title="蕲春艾都：让东方草本产品有文化来处"
                description="蕲春素有“中国艾都”之称，蕲艾文化与传统艾灸技艺具有深厚的文化基础。云明宇琛在东方草本温养产品体系中，重视草本来源、传统文化、日常养护场景与现代家庭需求的结合。"
              />
              <p className="max-w-3xl text-base leading-8 text-herb-700">
                我们希望通过更清晰、更合规的方式，让合作伙伴理解东方草本产品背后的文化价值，而不是把产品简单做成普通贴牌货。
              </p>
              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                {herbalOriginHighlights.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-lg border border-herb-200 bg-white p-5 shadow-sm"
                  >
                    <item.icon
                      aria-hidden="true"
                      className="mb-4 h-6 w-6 text-herb-700"
                    />
                    <h3 className="text-base font-semibold text-herb-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-herb-700">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-5 top-8 h-28 w-28 rounded-full border border-gold-300/60" />
              <div className="absolute -right-6 bottom-12 h-36 w-36 rounded-full border border-herb-300/60" />
              <div className="relative overflow-hidden rounded-lg border border-herb-200 bg-white p-4 shadow-soft">
                <div className="rounded-md bg-paper-grain p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gold-500">
                    Qichun, Hubei
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold leading-tight text-herb-900 sm:text-3xl">
                    湖北蕲春｜东方草本文化源头
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-herb-700">
                    从产区文化、草本应用、包装表达，到现代家庭的日常温养场景，形成更适合渠道沟通的产品故事。
                  </p>
                </div>
                <div className="mt-4 overflow-hidden rounded-md border border-herb-100 bg-herb-50">
                  <div className="relative aspect-[16/9]">
                    <Image
                      src={herbalOriginImages[0].src}
                      alt={herbalOriginImages[0].alt}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 46vw, 100vw"
                    />
                  </div>
                  <div className="px-4 py-3 text-sm font-semibold text-herb-800">
                    {herbalOriginImages[0].title}
                  </div>
                </div>
                <div className="mt-4 flex snap-x gap-3 overflow-x-auto pb-2">
                  {herbalOriginImages.slice(1).map((item) => (
                    <div
                      key={item.src}
                      className="w-44 shrink-0 snap-start overflow-hidden rounded-md border border-herb-100 bg-herb-50 sm:w-52"
                    >
                      <div className="relative aspect-[4/3]">
                        <Image
                          src={item.src}
                          alt={item.alt}
                          fill
                          className="object-cover"
                          sizes="208px"
                        />
                      </div>
                      <div className="px-3 py-2 text-xs font-semibold text-herb-800">
                        {item.title}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20" id="audience">
        <div className="section-shell">
          <SectionHeading
            eyebrow="合作对象"
            title="我们适合谁合作"
            description="如果你正在找稳定、可定制、适合做渠道转化的东方草本温养产品，这个页面就是为你准备的。"
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {audiences.map((audience) => (
              <AudienceCard key={audience.title} {...audience} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-herb-50 py-20" id="product-system">
        <div className="section-shell">
          <div className="grid gap-10 rounded-lg border border-herb-200 bg-white p-6 shadow-soft lg:grid-cols-[0.75fr_1.25fr] lg:p-8">
            <div>
              <p className="mb-3 text-sm font-semibold text-gold-500">
                产品体系
              </p>
              <h2 className="text-3xl font-semibold leading-tight text-herb-900 sm:text-4xl">
                源于三十余年传承与经验沉淀的东方草本温养产品体系
              </h2>
            </div>
            <div className="space-y-5 text-base leading-8 text-herb-700">
              <p>云明宇琛的东方草本温养产品，并不是简单的贴牌产品。</p>
              <p>
                这些产品方向，源于刘凌云老师三十余年来在传统养生传承、身心调养实践、女性养心、家庭温养与东方草本应用中的经验沉淀。
              </p>
              <p>
                在长期的养生实践中，刘凌云老师发现，现代家庭需要的并不是复杂、焦虑、难以坚持的养生方式，而是更适合日常生活的温和养护：可以在家中使用，可以融入家庭场景，可以配合放松、休息、泡脚、热敷、情绪安定和生活节律慢慢形成习惯。
              </p>
              <p>
                因此，艾草温养贴、艾草足浴包、草本眼贴/眼膜等产品，不只是单个商品，而是刘凌云老师“心安、家和、顺应自然”理念在日常生活中的具体承载。
              </p>
              <p>
                我们希望通过这些东方草本温养产品，让传统养生智慧从内容走进家庭，从理念变成用户日常可感知、可体验、可分享的生活方式。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20" id="products">
        <div className="section-shell">
          <SectionHeading
            eyebrow="产品合作专区"
            title="刘凌云老师东方草本温养产品体系"
            description="源于三十余年传统养生传承与实践经验，将中式养生、女性养心、家庭温养与东方草本护理结合，形成适合门店、社群、家庭与海外华人市场的产品合作方向。"
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.title} {...product} />
            ))}
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "真实产品图",
                image: "/images/herbal-care.jpg",
                alt: "艾草温养产品展示"
              },
              {
                title: "样品图",
                image: "/images/sample-kit.jpg",
                alt: "样品组合展示"
              },
              {
                title: "包装图",
                image: "/images/gift-box.jpg",
                alt: "产品包装方案展示"
              },
              {
                title: "生产环境局部图",
                image: "/images/hero-products.jpg",
                alt: "产品合作环境局部展示"
              }
            ].map((item) => (
              <div
                key={item.title}
                className="overflow-hidden rounded-lg border border-herb-200 bg-herb-50 shadow-sm"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 25vw, 50vw"
                  />
                </div>
                <div className="px-4 py-3 text-sm font-semibold text-herb-800">
                  {item.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-herb-800 py-20 text-white" id="capability">
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

      <section className="bg-white py-20" id="resource-protection">
        <div className="section-shell">
          <div className="grid gap-8 rounded-lg border border-herb-200 bg-herb-50 p-6 shadow-sm lg:grid-cols-[0.75fr_1.25fr] lg:p-8">
            <div>
              <p className="mb-3 text-sm font-semibold text-gold-500">
                合作保护
              </p>
              <h2 className="text-3xl font-semibold leading-tight text-herb-900">
                保护合作资源，不公开底牌
              </h2>
            </div>
            <p className="text-base leading-8 text-herb-700">
              为保护合作客户与供应链资源，官网不公开具体工厂名称、供应商信息、真实底价、批文编号和内部合作细节。相关资料将在确认合作意向后分阶段沟通。
            </p>
          </div>
        </div>
      </section>

      <section className="py-20" id="cooperation-support">
        <div className="section-shell">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <SectionHeading
              align="left"
              eyebrow="合作支持"
              title="样品试单、渠道内容与合规边界一起规划"
              description="先用样品和小批量方案验证渠道反馈，再决定包装、组合与下单节奏；后续可继续沟通渠道素材、合作流程和合规表达建议。"
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

      <section className="py-20" id="process">
        <div className="section-shell">
          <SectionHeading
            eyebrow="合作流程"
            title="从拿样到生产，每一步清楚可控"
            description="合作流程适合用于确认样品、包装方案、合同和定金节点，让双方预期更明确。"
          />
          <ProcessTimeline steps={processSteps} />
          <div className="mt-8 rounded-lg border border-gold-300 bg-white px-6 py-5 text-center text-base leading-8 text-herb-800 shadow-sm">
            常规订单在确认包装方案与定金后，约 21 天左右完成生产交付，具体周期以产品规格、订单数量和包装复杂度为准。
          </div>
        </div>
      </section>

      <section className="bg-white py-20" id="why">
        <div className="section-shell">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <SectionHeading
              align="left"
              eyebrow="差异化合作"
              title="为什么我们不是普通贴牌工厂"
              description="我们不只是提供产品，更提供 IP、内容与渠道表达。普通贴牌更多停留在产品和包装，我们希望把刘凌云老师的中式养生内容、东方草本产品和渠道表达一起打通，让合作更有信任基础。"
            />
            <div className="grid gap-5 sm:grid-cols-2">
              {reasons.map((reason) => (
                <CapabilityCard key={reason.title} {...reason} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20" id="support">
        <div className="section-shell">
          <SectionHeading
            eyebrow="渠道支持"
            title="给渠道的不只是货，还有可落地的内容资料"
            description="围绕门店、社群、直播和海外华人市场，提供更容易讲清楚、用得上的基础素材。"
          />
          <SupportList items={supportItems} />
        </div>
      </section>

      <section className="bg-herb-900 py-20 text-white" id="compliance">
        <div className="section-shell">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold text-gold-300">
                合规表达
              </p>
              <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
                我们坚持合规、真实、长期的产品表达
              </h2>
            </div>
            <div className="rounded-lg border border-white/15 bg-white/10 p-6 text-base leading-8 text-herb-50">
              我们的产品定位为东方草本生活方式与日常温养护理产品，不替代专业判断或建议。我们会为合作渠道提供合规表达建议，避免医疗化、绝对化、恐吓式和夸大化宣传，帮助产品以“日常温养、居家护理、家庭关怀、东方草本生活方式”的方式被用户理解。
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20" id="kit">
        <div className="section-shell">
          <div className="grid gap-10 rounded-lg border border-herb-200 bg-herb-50 p-6 shadow-soft lg:grid-cols-[0.9fr_1.1fr] lg:p-8">
            <div>
              <p className="mb-3 text-sm font-semibold text-gold-500">
                资料包转化
              </p>
              <h2 className="text-3xl font-semibold leading-tight text-herb-900 sm:text-4xl">
                提交合作需求，获取东方草本产品合作资料包
              </h2>
              <p className="mt-4 text-base leading-8 text-herb-700">
                适合想先了解产品方向、样品方案、贴牌路径和渠道素材的合作方。我们会根据你的渠道类型与目标市场，沟通更适合的资料与样品组合。
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <ActionButton href="#contact" variant="primary" icon={ReceiptText}>
                  获取产品资料包
                </ActionButton>
                <ActionButton href="#contact" variant="ghost" icon={PackageCheck}>
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

      <section className="bg-paper-grain py-20" id="contact">
        <div className="section-shell">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <SectionHeading
                align="left"
                eyebrow="联系合作"
                title="提交合作需求，获取东方草本产品合作资料包"
                description="请留下你的渠道类型、目标市场和感兴趣产品，我们会根据合作阶段提供更合适的资料、样品、包装与内容支持建议。"
              />
              <div className="space-y-4 rounded-lg border border-herb-200 bg-white/80 p-5 text-sm leading-7 text-herb-700">
                <div className="flex gap-3">
                  <ClipboardList
                    aria-hidden="true"
                    className="mt-1 h-5 w-5 shrink-0 text-herb-700"
                  />
                  <p>适合先咨询产品资料、样品方案、贴牌包装和渠道内容支持。</p>
                </div>
                <div className="flex gap-3">
                  <ScrollText
                    aria-hidden="true"
                    className="mt-1 h-5 w-5 shrink-0 text-herb-700"
                  />
                  <p>具体合作价格、生产周期和包装细节，会按产品规格与订单计划单独确认。</p>
                </div>
                <div className="flex gap-3">
                  <HeartHandshake
                    aria-hidden="true"
                    className="mt-1 h-5 w-5 shrink-0 text-herb-700"
                  />
                  <p>支持本地客户与海外华人渠道沟通，资料表达可按市场做调整。</p>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      <footer className="border-t border-herb-200 bg-white py-10">
        <div className="section-shell">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <h2 className="text-xl font-semibold text-herb-900">云明宇琛</h2>
              <p className="mt-2 text-sm text-herb-700">
                刘凌云中式养生 IP + 东方草本产品合作服务
              </p>
              <p className="mt-4 max-w-2xl text-xs leading-6 text-herb-600">
                本网站内容仅用于产品合作与日常养护场景介绍，不构成专业健康建议。
              </p>
            </div>
            <nav className="flex flex-wrap gap-4 text-sm font-medium text-herb-700">
              <a className="focus-ring rounded-full hover:text-herb-900" href="#teacher">
                刘凌云老师
              </a>
              <a className="focus-ring rounded-full hover:text-herb-900" href="#herbal-origin">
                草本源头
              </a>
              <a className="focus-ring rounded-full hover:text-herb-900" href="#product-system">
                产品体系
              </a>
              <a className="focus-ring rounded-full hover:text-herb-900" href="#cooperation-support">
                合作支持
              </a>
              <a className="focus-ring rounded-full hover:text-herb-900" href="#contact">
                联系合作
              </a>
            </nav>
          </div>
        </div>
      </footer>
    </main>
  );
}
