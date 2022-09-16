import Link from "next/link";
import { useRouter } from "next/router";

function Home() {
  const router = useRouter();
  function handleClick() {
    console.log("hey there clicked here");
    router.replace("/products");
  }

  return (
    <>
      <h1>Blogs</h1>
      <Link href="./blog">
        <a>Blogs</a>
      </Link>
      <Link href="./products">
        <a>Products</a>
      </Link>
      <button onClick={handleClick}>Order Here</button>
    </>
  );
}

export default Home;
