import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="mb-4 flex justify-end items-center gap-5">
      <Link href="/" className="text-zinc-800 hover:text-zinc-500 duration-200">
        Home
      </Link>
      <Link
        href="/projects"
        className="text-zinc-800 hover:text-zinc-500 duration-200"
      >
        Projects
      </Link>
      <Link
        href="/about"
        className="text-zinc-800 hover:text-zinc-500 duration-200"
      >
        About
      </Link>
    </nav>
  );
}
