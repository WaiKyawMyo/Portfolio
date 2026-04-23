import { Code2, ArrowUp } from "lucide-react";
import { Icons } from "./Icons";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2 space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-white p-1.5 rounded-lg">
                <Code2 className="h-5 w-5 text-black" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">
                MYO<span className="text-blue-400">.DEV</span>
              </span>
            </div>
            <p className="text-zinc-400 max-w-sm leading-relaxed">
              Building scalable web applications and pixel-perfect designs with
              modern technologies. Available for freelance opportunities and
              full-time roles.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/WaiKyawMyo"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-all"
              >
                <Icons.Github className="size-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/wai-kyaw-myo-b6ab84318/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-all"
              >
                <Icons.LinkedIN className="size-5" />
              </a>
            </div>
          </div>

          {/* Sitemap */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">
              Sitemap
            </h4>
            <ul className="space-y-4">
              {["About", "Projects", "Skills", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-zinc-400 hover:text-blue-400 transition-colors text-sm font-medium"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">
              Connect
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:waikyawmyo4u@gmail.com"
                  className="text-zinc-400 hover:text-blue-400 transition-colors text-sm font-medium"
                >
                  waikyawmyo4u@gmail.com
                </a>
              </li>
              <li>
                <Link
                  target="_blank"
                  to="https://www.linkedin.com/in/wai-kyaw-myo-b6ab84318/"
                  className="text-zinc-400 hover:text-blue-400 transition-colors text-sm font-medium"
                >
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  to="https://github.com/WaiKyawMyo"
                  className="text-zinc-400 hover:text-blue-400 transition-colors text-sm font-medium"
                >
                  GitHub
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.behance.net/waimyo5"
                  className="text-zinc-400 hover:text-blue-400 transition-colors text-sm font-medium"
                >
                  Behance
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} MYO.DEV. All rights reserved. Built
            with React & Tailwind.
          </p>

          <Button
            variant="ghost"
            size="sm"
            onClick={scrollToTop}
            className="text-zinc-500  gap-2 transition-colors"
          >
            Back to top <ArrowUp className="size-4" />
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
