"use client";

import {
  AnimatedSection,
  AnimatedCounter,
  motion,
  staggerContainer,
  fadeInUp,
} from "@/lib/motion";
import { Factory, Microscope, Shield, MapPin, Building2 } from "lucide-react";

const cases = [
  {
    client: "국도화학",
    badge: "혁신바우처 우수사례",
    icon: Factory,
    industry: "화학 제조",
    desc: "디지털 전환 컨설팅 및 AI 교육, 핵심인력 양성을 수행했습니다.",
    metrics: [
      { value: 93, suffix: "%", label: "수요예측 정확도" },
      { value: 90, suffix: "%", label: "원자재 가격예측" },
      { value: 89, suffix: "%", label: "모델 설명력" },
    ],
    results: ["완제품 수요 예측", "원자재 가격 예측", "에너지 소비 최적화", "다공장 생산 배분"],
  },
  {
    client: "CTR (자동차 부품)",
    badge: "제조 AI",
    icon: Shield,
    industry: "자동차 부품",
    desc: "다각도 제품 이미지 분석 및 공정 데이터 기반 불량 예측 시스템을 개발했습니다.",
    metrics: [
      { value: 99, suffix: "%", label: "불량 검출률 최대" },
      { value: 91, suffix: "%", label: "1시간 전 예측" },
      { value: 115100, suffix: "", label: "학습 데이터" },
    ],
    results: ["다공장 불량 분류", "공정조건 기반 예측적 불량 분석"],
  },
  {
    client: "대구 DIP",
    badge: "컨설팅",
    icon: Microscope,
    industry: "섬유 가공",
    desc: "이미지 처리 및 분류 기술을 활용한 원단 불량 검출 AI 모델을 개발했습니다.",
    metrics: [],
    results: ["원단 결함 검출 AI", "이미지 기반 품질 검사"],
  },
  {
    client: "서울 데이터 펠로우십",
    badge: "기술자문",
    icon: MapPin,
    industry: "공공 데이터",
    desc: "소방 서비스 최적화, 보행자 밀집도 예측, 스쿨존 지정 등 공공 프로젝트를 자문했습니다.",
    metrics: [],
    results: ["소방차 출동경로 최적화", "도로 안전 취약지 분석", "스쿨존 지정"],
  },
  {
    client: "부산문화회관",
    badge: "R바우처 실증",
    icon: Building2,
    industry: "문화 · 공연",
    desc: "디지털 혁신기업 글로벌 성장 R바우처 지원사업으로 사내 규정 및 공연정보 기반 AI 챗봇을 구축·실증했습니다.",
    metrics: [],
    results: ["사내 규정 챗봇", "공연정보 Q&A 챗봇", "KNie 실증"],
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-2">Portfolio</p>
          <h2 className="text-[2rem] lg:text-[2.5rem] font-bold text-navy leading-tight">
            실제 성과로 증명합니다
          </h2>
          <p className="mt-3 text-text-muted text-base max-w-xl">
            제조, 공공, 화학 등 다양한 산업에서 AI 솔루션을 성공적으로 적용했습니다.
          </p>
        </AnimatedSection>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="mt-12 grid lg:grid-cols-2 gap-5"
        >
          {cases.map((c) => (
            <motion.div key={c.client} variants={fadeInUp} transition={{ duration: 0.5 }} className="card-hover">
              <div className="h-full p-6 lg:p-7 rounded-xl border border-border bg-white">
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-navy flex items-center justify-center shrink-0">
                      <c.icon size={18} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-navy">{c.client}</h3>
                      <p className="text-xs text-text-muted">{c.industry}</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-primary-50 text-primary text-xs font-semibold shrink-0">
                    {c.badge}
                  </span>
                </div>

                <p className="text-sm text-text-secondary leading-[1.75] mb-4">{c.desc}</p>

                {c.metrics.length > 0 && (
                  <div className="flex gap-5 mb-4 pb-4 border-b border-border">
                    {c.metrics.map((m) => (
                      <div key={m.label}>
                        <div className="text-[1.5rem] font-bold text-navy">
                          <AnimatedCounter value={m.value} suffix={m.suffix} />
                        </div>
                        <div className="text-[11px] text-text-muted mt-0.5">{m.label}</div>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex flex-wrap gap-1.5">
                  {c.results.map((r) => (
                    <span key={r} className="px-2.5 py-1 rounded-md bg-surface text-xs font-medium text-text-secondary">
                      {r}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
