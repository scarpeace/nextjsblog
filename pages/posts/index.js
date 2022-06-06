import AllPosts from "../../components/posts/all-posts";

const DUMMY_POSTS = [
  {
    slug: "getting-started-with-next-js",
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "Nextjs is the React framework for production it makes building full React apps and sites a breeze and ships with built-in with SSR.",
    date: "2022-02-10",
  },
  {
    slug: "getting-started-with-next-js",
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "Nextjs is the React framework for production it makes building full React apps and sites a breeze and ships with built-in with SSR.",
    date: "2022-02-11",
  },
  {
    slug: "getting-started-with-next-js",
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "Nextjs is the React framework for production it makes building full React apps and sites a breeze and ships with built-in with SSR.",
    date: "2022-02-12",
  },
];

export default function AllPostsPage() {
  return <AllPosts posts={DUMMY_POSTS} />;
}
