import Image from "next/image";

import classes from "./hero.module.css";

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/eu.jpg"
          width={300}
          height={300}
          alt="Image showing Gus"
        />
      </div>
      <h1>Hi, i'm Gus</h1>

      <p>
        I blog about web development, especially frontend frameworks like Nextjs
      </p>
    </section>
  );
}
