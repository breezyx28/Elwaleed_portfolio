"use client";
import Link from "next/link";
import React from "react";

const UpperNav = () => {
  const [menuOpened, setMenuOpend] = React.useState<boolean>(false);

  React.useEffect(() => {
    const currentPath = window.location.pathname;
    setActiveLink(currentPath);
    toggleNavBg();
    handleRouteChange();
  }, []);
  return (
    <div className="upper-nav py-[50px] fixed bg-transparen md:backdrop-blur-md border-white mx-auto max-w-[2000px] w-full h-[88px] flex flex-col justify-center z-30">
      <div className="desktop-responsive">
        <div className="px-[150px] py-[50px] w-full flex justify-between items-center">
          <div className="text-4xl text-primary font-[600] leading-[23.64px]">
            Alwaleed <span className="text-[#FFA723]">.</span>
          </div>
          <div className="upper-menu">
            <ul className="flex items-center gap-x-[50px]">
              <li className="upper-nav-links hover:text-black/70">
                <Link href={"#"}>about</Link>
              </li>
              <li className="upper-nav-links hover:text-black/70">
                <Link href={"#"}>services</Link>
              </li>
              <li className="upper-nav-links hover:text-black/70">
                <Link href={"#"}>portfolio</Link>
              </li>
              <li className="upper-nav-links hover:text-black/70">
                <Link href={"#"}>clients</Link>
              </li>
              <li className="upper-nav-links hover:text-black/70">
                <Link href={"#"}>contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mobile-responsive">
        <div className="text-[18px] text-primary font-[600] leading-[23.44px]">
          Alwaleed <span className="text-[#FFA723]">.</span>
        </div>
        <div
          className={`fixed bg-white shadow-sm ${
            menuOpened
              ? "uppernav-mobile-slide-0"
              : "uppernav-mobile-slide-full"
          } duration-200 ease-in top-0 w-full z-50 max-h-screen h-full overflow-hidden flex flex-col justify-between px-10 py-4`}
        >
          <div className="wrapper flex flex-col gap-y-10">
            <div className="flex justify-between items-center">
              <div className="text-4xl text-primary font-[600] leading-[23.64px]">
                Alwaleed.
              </div>
              <button
                onClick={() => {
                  setMenuOpend(false);
                }}
                className="relative top-0 right-0 p-3 text-slate-800"
              >
                <svg
                  width={24}
                  height={24}
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m5 5 14 14M5 19 19 5" />
                </svg>
              </button>
            </div>
            <div className="mobile-upper-menu h-full">
              <ul className="flex flex-col gap-y-10 h-full">
                <li className="text-black text-lg font-semibold w-full ml-0 duration-150 ease-in hover:ml-4 cursor-pointer">
                  <Link
                    href={"#"}
                    onClick={() => {
                      setMenuOpend(false);
                    }}
                  >
                    About
                  </Link>
                </li>
                <li className="text-black text-lg font-semibold w-full ml-0 duration-150 ease-in hover:ml-4 cursor-pointer">
                  <Link
                    href={"#"}
                    onClick={() => {
                      setMenuOpend(false);
                    }}
                  >
                    Services
                  </Link>
                </li>
                <li className="text-black text-lg font-semibold w-full ml-0 duration-150 ease-in hover:ml-4 cursor-pointer">
                  <Link
                    href={"#"}
                    onClick={() => {
                      setMenuOpend(false);
                    }}
                  >
                    Portfolio
                  </Link>
                </li>
                <li className="text-black text-lg font-semibold w-full ml-0 duration-150 ease-in hover:ml-4 cursor-pointer">
                  <Link
                    href={"#"}
                    onClick={() => {
                      setMenuOpend(false);
                    }}
                  >
                    clients
                  </Link>
                </li>
                <li className="text-black text-lg font-semibold w-full ml-0 duration-150 ease-in hover:ml-4 cursor-pointer">
                  <Link
                    href={"#"}
                    onClick={() => {
                      setMenuOpend(false);
                    }}
                  >
                    contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <button
          onClick={() => {
            setMenuOpend(true);
          }}
        >
          <svg
            width={24}
            height={24}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M5 7h14" />
            <path d="M5 12h14" />
            <path d="M5 17h14" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default UpperNav;

const setActiveLink = (currentPage: string) => {
  let navLinks = document.querySelectorAll(".upper-nav-link");

  navLinks.forEach((item) => {
    // remove all active links first
    item.classList.remove("link-active");

    // get the current page and assign it to specific link item
    if (item.getAttribute("href") === currentPage) {
      console.log(currentPage);

      item.classList.add("link-active");
    }
  });
};

const handleRouteChange = () => {
  let upperNavLink = document.querySelectorAll(".upper-nav-link");
  let upperNav = document.querySelector(".upper-nav");
  let listItem = document.querySelectorAll(
    ".upper-nav>.desktop-responsive>.upper-menu>ul>li"
  );

  upperNavLink.forEach((item: Element) => {
    item?.addEventListener("click", (e) => {
      let page = item.getAttribute("href") ?? "/";
      setActiveLink(page);
    });
  });

  const currentPath = window.location.pathname;

  if (currentPath !== "/") {
    upperNav?.classList.add("glass-card");
    listItem?.forEach((item) =>
      item.classList?.replace("text-white", "text-slate-800")
    );
  }
};

const toggleNavBg = () => {
  let nav = document.querySelector(".upper-nav");

  const scrollAmount = 10; // The amount of pixels to scroll down before toggling the class
  const classes = ["md:border-b", "md:bg-white/70"];
  function toggleClassOnScroll() {
    if (window.scrollY <= scrollAmount) {
      classes.forEach((className) => {
        nav!.classList.add(className);
      });
      classes.forEach((className) => {
        nav!.classList.remove(className);
      });
    } else {
      classes.forEach((className) => {
        nav!.classList.remove(className);
      });
      classes.forEach((className) => {
        nav!.classList.add(className);
      });
    }
  }

  window.addEventListener("scroll", toggleClassOnScroll);
};
