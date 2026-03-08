"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Database, ShieldCheck, RefreshCw } from "lucide-react";

const reasons = [
  {
    icon: Database,
    title: "데이터의 자산화",
    desc: "단순한 검색을 넘어, 기업 내 숨겨진 지식을 구조화하고 영구적인 자산으로 만듭니다.",
  },
  {
    icon: ShieldCheck,
    title: "설명 가능한 신뢰성",
    desc: "하이브리드 RAG 아키텍처를 통해 환각을 방지하고, 100% 출처 기반의 답변을 제공합니다.",
  },
  {
    icon: RefreshCw,
    title: "지속적인 진화",
    desc: "사용자 피드백을 통해 온톨로지와 AI 모델이 지속적으로 발전하는 선순환 구조를 제공합니다.",
  },
];

export default function WhyUs() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="why-us" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-3">
              Why Choose Us
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-navy leading-tight">
              기업용 AI의
              <br />
              새로운 기준을 제시합니다
            </h2>
            <p className="mt-5 text-text-muted max-w-md leading-relaxed">
              More Than a Chatbot — KNie는 단순한 챗봇이 아닌,
              기업의 전략적 지식 기반(Strategic Knowledge Base)입니다.
            </p>
          </div>

          {/* Right */}
          <div ref={ref} className="space-y-5">
            {reasons.map((reason, i) => (
              <div
                key={reason.title}
                className={`flex gap-5 p-6 rounded-2xl bg-white border border-border hover:shadow-lg hover:border-primary/20 transition-all duration-700 ${
                  visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center shrink-0">
                  <reason.icon className="text-primary" size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy mb-1">{reason.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">{reason.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
