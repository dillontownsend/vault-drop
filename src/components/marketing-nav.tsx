import { Button } from "@/components/ui/button";
import { type Session } from "next-auth";
import Link from "next/link";
import { BsSafe2 } from "react-icons/bs";

interface MarketingNavProps {
  session: Session | null;
}

const MarketingNav = ({ session }: MarketingNavProps) => {
  return (
    <div className="container">
      <div className="flex h-20 items-center justify-between">
        <Link href={"/"} className="flex items-center gap-2">
          <BsSafe2 className="h-7 w-7" />
          <span className="font-bold tracking-wide">VaultDrop</span>
        </Link>

        {session ? (
          <Button size={"sm"} variant={"secondary"} asChild>
            <Link href={"/vault"}>Open Vault</Link>
          </Button>
        ) : (
          <Button size={"sm"} variant={"secondary"}>
            Login
          </Button>
        )}
      </div>
    </div>
  );
};

export default MarketingNav;
