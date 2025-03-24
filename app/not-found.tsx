import Link from "next/link";
import "./globals.css";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[--theme-color]">
      <div className="shadowed bg-gray-100 py-10 px-20 flex flex-col items-center justify-center gap-1">
        <Image
          src="/images/404.svg"
          width={300}
          height={300}
          alt="404 Not Found"
        />
        <h1 className="font-bold text-xl">404 - Page Not Found</h1>
        <p>Sorry, this page does not exist.</p>
        <Link className="btn" href="/">
          Back To Homepage
        </Link>
      </div>
    </div>
  );
}
