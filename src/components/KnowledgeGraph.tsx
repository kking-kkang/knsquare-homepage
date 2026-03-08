"use client";

import { useEffect, useRef, useCallback } from "react";

interface KGNode {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  radius: number;
  label: string;
  group: number; // 0=core, 1=inner, 2=outer
  angle: number;
  orbitRadius: number;
  orbitSpeed: number;
  appeared: boolean;
  appearTime: number;
}

interface KGEdge {
  from: number;
  to: number;
  progress: number;
  delay: number;
}

// Real concepts from KNSquare's product
const NODE_DATA: { label: string; group: number }[] = [
  { label: "Knowledge\nGraph", group: 0 },
  // Inner ring — core tech
  { label: "온톨로지", group: 1 },
  { label: "엔터티 추출", group: 1 },
  { label: "Vector RAG", group: 1 },
  { label: "Graph RAG", group: 1 },
  { label: "Kraph", group: 1 },
  { label: "KNie", group: 1 },
  // Outer ring — data & outputs
  { label: "PDF", group: 2 },
  { label: "DOCX", group: 2 },
  { label: "XLSX", group: 2 },
  { label: "추론 엔진", group: 2 },
  { label: "출처 검증", group: 2 },
  { label: "의사결정", group: 2 },
  { label: "Q&A 응답", group: 2 },
  { label: "관계 매핑", group: 2 },
];

const EDGE_DEFS: [number, number][] = [
  [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6],
  [1, 2], [2, 5], [5, 0], [3, 6], [4, 6], [1, 5],
  [5, 7], [5, 8], [5, 9], [5, 14],
  [6, 10], [6, 11], [6, 12], [6, 13],
  [3, 10], [4, 11], [2, 14], [1, 9],
];

