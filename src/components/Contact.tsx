"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { MapPin, Mail, ArrowRight } from "lucide-react";

export default function Contact() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="contact" className="py-24 lg:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          ref={ref}
          className={`max-w-3xl mx-auto text-center transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-3">
            Contact
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-navy">
            도입을 검토하고 계신가요?
          </h2>
          <p className="mt-4 text-text-muted max-w-lg mx-auto leading-relaxed">
            AI 모델 개발, 컨설팅, 교육 서비스까지.
            <br />
            귀사에 맞는 지식 관리 솔루션을 제안해 드립니다.
          </p>

          <a
            href="mailto:kblee@knsquare.net"
            className="inline-flex items-center gap-2 mt-10 px-8 py-4 rounded-xl bg-primary text-white font-semibold shadow-lg shadow-primary/25 hover:bg-primary-dark hover:shadow-primary/35 transition-all text-lg"
          >
            문의하기
            <ArrowRight size={20} />
          </a>

          <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-text-muted">
            <div className="flex items-center gap-2.5">
              <Mail size={16} className="text-primary" />
              <span>kblee@knsquare.net</span>
            </div>
            <div className="flex items-center gap-2.5">
              <MapPin size={16} className="text-primary" />
              <span>부산 해운대구 센텀서로 30, KNN타워 26F</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
