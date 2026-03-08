"use client";

import { ArrowRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import KnowledgeGraph from "./KnowledgeGraph";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-white">
      {/* Knowledge graph — full-screen interactive background */}
      <div className="absolute inset-0">
        <KnowledgeGraph />
      </div>

      {/* Top fade so header stays readable */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white via-white/80 to-transparent z-[1]" />

      {/* Content overlay */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full pt-24 pb-12">
          <div className="max-w-xl">
            {/* Logo badge */}
            <div
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/80 backdrop-blur border border-border shadow-sm mb-8 animate-fade-in-up"
            >
              <Image
                src="/지식광장네트워크 로고.png"
                alt="KNSquare"
                width={100}
                height={24}
                className="h-5 w-auto"
              />
              <span className="text-xs font-medium text-text-muted">AI & Knowledge Graph Innovation</span>
            </div>

            {/* Headline */}
            <h1
              className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold leading-[1.12] tracking-tight animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <span className="text-navy">We Structure Knowledge</span>
              <br />
              <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                You Discover Insight
              </span>
            </h1>

            {/* Subtitle */}
            <p
              className="mt-6 text-lg text-text-secondary max-w-lg leading-relaxed animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              방대한 비정형 문서를 체계적 지식으로 전환하여,
              <br className="hidden sm:block" />
              정확하고 신뢰할 수 있는 인사이트를 제공합니다.
            </p>

            {/* CTAs */}
            <div
              className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-in-up"
              style={{ animationDelay: "0.6s" }}
            >
              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-primary text-white font-semibold shadow-lg shadow-primary/25 hover:bg-primary-dark hover:shadow-primary/35 transition-all"
              >
                솔루션 알아보기
                <ArrowRight size={18} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl border border-border bg-white/70 backdrop-blur text-navy font-semibold hover:bg-surface transition-all"
              >
                도입 문의
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="relative z-10 flex justify-center pb-8 animate-fade-in-up" style={{ animationDelay: "1.2s" }}>
        <a
          href="#products"
          className="flex flex-col items-center gap-1 text-text-muted hover:text-primary transition-colors"
        >
          <span className="text-xs font-medium">Scroll</span>
          <ChevronDown size={18} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
}
