"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Layers,
  FileSearch,
  GitBranch,
  FileJson,
  Network,
  Database,
  Workflow,
  Cpu,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Ontology Design",
    titleKr: "온톨로지 설계",
    desc: "도메인 맞춤 개념과 관계를 정의해 의미 있는 지식 구조를 설계합니다. 기업의 업무 영역에 맞는 클래스, 속성, 관계를 체계적으로 정의하여 지식의 청사진을 만듭니다.",
    detail: "법률 문서의 경우 조항(Article), 조(Clause), 의무(Duty), 권리(Right), 예외(Exception) 등의 개념을 정의하고, 이들 간의 참조 관계(reference), 종속 관계(hierarchy)를 설계합니다.",
    icon: Layers,
  },
  {
    number: "02",
    title: "Automated Extraction",
    titleKr: "자동 추출",
    desc: "문서에서 엔터티와 관계를 자동으로 추출하여 지식그래프 구축 시간을 획기적으로 단축합니다.",
    detail: "PDF, DOCX, XLSX, PNG 등 다양한 형식의 문서를 파싱하고 OCR 처리한 후, AI 모델이 엔터티(개체)와 관계를 자동으로 식별하고 추출합니다.",
    icon: FileSearch,
  },
  {
    number: "03",
    title: "Graph Construction",
    titleKr: "그래프 구축",
    desc: "추출된 정보를 온톨로지와 매핑하여 고품질 지식그래프를 생성하고 보완합니다.",
    detail: "온톨로지 매칭(Ontological Match), 데이터 추출(Data Extraction), 그래프 예측(Graph Prediction)의 3가지 경로를 통해 지식그래프를 구축하고, 링크 예측으로 누락된 관계를 보완합니다.",
    icon: GitBranch,
  },
  {
    number: "04",
    title: "Interoperable Output",
    titleKr: "표준 출력",
    desc: "표준 JSON 형태로 제공되어 다양한 그래프 DB에서 바로 활용이 가능합니다.",
    detail: "Neo4j, Amazon Neptune, TigerGraph 등 주요 그래프 데이터베이스와 호환되는 표준 포맷으로 출력하여, 기존 인프라에 즉시 통합할 수 있습니다.",
    icon: FileJson,
  },
];

const useCases = [
  { icon: Database, title: "기업 사규 · 정책 관리", desc: "사규, 업무매뉴얼, 정책 문서를 구조화하여 조항 간 참조 관계를 명확히 파악" },
  { icon: Workflow, title: "법률 · 계약서 분석", desc: "계약서, 협약서, 약관의 조항·의무·권리 관계를 자동으로 추출하고 시각화" },
  { icon: Cpu, title: "기술 문서 통합", desc: "매뉴얼, 설계도, 사양서 등 기술 문서 간 연결 관계를 지식그래프로 통합" },
  { icon: Network, title: "R&D 지식 연결", desc: "연구 데이터, 논문, 실험 결과 간의 관계를 체계화하여 중복 연구 방지" },
];

