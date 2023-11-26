import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="grid h-screen place-items-center bg-gradient-to-br from-indigo-50 via-white to-cyan-100">
        <div className="text-center">
          <div className="flex gap-4 place-content-center">
            <Link
              href="/projects"
              className="text-sm md:text-2xl lg:text-3xl hover:underline hover:text-zinc-500 duration-500"
            >
              Projects
            </Link>
            <Link
              href="/about"
              className="text-sm md:text-2xl lg:text-3xl hover:underline hover:text-zinc-500 duration-500"
            >
              About
            </Link>
          </div>
          <div className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl whitespace-nowrap bg-clip-text mt-5 duration-1000">
            chanit
          </div>
        </div>
      </div>
    </>
  );
}
