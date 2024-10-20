import Link from "next/link";
import React from "react";
import Icon from "./icon";
import { useRouter } from "next/router";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Admin", href: "/admin" },
  { name: "Subscription", href: "/sub" },
];

function NavigationBar() {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const router = useRouter();

  function isRouteActive(route: string) {
    return router.pathname === route;
  }

  React.useEffect(() => {
    const mainSection = document.getElementById("main-section");

    if (mainSection) {
      if (isOpen) {
        mainSection.classList.add("blur-sm");
        document.body.style.overflow = "hidden";
      } else {
        mainSection.classList.remove("blur-sm");
        document.body.style.overflow = "auto";
      }
    }
  }, [isOpen]);

  return (
    <>
      <nav className="bg-gray-700 text-gray-100 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center">
              <div className="text-xl font-bold">Luo Tang Ji</div>
            </Link>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium ${
                      isRouteActive(item.href)
                        ? "bg-gray-800 text-white"
                        : "text-gray-300 hover:bg-gray-800 hover:text-white"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                <Icon
                  icon={isOpen ? "iconamoon:close-bold" : "fontisto:nav-icon-a"}
                  iconClass="h-6 w-6"
                />
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isRouteActive(item.href)
                      ? "bg-gray-700 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
      <GoToTop show={!isOpen} />
    </>
  );
}

function GoToTop(props: { show: boolean }) {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    function onScrollFunc() {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    window.addEventListener("scroll", onScrollFunc);

    return () => window.removeEventListener("scroll", onScrollFunc);
  }, []);

  if (props.show)
    return (
      <button
        className={`fixed bottom-6 right-6 bg-gray-800 text-white z-[200] rounded-full shadow-xl border border-gray-700 p-3 transition-all duration-500 ease-in-out transform ${
          isScrolled
            ? "translate-y-0 opacity-100"
            : "translate-y-10 opacity-0"
        }`}
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <Icon
          icon="bxs:up-arrow"
          iconClass="h-6 w-6"
        />
      </button>
    );
}

export default NavigationBar;