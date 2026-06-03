import Link from "next/link";

const footerNavItems = [
  { label: "刘凌云老师", href: "/teacher" },
  { label: "草本源头", href: "/source" },
  { label: "产品体系", href: "/products" },
  { label: "合作支持", href: "/support" },
  { label: "联系合作", href: "/#contact" }
];

type SiteFooterProps = {
  description?: string;
};

export function SiteFooter({
  description = "刘凌云中式养生 IP + 东方草本产品合作服务"
}: SiteFooterProps) {
  return (
    <footer className="border-t border-herb-200 bg-white py-10">
      <div className="section-shell">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <h2 className="text-xl font-semibold text-herb-900">云明宇琛</h2>
            <p className="mt-2 text-sm text-herb-700">{description}</p>
            <p className="mt-4 max-w-2xl text-xs leading-6 text-herb-600">
              本网站内容仅用于产品合作与日常养护场景介绍，不构成专业健康建议。
            </p>
          </div>
          <nav className="flex flex-wrap gap-4 text-sm font-medium text-herb-700">
            {footerNavItems.map((item) => (
              <Link
                key={item.href}
                className="focus-ring rounded-full hover:text-herb-900"
                href={item.href}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
