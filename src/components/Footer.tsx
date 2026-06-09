import { FaInstagram, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-300 py-12 md:py-16">

      <div className="container-mobile max-w-7xl mx-auto px-6 md:px-16">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">

          {/* STUDIO */}

          <div>

            <h3 className="text-xl mb-3">
              Ninni Puglisi
            </h3>

            <p className="text-neutral-600 leading-relaxed">
              Spazio Atelier
              <br />
              Studio di Architettura e Interior Design
            </p>

          </div>

          {/* LOCATION */}

          <div>

            <p className="mb-2">
              Via Bruno Buozzi n.39
            </p>

            <p className="mb-2">
              95045 Misterbianco (CT)
            </p>

            <p className="text-neutral-600 leading-relaxed">
              Catania · Sicilia · Italia
            </p>

          </div>

          {/* CONTACTS */}

          <div>

            <a
              href="tel:+393932989036"
              className="block mb-3 hover:opacity-60 transition"
            >
              +39 393 298 9036
            </a>

            <a
              href="mailto:ninnipuglisi@studionp39.com"
              className="block mb-6 break-all hover:opacity-60 transition"
            >
              ninnipuglisi@studionp39.com
            </a>

            <div className="flex items-center gap-5">

              <a
                href="https://www.instagram.com/NinniPuglisi_SpazioAtelier/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-60 transition"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=100063646356789"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-60 transition"
                aria-label="Facebook"
              >
                <FaFacebookF size={18} />
              </a>

            </div>

          </div>

        </div>

        <div className="mt-12 md:mt-16 pt-8 border-t border-neutral-200 flex flex-col md:flex-row gap-4 md:gap-0 justify-between text-sm text-neutral-500">

          <p>
            © {new Date().getFullYear()} Ninni Puglisi | Spazio Atelier
          </p>

          <p>
            Architettura · Interior Design · Retail Design
          </p>

        </div>

      </div>

    </footer>
  );
}