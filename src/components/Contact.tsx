"use client";

import { AnimatedSection } from "@/lib/motion";
import { MapPin, Mail, ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-navy text-white relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary-light font-semibold text-sm tracking-wide uppercase mb-3">Contact</p>
            <h2 className="text-3xl lg:text-5xl font-extrabold leading-tight">
              도입을 검토하고 계신가요?
            </h2>
            <p className="mt-5 text-slate-400 max-w-lg mx-auto leading-relaxed text-lg">
              AI 모델 개발, 컨설팅, 교육 서비스까지.
              <br />
              귀사에 맞는 지식 관리 솔루션을 제안해 드립니다.
            </p>

            <a
              href="mailto:kblee@knsquare.net"
              className="group inline-flex items-center gap-2 mt-10 px-10 py-5 rounded-2xl bg-white text-navy font-bold text-lg hover:bg-slate-100 transition-all shadow-2xl shadow-white/10"
            >
              문의하기
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>

            <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-slate-400">
              <div className="flex items-center gap-2.5">
                <Mail size={16} className="text-primary-light" />
                <span>kblee@knsquare.net</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin size={16} className="text-primary-light" />
                <span>부산 해운대구 센텀서로 30, KNN타워 26F</span>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
