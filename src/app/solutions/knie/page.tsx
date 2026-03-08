import { Metadata } from "next";
import KnieDetail from "./KnieDetail";

export const metadata: Metadata = {
  title: "KNie — Hybrid RAG AI Chatbot | KNSquare",
  description: "Graph-RAG로 구동되는 3세대 AI 챗봇. 벡터 검색과 지식그래프 의미 검색을 통합합니다.",
};

export default function KniePage() {
  return <KnieDetail />;
}
