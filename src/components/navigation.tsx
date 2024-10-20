import Link from "next/link";
import React from "react";
// import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
// import Image from "next/image";
// import Logo from "~/components/images/chinese.jpeg";
import Icon from "./icon";
// import { Button } from "./ui/button";
import { useRouter } from "next/router";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Admin", href: "/admin" },
  { name: "Subscription", href: "/sub" },
//   { name: "Community", href: "/community" },
  // { name: "Contact", href: "/contact" },
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
      <nav
        className={`flex items-center justify-center bg-foreground px-4 py-2 text-white shadow-lg ${isOpen ? " blur-sm " : ""}`}
      >
        <div className="flex w-full max-w-[90rem] flex-row justify-center md:justify-between">
          {/* Add your logo or brand name here */}
          <Link href="/" className="m-2 flex flex-row items-center gap-2">
            {/* eslint-disable-next-line */}
            {/* <Image src={Logo} width={100} height={100} alt={""} className="size-10" /> */}
            <div className="text-xl font-bold">Luo Tang Ji</div>
          </Link>

          {/* Nav items */}
          <ul className="text-md hidden flex-row items-center gap-5 font-semibold md:flex">
            {navItems.map((item, idx) => {
              return (
                <li
                  key={idx}
                  className={`${isRouteActive(item.href) ? "opacity-100" : "opacity-70"}`}
                >
                  <Link href={item.href}>{item.name}</Link>
                </li>
              );
            })}

            {/* Clerk Auth */}
            {/* <li>
              <SignedOut>
                <div className="inline-flex h-9 items-center justify-center whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-slate-300">
                  <SignInButton />
                </div>
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </li> */}
          </ul>
        </div>

        {/* sidebar button */}
        <div className="absolute right-0 flex h-full items-center md:hidden">
          <Icon
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            icon="fontisto:nav-icon-a"
            btnClass="mr-3"
            iconClass="opacity-80"
          />
        </div>
      </nav>
      <SideDrawer isOpen={isOpen}  toggle={setIsOpen} />
      <GoToTop show={!isOpen} />
    </>
  );
}

function SideDrawer(props: {
  isOpen: boolean;
  toggle: (val: boolean) => void;
}) {
  return (
    <div
      className={`translate-x-100 bg-gray-100 opacity-80 border-l-2 bg-foreground text-black shadow-md ${props.isOpen ? "translate-x-0" : "translate-x-full"} fixed right-0 top-0 z-20 h-screen w-72 transition-transform duration-500 ease-in-out`}
    >
      <Icon
        icon="iconamoon:close-bold"
        btnClass="absolute right-0"
        iconClass="size-12 opacity-80"
        onClick={() => {
          props.toggle(false);
        }}
      />

      {/* Nav items */}
      <ul className="text-md flex h-full flex-col items-center justify-center gap-5 font-semibold opacity-100">
        {navItems.map((item, idx) => {
          return (
            <li key={idx}>
              <Link onClick={() => props.toggle(false)} href={item.href}>
                {item.name}
              </Link>
            </li>
          );
        })}

        {/* Clerk Auth */}
        {/* <li>
          <SignedOut>
            <div className="inline-flex h-9 items-center justify-center whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-slate-300">
              <SignInButton />
            </div>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </li> */}
      </ul>
    </div>
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
  });

  if (props.show)
    return (
      <>
        <Icon
          icon="bxs:up-arrow"
          btnClass={`fixed bottom-6 right-6 bg-foreground z-[200] rounded-xl shadow-xl border-[1px] transition-all duration-500 ease-in-out transform ${
            isScrolled
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
          iconClass="fill-white stroke-white"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        />
      </>
    );
}

export default NavigationBar;