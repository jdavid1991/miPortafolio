
export const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <div className="bg-[#0F172A] ">
      <div>
        <p className="text-center pt-25 pb-4 text-slate-300 text-sm font-semibold">
          © 2025 - {year} Portafolio elaborado por Juan David R
        </p>
      </div>
    </div>
  );
}
