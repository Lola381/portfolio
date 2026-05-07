export function LiveProjectButton({ link }: { link?: string }) {
  const className =
    "inline-flex items-center justify-center rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base hover:bg-[#D7E2EA]/10 transition-colors";

  if (link) {
    return (
      <a href={link} target="_blank" rel="noreferrer" className={className}>
        Live Project
      </a>
    );
  }

  return <button className={className}>Live Project</button>;
}
