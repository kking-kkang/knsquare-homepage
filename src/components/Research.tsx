"use client";

import {
  AnimatedSection,
  motion,
  staggerContainer,
  fadeInUp,
} from "@/lib/motion";
import { FlaskConical, FileText, Lightbulb } from "lucide-react";

const patents = [
  "개인 맞춤형 학습 콘텐츠 생성 방법",
  "지식그래프 생성 도구",
  "주식 차트 분석 및 매매 신호 시스템",
];

const selectedPapers = [
  { year: 2024, title: "머신러닝 HR 분석을 통한 직원 이직 예측" },
  { year: 2024, title: "텍스트 증강 및 전이학습을 활용한 의도 분류" },
  { year: 2023, title: "마이크로서비스 아키텍처 분산 트랜잭션 분석" },
  { year: 2023, title: "사전학습 모델의 뉴스 감성을 통한 투자자 거래행동 영향 분석" },
  { year: 2022, title: "냉동 컨테이너 고장 탐지 방법론 비교" },
  { year: 2020, title: "LSTM 기반 부산항 컨테이너 물동량 예측" },
];

const govProjects = [
  "IoT 냉동 컨테이너 모니터링",
  "AI 챗봇 개발",
  "지능형 해양 관리 시스템",
  "글로벌 공급망 리스크 대응 전략 (2024~2027, 3년)",
];

export default function Research() {
  return (
    <section className="py-24 lg:py-32 bg-surface relative overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-40" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-3">Research & IP</p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-navy">
              지적자산 & 연구 실적
            </h2>
            <p className="mt-4 text-text-muted text-lg">
              학계와 산업 현장을 잇는 연구 역량을 보유하고 있습니다.
            </p>
          </div>
        </AnimatedSection>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-6"
        >
          {/* Patents */}
          <motion.div variants={fadeInUp} transition={{ duration: 0.5 }} className="card-hover">
            <div className="h-full p-7 rounded-2xl bg-white border border-border">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center mb-5">
                <Lightbulb size={20} className="text-white" />
              </div>
              <h3 className="text-lg font-bold text-navy mb-1">특허 출원</h3>
              <p className="text-xs text-text-muted mb-5">3건 출원 진행 중</p>
              <ul className="space-y-3">
                {patents.map((p) => (
                  <li key={p} className="flex gap-2 text-sm text-text-secondary leading-relaxed">
                    <span className="text-primary mt-0.5 shrink-0">&#9679;</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Papers */}
          <motion.div variants={fadeInUp} transition={{ duration: 0.5 }} className="card-hover">
            <div className="h-full p-7 rounded-2xl bg-white border border-border">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center mb-5">
                <FileText size={20} className="text-white" />
              </div>
              <h3 className="text-lg font-bold text-navy mb-1">학술 논문</h3>
              <p className="text-xs text-text-muted mb-5">KCI 12편 + SCI급 1편</p>
              <ul className="space-y-3">
                {selectedPapers.map((p) => (
                  <li key={p.title} className="flex gap-2 text-sm text-text-secondary leading-relaxed">
                    <span className="text-xs font-mono text-text-muted shrink-0 mt-0.5 w-10">{p.year}</span>
                    {p.title}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Gov projects */}
          <motion.div variants={fadeInUp} transition={{ duration: 0.5 }} className="card-hover">
            <div className="h-full p-7 rounded-2xl bg-white border border-border">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-5">
                <FlaskConical size={20} className="text-white" />
              </div>
              <h3 className="text-lg font-bold text-navy mb-1">정부 과제</h3>
              <p className="text-xs text-text-muted mb-5">6건 수행</p>
              <ul className="space-y-3">
                {govProjects.map((p) => (
                  <li key={p} className="flex gap-2 text-sm text-text-secondary leading-relaxed">
                    <span className="text-emerald-500 mt-0.5 shrink-0">&#9679;</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
