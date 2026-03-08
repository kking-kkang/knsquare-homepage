"use client";

import { ArrowRight } from "lucide-react";
import KnowledgeGraph from "./KnowledgeGraph";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated knowledge graph background */}
      <div className="absolute inset-0">
        <KnowledgeGraph />
      </div>

      {/* Gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-surface/60 text-xs font-medium text-primary-light mb-8 animate-fade-in-up">
            AI & Knowledge Graph Innovation
          </div>

          {/* Headline */}
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.15] tracking-tight animate-fade-in-up"
            style={{ animationDelay: "0.15s" }}
          >
            <span className="text-white">We Structure Knowledge</span>
            <br />
            <span className="text-primary-light">You Discover Insight</span>
          </h1>

          {/* Subheadline */}
          <p
            className="mt-6 text-lg lg:text-xl text-text-muted max-w-2xl leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            방대한 비정형 문서를 체계적 지식으로 전환하여,
            <br className="hidden sm:block" />
            정확하고 신뢰할 수 있는 인사이트를 제공합니다.
          </p>

          {/* CTAs */}
          <div
            className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-in-up"
            style={{ animationDelay: "0.45s" }}
          >
            <a
              href="#products"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-primary text-white font-medium hover:bg-primary-dark transition-colors"
            >
              솔루션 알아보기
              <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg border border-border text-slate-300 font-medium hover:bg-surface-light transition-colors"
            >
              도입 문의
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
