"use client";

import { useState } from "react";
import { Send } from "lucide-react";

const identityOptions = [
  "养生馆",
  "美容院",
  "社群团长",
  "跨境卖家",
  "批发商",
  "自有品牌创业者",
  "其他"
];

const productOptions = ["艾草温养贴", "艾草足浴包", "草本眼贴", "其他"];

const sampleOptions = ["需要样品", "暂不需要", "先沟通后确认"];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="rounded-lg border border-herb-200 bg-white p-5 shadow-soft sm:p-7"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="grid gap-5 md:grid-cols-2">
        <label className="block">
          <span className="text-sm font-medium text-herb-800">姓名</span>
          <input
            required
            className="focus-ring mt-2 w-full rounded-md border border-herb-200 bg-herb-50 px-4 py-3 text-herb-900"
            placeholder="请输入姓名"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-herb-800">
            微信 / WhatsApp / 手机
          </span>
          <input
            required
            className="focus-ring mt-2 w-full rounded-md border border-herb-200 bg-herb-50 px-4 py-3 text-herb-900"
            placeholder="方便联系的账号"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-herb-800">所在地区</span>
          <input
            className="focus-ring mt-2 w-full rounded-md border border-herb-200 bg-herb-50 px-4 py-3 text-herb-900"
            placeholder="例如：中国深圳 / 马来西亚 / 美国"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-herb-800">合作身份</span>
          <select className="focus-ring mt-2 w-full rounded-md border border-herb-200 bg-herb-50 px-4 py-3 text-herb-900">
            {identityOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="text-sm font-medium text-herb-800">感兴趣产品</span>
          <select className="focus-ring mt-2 w-full rounded-md border border-herb-200 bg-herb-50 px-4 py-3 text-herb-900">
            {productOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="text-sm font-medium text-herb-800">是否需要贴牌</span>
          <select className="focus-ring mt-2 w-full rounded-md border border-herb-200 bg-herb-50 px-4 py-3 text-herb-900">
            <option>是</option>
            <option>否</option>
            <option>还不确定</option>
          </select>
        </label>
        <label className="block md:col-span-2">
          <span className="text-sm font-medium text-herb-800">预计订单量</span>
          <input
            className="focus-ring mt-2 w-full rounded-md border border-herb-200 bg-herb-50 px-4 py-3 text-herb-900"
            placeholder="例如：先拿样品 / 小批量试单 / 计划做品牌套装"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-herb-800">目标销售渠道</span>
          <input
            className="focus-ring mt-2 w-full rounded-md border border-herb-200 bg-herb-50 px-4 py-3 text-herb-900"
            placeholder="例如：门店 / 社群 / TikTok Shop / 批发"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-herb-800">是否需要样品</span>
          <select className="focus-ring mt-2 w-full rounded-md border border-herb-200 bg-herb-50 px-4 py-3 text-herb-900">
            {sampleOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>
        <label className="block md:col-span-2">
          <span className="text-sm font-medium text-herb-800">备注需求</span>
          <textarea
            rows={5}
            className="focus-ring mt-2 w-full resize-y rounded-md border border-herb-200 bg-herb-50 px-4 py-3 text-herb-900"
            placeholder="可填写目标市场、包装预算、需要的素材类型或合作时间"
          />
        </label>
      </div>
      <button
        type="submit"
        className="focus-ring mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-herb-800 px-6 text-sm font-semibold text-white transition hover:bg-herb-900 sm:w-auto"
      >
        获取产品资料包 / 申请样品与贴牌方案
        <Send aria-hidden="true" className="h-4 w-4" />
      </button>
      {submitted ? (
        <p className="mt-4 rounded-md bg-herb-100 px-4 py-3 text-sm leading-6 text-herb-800">
          已记录当前需求。正式上线时可接入邮箱、企业微信或表单系统。
        </p>
      ) : null}
    </form>
  );
}
