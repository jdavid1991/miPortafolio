export const Badges = () => {
  return (
    <section>
      <div className="bg-slate-950">
        <div className="container mx-auto">
          <div
            id="badges"
            className=" flex text-white sm:pt-15 pt-8 2xl:text-2xl text-xl gap-2 items-center font-bold sm:ml-5 p-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
              />
            </svg>
            <h2>Badges</h2>
          </div>
          <div className="pb-10 sm:mt-10 mt-5 grid grid-cols-3 justify-items-center">
            <div>
              <a
                href="https://www.credly.com/badges/0664864d-c996-44b1-8290-096c605ff4d5/public_url"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/assets/certificado-practitioner.png"
                  alt="certificado-practitioner"
                  draggable="false"
                />
              </a>
              <p className="text-center mt-3">Expires: August 02, 2027</p>
            </div>

            <div>
              <a
                href="https://www.credly.com/badges/15fca104-4252-4db5-974c-48f3891de094/public_url"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/assets/certificado-javascript.1.png"
                  alt="certificado-javascript"
                  draggable="false"
                />
              </a>
              <p className="text-center mt-3">Issued: Jun 01, 2024</p>
            </div>
            <div>
              <a
                href="https://itcertificate.us/campus/mod/customcert/verify_certificate.php"
                target="_blank"
                rel="noopener noreferrer"
                draggable="false"
              >
                <img
                  src="/assets/BackendDeveloper.png"
                  alt="certificado-javascript"
                  className="w-50.5"
                />
              </a>
              <p className="text-center mt-3">verification code: saGltJefv9</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
