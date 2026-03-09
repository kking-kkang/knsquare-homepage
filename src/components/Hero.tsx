"use client";

import { ArrowRight, ChevronDown, Trophy, ExternalLink } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import KnowledgeGraph from "./KnowledgeGraph";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-white">
      <div className="absolute inset-0">
        <KnowledgeGraph />
      </div>
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-white via-white/90 to-transparent z-[1]" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white via-white/80 to-transparent z-[1]" />
      <div className="absolute top-0 left-0 bottom-0 w-[45%] bg-gradient-to-r from-white via-white/95 to-transparent z-[1]" />

      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full pt-24 pb-16">
          <div className="max-w-xl">
            {/* Award — links to article */}
            <motion.a
              href="https://www.mt.co.kr/industry/2026/03/04/2026030414342817118"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50/90 backdrop-blur-sm border border-amber-200/60 mb-5 hover:bg-amber-100/80 transition-colors cursor-pointer"
            >
              <Trophy size={13} className="text-amber-500 shrink-0" />
              <span className="text-[13px] font-medium text-amber-700">
                2026 K-ICT 대상 수상
              </span>
              <ExternalLink size={11} className="text-amber-400" />
            </motion.a>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="text-[2.5rem] sm:text-5xl lg:text-[3.25rem] font-bold leading-[1.35] tracking-tight"
            >
              <span className="text-navy">We Structure</span>{" "}
              <span className="text-gradient">Knowledge</span>
              <br />
              <span className="text-navy">You Discover</span>{" "}
              <span className="text-gradient">Insight</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="mt-5 text-base sm:text-base text-text-secondary max-w-md leading-[1.7]"
            >
              방대한 비정형 문서를 체계적 지식으로 전환하여,
              정확하고 신뢰할 수 있는 인사이트를 제공합니다.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <a
                href="#products"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-navy text-white text-[15px] font-medium hover:bg-navy-light transition-all shadow-md shadow-navy/15"
              >
                솔루션 알아보기
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="mailto:kblee@knsquare.net"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-border bg-white/80 backdrop-blur-sm text-navy text-[15px] font-medium hover:bg-surface transition-all"
              >
                도입 문의
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="mt-12 flex gap-7"
            >
              {[
                { value: "2022", label: "설립" },
                { value: "K-ICT", label: "대상 수상" },
                { value: "3건", label: "특허 출원" },
                { value: "13편", label: "학술 논문" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-sm font-bold text-navy">{s.value}</div>
                  <div className="text-xs text-text-muted">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="relative z-10 flex justify-center pb-8"
      >
        <a href="#products" className="flex flex-col items-center gap-1 text-text-muted hover:text-primary transition-colors">
          <span className="text-[11px] font-medium tracking-widest uppercase">Scroll</span>
          <ChevronDown size={14} className="animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
}
