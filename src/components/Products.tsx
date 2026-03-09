"use client";

import {
  AnimatedSection,
  motion,
  staggerContainer,
  fadeInUp,
} from "@/lib/motion";
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
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const products = [
  {
    id: "kraph",
    name: "Kraph",
    tagline: "Ontology-Powered Knowledge Graph Automation",
    badge: "Knowledge Graph",
    description:
      "방대한 문서를 온톨로지에 기반해 자동으로 지식그래프로 전환합니다. 기업 내 숨겨진 지식을 연결하고 통합하여, 지능형 의사결정 지원 및 생성형 AI 응답 시스템의 인프라로 활용됩니다.",
    icon: Network,
    gradient: "from-blue-600 to-indigo-600",
    bgGradient: "from-blue-50 to-indigo-50",
    href: "/solutions/kraph",
    features: [
      { icon: Layers, title: "온톨로지 설계", desc: "도메인 맞춤 개념과 관계를 정의해 의미 있는 지식 구조를 설계" },
      { icon: FileSearch, title: "자동 추출", desc: "문서에서 엔터티와 관계를 자동 추출하여 구축 시간 단축" },
      { icon: GitBranch, title: "그래프 구축", desc: "추출된 정보를 온톨로지와 매핑해 고품질 지식그래프 생성" },
      { icon: FileJson, title: "표준 JSON 출력", desc: "표준 포맷으로 다양한 그래프 DB에서 바로 활용 가능" },
    ],
  },
  {
    id: "knie",
    name: "KNie",
    tagline: "Hybrid RAG-Based AI Chatbot",
    badge: "3rd Gen Chatbot",
    description:
      "Graph-RAG로 구동되는 3세대 챗봇이자 전략적 지식 베이스입니다. 벡터 검색과 지식그래프 의미 검색을 통합해 환각 없는 정확한 답변을 제공합니다.",
    icon: MessageSquareText,
    gradient: "from-cyan-500 to-blue-600",
    bgGradient: "from-cyan-50 to-blue-50",
    href: "/solutions/knie",
    features: [
      { icon: Zap, title: "즉각적인 해답", desc: "비정형 문서 기반 정확한 응답을 실시간 제시" },
      { icon: Quote, title: "출처 기반 근거", desc: "내부 규정 인용 및 100% 출처 표기로 신뢰도 확보" },
      { icon: BookOpen, title: "다단계 추론", desc: "Graph + Vector 결합 검색으로 복잡한 질문 대응" },
      { icon: FileType, title: "다형식 처리", desc: "PDF, DOCX, XLSX, PNG 등 다양한 문서 형식 지원" },
    ],
  },
];

export default function Products() {
  return (
    <section id="products" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-2">Solutions</p>
          <h2 className="text-[2rem] lg:text-[2.5rem] font-bold text-navy leading-tight">
            비정형 문서를 지식으로, 지식을 인사이트로
          </h2>
          <p className="mt-3 text-text-muted text-base max-w-xl">
            두 가지 핵심 솔루션으로 기업의 지식 관리를 혁신합니다.
          </p>
        </AnimatedSection>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="mt-12 space-y-6"
        >
          {products.map((product) => (
            <motion.div key={product.id} variants={fadeInUp} transition={{ duration: 0.6 }}>
              <div className="group rounded-2xl border border-border bg-white overflow-hidden hover:shadow-xl hover:border-primary/15 transition-all duration-400">
                <div className="grid lg:grid-cols-5 gap-0">
                  {/* Left */}
                  <div className="lg:col-span-2 p-7 lg:p-9 flex flex-col justify-center">
                    <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gradient-to-r ${product.bgGradient} w-fit mb-4`}>
                      <product.icon size={12} className="text-primary" />
                      <span className="text-xs font-semibold text-primary">{product.badge}</span>
                    </div>

                    <h3 className="text-[1.75rem] font-bold text-navy mb-0.5">{product.name}</h3>
                    <p className="text-[13px] text-text-muted mb-3">{product.tagline}</p>
                    <p className="text-[15px] text-text-secondary leading-[1.7]">{product.description}</p>

                    <Link
                      href={product.href}
                      className="inline-flex items-center gap-1.5 mt-5 text-sm font-semibold text-primary hover:gap-2.5 transition-all"
                    >
                      자세히 알아보기 <ArrowRight size={14} />
                    </Link>
                  </div>

                  {/* Right */}
                  <div className="lg:col-span-3 grid sm:grid-cols-2 border-t lg:border-t-0 lg:border-l border-border">
                    {product.features.map((feat, i) => (
                      <div
                        key={feat.title}
                        className={`p-5 lg:p-6 hover:bg-surface/60 transition-colors ${
                          i < 2 ? "border-b border-border" : ""
                        } ${i % 2 === 0 ? "sm:border-r border-border" : ""}`}
                      >
                        <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${product.bgGradient} flex items-center justify-center mb-3`}>
                          <feat.icon size={16} className="text-primary" />
                        </div>
                        <h4 className="text-sm font-bold text-navy mb-1">{feat.title}</h4>
                        <p className="text-[13px] text-text-muted leading-[1.75]">{feat.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
