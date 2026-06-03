import Link from "next/link";
import { Leaf, Menu } from "lucide-react";

const zhNavItems = [
  { label: "刘凌云老师", href: "/teacher" },
  { label: "草本源头", href: "/source" },
  { label: "产品体系", href: "/products" },
  { label: "合作支持", href: "/support" },
  { label: "联系合作", href: "/#contact" }
];

const enNavItems = [
  { label: "About Liu", href: "/teacher" },
  { label: "Herbal Origin", href: "/source" },
  { label: "Product System", href: "/products" },
  { label: "Cooperation Support", href: "/support" },
  { label: "Contact", href: "/en#contact" }
];

type SiteHeaderProps = {
  language?: "zh" | "en";
};

export function SiteHeader({ language = "zh" }: SiteHeaderProps) {
  const navItems = language === "en" ? enNavItems : zhNavItems;
  const homeHref = language === "en" ? "/en" : "/";
  const subtitle =
    language === "en"
      ? "Chinese wellness IP + Eastern herbal products"
      : "刘凌云中式养生 IP + 东方草本产品合作";
  const contactHref = language === "en" ? "/en#contact" : "/#contact";
  const contactLabel = language === "en" ? "Get Info Kit" : "获取资料包";

  return (
    <header className="sticky top-0 z-50 border-b border-herb-200/70 bg-herb-50/90 backdrop-blur-xl">
      <div className="section-shell flex h-16 items-center justify-between">
        <Link href={homeHref} className="focus-ring flex items-center gap-3 rounded-full">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-herb-800 text-gold-100">
            <Leaf aria-hidden="true" className="h-5 w-5" />
          </span>
          <span>
            <span className="block text-base font-semibold text-herb-900">
              云明宇琛
            </span>
            <span className="block text-xs text-herb-600">
              {subtitle}
            </span>
          </span>
        </Link>
        <nav className="hidden items-center gap-5 text-sm font-medium text-herb-700 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="focus-ring rounded-full transition hover:text-herb-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <div className="flex rounded-full border border-herb-200 bg-white p-1 text-xs font-semibold text-herb-700">
            <Link
              href="/"
              className={`rounded-full px-3 py-1.5 transition ${
                language === "zh" ? "bg-herb-800 text-white" : "hover:bg-herb-50"
              }`}
            >
              中文
            </Link>
            <Link
              href="/en"
              className={`rounded-full px-3 py-1.5 transition ${
                language === "en" ? "bg-herb-800 text-white" : "hover:bg-herb-50"
              }`}
            >
              EN
            </Link>
          </div>
          <Link
            href={contactHref}
            className="focus-ring rounded-full bg-herb-800 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-herb-900"
          >
            {contactLabel}
          </Link>
        </div>
        <Link
          href={contactHref}
          className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-herb-200 bg-white text-herb-800 md:hidden"
          aria-label={language === "en" ? "Open contact section" : "打开联系区域"}
        >
          <Menu aria-hidden="true" className="h-5 w-5" />
        </Link>
      </div>
    </header>
  );
}
