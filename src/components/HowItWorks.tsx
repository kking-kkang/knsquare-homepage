"use client";

import {
  AnimatedSection,
  motion,
  staggerContainer,
  fadeInUp,
} from "@/lib/motion";
import { PenTool, GitBranch, MessageSquare, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: PenTool,
    title: "Ontology Design",
    titleKr: "온톨로지 설계",
    desc: "기업 맞춤형 지식 체계 및 청사진을 설계합니다. 도메인의 핵심 개념과 관계를 정의하여 의미 있는 구조를 만듭니다.",
    color: "from-blue-500 to-indigo-500",
  },
  {
    number: "02",
    icon: GitBranch,
    title: "KG Construction",
    titleKr: "지식그래프 구축",
    desc: "방대한 데이터를 자동으로 추출하고 연결합니다. 문서에서 엔터티와 관계를 추출해 고품질 지식그래프를 생성합니다.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    number: "03",
    icon: MessageSquare,
    title: "Hybrid RAG",
    titleKr: "하이브리드 RAG 구현",
    desc: "지식 기반의 고도화된 AI 챗봇을 도입합니다. Vector RAG와 Graph RAG를 결합해 환각 없는 답변을 제공합니다.",
    color: "from-violet-500 to-purple-500",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 lg:py-32 bg-navy text-white relative overflow-hidden">
      {/* Decorative grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-primary-light font-semibold text-sm tracking-wide uppercase mb-3">How It Works</p>
            <h2 className="text-3xl lg:text-4xl font-extrabold">
              데이터가 통찰력으로 바뀌는 핵심 여정
            </h2>
            <p className="mt-4 text-slate-400 text-lg">
              3단계 프로세스로 기업의 비정형 데이터를 실행 가능한 인사이트로 전환합니다.
            </p>
          </div>
        </AnimatedSection>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="mt-16 grid md:grid-cols-3 gap-6"
        >
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="h-full p-8 rounded-2xl bg-white/[0.04] border border-white/[0.06] backdrop-blur-sm hover:bg-white/[0.07] transition-all">
                {/* Number */}
                <span className="text-[80px] font-black leading-none text-white/[0.04] absolute top-4 right-6">
                  {step.number}
                </span>

                {/* Icon */}
                <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 shadow-lg`}>
                  <step.icon size={24} className="text-white" />
                </div>

                <h3 className="text-xl font-bold">{step.title}</h3>
                <p className="text-primary-light text-sm font-medium mt-1">{step.titleKr}</p>
                <p className="text-slate-400 text-sm leading-relaxed mt-4">{step.desc}</p>
              </div>

              {/* Arrow between steps */}
              {i < steps.length - 1 && (
                <div className="hidden md:flex absolute top-1/2 -right-3 z-10">
                  <div className="w-6 h-6 rounded-full bg-navy-light border border-white/10 flex items-center justify-center">
                    <ArrowRight size={12} className="text-primary-light" />
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
