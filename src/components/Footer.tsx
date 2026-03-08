import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <Image
              src="/지식광장네트워크 로고.png"
              alt="KNSquare 로고"
              width={120}
              height={30}
              className="h-7 w-auto"
            />
          </div>

          <nav className="flex items-center gap-6 text-sm text-text-muted">
            <a href="#products" className="hover:text-white transition-colors">
              서비스
            </a>
            <a href="#how-it-works" className="hover:text-white transition-colors">
              기술
            </a>
            <a href="#why-us" className="hover:text-white transition-colors">
              Why Us
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              문의
            </a>
          </nav>
        </div>

        <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-text-muted">
          <p>&copy; {new Date().getFullYear()} KNSquare Inc. (주)지식광장네트워크. All rights reserved.</p>
          <p>부산 해운대구 센텀서로 30, KNN타워 26F, 2602 &middot; 2603호</p>
        </div>
      </div>
    </footer>
  );
}
