"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { PenTool, GitBranch, MessageSquare, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: PenTool,
    title: "Ontology Design",
    titleKr: "온톨로지 설계",
    desc: "기업 맞춤형 지식 체계 및 청사진을 설계합니다. 도메인의 핵심 개념과 관계를 정의하여 의미 있는 구조를 만듭니다.",
  },
  {
    number: "02",
    icon: GitBranch,
    title: "KG Construction",
    titleKr: "지식그래프 구축",
    desc: "방대한 데이터를 자동으로 추출하고 연결합니다. 문서에서 엔터티와 관계를 추출해 고품질 지식그래프를 생성합니다.",
  },
  {
    number: "03",
    icon: MessageSquare,
    title: "Hybrid RAG",
    titleKr: "하이브리드 RAG 구현",
    desc: "지식 기반의 고도화된 AI 챗봇을 도입합니다. Vector RAG와 Graph RAG를 결합해 환각 없는 답변을 제공합니다.",
  },
];

export default function HowItWorks() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="how-it-works" className="py-24 lg:py-32 bg-navy text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-primary-light font-semibold text-sm tracking-wide uppercase mb-3">
          How It Works
        </p>
        <h2 className="text-3xl lg:text-4xl font-bold max-w-2xl">
          데이터가 통찰력으로 바뀌는 핵심 여정
        </h2>

        <div ref={ref} className="mt-16 grid md:grid-cols-3 gap-8 lg:gap-6">
          {steps.map((step, i) => (
            <div key={step.number} className="relative flex">
              <div
                className={`flex-1 p-8 rounded-2xl bg-white/[0.05] border border-white/[0.08] backdrop-blur-sm transition-all duration-700 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${i * 200}ms` }}
              >
                {/* Step number */}
                <span className="text-4xl font-black text-white/10">{step.number}</span>

                {/* Icon */}
                <div className="mt-4 w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <step.icon className="text-primary-light" size={22} />
                </div>

                <h3 className="mt-5 text-xl font-bold">{step.title}</h3>
                <p className="text-primary-light text-sm font-medium mt-0.5">{step.titleKr}</p>
                <p className="text-slate-400 text-sm leading-relaxed mt-3">{step.desc}</p>
              </div>

              {/* Arrow connector */}
              {i < steps.length - 1 && (
                <div className="hidden md:flex items-center justify-center w-6 -mr-3 z-10">
                  <ArrowRight className="text-white/20" size={20} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
