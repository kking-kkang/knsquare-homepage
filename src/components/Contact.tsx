"use client";

import { AnimatedSection } from "@/lib/motion";
import { MapPin, Mail, ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-navy text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-primary-light font-semibold text-sm tracking-wide uppercase mb-2">Contact</p>
            <h2 className="text-[2rem] lg:text-[2.5rem] font-bold leading-tight">
              도입을 검토하고 계신가요?
            </h2>
            <p className="mt-4 text-slate-400 max-w-md mx-auto text-base leading-[1.7]">
              AI 모델 개발, 컨설팅, 교육 서비스까지.
              귀사에 맞는 지식 관리 솔루션을 제안해 드립니다.
            </p>

            <a
              href="mailto:kblee@knsquare.net"
              className="group inline-flex items-center gap-2 mt-8 px-8 py-4 rounded-xl bg-white text-navy text-base font-semibold hover:bg-slate-100 transition-all shadow-xl shadow-white/10"
            >
              문의하기
              <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
            </a>

            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-primary-light" />
                <span>kblee@knsquare.net</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-primary-light" />
                <span>부산 해운대구 센텀서로 30, KNN타워 26F</span>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
