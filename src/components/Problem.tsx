"use client";

import { FileWarning, Clock, ShieldAlert } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const problems = [
  {
    icon: FileWarning,
    title: "비정형 문서의 폭발적 증가",
    desc: "PDF, DOCX, 이미지 등 다양한 형식의 문서가 쏟아지지만, 핵심 지식은 여전히 묻혀 있습니다.",
  },
  {
    icon: Clock,
    title: "느리고 부정확한 정보 검색",
    desc: "필요한 정보를 찾기 위해 수많은 문서를 뒤지는 데 귀중한 시간을 낭비하고 있습니다.",
  },
  {
    icon: ShieldAlert,
    title: "AI 환각과 신뢰성 문제",
    desc: "일반적인 AI 챗봇은 출처 없는 답변을 생성해 기업 의사결정에 활용하기 어렵습니다.",
  },
];

export default function Problem() {
  const { ref, visible } = useScrollReveal();

  return (
    <section className="py-24 lg:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          ref={ref}
          className={`stagger-children ${visible ? "visible" : ""}`}
        >
          <p className="text-primary font-medium text-sm tracking-wide uppercase mb-3">
            The Challenge
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-white max-w-xl">
            기업의 지식, 제대로 활용하고 계신가요?
          </h2>

          <div className="mt-14 grid md:grid-cols-3 gap-8">
            {problems.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-xl border border-border bg-surface/50 hover:bg-surface-light transition-colors"
              >
                <item.icon className="text-primary mb-4" size={28} />
                <h3 className="text-lg font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
