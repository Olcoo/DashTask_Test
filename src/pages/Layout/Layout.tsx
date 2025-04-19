import { Outlet } from "react-router-dom";
import { Header, SideBar } from "../../modules";
import { useEffect } from "react";
import { useSidebar } from "../../hooks";

export const Layout = () => {
  const { isSidebarOpen } = useSidebar();
  useEffect(() => {
    document.body.classList.add("md:overflow-y-auto")

    if (isSidebarOpen) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-y-hidden");
      document.body.classList.remove("md:overflow-y-auto");
    };
  }, [isSidebarOpen]);


  return (
    <>
      <div
        className={`
          fixed top-0 left-0 z-50 h-full bg-white md:hidden
          transition-all duration-300
          ${isSidebarOpen ? "w-full " : "w-0 overflow-hidden"}
        `}
      >
        <SideBar />
      </div>

      <div
        className={`
          grid min-h-screen grid-rows-[4.375rem_1fr] transition-all duration-300
          ${isSidebarOpen ? "md:grid-cols-[15rem_1fr]" : "md:grid-cols-[0_1fr]"}
        `}
      >
        <aside className="hidden md:block row-span-2 transition-all">
          <SideBar />
        </aside>

        <header className="col-span-full md:col-auto">
          <Header />
        </header>

        <main className="bg-gray-100 p-[1.875rem] overflow-auto border-l border-[#E0E0E0]">
          <Outlet />
        </main>
      </div>
    </>
  );
};