"use client";

import {
  AnimatedSection,
  motion,
  staggerContainer,
  fadeInUp,
} from "@/lib/motion";
import {
  Brain,
  LineChart,
  Image as ImageIcon,
  FileText,
  GraduationCap,
  Compass,
} from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "LLM & Knowledge Graph",
    titleKr: "거대언어모형 & 지식그래프",
    desc: "LLM과 지식그래프 기반 맞춤형 지식관리 및 Q&A 솔루션을 개발합니다.",
    color: "from-blue-500 to-indigo-500",
    bgColor: "from-blue-50 to-indigo-50",
  },
  {
    icon: LineChart,
    title: "Time Series Analysis",
    titleKr: "시계열 데이터 분석",
    desc: "수요 예측, 매출 추이 분석, KPI 예측 등 시간 기반 패턴을 분석하고 미래를 예측합니다.",
    color: "from-cyan-500 to-blue-500",
    bgColor: "from-cyan-50 to-blue-50",
  },
  {
    icon: ImageIcon,
    title: "Image Analysis",
    titleKr: "이미지 데이터 분석",
    desc: "컴퓨터 비전 기술로 제품 불량 검출, 의료 이미징, 이상 감지 등을 수행합니다.",
    color: "from-violet-500 to-purple-500",
    bgColor: "from-violet-50 to-purple-50",
  },
  {
    icon: FileText,
    title: "Text Analysis",
    titleKr: "텍스트 데이터 분석",
    desc: "자연어 처리를 통한 감성 분석, 텍스트 분류, 문서 자동 분류 등을 제공합니다.",
    color: "from-emerald-500 to-teal-500",
    bgColor: "from-emerald-50 to-teal-50",
  },
  {
    icon: Compass,
    title: "AI Strategy Consulting",
    titleKr: "AI 활용 전략 컨설팅",
    desc: "제조, 공공, 유통, 서비스, 교육 등 산업별 맞춤 AI 도입 전략을 수립합니다.",
    color: "from-orange-500 to-red-500",
    bgColor: "from-orange-50 to-red-50",
  },
  {
    icon: GraduationCap,
    title: "AI Education",
    titleKr: "AI 교육",
    desc: "Orange3/KNIME 코드리스 도구, 이미지·텍스트 분석, 프롬프트 엔지니어링 교육을 진행합니다.",
    color: "from-pink-500 to-rose-500",
    bgColor: "from-pink-50 to-rose-50",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-surface relative overflow-hidden">
      {/* Decorative dots */}
      <div className="absolute inset-0 bg-dots" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-3">Services</p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-navy">
              다양한 산업에 적용 가능한 AI 서비스
            </h2>
            <p className="mt-4 text-text-muted text-lg">
              AI 모델 개발부터 전략 컨설팅, 교육까지 엔드투엔드 서비스를 제공합니다.
            </p>
          </div>
        </AnimatedSection>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {services.map((svc) => (
            <motion.div
              key={svc.title}
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
              className="card-hover group"
            >
              <div className="h-full p-7 rounded-2xl bg-white border border-border">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${svc.bgColor} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  <svc.icon size={22} className="text-primary" />
                </div>
                <h3 className="text-[15px] font-bold text-navy">{svc.title}</h3>
                <p className="text-xs text-text-muted font-medium mt-0.5 mb-3">{svc.titleKr}</p>
                <p className="text-sm text-text-secondary leading-relaxed">{svc.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
