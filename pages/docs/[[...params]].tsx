import { useRouter } from "next/router";
export default function Doc() {
  const router = useRouter();
  const { params = [] } = router.query; // initial syntax for fixing undefined and avoid code break.
  console.log(params); //initially undefined in console due to pre-rendering feature of nextjs.
  if (params.length === 2)
    return (
      <h1>
        Viewing docs for feature {params[0]} and concept {params[1]}
      </h1>
    );
  else if (params.length === 1) {
    return <h1>Viewing docs for feature {params[0]}</h1>;
  }
  return (
    <>
      <h1>Docs Home Page</h1>
    </>
  );
}
// Catch all Routes: matching any url that contains doc segment in the path.
//use: Documentation sites, for better organization and SEO ; layout will remain same. defining once for multiple variation usage
// visiting "localhost/docs gives 404 page not found error : here comes optional catch all routes : this is also handled by nextjs. Wrap square bracket with additional pair of square bracket.
