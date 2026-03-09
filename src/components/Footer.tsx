import Image from "next/image";

const navItems = [
  { label: "솔루션", href: "#products" },
  { label: "서비스", href: "#services" },
  { label: "포트폴리오", href: "#portfolio" },
  { label: "기술", href: "#how-it-works" },
  { label: "회사소개", href: "#about" },
  { label: "문의", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <Image
              src="/images/logo.png"
              alt="KNSquare"
              width={180}
              height={45}
              className="h-10 w-auto mb-3"
            />
            <p className="text-sm text-text-muted max-w-xs">
              AI & Knowledge Graph Innovation
              <br />
              방대한 비정형 문서를 체계적 지식으로 전환합니다.
            </p>
          </div>

          <nav className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-text-muted">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-primary transition-colors">
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-text-muted">
          <p>&copy; {new Date().getFullYear()} KNSquare Inc. (주)지식광장네트워크. All rights reserved.</p>
          <p>부산광역시 해운대구 센텀서로 30, KNN타워 26층 2602 &middot; 2603호 (48058)</p>
        </div>
      </div>
    </footer>
  );
}
