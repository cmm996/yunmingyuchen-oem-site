import type { Metadata } from "next";
import Image from "next/image";
import {
  BookOpenText,
  ExternalLink,
  Flower2,
  HandHeart,
  HeartHandshake,
  Home,
  Leaf,
  MoonStar,
  PlayCircle,
  Sprout,
  Users,
  Waves
} from "lucide-react";
import { ActionButton } from "@/components/ActionButton";
import { CapabilityCard } from "@/components/CapabilityCard";
import { QuoteCard } from "@/components/QuoteCard";
import { SectionHeading } from "@/components/SectionHeading";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "刘凌云老师 | 中式养生与东方家庭温养生活方式",
  description:
    "刘凌云老师，云明宇琛创始人，拥有传统养生传承、非遗文化传承、身心调养与道家修行背景，长期关注中式养生、黄帝内经、女性养心、情绪养生与家和万事兴，倡导以心安、家和、顺应自然为核心的东方温养生活方式。"
};

const ipPositionTags = [
  "云明宇琛创始人",
  "中式养生与家庭温养老师",
  "女性养心与家和理念倡导者"
];

const backgroundTags = [
  "传统养生传承背景",
  "非物质文化遗产传承人",
  "高级按摩师",
  "心理咨询师",
  "正一派道士"
];

const philosophyPoints = [
  "女人如何在中年以后慢慢养心",
  "家庭关系如何影响一个人的身心状态",
  "情绪稳定为什么是养生的重要部分",
  "顺应自然节律为什么比盲目进补更重要",
  "如何把古老的中式养生智慧，讲成现代人听得懂、用得上的生活方法"
];

const audiences = [
  {
    icon: Flower2,
    title: "中年女性",
    description:
      "关注 45 岁以后女性的身心状态、情绪压力、家庭责任与自我照顾。"
  },
  {
    icon: Home,
    title: "家庭主理人",
    description:
      "关注长期为家人操心、容易忽略自己的女性，帮助她们重新理解“照顾自己”也是家庭温养的一部分。"
  },
  {
    icon: Users,
    title: "海外华人家庭",
    description:
      "关注身在海外、仍希望延续中式养生与东方家庭智慧的华人家庭。"
  },
  {
    icon: HandHeart,
    title: "养生门店与渠道伙伴",
    description:
      "关注希望把东方草本温养理念带给客户的养生馆、美容院、社群团长与渠道伙伴。"
  }
];

const contentDirections = [
  {
    icon: HeartHandshake,
    title: "女性养心",
    description: "关注中年女性的情绪、操心、委屈、压力与自我照顾。"
  },
  {
    icon: Home,
    title: "家和养生",
    description: "从家庭关系、沟通方式、情绪流动中理解身心安定。"
  },
  {
    icon: BookOpenText,
    title: "黄帝内经生活化",
    description: "把传统经典中的养生智慧，转化为现代人听得懂的生活表达。"
  },
  {
    icon: MoonStar,
    title: "道家慢养生",
    description: "用顺其自然、少内耗、少执念的方式理解生活节律。"
  },
  {
    icon: Sprout,
    title: "东方草本温养",
    description: "将艾草、草本与家庭温养场景结合，形成更贴近日常的生活方式。"
  },
  {
    icon: Waves,
    title: "海外华人中式养生",
    description: "帮助海外华人家庭用更熟悉的东方智慧安顿身心与家庭生活。"
  }
];

