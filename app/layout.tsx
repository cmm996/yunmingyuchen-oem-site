import type { Metadata } from "next";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import "./globals.css";

export const metadata: Metadata = {
  title: "云明宇琛 | 刘凌云中式养生 IP 与东方草本温养产品合作",
  description:
    "云明宇琛围绕中式养生、道家智慧、黄帝内经、女性养心、情绪养生与家和万事兴，打造刘凌云老师东方养生内容体系，并面向养生馆、美容院、社群团长、跨境卖家与华人渠道商提供东方草本产品 OEM/ODM、包装定制、样品方案与渠道内容支持。",
  keywords: [
    "东方草本",
    "温养产品",
    "OEM",
    "ODM",
    "贴牌定制",
    "艾草温养贴",
    "艾草足浴包",
    "草本眼贴",
    "渠道招商"
  ],
  openGraph: {
    title: "云明宇琛 | 刘凌云中式养生 IP 与东方草本温养产品合作",
    description:
      "连接刘凌云中式养生内容体系与东方草本产品合作，支持产品、包装、样品、内容素材与渠道合作表达。",
    type: "website",
    locale: "zh_CN"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
