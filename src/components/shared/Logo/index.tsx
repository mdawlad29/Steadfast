import Image from "next/image";
import Link from "next/link";

export const Logo = ({ className }: { className?: string }) => {
  return (
    <Link href={"/"} className={`flex items-center gap-2 ${className ?? ""}`}>
      <Image
        src={"/assets/images/logo.png"}
        width={20}
        height={20}
        alt="logo"
        className="size-7 object-contain"
      />
      <h1 className="text-xl font-bold uppercase text-neutral">falcon</h1>
    </Link>
  );
};
