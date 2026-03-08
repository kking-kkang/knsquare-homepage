"use client";

import { ArrowRight, ChevronDown, Trophy } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import KnowledgeGraph from "./KnowledgeGraph";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-white">
      {/* Knowledge graph background */}
      <div className="absolute inset-0">
        <KnowledgeGraph />
      </div>

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-grid opacity-40" />

      {/* Gradient overlays */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-white via-white/90 to-transparent z-[1]" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white via-white/80 to-transparent z-[1]" />
      <div className="absolute top-0 left-0 bottom-0 w-[45%] bg-gradient-to-r from-white via-white/95 to-transparent z-[1]" />

      {/* Content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full pt-24 pb-16">
          <div className="max-w-xl">
            {/* Award badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-amber-50/90 backdrop-blur-sm border border-amber-200/60 shadow-sm mb-4"
            >
              <Trophy size={14} className="text-amber-500" />
              <span className="text-xs font-semibold text-amber-700">
                2026 K-ICT 대상 수상 — AI 챗봇 부문
              </span>
            </motion.div>

            {/* Company badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-border shadow-sm mb-8 w-fit"
            >
              <Image
                src="/지식광장네트워크 로고.png"
                alt="KNSquare"
                width={90}
                height={22}
                className="h-4 w-auto"
              />
              <div className="w-px h-3 bg-border" />
              <span className="text-xs font-medium text-text-muted">
                AI & Knowledge Graph Innovation
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold leading-[1.1] tracking-tight"
            >
              <span className="text-navy">We Structure</span>{" "}
              <span className="text-gradient">Knowledge</span>
              <br />
              <span className="text-navy">You Discover</span>{" "}
              <span className="text-gradient">Insight</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="mt-6 text-[17px] text-text-secondary max-w-lg leading-relaxed"
            >
              방대한 비정형 문서를 체계적 지식으로 전환하여,
              <br className="hidden sm:block" />
              정확하고 신뢰할 수 있는 인사이트를 제공합니다.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#products"
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-navy text-white font-semibold hover:bg-navy-light transition-all shadow-lg shadow-navy/20"
              >
                솔루션 알아보기
                <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl border border-border bg-white/80 backdrop-blur-sm text-navy font-semibold hover:bg-surface transition-all"
              >
                도입 문의
              </a>
            </motion.div>

            {/* Quick stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="mt-14 flex gap-8 text-sm"
            >
              {[
                { value: "2022", label: "설립" },
                { value: "K-ICT", label: "대상 수상" },
                { value: "3건", label: "특허 출원" },
                { value: "12편", label: "KCI 논문" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-bold text-navy">{stat.value}</div>
                  <div className="text-text-muted text-xs">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="relative z-10 flex justify-center pb-8"
      >
        <a href="#products" className="flex flex-col items-center gap-1 text-text-muted hover:text-primary transition-colors">
          <span className="text-[11px] font-medium tracking-wide uppercase">Scroll</span>
          <ChevronDown size={16} className="animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
}
