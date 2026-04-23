import { Button } from "@/assets/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/assets/ui/sheet";
import { Menu, Code2 } from "lucide-react";
import { Icons } from "./Icons";
import { SiBehance } from "react-icons/si";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },

  { name: "Contact", href: "#contact" },
];

const Header = () => {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="bg-primary-foreground p-1.5 rounded-lg">
            <Code2 className="h-5 w-5 text-primary" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">
            MYO<span className="text-blue-400">.DEV</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Desktop Socials & CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="icon" className="text-zinc-400 ">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/WaiKyawMyo"
            >
              <Icons.Github className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" className="text-zinc-400 ">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.behance.net/waimyo5"
            >
              <SiBehance className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" className="text-zinc-400 ">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/wai-kyaw-myo-b6ab84318/"
            >
              <Icons.LinkedIN className="h-5 w-5" />
            </a>
          </Button>
          <Button
            className="ml-2 bg-white text-black hover:bg-zinc-200 rounded-full font-semibold"
            asChild
          >
            <a href="#contact">Let's Talk</a>
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden ">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-zinc-950 border-zinc-800 text-white"
            >
              <SheetHeader className="text-left">
                <SheetTitle className="text-white flex items-center gap-2">
                  <Code2 className="h-6 w-6" />
                  <span>MYO.DEV</span>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-6 mt-12 px-6">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-lg font-medium text-zinc-400 transition-colors hover:text-white"
                  >
                    {item.name}
                  </a>
                ))}
                <hr className="border-zinc-800" />
                <div className="flex gap-4">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/WaiKyawMyo"
                  >
                    <Icons.Github className="text-zinc-400 size-5" />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.behance.net/waimyo5"
                  >
                    <SiBehance className="text-zinc-400 size-5" />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/wai-kyaw-myo-b6ab84318/"
                  >
                    <Icons.LinkedIN className="text-zinc-400 size-5" />
                  </a>
                </div>
                <Button className="w-full mt-4">Download Resume</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Header;
