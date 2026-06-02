import type { Metadata } from "next";
import Image from "next/image";
import {
  BadgeCheck,
  Boxes,
  CheckCircle2,
  FileText,
  HandHeart,
  HeartHandshake,
  Landmark,
  Leaf,
  MessageCircle,
  PackageCheck,
  ShieldCheck,
  Sprout,
  Users
} from "lucide-react";
import { ActionButton } from "@/components/ActionButton";
import { CapabilityCard } from "@/components/CapabilityCard";
import { EnglishContactForm } from "@/components/EnglishContactForm";
import { ProductShowcaseCarousel } from "@/components/ProductShowcaseCarousel";
import { SectionHeading } from "@/components/SectionHeading";
import { SiteHeader } from "@/components/SiteHeader";
import { VideoFeature } from "@/components/VideoFeature";

export const metadata: Metadata = {
  title:
    "Yunming Yuchen | Liu Lingyun Chinese Wellness IP & Eastern Herbal Product Partnerships",
  description:
    "Yunming Yuchen connects Liu Lingyun’s Chinese wellness content system with Eastern herbal warming products, supporting OEM/ODM, sample testing, packaging customization, and channel content for global Chinese markets."
};

const qingchengVideo = {
  youtubeId: "6ulLxTnArOs",
  youtubeUrl: "https://youtu.be/6ulLxTnArOs",
  title: "Watch Liu Lingyun’s Qingcheng Mountain Wellness Story",
  subtitle: "刘凌云老师青城山养生纪实",
  paragraphs: [
    "This film records Liu Lingyun’s wellness culture exchange and daily cultivation scenes in Qingcheng Mountain. It presents bamboo mountain living, herbal grinding, traditional warming experiences, and Taoist lifestyle settings, showing her long-term focus on Chinese wellness, Taoist wisdom, women’s emotional wellbeing, inner settling, and family harmony.",
    "Liu Lingyun believes that true wellness is not only external care, but also peace of mind, family harmony, and living in rhythm with nature. Yunming Yuchen hopes to turn traditional wellness wisdom into a lifestyle that modern families can understand, feel, and gradually integrate into everyday life through content and Eastern herbal warming products."
  ],
  note:
    "This video is for Chinese wellness culture exchange and Eastern warming lifestyle communication only. It does not constitute medical advice or product efficacy proof."
};

const herbalOriginHighlights = [
  {
    icon: Sprout,
    title: "Herbal Source",
    description:
      "We care about herbal origin, regional culture, and the way source value is explained to partners."
  },
  {
    icon: Landmark,
    title: "Qiai Culture",
    description:
      "Qichun, Hubei is widely known as China’s mugwort capital, with a deep cultural foundation around Qiai and traditional moxibustion craftsmanship."
  },
  {
    icon: Leaf,
    title: "Daily Care Scenarios",
    description:
      "Traditional herbal culture is translated into modern family, studio, and community lifestyle scenarios."
  },
  {
    icon: ShieldCheck,
    title: "Compliant Channel Language",
    description:
      "We help partners communicate cultural value clearly and gently, instead of reducing products to generic private-label goods."
  }
];

const herbalOriginImages = [
  {
    src: "/images/herbal-origin/mugwort-harvest.webp",
    alt: "Mugwort field harvesting scene",
    title: "Mugwort Harvest"
  },
  {
    src: "/images/herbal-origin/mugwort-drying-yard.webp",
    alt: "Mugwort sun drying yard scene",
    title: "Mugwort Drying"
  },
  {
    src: "/images/herbal-origin/sun-dried-mugwort.webp",
    alt: "Natural condition of mugwort after sun drying",
    title: "After Sun-Drying"
  },
  {
    src: "/images/herbal-origin/mugwort-velvet-processing-equipment.webp",
    alt: "Mugwort velvet processing equipment display",
    title: "Velvet Processing"
  },
  {
    src: "/images/herbal-origin/lei-huo-jiu-filling.webp",
    alt: "Lei Huo Jiu filling process display",
    title: "Filling Process"
  },
  {
    src: "/images/herbal-origin/short-moxa-sticks-custom.webp",
    alt: "Short moxa sticks customization process display",
    title: "Short Moxa Sticks"
  },
  {
    src: "/images/herbal-origin/moxa-processing-packaging.webp",
    alt: "Mugwort velvet processing and packaging display",
    title: "Processing Flow"
  },
  {
    src: "/images/herbal-origin/packing-shipping.webp",
    alt: "Herbal product packing and shipping process display",
    title: "Packing & Shipping"
  }
];

