"use client";

import {
  AnimatedSection,
  AnimatedCounter,
  motion,
  staggerContainer,
  fadeInUp,
  scaleIn,
} from "@/lib/motion";
import {
  Award,
  BookOpen,
  Users,
  Calendar,
  GraduationCap,
  Briefcase,
} from "lucide-react";

const stats = [
  { icon: Calendar, value: 2022, label: "설립연도", suffix: "" },
  { icon: Award, value: 3, label: "특허 출원", suffix: "건" },
  { icon: BookOpen, value: 12, label: "KCI 논문", suffix: "편" },
  { icon: Users, value: 10, label: "컨설팅 기업", suffix: "+" },
];

const milestones: { year: string; items: string[]; highlight?: boolean }[] = [
  {
    year: "2022",
    items: [
      "동아대학교 기반 스타트업으로 법인 설립 (6월 14일)",
      "서울 데이터 펠로우십 기술 자문 시작",
      "CTR(주) 품질 예측 시스템 개발",
    ],
  },
  {
    year: "2023",
    items: [
      "산업맞춤형 혁신바우처 우수공급기업 선정",
      "대구 디지털혁신진흥원 컨설팅 참여",
      "CTR(주) 섬유 불량 검출 및 불량품 탐지 모델 개발",
    ],
  },
  {
    year: "2024",
    items: [
      "대구·부산 10개 기업 AI 컨설팅 수행",
      "CTR(주) KPI 예측 및 불량 분석 모델 개발",
      "글로벌 공급망 리스크 대응 연구과제 착수 (3년, ~2027)",
    ],
  },
  {
    year: "2025",
    items: [
      "서울 데이터 펠로우십 기술자문",
      "디지털 혁신기업 글로벌 성장 R바우처 — 부산문화회관 사내 규정·공연정보 챗봇 구축 실증",
    ],
  },
  {
    year: "2026",
    highlight: true,
    items: [
      "제12회 대한민국 산업대상 K-ICT 대상 수상 (AI 챗봇 부문)",
    ],
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <AnimatedSection>
          <div className="text-center max-w-xl mx-auto mb-16">
            <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-2">About Us</p>
            <h2 className="text-[2rem] lg:text-[2.5rem] font-bold text-navy leading-tight">
              AI 기술로 산업을 혁신합니다
            </h2>
          </div>
        </AnimatedSection>

        {/* CEO + Company intro */}
        <div className="grid lg:grid-cols-5 gap-10 items-start mb-16">
          <AnimatedSection className="lg:col-span-2">
            <div className="p-6 rounded-2xl bg-surface border border-border">
              <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-navy to-navy-light flex items-center justify-center mb-5">
                <GraduationCap size={30} className="text-white" />
              </div>
              <h3 className="text-[17px] font-bold text-navy">이강배 박사</h3>
              <p className="text-[13px] text-primary font-semibold mt-0.5">CEO / Lead Consultant</p>
              <div className="mt-3 space-y-1.5 text-sm text-text-secondary leading-[1.75]">
                <p>동아대학교 경영정보학과 정교수</p>
                <p>고려대학교 산업공학 학사</p>
                <p>KAIST 산업공학 석·박사</p>
              </div>
              <div className="mt-4 pt-4 border-t border-border">
                <div className="flex items-center gap-2 text-sm text-text-muted">
                  <Briefcase size={13} />
                  <span className="font-medium">25년+ AI 컨설팅 경력</span>
                </div>
                <p className="text-xs text-text-muted mt-1.5">
                  물류, 패션, 화학, 국방, 통신 등 다양한 산업에서 AI 컨설팅 수행
                </p>
              </div>
            </div>
          </AnimatedSection>

          <div className="lg:col-span-3 space-y-8">
            <AnimatedSection>
              <p className="text-text-secondary leading-relaxed text-lg">
                <strong className="text-navy">주식회사 지식광장네트워크(KNSquare Inc.)</strong>는
                2022년 동아대학교 기반 스타트업으로 설립되었습니다.
                지식그래프(Knowledge Graph) 기술과 거대언어모형(LLM)을 활용해
                맞춤형 지식관리 및 Q&A 챗봇 솔루션을 개발하고 있으며,
                AI 모델 개발, 전략 컨설팅, 교육 서비스를 제공합니다.
              </p>
            </AnimatedSection>

            {/* Stats */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={scaleIn}
                  transition={{ duration: 0.4 }}
                  className="p-5 rounded-2xl bg-surface border border-border text-center"
                >
                  <stat.icon size={20} className="text-primary mx-auto mb-2" />
                  <div className="text-2xl font-extrabold text-navy">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-xs text-text-muted mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Timeline */}
            <AnimatedSection delay={0.2}>
              <h3 className="text-lg font-bold text-navy mb-5">연혁</h3>
              <div className="space-y-6">
                {milestones.map((m) => (
                  <div key={m.year} className={`flex gap-5 ${m.highlight ? "p-4 -mx-4 rounded-xl bg-amber-50/60 border border-amber-200/40" : ""}`}>
                    <div className="shrink-0">
                      <span className={`inline-flex items-center justify-center w-14 h-8 rounded-lg text-sm font-bold ${
                        m.highlight ? "bg-amber-500 text-white" : "bg-navy text-white"
                      }`}>
                        {m.year}
                      </span>
                    </div>
                    <ul className="space-y-1.5">
                      {m.items.map((item) => (
                        <li key={item} className={`text-sm leading-relaxed flex gap-2 ${m.highlight ? "text-amber-800 font-semibold" : "text-text-secondary"}`}>
                          <span className={`mt-1.5 shrink-0 ${m.highlight ? "text-amber-500" : "text-primary"}`}>
                            {m.highlight ? "★" : "•"}
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
