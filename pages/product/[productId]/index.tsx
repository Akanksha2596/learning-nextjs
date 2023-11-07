import { useRouter } from "next/router";
export default function ProductDetail() {
  const router = useRouter(); //accessing id with the help of hook.
  const productId = router.query.productId; //extracting particular param id
  return (
    <>
      <h1> Details about product {productId} </h1>
    </>
  );
}
//dynamic routing :  with the help of square brackets : here in this case matching any id  specified in the url.
// uses : implementing listdetail pattern in UI app.
