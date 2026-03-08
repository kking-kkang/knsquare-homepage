"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  MessageSquareText,
  Zap,
  Quote,
  BookOpen,
  FileType,
  Search,
  Network,
  ShieldCheck,
  BrainCircuit,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "즉각적인 해답 제시",
    desc: "기업의 업무 프로세스, 규정, 제품 정보 등 비정형 지식을 바탕으로 즉각적인 해답을 제시합니다. 복잡한 출장비 지급 규정부터 기술 매뉴얼까지, 직원이 질문하면 바로 정확한 답변을 제공합니다.",
  },
  {
    icon: Quote,
    title: "출처 기반 근거 제공",
    desc: "내부 규정에 기반한 정확한 출처 표기를 통해 사용자의 신뢰도를 극대화합니다. 모든 답변에 근거 문서, 조항, 페이지 번호를 함께 제시하여 검증 가능한 응답을 보장합니다.",
  },
  {
    icon: BookOpen,
    title: "다단계 추론 지원",
    desc: "Graph RAG와 Vector RAG를 결합하여 단순 키워드 매칭을 넘어선 다단계 추론을 수행합니다. 여러 문서에 걸친 복잡한 질문에도 논리적 경로를 추적하여 답변합니다.",
  },
  {
    icon: FileType,
    title: "다형식 데이터 처리",
    desc: "PDF, DOCX, XLSX, PNG 등 기업에서 실제로 사용하는 다양한 문서 형식을 지원합니다. OCR을 통한 이미지 문서 처리도 가능합니다.",
  },
];

const architecture = [
  {
    title: "Vector RAG",
    icon: Search,
    desc: "임베딩 기반 벡터 검색을 통해 의미적으로 유사한 비정형 텍스트 데이터를 추출합니다.",
    color: "bg-blue-50 border-blue-100",
    iconColor: "text-blue-600",
  },
  {
    title: "Graph RAG",
    icon: Network,
    desc: "지식그래프에서 쿼리와 관련된 서브그래프를 추출하여, 구조화된 관계 중심 정보를 제공합니다.",
    color: "bg-indigo-50 border-indigo-100",
    iconColor: "text-indigo-600",
  },
  {
    title: "Hybrid Reasoning",
    icon: BrainCircuit,
    desc: "두 기술의 결합으로 다단계 추론이 가능해지며, 환각 없는 정확하고 신뢰할 수 있는 답변을 생성합니다.",
    color: "bg-cyan-50 border-cyan-100",
    iconColor: "text-cyan-600",
  },
];

const differentiators = [
  { label: "일반 AI 챗봇", value: "출처 미제공, 환각 가능성", negative: true },
  { label: "KNie", value: "100% 출처 기반 답변, 환각 방지", negative: false },
  { label: "일반 AI 챗봇", value: "단순 키워드 검색", negative: true },
  { label: "KNie", value: "의미 기반 다단계 추론", negative: false },
  { label: "일반 AI 챗봇", value: "텍스트만 처리", negative: true },
  { label: "KNie", value: "PDF·DOCX·XLSX·PNG 멀티포맷", negative: false },
];

export default function KnieDetail() {
  return (
    <main className="bg-white">
      {/* Header */}
      <div className="bg-navy text-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 pt-28 pb-16">
          <Link
            href="/#products"
            className="inline-flex items-center gap-1.5 text-[13px] text-slate-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft size={14} /> 홈으로 돌아가기
          </Link>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 mb-5">
              <MessageSquareText size={14} className="text-cyan-400" />
              <span className="text-[12px] font-medium text-cyan-300">3rd Gen Chatbot</span>
            </div>
            <h1 className="text-[2rem] lg:text-[2.5rem] font-bold leading-tight">KNie</h1>
            <p className="text-[14px] text-slate-400 mt-1 mb-4">Hybrid RAG-Based AI Chatbot System</p>
            <p className="text-[15px] text-slate-300 max-w-2xl leading-[1.7]">
              KNie는 단순한 챗봇이 아닙니다. Graph-RAG로 구동되는 3세대 챗봇이자,
              귀사 조직이 더 스마트하고, 더 빠르고, 더 정확하게 업무를 수행할 수 있도록 지원하는
              전략적 지식 베이스(Strategic Knowledge Base)입니다.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Core features */}
      <div className="max-w-5xl mx-auto px-6 lg:px-8 py-16">
        <h2 className="text-[1.25rem] font-bold text-navy mb-2">핵심 기능</h2>
        <p className="text-[14px] text-text-muted mb-10">실무에 즉시 투입 가능한 지능형 AI 어시스턴트</p>

        <div className="space-y-5">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex gap-5 p-6 rounded-xl border border-border hover:shadow-md transition-shadow"
            >
              <div className="shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                <feat.icon size={18} className="text-white" />
              </div>
              <div>
                <h3 className="text-[15px] font-bold text-navy mb-1">{feat.title}</h3>
                <p className="text-[13px] text-text-secondary leading-[1.7]">{feat.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Hybrid RAG Architecture */}
      <div className="bg-surface">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 py-16">
          <h2 className="text-[1.25rem] font-bold text-navy mb-2">Hybrid RAG 아키텍처</h2>
          <p className="text-[14px] text-text-muted mb-10">
            두 가지 검색 기술을 결합하여 환각 없는 정확한 답변을 생성합니다.
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            {architecture.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.15 }}
                className={`p-6 rounded-xl border ${item.color}`}
              >
                <item.icon size={24} className={`${item.iconColor} mb-3`} />
                <h3 className="text-[15px] font-bold text-navy mb-2">{item.title}</h3>
                <p className="text-[13px] text-text-secondary leading-[1.6]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* KNie vs General chatbot */}
      <div className="max-w-5xl mx-auto px-6 lg:px-8 py-16">
        <h2 className="text-[1.25rem] font-bold text-navy mb-2">일반 AI 챗봇과의 차이</h2>
        <p className="text-[14px] text-text-muted mb-8">절차가 복잡한 업무 질문에 강점이 있습니다.</p>

        <div className="grid sm:grid-cols-2 gap-3">
          {Array.from({ length: 3 }).map((_, row) => {
            const gen = differentiators[row * 2];
            const knie = differentiators[row * 2 + 1];
            return (
              <div key={row} className="contents">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="text-[11px] font-medium text-slate-400 mb-1 block">{gen.label}</span>
                  <span className="text-[13px] text-slate-500">{gen.value}</span>
                </div>
                <div className="p-4 rounded-xl bg-blue-50 border border-blue-100">
                  <span className="text-[11px] font-semibold text-primary mb-1 block flex items-center gap-1">
                    <ShieldCheck size={12} /> {knie.label}
                  </span>
                  <span className="text-[13px] text-navy font-medium">{knie.value}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-navy text-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 py-14 text-center">
          <h2 className="text-[1.25rem] font-bold mb-3">KNie 도입을 검토하고 계신가요?</h2>
          <p className="text-[14px] text-slate-400 mb-6">제조·공급사슬 현장의 의사결정을 돕고 생산성을 높일 수 있습니다.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="mailto:kblee@knsquare.net"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white text-navy text-[14px] font-semibold hover:bg-slate-100 transition-colors"
            >
              문의하기 <ArrowRight size={15} />
            </a>
            <Link
              href="/solutions/kraph"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-white/20 text-white text-[14px] font-medium hover:bg-white/10 transition-colors"
            >
              Kraph도 알아보기
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
