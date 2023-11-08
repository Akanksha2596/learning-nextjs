import Link from "next/link";
import { useRouter } from "next/router";
export default function Home() {
  const router = useRouter(); //navigating programitacally to product list page.
  const handleClick = () => {
    console.log("Placing order");
    router.replace("/product"); //replace history

    router.push("/product"); //passing required argument as parameter to navigate.(one can navigate to any route, dynamic, nested etc)
  };
  return (
    <>
      <h1>Home page</h1>
      <Link href="/posts">Posts</Link>
      <br />
      <Link href="/users">Users</Link>
      <br />
      <Link href="/blog">Blog</Link>
      <br />
      <Link href="/product">Product</Link>
      <button onClick={handleClick}> Place Order</button>
    </>
  );
} //implementing client side routing using link.
