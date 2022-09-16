import { useRouter } from "next/router";

function Houses() {
  const router = useRouter();
  const { params = [] } = router.query;

  if (params.length === 2) {
    return (
      <h1>
        Houses are in the budget {params[0]}, {params[1]}
      </h1>
    );
  } else if (params.length === 1) {
    return <h1>Houses are in the budget {params[0]}</h1>;
  }

  return <h1>Category of Houses</h1>;
}

export default Houses;
