// components/ui/GridBG.tsx
export default function GridBG() {
  return (
    <div
      aria-hidden
      className="absolute inset-0 pointer-events-none -z-10 bg-gradient-to-br from-base via-zinc-950/70 to-zinc-900/90"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_50%,rgba(227,66,52,0.13)_0,transparent_55%)]" />
      <div className="absolute inset-0 bg-grid-white/[0.03]" />
    </div>
  );
}
