"use client";

import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  radius: number;
  vx: number;
  vy: number;
  label: string;
}

interface Edge {
  from: number;
  to: number;
}

const LABELS = [
  "문서", "온톨로지", "엔터티", "관계", "지식",
  "검색", "추론", "그래프", "벡터", "응답",
  "규정", "매뉴얼", "데이터",
];

export default function KnowledgeGraph() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animFrameRef = useRef<number>(0);
  const nodesRef = useRef<Node[]>([]);
  const edgesRef = useRef<Edge[]>([]);
  const alphaRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    let width = canvas.parentElement?.clientWidth || 600;
    let height = canvas.parentElement?.clientHeight || 500;

    const resize = () => {
      width = canvas.parentElement?.clientWidth || 600;
      height = canvas.parentElement?.clientHeight || 500;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    // Initialize nodes
    const nodes: Node[] = LABELS.map((label) => ({
      x: Math.random() * width * 0.8 + width * 0.1,
      y: Math.random() * height * 0.8 + height * 0.1,
      radius: 3 + Math.random() * 4,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      label,
    }));
    nodesRef.current = nodes;

    // Create edges (connect nearby nodes)
    const edges: Edge[] = [];
    for (let i = 0; i < nodes.length; i++) {
      const connections = 1 + Math.floor(Math.random() * 2);
      for (let c = 0; c < connections; c++) {
        const j = (i + 1 + Math.floor(Math.random() * (nodes.length - 1))) % nodes.length;
        if (!edges.some((e) => (e.from === i && e.to === j) || (e.from === j && e.to === i))) {
          edges.push({ from: i, to: j });
        }
      }
    }
    edgesRef.current = edges;

    // Fade in
    const startTime = performance.now();

    const draw = (now: number) => {
      const elapsed = now - startTime;
      alphaRef.current = Math.min(1, elapsed / 2000);

      ctx.clearRect(0, 0, width, height);

      // Update positions
      for (const node of nodes) {
        node.x += node.vx;
        node.y += node.vy;
        if (node.x < 20 || node.x > width - 20) node.vx *= -1;
        if (node.y < 20 || node.y > height - 20) node.vy *= -1;
      }

      const alpha = alphaRef.current;

      // Draw edges
      for (const edge of edges) {
        const a = nodes[edge.from];
        const b = nodes[edge.to];
        const dist = Math.hypot(a.x - b.x, a.y - b.y);
        const maxDist = 300;
        if (dist > maxDist) continue;

        const edgeAlpha = (1 - dist / maxDist) * 0.3 * alpha;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.strokeStyle = `rgba(59, 130, 246, ${edgeAlpha})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Draw nodes
      for (const node of nodes) {
        // Glow
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * 3, 0, Math.PI * 2);
        const grad = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, node.radius * 3
        );
        grad.addColorStop(0, `rgba(59, 130, 246, ${0.15 * alpha})`);
        grad.addColorStop(1, "rgba(59, 130, 246, 0)");
        ctx.fillStyle = grad;
        ctx.fill();

        // Node circle
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(96, 165, 250, ${0.8 * alpha})`;
        ctx.fill();

        // Label (only show some)
        if (node.radius > 5) {
          ctx.font = "11px Inter, sans-serif";
          ctx.fillStyle = `rgba(148, 163, 184, ${0.6 * alpha})`;
          ctx.textAlign = "center";
          ctx.fillText(node.label, node.x, node.y - node.radius - 8);
        }
      }

      animFrameRef.current = requestAnimationFrame(draw);
    };

    animFrameRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}
