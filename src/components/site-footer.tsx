import Link from "next/link";
import { BsSafe2 } from "react-icons/bs";

const SiteFooter = () => {
  return (
    <footer>
      <div className="container flex flex-col items-center justify-between gap-4 py-10 font-light md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <BsSafe2 className="h-7 w-7" />
          <p className="text-center text-sm leading-loose md:text-left">
            Built by{" "}
            <Link
              href={"https://github.com/dillontownsend"}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              dillontownsend
            </Link>
            . Hosted on{" "}
            <Link
              href="https://vercel.com"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Vercel
            </Link>
            .{" "}
          </p>
        </div>
        <p className="text-center text-sm leading-loose md:text-left">
          The source code is available on{" "}
          <Link
            href={"https://github.com/dillontownsend/vault-drop"}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            GitHub
          </Link>
          .
        </p>
      </div>
    </footer>
  );
};

export default SiteFooter;