const heroShowcaseItems = [
  {
    src: "/images/showcase/moxibustion-gift-box.jpg",
    alt: "Eastern herbal warming gift box packaging display",
    title: "Gift Box Packaging",
    description: "Designed for retail display, gifting, channel samples, and private-label packaging tests.",
    tags: ["Packaging", "Gift Sets", "Samples"]
  },
  {
    src: "/images/showcase/moxibustion-kit-open.jpg",
    alt: "Eastern herbal warming product kit display",
    title: "Product Combination",
    description: "Built around family warming, studio experience, community sales, and channel cooperation.",
    tags: ["Product Mix", "Studio Use", "Community"]
  },
  {
    src: "/images/showcase/moxibustion-sample-tray.jpg",
    alt: "Eastern herbal warming sample kit display",
    title: "Sample Testing",
    description: "Start from sample kits, small trial orders, and private-label test versions.",
    tags: ["Samples", "Trial Order", "Private Label"]
  },
  {
    src: "/images/showcase/herbal-jars-set.jpg",
    alt: "Eastern herbal balm product set display",
    title: "Herbal Product Matrix",
    description: "Plan product directions, specification levels, and content assets by channel positioning.",
    tags: ["Product Matrix", "Content", "Custom Specs"]
  },
  {
    src: "/images/showcase/moxibustion-device.jpg",
    alt: "Eastern warming tool detail display",
    title: "Warming Tool Details",
    description: "Useful for showing product texture, packaging details, and Eastern lifestyle scenarios.",
    tags: ["Details", "Lifestyle", "Content Assets"]
  },
  {
    src: "/images/showcase/blue-patch-package.jpg",
    alt: "Blue herbal patch packaging display",
    title: "Patch Packaging",
    description: "Package direction can be planned by brand positioning, channel audience, and budget.",
    tags: ["Patch Products", "Packaging", "Branding"]
  },
  {
    src: "/images/showcase/silver-patch-package.jpg",
    alt: "Silver herbal patch packaging display",
    title: "Channel Packaging Test",
    description: "Suitable for sample communication, channel feedback, and packaging direction testing.",
    tags: ["Channel Test", "Packaging", "Samples"]
  },
  {
    src: "/images/showcase/herbal-balm-jar.jpg",
    alt: "Eastern herbal balm jar product display",
    title: "Herbal Balm Display",
    description: "Used for product information packs, channel introductions, and visual content assets.",
    tags: ["Herbal Balm", "Info Pack", "Visual Assets"]
  }
];

const products = [
  {
    title: "Mugwort Warming Patch",
    image: "/images/herbal-care.jpg",
    description:
      "Inspired by Liu Lingyun’s understanding of daily warming, family care, and natural rhythm, suitable for studio experience, home care, community group buying, and private-label cooperation."
  },
  {
    title: "Mugwort Foot Soak Pack",
    image: "/images/gift-box.jpg",
    description:
      "A simple daily warming ritual for modern families, suitable for gift sets, community repurchase, holiday gifting, and channel cooperation."
  },
  {
    title: "Herbal Eye Patch / Mask",
    image: "/images/sample-kit.jpg",
    description:
      "Designed around modern women’s screen-heavy and high-pressure lifestyle scenarios, suitable for beauty salons, SPA, livestream channels, and women’s care categories."
  }
];

