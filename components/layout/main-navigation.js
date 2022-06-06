import Link from "next/link";
import Logo from "./logo";

import classes from "./main-navigation.module.css";

export default function MainNavigation() {
  return (
    <header className={classes.header}>
      <Link href="/">
        {/* If there is no text inside the link you need to wrap everything inside a anchor tag */}
        <a>
          <Logo />
        </a>
      </Link>
      <logo>
        <nav>
          <ul>
            <Link href="/posts">Posts</Link>
            <Link href="/contact">Contact</Link>
          </ul>
        </nav>
      </logo>
    </header>
  );
}
