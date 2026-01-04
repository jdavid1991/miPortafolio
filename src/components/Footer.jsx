export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="bg-[#0F172A] ">
        <div className="pt-15">
          <div className=" container mx-auto  border  border-slate-800"></div>
          <p className="text-center sm:pt-20 pt-12 pb-4 text-slate-300 text-sm">
            Portafolio elaborado por Juan David R. <br /> © 2024 - {year} Todos
            los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
