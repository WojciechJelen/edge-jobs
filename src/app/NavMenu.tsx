import Link from "next/link";
import styles from "./NavMenu.module.css";
import Image from "next/image";
import SignInButton from "@/authenticatiohn/SigInButton";

export default function NavMenu() {
  return (
    <nav>
      {/* <Link href={"/"}>
        <Image
          src="/logo.svg" // Route of the image file
          width={216}
          height={30}
          alt="NextSpace Logo"
        />
      </Link> */}
      <ul>
        <li>
          <Link href={"/jobs"}>Jobs</Link>
        </li>
        <li>
          <Link href={"/startups"}>Startups</Link>
        </li>
        <li>
          <SignInButton />
        </li>
      </ul>
    </nav>
  );
}
