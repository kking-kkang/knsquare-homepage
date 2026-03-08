"use client";

import { useEffect, useRef, useCallback } from "react";

interface KGNode {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  radius: number;
  label: string;
  group: number;
  angle: number;
  orbitRadius: number;
  orbitSpeed: number;
  appearTime: number;
  color: string;
}

interface KGEdge {
  from: number;
  to: number;
  progress: number;
  delay: number;
}

const COLORS = {
  core: "#2563EB",
  inner: "#3B82F6",
  outer: "#64748B",
  accent1: "#06B6D4",
  accent2: "#7C3AED",
  accent3: "#10B981",
};

const NODE_DATA: { label: string; group: number; color?: string }[] = [
  { label: "Knowledge\nGraph", group: 0, color: COLORS.core },
  { label: "온톨로지", group: 1, color: COLORS.inner },
  { label: "엔터티 추출", group: 1, color: COLORS.accent1 },
  { label: "Vector RAG", group: 1, color: COLORS.accent2 },
  { label: "Graph RAG", group: 1, color: COLORS.inner },
  { label: "Kraph", group: 1, color: COLORS.core },
  { label: "KNie", group: 1, color: COLORS.accent1 },
  { label: "PDF", group: 2 },
  { label: "DOCX", group: 2 },
  { label: "XLSX", group: 2 },
  { label: "추론", group: 2, color: COLORS.accent3 },
  { label: "출처 검증", group: 2, color: COLORS.accent3 },
  { label: "의사결정", group: 2 },
  { label: "Q&A", group: 2, color: COLORS.accent1 },
  { label: "관계 매핑", group: 2 },
  { label: "LLM", group: 2, color: COLORS.accent2 },
  { label: "OCR", group: 2 },
];

const EDGE_DEFS: [number, number][] = [
  [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6],
  [1, 2], [2, 5], [3, 6], [4, 6], [1, 5], [3, 4],
  [5, 7], [5, 8], [5, 9], [5, 14], [5, 16],
  [6, 10], [6, 11], [6, 13], [6, 15],
  [2, 14], [1, 9], [4, 12], [3, 15],
];

