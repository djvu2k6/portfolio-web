"use client";

import { useCallback, useEffect, useRef, useState } from "react";

interface ScratchCardProps {
  /** Top layer — what gets scratched away. */
  frontSrc?: string;
  /** Revealed underneath. */
  backSrc?: string;
  className?: string;
  brushSize?: number;
  /** Fraction (0–1) scratched before the rest auto-clears. */
  revealThreshold?: number;
}

export default function ScratchCard({
  frontSrc = "avatar-front.png",
  backSrc = "avatar-back.jpg",
  className = "w-full max-w-[300px] md:max-w-[360px] aspect-[4/5] mx-auto md:mx-0",
  brushSize = 34,
  revealThreshold = 0.5,
}: ScratchCardProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const drawing = useRef(false);
  const lastPoint = useRef<{ x: number; y: number } | null>(null);
  const [ready, setReady] = useState(false);
  const [revealed, setRevealed] = useState(false);

  const setup = useCallback(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const { width, height } = wrap.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.scale(dpr, dpr);
    ctx.globalCompositeOperation = "source-over";

    const img = new Image();
    img.src = frontSrc;
    img.onload = () => {
      ctx.clearRect(0, 0, width, height);
      // cover-fit, same idea as CSS object-fit: cover
      const scale = Math.max(width / img.width, height / img.height);
      const dw = img.width * scale;
      const dh = img.height * scale;
      ctx.drawImage(img, (width - dw) / 2, (height - dh) / 2, dw, dh);
      setReady(true);
    };
  }, [frontSrc]);

  useEffect(() => {
    setup();
    window.addEventListener("resize", setup);
    return () => window.removeEventListener("resize", setup);
  }, [setup]);

  const getScratchedPercent = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return 0;
    const { width, height } = canvas;
    const step = 8; // coarse sample grid — cheap, accurate enough for a threshold
    let cleared = 0;
    let total = 0;
    const data = ctx.getImageData(0, 0, width, height).data;
    for (let y = 0; y < height; y += step) {
      for (let x = 0; x < width; x += step) {
        const alphaIdx = (y * width + x) * 4 + 3;
        total++;
        if (data[alphaIdx] < 40) cleared++;
      }
    }
    return total ? cleared / total : 0;
  };

  const pointFromEvent = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const rect = canvasRef.current!.getBoundingClientRect();
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  };

  const scratchTo = (x: number, y: number, from: { x: number; y: number } | null) => {
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) return;
    ctx.globalCompositeOperation = "destination-out";
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.lineWidth = brushSize;
    ctx.beginPath();
    if (from) {
      ctx.moveTo(from.x, from.y);
      ctx.lineTo(x, y);
    } else {
      ctx.arc(x, y, brushSize / 2, 0, Math.PI * 2);
    }
    ctx.stroke();
    ctx.fill();
  };

  // Pointer Events cover mouse AND touch identically — scratching with a
  // finger just works, no separate mobile handling needed.
  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (revealed) return;
    (e.target as HTMLCanvasElement).setPointerCapture(e.pointerId);
    drawing.current = true;
    const p = pointFromEvent(e);
    scratchTo(p.x, p.y, null);
    lastPoint.current = p;
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!drawing.current || revealed) return;
    const p = pointFromEvent(e);
    scratchTo(p.x, p.y, lastPoint.current);
    lastPoint.current = p;
  };

  const handlePointerUp = () => {
    if (!drawing.current) return;
    drawing.current = false;
    lastPoint.current = null;
    if (getScratchedPercent() > revealThreshold) setRevealed(true);
  };

  return (
    <div
      ref={wrapRef}
      className={`relative overflow-hidden rounded-xl border border-rule/60 bg-highlight/40 ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={backSrc}
        alt="the real photo underneath"
        className="absolute inset-0 w-full h-full object-cover"
        draggable={false}
      />

      <canvas
        ref={canvasRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        className={`absolute inset-0 w-full h-full touch-none cursor-crosshair transition-opacity duration-700 ${revealed ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
      />

      {!ready && (
        <div className="absolute inset-0 flex items-center justify-center bg-highlight/60 animate-pulse">
          <span className="font-hand text-lg text-rule">hang on…</span>
        </div>
      )}

      {ready && !revealed && (
        <div className="absolute bottom-3 left-0 right-0 text-center pointer-events-none">
          <span className="font-hand text-lg text-accent bg-paper/80 px-3 py-1 rounded-full">
            scratch me
          </span>
        </div>
      )}

      {revealed && (
        <button
          onClick={() => {
            setRevealed(false);
            setup();
          }}
          className="absolute bottom-3 right-3 font-hand text-sm text-rule underline-draw"
        >
          scratch again
        </button>
      )}
    </div>
  );
}