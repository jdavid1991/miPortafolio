import { Fade } from "react-awesome-reveal";

const badges = [
  {
    href: "https://www.credly.com/badges/0664864d-c996-44b1-8290-096c605ff4d5/public_url",
    src: "/assets/certificado-practitioner.png",
    alt: "AWS Cloud Practitioner",
    label: "AWS Cloud Practitioner",
    sublabel: "Expires: August 02, 2027",
  },
  {
    href: "https://www.credly.com/badges/15fca104-4252-4db5-974c-48f3891de094/public_url",
    src: "/assets/certificado-javascript.1.png",
    alt: "Programación con JavaScript",
    label: "Programación con JavaScript",
    sublabel: "Issued: Jun 01, 2024",
  },
  {
    href: "https://itcertificate.us/campus/mod/customcert/verify_certificate.php",
    src: "/assets/BackendDeveloper.png",
    alt: "Back-end Developer Certified Professional",
    label: "Back-end Developer Certified",
    sublabel: "Código: saGltJefv9",
  },
];

export const Badges = () => {
  return (
    <section>
      <div className="bg-slate-950 2xl:pb-16 pb-8">
        <Fade delay={200}>
          <div className="container mx-auto px-4">
            <div
              id="badges"
              className="flex text-white sm:pt-14 pt-8 2xl:text-2xl text-xl gap-2 items-center font-bold sm:pl-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 shrink-0"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                />
              </svg>
              <h2>Badges</h2>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-8 justify-items-center">
              {badges.map(({ href, src, alt, label, sublabel }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center gap-4 bg-slate-900/50 border border-slate-700/50 rounded-2xl p-6 w-full max-w-xs hover:border-slate-500 transition-colors"
                >
                  <img
                    src={src}
                    alt={alt}
                    className="w-36 h-36 object-contain group-hover:scale-105 transition-transform"
                    draggable="false"
                    onContextMenu={(e) => e.preventDefault()}
                  />
                  <div className="text-center">
                    <p className="font-semibold text-sm text-stone-100">
                      {label}
                    </p>
                    <p className="text-stone-400 text-xs mt-1">{sublabel}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
};
