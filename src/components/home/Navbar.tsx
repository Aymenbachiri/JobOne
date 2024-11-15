import { MyImage } from "../common/MyImage";
import { MyLink } from "../common/MyLink";
import { ThemeSwitch } from "./ThemeSwitch";
import logo from "/public/assets/images/logo.webp";

export function Navbar() {
  return (
    <header className="shadow-sm">
      <nav className="m-auto flex max-w-5xl items-center justify-between px-3 py-5">
        <MyLink href="/" className="flex items-center gap-3">
          <MyImage
            src={logo}
            width={50}
            height={50}
            alt="one Jobs logo"
            style={{ borderRadius: 10 }}
          />
          <span className="text-xl font-bold tracking-tight">One Jobs</span>
        </MyLink>
        <div className="flex justify-center items-center gap-3">
          <button className="w-fit rounded-lg border bg-[#0F172A] p-2 text-white">
            <MyLink href="/jobs/new">Post a job</MyLink>
          </button>
          <ThemeSwitch />
        </div>
      </nav>
    </header>
  );
}