export default function KnowledgeGraph() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef(0);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  const init = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return null;
    const ctx = canvas.getContext("2d");
    if (!ctx) return null;

    const dpr = window.devicePixelRatio || 1;
    const parent = canvas.parentElement!;
    let W = parent.clientWidth;
    let H = parent.clientHeight;

    const resize = () => {
      W = parent.clientWidth;
      H = parent.clientHeight;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      canvas.style.width = `${W}px`;
      canvas.style.height = `${H}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const cx = W * 0.5;
    const cy = H * 0.48;
    const baseRadius = Math.min(W, H) * 0.32;

    // Create nodes
    const nodes: KGNode[] = NODE_DATA.map((d, i) => {
      let angle = 0;
      let orbitR = 0;
      let r = 6;

      if (d.group === 0) {
        orbitR = 0;
        r = 24;
      } else if (d.group === 1) {
        const innerCount = NODE_DATA.filter((n) => n.group === 1).length;
        const innerIdx = NODE_DATA.filter((n, j) => n.group === 1 && j < i).length;
        angle = (innerIdx / innerCount) * Math.PI * 2 - Math.PI / 2;
        orbitR = baseRadius * 0.48;
        r = 14;
      } else {
        const outerCount = NODE_DATA.filter((n) => n.group === 2).length;
        const outerIdx = NODE_DATA.filter((n, j) => n.group === 2 && j < i).length;
        angle = (outerIdx / outerCount) * Math.PI * 2 - Math.PI / 3;
        orbitR = baseRadius * 0.88;
        r = 10;
      }

      return {
        x: cx,
        y: cy,
        targetX: cx + Math.cos(angle) * orbitR,
        targetY: cy + Math.sin(angle) * orbitR,
        radius: r,
        label: d.label,
        group: d.group,
        angle,
        orbitRadius: orbitR,
        orbitSpeed: 0.0002 + Math.random() * 0.0003,
        appeared: false,
        appearTime: d.group === 0 ? 200 : d.group === 1 ? 600 + i * 100 : 1200 + i * 80,
      };
    });

    // Create edges
    const edges: KGEdge[] = EDGE_DEFS.map(([from, to], i) => ({
      from,
      to,
      progress: 0,
      delay: 1800 + i * 60,
    }));

    return { ctx, nodes, edges, resize, W: () => W, H: () => H, cx, cy, baseRadius, dpr };
  }, []);

  useEffect(() => {
    const state = init();
    if (!state) return;

    const { ctx, nodes, edges, resize } = state;
    const canvas = canvasRef.current!;
    const startTime = performance.now();

    const onResize = () => {
      resize();
      // Recalculate positions
      const parent = canvas.parentElement!;
      const W = parent.clientWidth;
      const H = parent.clientHeight;
      const cx = W * 0.5;
      const cy = H * 0.48;
      const baseRadius = Math.min(W, H) * 0.32;

      nodes.forEach((n) => {
        if (n.group === 0) {
          n.targetX = cx;
          n.targetY = cy;
        } else {
          const orbitR = n.group === 1 ? baseRadius * 0.48 : baseRadius * 0.88;
          n.orbitRadius = orbitR;
          n.targetX = cx + Math.cos(n.angle) * orbitR;
          n.targetY = cy + Math.sin(n.angle) * orbitR;
        }
      });
    };

    const onMouse = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };

    window.addEventListener("resize", onResize);
    canvas.addEventListener("mousemove", onMouse);

    const draw = (now: number) => {
      const elapsed = now - startTime;
      const parent = canvas.parentElement!;
      const W = parent.clientWidth;
      const H = parent.clientHeight;
      const cx = W * 0.5;
      const cy = H * 0.48;

      ctx.clearRect(0, 0, W, H);

      // Gentle orbit movement
      nodes.forEach((n) => {
        if (n.group === 0) return;
        n.angle += n.orbitSpeed;
        n.targetX = cx + Math.cos(n.angle) * n.orbitRadius;
        n.targetY = cy + Math.sin(n.angle) * n.orbitRadius;
      });

      // Animate node appearance (fly from center)
      nodes.forEach((n) => {
        if (!n.appeared && elapsed > n.appearTime) {
          n.appeared = true;
        }
        if (n.appeared) {
          n.x += (n.targetX - n.x) * 0.06;
          n.y += (n.targetY - n.y) * 0.06;
        } else {
          n.x = cx;
          n.y = cy;
        }
      });

      // Mouse interaction — slight repel
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      nodes.forEach((n) => {
        const dx = n.x - mx;
        const dy = n.y - my;
        const dist = Math.hypot(dx, dy);
        if (dist < 120 && dist > 0) {
          const force = (120 - dist) / 120 * 3;
          n.x += (dx / dist) * force;
          n.y += (dy / dist) * force;
        }
      });

      // Draw orbital rings (very subtle)
      [0.48, 0.88].forEach((mult) => {
        const baseRadius = Math.min(W, H) * 0.32;
        const r = baseRadius * mult;
        const ringAlpha = Math.min(1, Math.max(0, (elapsed - 400) / 1500)) * 0.08;
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(37, 99, 235, ${ringAlpha})`;
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 8]);
        ctx.stroke();
        ctx.setLineDash([]);
      });

      // Draw edges with animated progress
      edges.forEach((e) => {
        if (elapsed < e.delay) return;
        e.progress = Math.min(1, (elapsed - e.delay) / 800);

        const a = nodes[e.from];
        const b = nodes[e.to];
        if (!a.appeared || !b.appeared) return;

        const ex = a.x + (b.x - a.x) * e.progress;
        const ey = a.y + (b.y - a.y) * e.progress;

        // Edge glow
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(ex, ey);
        ctx.strokeStyle = `rgba(37, 99, 235, ${0.06 * e.progress})`;
        ctx.lineWidth = 4;
        ctx.stroke();

        // Edge line
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(ex, ey);
        ctx.strokeStyle = `rgba(59, 130, 246, ${0.25 * e.progress})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Traveling particle
        if (e.progress >= 1) {
          const t = ((elapsed - e.delay - 800) * 0.0005) % 1;
          const px = a.x + (b.x - a.x) * t;
          const py = a.y + (b.y - a.y) * t;
          ctx.beginPath();
          ctx.arc(px, py, 2, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(59, 130, 246, 0.6)";
          ctx.fill();
        }
      });

      // Draw nodes
      nodes.forEach((n) => {
        if (!n.appeared) return;

        const nodeAlpha = Math.min(1, (elapsed - n.appearTime) / 600);

        // Outer glow
        if (n.group <= 1) {
          const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.radius * 2.5);
          grad.addColorStop(0, `rgba(37, 99, 235, ${0.12 * nodeAlpha})`);
          grad.addColorStop(1, "rgba(37, 99, 235, 0)");
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.radius * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = grad;
          ctx.fill();
        }

        // Node body
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);

        if (n.group === 0) {
          // Core node: gradient fill
          const grad = ctx.createRadialGradient(n.x - 4, n.y - 4, 0, n.x, n.y, n.radius);
          grad.addColorStop(0, `rgba(59, 130, 246, ${nodeAlpha})`);
          grad.addColorStop(1, `rgba(29, 78, 216, ${nodeAlpha})`);
          ctx.fillStyle = grad;
          ctx.fill();
          // Border
          ctx.strokeStyle = `rgba(96, 165, 250, ${0.5 * nodeAlpha})`;
          ctx.lineWidth = 2;
          ctx.stroke();
        } else if (n.group === 1) {
          ctx.fillStyle = `rgba(239, 246, 255, ${nodeAlpha})`;
          ctx.fill();
          ctx.strokeStyle = `rgba(59, 130, 246, ${0.4 * nodeAlpha})`;
          ctx.lineWidth = 1.5;
          ctx.stroke();
        } else {
          ctx.fillStyle = `rgba(248, 250, 252, ${nodeAlpha})`;
          ctx.fill();
          ctx.strokeStyle = `rgba(203, 213, 225, ${0.5 * nodeAlpha})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }

        // Label
        const labelAlpha = Math.min(1, Math.max(0, (elapsed - n.appearTime - 300) / 500));
        if (labelAlpha > 0) {
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";

          if (n.group === 0) {
            ctx.font = `bold 13px Inter, sans-serif`;
            ctx.fillStyle = `rgba(255, 255, 255, ${labelAlpha})`;
            const lines = n.label.split("\n");
            lines.forEach((line, li) => {
              ctx.fillText(line, n.x, n.y + (li - (lines.length - 1) / 2) * 15);
            });
          } else {
            const fontSize = n.group === 1 ? 11 : 10;
            ctx.font = `500 ${fontSize}px Inter, "Noto Sans KR", sans-serif`;
            ctx.fillStyle = `rgba(51, 65, 85, ${labelAlpha * 0.9})`;

            // Background pill
            const textWidth = ctx.measureText(n.label).width + 12;
            const pillH = fontSize + 8;
            const pillY = n.y + n.radius + 8;

            ctx.fillStyle = `rgba(255, 255, 255, ${labelAlpha * 0.85})`;
            ctx.beginPath();
            ctx.roundRect(n.x - textWidth / 2, pillY - pillH / 2, textWidth, pillH, 4);
            ctx.fill();
            ctx.strokeStyle = `rgba(226, 232, 240, ${labelAlpha * 0.6})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();

            ctx.fillStyle = `rgba(30, 41, 59, ${labelAlpha * 0.85})`;
            ctx.fillText(n.label, n.x, pillY);
          }
        }
      });

      animRef.current = requestAnimationFrame(draw);
    };

    animRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", onResize);
      canvas.removeEventListener("mousemove", onMouse);
    };
  }, [init]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ cursor: "default" }}
    />
  );
}
