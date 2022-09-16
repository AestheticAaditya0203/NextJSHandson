import { useRouter } from "next/router";

function Review() {
  const router = useRouter();
  const { reviewid, productid } = router.query;

  return (
    <h1>
      {productid}
      Review: {reviewid}
    </h1>
  );
}

export default Review;