export default function KnowledgeGraph() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef(0);
  const mouseRef = useRef({ x: -9999, y: -9999 });

  const setup = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return null;
    const ctx = canvas.getContext("2d");
    if (!ctx) return null;

    const dpr = window.devicePixelRatio || 1;
    const parent = canvas.parentElement!;

    const resize = () => {
      const W = parent.clientWidth;
      const H = parent.clientHeight;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      canvas.style.width = `${W}px`;
      canvas.style.height = `${H}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      return { W, H };
    };

    const { W, H } = resize();
    const cx = W * 0.55;
    const cy = H * 0.48;
    const base = Math.min(W, H) * 0.34;

    const nodes: KGNode[] = NODE_DATA.map((d, i) => {
      let angle = 0, orbitR = 0, r = 6;
      if (d.group === 0) { orbitR = 0; r = 28; }
      else if (d.group === 1) {
        const cnt = NODE_DATA.filter(n => n.group === 1).length;
        const idx = NODE_DATA.filter((n, j) => n.group === 1 && j < i).length;
        angle = (idx / cnt) * Math.PI * 2 - Math.PI / 2;
        orbitR = base * 0.52; r = 16;
      } else {
        const cnt = NODE_DATA.filter(n => n.group === 2).length;
        const idx = NODE_DATA.filter((n, j) => n.group === 2 && j < i).length;
        angle = (idx / cnt) * Math.PI * 2 - Math.PI / 4;
        orbitR = base * 0.92; r = 10;
      }

      return {
        x: cx, y: cy,
        targetX: cx + Math.cos(angle) * orbitR,
        targetY: cy + Math.sin(angle) * orbitR,
        radius: r, label: d.label, group: d.group,
        angle, orbitRadius: orbitR,
        orbitSpeed: (d.group === 1 ? 0.0003 : 0.0002) + Math.random() * 0.0002,
        appearTime: d.group === 0 ? 100 : d.group === 1 ? 400 + i * 120 : 1000 + i * 70,
        color: d.color || COLORS.outer,
      };
    });

    const edges: KGEdge[] = EDGE_DEFS.map(([from, to], i) => ({
      from, to, progress: 0, delay: 1600 + i * 50,
    }));

    return { ctx, canvas, nodes, edges, resize, cx, cy, base };
  }, []);

  useEffect(() => {
    const state = setup();
    if (!state) return;
    const { ctx, canvas, nodes, edges, resize } = state;
    const startTime = performance.now();

    const handleResize = () => {
      const { W, H } = resize();
      const cx = W * 0.55, cy = H * 0.48;
      const base = Math.min(W, H) * 0.34;
      nodes.forEach(n => {
        if (n.group === 0) { n.targetX = cx; n.targetY = cy; }
        else {
          const orbitR = n.group === 1 ? base * 0.52 : base * 0.92;
          n.orbitRadius = orbitR;
          n.targetX = cx + Math.cos(n.angle) * orbitR;
          n.targetY = cy + Math.sin(n.angle) * orbitR;
        }
      });
    };

    const handleMouse = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const handleLeave = () => { mouseRef.current = { x: -9999, y: -9999 }; };

    window.addEventListener("resize", handleResize);
    canvas.addEventListener("mousemove", handleMouse);
    canvas.addEventListener("mouseleave", handleLeave);

    const draw = (now: number) => {
      const elapsed = now - startTime;
      const W = canvas.parentElement!.clientWidth;
      const H = canvas.parentElement!.clientHeight;
      const cx = W * 0.55, cy = H * 0.48;

      ctx.clearRect(0, 0, W, H);

      // Orbit drift
      nodes.forEach(n => {
        if (n.group === 0) return;
        n.angle += n.orbitSpeed;
        n.targetX = (n.group === 0 ? cx : cx) + Math.cos(n.angle) * n.orbitRadius;
        n.targetY = (n.group === 0 ? cy : cy) + Math.sin(n.angle) * n.orbitRadius;
      });

      // Spring toward target
      nodes.forEach(n => {
        if (elapsed < n.appearTime) { n.x = cx; n.y = cy; return; }
        n.x += (n.targetX - n.x) * 0.045;
        n.y += (n.targetY - n.y) * 0.045;
      });

      // Mouse repel
      const mx = mouseRef.current.x, my = mouseRef.current.y;
      nodes.forEach(n => {
        const dx = n.x - mx, dy = n.y - my;
        const dist = Math.hypot(dx, dy);
        if (dist < 100 && dist > 0) {
          const f = (100 - dist) / 100 * 4;
          n.x += (dx / dist) * f;
          n.y += (dy / dist) * f;
        }
      });

      // Orbit rings
      const base = Math.min(W, H) * 0.34;
      [0.52, 0.92].forEach(mult => {
        const ringAlpha = Math.min(0.06, (elapsed - 300) / 2000 * 0.06);
        if (ringAlpha <= 0) return;
        ctx.beginPath();
        ctx.arc(cx, cy, base * mult, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(37, 99, 235, ${ringAlpha})`;
        ctx.lineWidth = 1;
        ctx.setLineDash([3, 8]);
        ctx.stroke();
        ctx.setLineDash([]);
      });

      // Edges
      edges.forEach(e => {
        if (elapsed < e.delay) return;
        e.progress = Math.min(1, (elapsed - e.delay) / 700);
        const a = nodes[e.from], b = nodes[e.to];
        if (elapsed < a.appearTime || elapsed < b.appearTime) return;

        const ex = a.x + (b.x - a.x) * e.progress;
        const ey = a.y + (b.y - a.y) * e.progress;

        // Glow
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(ex, ey);
        ctx.strokeStyle = `rgba(37, 99, 235, ${0.05 * e.progress})`;
        ctx.lineWidth = 5;
        ctx.stroke();

        // Line
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(ex, ey);
        ctx.strokeStyle = `rgba(148, 163, 184, ${0.2 * e.progress})`;
        ctx.lineWidth = 1;
        ctx.stroke();

        // Particle
        if (e.progress >= 1) {
          const t = ((elapsed - e.delay - 700) * 0.0004) % 1;
          const px = a.x + (b.x - a.x) * t;
          const py = a.y + (b.y - a.y) * t;
          const grad = ctx.createRadialGradient(px, py, 0, px, py, 4);
          grad.addColorStop(0, `rgba(59, 130, 246, 0.8)`);
          grad.addColorStop(1, `rgba(59, 130, 246, 0)`);
          ctx.beginPath();
          ctx.arc(px, py, 4, 0, Math.PI * 2);
          ctx.fillStyle = grad;
          ctx.fill();
        }
      });

      // Nodes
      nodes.forEach(n => {
        if (elapsed < n.appearTime) return;
        const alpha = Math.min(1, (elapsed - n.appearTime) / 500);

        // Glow
        const glowR = n.radius * (n.group === 0 ? 3 : 2.2);
        const gGrad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, glowR);
        gGrad.addColorStop(0, `${n.color}${Math.round(alpha * 20).toString(16).padStart(2, "0")}`);
        gGrad.addColorStop(1, `${n.color}00`);
        ctx.beginPath();
        ctx.arc(n.x, n.y, glowR, 0, Math.PI * 2);
        ctx.fillStyle = gGrad;
        ctx.fill();

        // Body
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        if (n.group === 0) {
          const grad = ctx.createRadialGradient(n.x - 6, n.y - 6, 0, n.x, n.y, n.radius);
          grad.addColorStop(0, "#3B82F6");
          grad.addColorStop(1, "#1D4ED8");
          ctx.fillStyle = grad;
          ctx.fill();
          ctx.strokeStyle = `rgba(96, 165, 250, ${0.6 * alpha})`;
          ctx.lineWidth = 2;
          ctx.stroke();
        } else if (n.group === 1) {
          ctx.fillStyle = "#FFFFFF";
          ctx.fill();
          ctx.strokeStyle = `${n.color}${Math.round(alpha * 100).toString(16).padStart(2, "0")}`;
          ctx.lineWidth = 2;
          ctx.stroke();
        } else {
          ctx.fillStyle = "#FFFFFF";
          ctx.fill();
          ctx.strokeStyle = `rgba(203, 213, 225, ${0.6 * alpha})`;
          ctx.lineWidth = 1;
          ctx.stroke();
          // Small colored dot
          ctx.beginPath();
          ctx.arc(n.x, n.y, 3, 0, Math.PI * 2);
          ctx.fillStyle = `${n.color}${Math.round(alpha * 180).toString(16).padStart(2, "0")}`;
          ctx.fill();
        }

        // Labels
        const lblAlpha = Math.min(1, Math.max(0, (elapsed - n.appearTime - 200) / 400));
        if (lblAlpha <= 0) return;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        if (n.group === 0) {
          ctx.font = `bold 14px Inter, sans-serif`;
          ctx.fillStyle = `rgba(255,255,255,${lblAlpha})`;
          const lines = n.label.split("\n");
          lines.forEach((l, li) => ctx.fillText(l, n.x, n.y + (li - (lines.length - 1) / 2) * 16));
        } else {
          const fs = n.group === 1 ? 11 : 9.5;
          ctx.font = `600 ${fs}px Inter, "Noto Sans KR", sans-serif`;
          const tw = ctx.measureText(n.label).width + 14;
          const ph = fs + 10;
          const py = n.y + n.radius + 10;

          // Pill bg
          ctx.fillStyle = `rgba(255,255,255,${lblAlpha * 0.92})`;
          ctx.shadowColor = "rgba(0,0,0,0.06)";
          ctx.shadowBlur = 8;
          ctx.shadowOffsetY = 2;
          ctx.beginPath();
          ctx.roundRect(n.x - tw / 2, py - ph / 2, tw, ph, 6);
          ctx.fill();
          ctx.shadowColor = "transparent";
          ctx.shadowBlur = 0;
          ctx.shadowOffsetY = 0;

          // Pill border
          ctx.strokeStyle = `rgba(226, 232, 240, ${lblAlpha * 0.5})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();

          // Text
          ctx.fillStyle = `rgba(30, 41, 59, ${lblAlpha * 0.9})`;
          ctx.fillText(n.label, n.x, py + 0.5);
        }
      });

      animRef.current = requestAnimationFrame(draw);
    };

    animRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handleMouse);
      canvas.removeEventListener("mouseleave", handleLeave);
    };
  }, [setup]);

  return (
    <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ cursor: "default" }} />
  );
}
