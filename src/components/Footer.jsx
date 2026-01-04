export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="bg-[#0F172A] ">
        <div className="pt-15">
          <div className=" container mx-auto  border  border-slate-600"></div>
          <p className="text-center sm:pt-20 pt-12 pb-4 text-slate-300 text-sm">
            © 2024 - {year} Portafolio elaborado por Juan David R. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