export default function KraphDetail() {
  return (
    <main className="bg-white">
      {/* Header */}
      <div className="bg-navy text-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 pt-28 pb-16">
          <Link
            href="/#products"
            className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft size={14} /> 홈으로 돌아가기
          </Link>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 mb-5">
              <Network size={14} className="text-blue-400" />
              <span className="text-[13px] font-medium text-blue-300">Knowledge Graph</span>
            </div>
            <h1 className="text-[2rem] lg:text-[2.5rem] font-bold leading-tight">Kraph</h1>
            <p className="text-[15px] text-slate-400 mt-1 mb-4">Ontology-Powered Knowledge Graph Automation</p>
            <p className="text-base text-slate-300 max-w-2xl leading-[1.7]">
              방대한 문서를 온톨로지에 기반해 자동으로 지식그래프로 전환하는 솔루션입니다.
              구축된 온톨로지와 지식그래프는 기업 내 숨겨진 지식을 연결하고 통합하여,
              지능형 의사결정 지원 시스템 및 생성형 AI 기반 응답 시스템의 인프라로 활용됩니다.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Input formats */}
      <div className="max-w-5xl mx-auto px-6 lg:px-8 py-16">
        <h2 className="text-[1.5rem] font-bold text-navy mb-6">지원 문서 형식</h2>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
          {[
            { ext: "PDF", desc: "보고서, 공문, 법률문서", color: "bg-red-50 text-red-600 border-red-100" },
            { ext: "DOCX", desc: "사규, 매뉴얼, 정책", color: "bg-blue-50 text-blue-600 border-blue-100" },
            { ext: "XLSX", desc: "재무제표, 원장", color: "bg-green-50 text-green-600 border-green-100" },
            { ext: "PNG", desc: "스캔본, 차트", color: "bg-amber-50 text-amber-600 border-amber-100" },
            { ext: "CSV", desc: "구조화 데이터", color: "bg-purple-50 text-purple-600 border-purple-100" },
            { ext: "JSON", desc: "API 데이터", color: "bg-cyan-50 text-cyan-600 border-cyan-100" },
          ].map((f) => (
            <div key={f.ext} className={`p-3 rounded-xl border text-center ${f.color}`}>
              <div className="text-[15px] font-bold">{f.ext}</div>
              <div className="text-[11px] mt-0.5 opacity-70">{f.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Process steps */}
      <div className="bg-surface">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 py-16">
          <h2 className="text-[1.5rem] font-bold text-navy mb-2">작동 프로세스</h2>
          <p className="text-[15px] text-text-muted mb-10">4단계를 거쳐 문서가 지식그래프로 전환됩니다.</p>

          <div className="space-y-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex gap-5 p-6 rounded-xl bg-white border border-border"
              >
                <div className="shrink-0 w-10 h-10 rounded-lg bg-navy flex items-center justify-center">
                  <step.icon size={18} className="text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-xs font-bold text-text-muted">{step.number}</span>
                    <h3 className="text-base font-bold text-navy">{step.title}</h3>
                    <span className="text-[13px] text-text-muted">{step.titleKr}</span>
                  </div>
                  <p className="text-sm text-text-secondary leading-[1.7]">{step.desc}</p>
                  <p className="text-[13px] text-text-muted leading-[1.7] mt-2 p-3 rounded-lg bg-surface border border-border-light">
                    {step.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Use cases */}
      <div className="max-w-5xl mx-auto px-6 lg:px-8 py-16">
        <h2 className="text-[1.5rem] font-bold text-navy mb-2">활용 사례</h2>
        <p className="text-[15px] text-text-muted mb-8">다양한 기업 환경에서 Kraph를 활용할 수 있습니다.</p>
        <div className="grid sm:grid-cols-2 gap-4">
          {useCases.map((uc) => (
            <div key={uc.title} className="p-5 rounded-xl border border-border hover:shadow-md transition-shadow">
              <uc.icon size={20} className="text-primary mb-3" />
              <h3 className="text-[15px] font-bold text-navy mb-1">{uc.title}</h3>
              <p className="text-sm text-text-muted leading-[1.6]">{uc.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-navy text-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 py-14 text-center">
          <h2 className="text-[1.5rem] font-bold mb-3">Kraph 도입을 검토하고 계신가요?</h2>
          <p className="text-[15px] text-slate-400 mb-6">귀사의 문서 환경에 맞는 맞춤 제안을 드립니다.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="mailto:kblee@knsquare.net"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white text-navy text-[15px] font-semibold hover:bg-slate-100 transition-colors"
            >
              문의하기 <ArrowRight size={15} />
            </a>
            <Link
              href="/solutions/knie"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-white/20 text-white text-[15px] font-medium hover:bg-white/10 transition-colors"
            >
              KNie도 알아보기
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
