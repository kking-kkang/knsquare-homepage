"use client";

import {
  AnimatedSection,
  motion,
  staggerContainerSlow,
  fadeInRight,
} from "@/lib/motion";
import { Database, ShieldCheck, RefreshCw } from "lucide-react";

const reasons = [
  {
    icon: Database,
    number: "01",
    title: "데이터의 자산화",
    desc: "단순한 검색을 넘어, 기업 내 숨겨진 지식을 구조화하고 영구적인 자산으로 만듭니다.",
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: ShieldCheck,
    number: "02",
    title: "설명 가능한 신뢰성",
    desc: "하이브리드 RAG 아키텍처를 통해 환각을 방지하고, 100% 출처 기반의 답변을 제공합니다.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: RefreshCw,
    number: "03",
    title: "지속적인 진화",
    desc: "사용자 피드백을 통해 온톨로지와 AI 모델이 지속적으로 발전하는 선순환 구조를 제공합니다.",
    color: "from-emerald-500 to-teal-500",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-20 lg:py-28 bg-surface relative overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-40" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <AnimatedSection>
            <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-2">Why Choose Us</p>
            <h2 className="text-[2rem] lg:text-[2.5rem] font-bold text-navy leading-tight">
              기업용 AI의<br />새로운 기준을 제시합니다
            </h2>
            <p className="mt-4 text-text-muted max-w-md text-base leading-[1.7]">
              More Than a Chatbot — KNie는 단순한 챗봇이 아닌, 기업의 전략적 지식 기반입니다.
            </p>
            <a
              href="mailto:kblee@knsquare.net"
              className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-lg bg-navy text-white text-sm font-medium hover:bg-navy-light transition-colors"
            >
              도입 문의
            </a>
          </AnimatedSection>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainerSlow}
            className="space-y-4"
          >
            {reasons.map((reason) => (
              <motion.div key={reason.title} variants={fadeInRight} transition={{ duration: 0.5 }} className="card-hover">
                <div className="flex gap-4 p-5 rounded-xl bg-white border border-border">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${reason.color} flex items-center justify-center shrink-0`}>
                    <reason.icon size={18} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-[11px] font-bold text-text-muted">{reason.number}</span>
                      <h3 className="text-base font-bold text-navy">{reason.title}</h3>
                    </div>
                    <p className="text-sm text-text-muted leading-[1.6]">{reason.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
