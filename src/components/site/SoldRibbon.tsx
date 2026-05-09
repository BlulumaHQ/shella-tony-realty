/** Premium diagonal corner ribbon for SOLD listings. */
export function SoldRibbon() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute top-0 right-0 h-28 w-28 overflow-hidden"
    >
      <div className="absolute top-[26px] right-[-46px] w-[170px] rotate-45 bg-[var(--brand-red)] text-white text-center text-[11px] tracking-[0.28em] font-semibold py-1.5 shadow-[0_4px_12px_rgba(0,0,0,0.2)] ring-1 ring-white/20">
        SOLD
      </div>
    </div>
  );
}
