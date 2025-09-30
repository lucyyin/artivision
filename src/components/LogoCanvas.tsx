"use client";

import { useEffect, useRef } from "react";

export function LogoCanvas({ size = 24 }: { size?: number }) {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    canvas.style.width = `${size}px`;
    canvas.style.height = `${size}px`;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.scale(dpr, dpr);

    // Background clear
    ctx.clearRect(0, 0, size, size);

    // Draw simple abstract glyph using brand blue
    ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue(
      "--brand-blue"
    ) || "#2563eb";
    const r = size / 2;
    ctx.beginPath();
    ctx.arc(r, r, r, 0, Math.PI * 2);
    ctx.fill();

    // Inner cut with primary background
    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(r * 1.2, r * 0.9, r * 0.65, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalCompositeOperation = "source-over";

    // Overlay stroke accents
    ctx.strokeStyle = "white";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(r * 0.4, r * 0.4);
    ctx.lineTo(r * 1.6, r * 1.6);
    ctx.stroke();
  }, [size]);

  return <canvas ref={ref} aria-hidden width={size} height={size} />;
}


