import { MyLink } from "../common/MyLink";
import { ThemeSwitch } from "./ThemeSwitch";

export function Navbar() {
  return (
    <header className="shadow-sm">
      <nav className="m-auto flex max-w-5xl items-center justify-between px-3 py-5">
        <MyLink href="/" className="flex items-center gap-3">
          {/* <Image src={logo} width={40} height={40} alt="Flow Jobs logo" /> */}
          <span>Logo</span>
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
