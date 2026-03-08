import { Metadata } from "next";
import KraphDetail from "./KraphDetail";

export const metadata: Metadata = {
  title: "Kraph — Ontology-Powered Knowledge Graph | KNSquare",
  description: "방대한 문서를 온톨로지 기반으로 자동 지식그래프로 전환하는 솔루션입니다.",
};

export default function KraphPage() {
  return <KraphDetail />;
}
