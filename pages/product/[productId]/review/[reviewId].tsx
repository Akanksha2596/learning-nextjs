import { useRouter } from "next/router";
export default function Review() {
  const router = useRouter();
  const { productId, reviewId } = router.query; //extracting particular param id
  return (
    <>
      <h1>
        Review {reviewId} for product {productId}{" "}
      </h1>
    </>
  );
}
//Nested dynamic routes :  having dynamic segments within the folder name as well as within  the file name.
// uses : implementing listdetail pattern in UI app.