export default function TeacherPage() {
  return (
    <main id="top" className="overflow-hidden bg-herb-50">
      <SiteHeader />

      <section className="bg-paper-grain py-16 lg:py-24">
        <div className="section-shell grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-herb-200 bg-white/70 px-4 py-2 text-sm font-medium text-herb-700">
              <Leaf aria-hidden="true" className="h-4 w-4 text-gold-500" />
              中式养生与家庭温养生活方式老师
            </div>
            <h1 className="text-3xl font-semibold leading-snug text-herb-900 sm:text-4xl lg:text-5xl">
              刘凌云老师：三十余年传统养生传承，只为把“心安、家和、顺自然”带回现代家庭
            </h1>
            <p className="mt-6 text-lg leading-9 text-herb-700">
              刘凌云老师，云明宇琛创始人，拥有传统养生传承、非遗文化、身心调养与道家修行背景。她长期关注中式养生、黄帝内经、女性养心、情绪养生与家和万事兴，倡导“养生不只是养身体，更是养心、养家、养生活节律”。
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ActionButton href="#philosophy" variant="primary" icon={BookOpenText}>
                了解她的养生理念
              </ActionButton>
              <ActionButton href="/#contact" variant="secondary" icon={HandHeart}>
                咨询产品合作
              </ActionButton>
            </div>
            <div className="mt-10 grid gap-5 lg:grid-cols-2">
              {[
                { title: "她的 IP 定位", tags: ipPositionTags },
                { title: "她的传承与实践背景", tags: backgroundTags }
              ].map((group) => (
                <div
                  key={group.title}
                  className="rounded-lg border border-white/70 bg-white/70 p-4"
                >
                  <p className="mb-3 text-sm font-semibold text-gold-500">
                    {group.title}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {group.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-herb-200 bg-herb-50 px-3 py-1.5 text-xs font-medium text-herb-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border border-white/70 bg-white p-4 shadow-soft">
            <div className="relative min-h-[560px] overflow-hidden rounded-md bg-herb-100">
              <Image
                src="/images/liulingyun-teacher.png"
                alt="刘凌云老师东方养生内容展示"
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1024px) 45vw, 100vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20" id="clinic-video">
        <div className="section-shell">
          <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
            <div>
              <SectionHeading
                align="left"
                eyebrow="现场视频"
                title="刘凌云老师义诊交流视频"
                description="通过现场交流视频，了解刘凌云老师如何用更温和、生活化的方式与用户沟通中式养生、家庭温养和身心安顿。视频内容仅用于展示老师的公益交流与内容表达方式。"
              />
              <a
                href="https://youtu.be/jFmT07itT6w"
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-herb-700 bg-herb-700 px-6 text-sm font-semibold text-white shadow-lift transition hover:bg-herb-800"
              >
                在 YouTube 打开视频
                <ExternalLink aria-hidden="true" className="h-4 w-4" />
              </a>
            </div>
            <div className="overflow-hidden rounded-lg border border-herb-200 bg-herb-50 p-3 shadow-soft">
              <div className="relative aspect-video overflow-hidden rounded-md bg-herb-900">
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src="https://www.youtube-nocookie.com/embed/jFmT07itT6w"
                  title="刘凌云老师义诊交流视频"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <div className="mt-3 flex items-start gap-3 rounded-md bg-white px-4 py-3 text-sm leading-7 text-herb-700">
                <PlayCircle
                  aria-hidden="true"
                  className="mt-0.5 h-5 w-5 shrink-0 text-herb-700"
                />
                <p>
                  视频用于展示刘凌云老师的现场交流方式与公益服务场景，不构成专业建议。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="section-shell">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <SectionHeading
              align="left"
              eyebrow="传承背景"
              title="传统养生传承、非遗文化与身心调养经验"
              description="刘凌云老师长期深耕中式养生领域，具备扁鹊玲相关传统养生传承背景，并拥有非物质文化遗产传承人身份，同时具备高级按摩师、心理咨询师等相关学习与实践经历，也拥有正一派道家修行背景。"
            />
            <div className="space-y-5 rounded-lg border border-herb-200 bg-herb-50 p-6 text-base leading-8 text-herb-700">
              <p>
                这些经历让她看待养生时，不只关注身体表面的疲惫，也关注情绪、家庭关系、生活节律与内在状态对人的影响。
              </p>
              <p>
                她更愿意把传统养生智慧转化成现代人听得懂、用得上的生活方法，让养生回到日常生活，而不是停留在复杂、神秘或焦虑的表达里。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20" id="philosophy">
        <div className="section-shell">
          <SectionHeading
            eyebrow="养生理念"
            title="她所理解的养生：先心安，再身安"
            description="在刘凌云老师看来，真正的养生不只是吃什么、补什么、用什么产品，而是一个人如何安顿自己的心，如何顺应自然节律，如何减少情绪内耗，如何让家庭关系变得更和顺。"
          />
          <div className="mx-auto max-w-4xl space-y-5 text-base leading-8 text-herb-700">
            <p>
              很多现代人的疲惫，并不只是因为年龄增长，也不只是因为工作忙碌，而是长期处在焦虑、操心、委屈、紧绷和家庭关系不顺的状态里。
            </p>
            <p>所以，刘凌云老师更关注：</p>
          </div>
          <div className="mx-auto mt-8 grid max-w-5xl gap-4 md:grid-cols-2">
            {philosophyPoints.map((point) => (
              <div
                key={point}
                className="rounded-lg border border-herb-200 bg-white px-5 py-4 text-sm font-medium leading-7 text-herb-800 shadow-sm"
              >
                {point}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="section-shell">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <SectionHeading
                align="left"
                eyebrow="核心主张"
                title="家和，就是最好的养生"
                description="刘凌云老师认为，家庭不应该成为情绪的战场，而应该是身心可以休息的地方。一个家里如果长期争吵、压抑、指责和控制，再多外在的养护，也很难让人真正松下来。"
              />
              <p className="text-base leading-8 text-herb-700">
                真正好的养生，不是让人越来越紧张，而是让人越来越安定。所以，她的内容不仅讲日常温养，也会讲夫妻关系、亲子关系、中年女性的情绪压力，以及如何用更柔和的方式面对家庭和生活。
              </p>
            </div>
            <div className="grid gap-4">
              <QuoteCard quote="家和，就是最好的养生。" />
              <QuoteCard quote="真正的养生，先从心安和家和开始。" />
              <QuoteCard quote="不要把养生变成压力和控制。" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-herb-900 py-20 text-white">
        <div className="section-shell">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="mb-3 text-sm font-semibold text-gold-300">
                道家智慧
              </p>
              <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
                道家智慧与现代生活
              </h2>
              <p className="mt-5 text-base leading-8 text-herb-50">
                作为正一派道士，刘凌云老师长期关注道家文化与身心修养。道家讲顺其自然，并不是消极躺平，而是提醒人不要过度用力，不要长期和自己的身体、情绪、家庭关系对抗。
              </p>
              <p className="mt-5 text-base leading-8 text-herb-50">
                在现代生活里，很多人越想变好，反而越焦虑；越想养生，反而越紧张；越想为家人好，反而越容易控制家人。
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "少一点执念，多一点松弛。",
                "少一点控制，多一点理解。",
                "少一点焦虑，多一点顺应。",
                "少一点内耗，多一点安定。"
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-lg border border-white/15 bg-white/10 p-5 text-lg font-semibold leading-8 text-white"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="section-shell">
          <SectionHeading eyebrow="关注人群" title="她关注的人群" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {audiences.map((item) => (
              <CapabilityCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="section-shell">
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
            <SectionHeading
              align="left"
              eyebrow="产品与 IP 关联"
              title="源于三十余年传承与经验沉淀的东方草本温养产品体系"
              description="云明宇琛的东方草本温养产品，并不是简单的贴牌产品。"
            />
            <div className="space-y-5 text-base leading-8 text-herb-700">
              <p>
                刘凌云老师不是简单为产品代言，而是云明宇琛东方草本温养产品体系的理念源头。产品承载的是她三十余年来对传统养生、女性养心、家庭温养与东方草本生活方式的理解。
              </p>
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

      <section className="py-20">
        <div className="section-shell">
          <SectionHeading
            eyebrow="内容方向"
            title="刘凌云老师的内容方向"
            description="围绕女性养心、家庭温养、传统经典生活化和海外华人中式养生，用更温和的内容建立长期信任。"
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {contentDirections.map((item) => (
              <CapabilityCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-herb-900 py-20 text-white">
        <div className="section-shell">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="mb-3 text-sm font-semibold text-gold-300">
                合规表达
              </p>
              <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
                我们坚持真实、温和、长期的养生表达
              </h2>
            </div>
            <div className="space-y-5 rounded-lg border border-white/15 bg-white/10 p-6 text-base leading-8 text-herb-50">
              <p>
                刘凌云老师与云明宇琛坚持长期、真实、合规的内容表达。
              </p>
              <p>
                我们不做功效承诺，不使用夸张化、绝对化、恐吓式话术，不把养生包装成焦虑，也不鼓励用户用产品替代专业判断。
              </p>
              <p>
                我们更愿意用温和、清楚、可持续的方式，传递东方养生文化与日常温养理念。
              </p>
              <p className="rounded-md bg-white/10 p-4 text-sm leading-7">
                我们会为合作渠道提供合规表达建议，避免医疗化、绝对化、恐吓式和夸大化宣传，帮助产品以“日常温养、居家护理、家庭关怀、东方草本生活方式”的方式被用户理解。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper-grain py-20">
        <div className="section-shell text-center">
          <h2 className="mx-auto max-w-3xl text-3xl font-semibold leading-tight text-herb-900 sm:text-4xl">
            了解刘凌云老师的东方温养理念，也欢迎咨询产品合作
          </h2>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <ActionButton href="/" variant="ghost" icon={Home}>
              返回首页
            </ActionButton>
            <ActionButton href="/#contact" variant="primary" icon={HandHeart}>
              咨询产品合作
            </ActionButton>
            <ActionButton href="/products" variant="secondary" icon={Leaf}>
              查看东方草本产品合作
            </ActionButton>
          </div>
        </div>
      </section>
      <SiteFooter description="刘凌云中式养生与东方家庭温养生活方式" />
    </main>
  );
}