const advantages = [
  {
    icon: MessageCircle,
    title: "Liu Lingyun IP Content Trust",
    description:
      "Long-term content themes around Chinese wellness, women’s inner care, family harmony, and Taoist lifestyle wisdom."
  },
  {
    icon: Sprout,
    title: "Eastern Herbal Product System",
    description:
      "A product direction built around mugwort warming patches, foot soak packs, and herbal eye patches for daily family use."
  },
  {
    icon: FileText,
    title: "Channel Content Support",
    description:
      "Clearer product narratives for wellness studios, salons, communities, livestream channels, and overseas Chinese markets."
  },
  {
    icon: BadgeCheck,
    title: "Compliant Long-Term Expression",
    description:
      "We communicate through daily warming, home care, family concern, and Eastern herbal lifestyle instead of exaggerated promises."
  }
];

export default function EnglishHomePage() {
  return (
    <main id="top" className="overflow-hidden bg-herb-50">
      <SiteHeader language="en" />

      <section className="relative bg-paper-grain pb-20 pt-12 sm:pt-16 lg:pb-28">
        <div className="section-shell grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-herb-200 bg-white/70 px-4 py-2 text-sm font-medium text-herb-700">
              <Leaf aria-hidden="true" className="h-4 w-4 text-gold-500" />
              Liu Lingyun IP + Yunming Yuchen Product Cooperation
            </div>
            <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-herb-900 sm:text-5xl lg:text-6xl">
              Liu Lingyun’s Chinese Wellness IP & Eastern Herbal Warming Product Partnerships
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-9 text-herb-700">
              Yunming Yuchen builds an Eastern wellness content system around
              Chinese wellness, Taoist wisdom, Huangdi Neijing, women’s inner
              care, emotional settling, and family harmony. We support wellness
              studios, salons, community sellers, cross-border merchants, and
              global Chinese distributors with OEM/ODM products, sample testing,
              packaging customization, and channel content.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ActionButton href="/teacher" variant="primary" icon={Users}>
                Meet Liu Lingyun
              </ActionButton>
              <ActionButton href="#contact" variant="secondary" icon={PackageCheck}>
                Discuss OEM/ODM Cooperation
              </ActionButton>
            </div>
            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {[
                "Liu Lingyun IP",
                "Chinese wellness content",
                "Eastern herbal products",
                "Samples & private label",
                "Global Chinese channels"
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
          <div>
            <ProductShowcaseCarousel items={heroShowcaseItems} />
          </div>
        </div>
      </section>

      <VideoFeature
        eyebrow="Qingcheng Mountain Story"
        title={qingchengVideo.title}
        subtitle={qingchengVideo.subtitle}
        paragraphs={qingchengVideo.paragraphs}
        note={qingchengVideo.note}
        youtubeId={qingchengVideo.youtubeId}
        youtubeUrl={qingchengVideo.youtubeUrl}
        ctaLabel="Watch on YouTube"
      />

      <section className="bg-herb-50 py-20" id="herbal-origin">
        <div className="section-shell">
          <div className="grid gap-10 xl:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] xl:items-center">
            <div className="min-w-0">
              <SectionHeading
                align="left"
                eyebrow="Herbal Origin"
                title="Qichun and Qiai: cultural roots behind Eastern herbal products"
                description="Qichun, Hubei is widely known as China’s mugwort capital. Qiai culture and traditional moxibustion craftsmanship carry a deep cultural foundation. Yunming Yuchen values herbal origin, traditional culture, daily care scenarios, and the needs of modern families in its Eastern herbal warming product system."
              />
              <p className="max-w-3xl text-base leading-8 text-herb-700">
                We hope partners can understand the cultural value behind Eastern
                herbal products through clearer and compliant communication,
                rather than seeing them as ordinary private-label goods.
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

            <div className="relative min-w-0">
              <div className="absolute -left-5 top-8 h-28 w-28 rounded-full border border-gold-300/60" />
              <div className="absolute -right-6 bottom-12 h-36 w-36 rounded-full border border-herb-300/60" />
              <div className="relative overflow-hidden rounded-lg border border-herb-200 bg-white p-4 shadow-soft">
                <div className="rounded-md bg-paper-grain p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gold-500">
                    Qichun, Hubei
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold leading-tight text-herb-900 sm:text-3xl">
                    Eastern herbal culture with a traceable story
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-herb-700">
                    From regional culture and herbal application to packaging
                    language and modern family scenarios, the source story gives
                    channels a clearer way to introduce the product system.
                  </p>
                </div>
                <div className="mt-4 overflow-hidden rounded-md border border-herb-100 bg-herb-50">
                  <div className="relative aspect-[16/9]">
                    <Image
                      src={herbalOriginImages[0].src}
                      alt={herbalOriginImages[0].alt}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1280px) 46vw, 100vw"
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

      <section className="py-20" id="products">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Product Cooperation"
            title="Liu Lingyun’s Eastern Herbal Warming Product System"
            description="Rooted in more than thirty years of traditional wellness inheritance and practice, this product direction connects Chinese wellness, women’s inner care, family warming, and Eastern herbal lifestyle scenarios."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {products.map((product) => (
              <article
                key={product.title}
                className="overflow-hidden rounded-lg border border-herb-200 bg-white shadow-sm"
              >
                <div className="relative aspect-[4/3] bg-herb-100">
                  <Image
                    src={product.image}
                    alt={`${product.title} display`}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 33vw, 100vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-herb-900">
                    {product.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-herb-700">
                    {product.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20" id="cooperation-support">
        <div className="section-shell">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <SectionHeading
              align="left"
              eyebrow="Cooperation Support"
              title="Samples, channel content, and compliant boundaries planned together"
              description="For new channels and new brands, we recommend validating product direction, audience fit, packaging expectations, channel content, and compliant language before scaling."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Discuss your target market and sales channel first",
                "Recommend sample combinations by channel type",
                "Support basic packaging, private-label test, and gift set options",
                "Final pricing is confirmed by specification, packaging, quantity, and delivery needs"
              ].map((item, index) => (
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

      <section className="py-20" id="support">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Why We Are Different"
            title="Not just a private-label supplier: IP, products, and channel storytelling"
            description="We help partners explain the product system through Liu Lingyun’s wellness philosophy, product scenarios, compliant language, and content assets."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {advantages.map((item) => (
              <CapabilityCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-herb-900 py-20 text-white" id="compliance">
        <div className="section-shell">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold text-gold-300">
                Compliance
              </p>
              <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
                Real, gentle, and long-term wellness communication
              </h2>
            </div>
            <div className="rounded-lg border border-white/15 bg-white/10 p-6 text-base leading-8 text-herb-50">
              Our products are positioned as Eastern herbal lifestyle and daily
              warming care products. We provide compliant communication guidance
              for partners and help products be understood through daily
              warming, home care, family concern, and Eastern herbal lifestyle
              scenarios.
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
                eyebrow="Contact"
                title="Request the Eastern herbal product cooperation kit"
                description="Tell us your channel, market, and product interest. We will discuss product information, samples, packaging direction, and content support based on your cooperation stage."
              />
              <div className="space-y-4 rounded-lg border border-herb-200 bg-white/80 p-5 text-sm leading-7 text-herb-700">
                <div className="flex gap-3">
                  <HeartHandshake
                    aria-hidden="true"
                    className="mt-1 h-5 w-5 shrink-0 text-herb-700"
                  />
                  <p>
                    Suitable for wellness studios, salons, community sellers,
                    cross-border sellers, distributors, and private-label
                    founders.
                  </p>
                </div>
                <div className="flex gap-3">
                  <Boxes
                    aria-hidden="true"
                    className="mt-1 h-5 w-5 shrink-0 text-herb-700"
                  />
                  <p>
                    Cooperation details are confirmed according to product
                    specification, packaging, sample plan, and order volume.
                  </p>
                </div>
              </div>
            </div>
            <EnglishContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
