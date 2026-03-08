"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Network,
  MessageSquareText,
  FileSearch,
  BookOpen,
  Layers,
  FileJson,
  Zap,
  Quote,
  GitBranch,
  FileType,
} from "lucide-react";

const products = [
  {
    id: "kraph",
    name: "Kraph",
    tagline: "Ontology-Powered Knowledge Graph Automation",
    description:
      "방대한 문서를 온톨로지에 기반해 자동으로 지식그래프로 전환하는 솔루션입니다. 구축된 온톨로지와 지식그래프는 기업 내 숨겨진 지식을 연결하고 통합하여, 지능형 의사결정 지원 시스템 및 생성형 AI 기반 응답 시스템의 인프라로 활용됩니다.",
    icon: Network,
    features: [
      {
        icon: Layers,
        title: "온톨로지 설계",
        desc: "도메인 맞춤 개념과 관계를 정의해 의미 있는 지식 구조를 설계합니다.",
      },
      {
        icon: FileSearch,
        title: "자동 추출",
        desc: "문서에서 엔터티와 관계를 자동 추출하여 구축 시간을 단축합니다.",
      },
      {
        icon: GitBranch,
        title: "그래프 구축",
        desc: "추출된 정보를 온톨로지와 매핑해 고품질 지식그래프를 생성합니다.",
      },
      {
        icon: FileJson,
        title: "표준 출력",
        desc: "표준 JSON 형태로 제공되어 다양한 그래프 DB에서 바로 활용 가능합니다.",
      },
    ],
  },
  {
    id: "knie",
    name: "KNie",
    tagline: "Hybrid RAG-Based AI Chatbot System",
    description:
      "벡터 기반 검색과 지식그래프 기반 의미 검색을 통합한 고도화된 Q&A 챗봇 시스템입니다. 문맥에 맞고 설명 가능한 응답을 제공하며, 실무에 즉시 투입 가능한 지능형 AI 어시스턴트입니다.",
    icon: MessageSquareText,
    features: [
      {
        icon: Zap,
        title: "즉각적인 해답",
        desc: "비정형 문서 기반 정확한 응답을 실시간으로 제시합니다.",
      },
      {
        icon: Quote,
        title: "출처 기반 근거",
        desc: "내부 규정 인용 및 신뢰도 확보를 위한 출처를 제공합니다.",
      },
      {
        icon: BookOpen,
        title: "다단계 추론",
        desc: "Graph + Vector 결합 검색으로 복잡한 질문에도 대응합니다.",
      },
      {
        icon: FileType,
        title: "다형식 처리",
        desc: "PDF, DOCX, XLSX, PNG 등 다양한 문서 형식을 지원합니다.",
      },
    ],
  },
];

function ProductCard({
  product,
  index,
}: {
  product: (typeof products)[0];
  index: number;
}) {
  const { ref, visible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="rounded-2xl border border-border bg-surface/40 overflow-hidden hover:border-primary/30 transition-colors">
        {/* Product header */}
        <div className="p-8 lg:p-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <product.icon className="text-primary" size={24} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">{product.name}</h3>
              <p className="text-sm text-text-muted">{product.tagline}</p>
            </div>
          </div>
          <p className="text-text-muted leading-relaxed mt-4">
            {product.description}
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 gap-px bg-border">
          {product.features.map((feat) => (
            <div
              key={feat.title}
              className="p-6 bg-surface/60 hover:bg-surface-light transition-colors"
            >
              <feat.icon className="text-primary-light mb-3" size={20} />
              <h4 className="text-sm font-semibold text-white mb-1">
                {feat.title}
              </h4>
              <p className="text-xs text-text-muted leading-relaxed">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Products() {
  return (
    <section id="products" className="py-24 lg:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-primary font-medium text-sm tracking-wide uppercase mb-3">
          Solutions
        </p>
        <h2 className="text-3xl lg:text-4xl font-bold text-white max-w-2xl">
          비정형 문서를 지식으로, 지식을 인사이트로
        </h2>
        <p className="mt-4 text-text-muted max-w-2xl">
          Kraph로 문서를 지식그래프로 전환하고, KNie로 즉각적이고 신뢰할 수 있는 답변을 제공합니다.
        </p>

        <div className="mt-14 grid lg:grid-cols-2 gap-8">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
