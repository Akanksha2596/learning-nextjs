//pre-rendering detail of particular postID dynamically in SSG
//one needs to inform nextjs about all possible dynamic id we are going to pass as parameter or else we'll encounter path error
// here comes the usage of getStaticPaths

// import { useRouter } from "next/router";

export default function Posts({ post }: any) {
  // const router = useRouter();
  // if (router.isFallback) {
  //   return (
  //     <>
  //       <h1>.....Loading</h1>
  //     </>
  //   );
  // }
  return (
    <>
      <h1>
        {post.id} {post.title}
      </h1>
      <p>{post.body}</p>
    </>
  );
}

export async function getStaticPaths() {
  //returns an object consisting of paths as object -- we want to return while SSG
  // const response = await fetch(
  //   `https://jsonplaceholder.typicode.com/posts`
  // ).then((res) => res.json());

  // const paths = response.map((p: any) => ({
  //   params: {
  //     postId: `${p.id}`,
  //   },
  // }));

  return {
    //key is an array of objects
    paths: [
      { params: { postId: "1" } }, //in turn consists of params as key and  particular postId as pair.
      { params: { postId: "2" } },
      { params: { postId: "3" } },
    ], //paths here are hardcoded to get particular id's post
    // paths, //paths: paths
    fallback: "blocking",
  };
}

// {parents : { fname }
export async function getStaticProps(context: any) {
  let { params } = context;

  // console.log(context.);

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await response.json();
  if (!data.id) {
    return {
      notFound: true, // showing 404 page for no data of particular id.
    };
  }
  console.log(`generating page for /posts/${params.postId}`);
  console.log(data);

  return {
    props: {
      post: data,
    },

    revalidate : 10 // we are asking next js to revalidate this post list page every 10 seconds this will ensure the updated posts
    // this will ensure the updated posts data is served almost immediately without having to rebuild the entire app
    // this is called INCREMENT STATIC REGENERATION (STALE WHILE REVALIDATE)

  };
}
// fallback key has three value:
// 1. false - the paths returned by getStaticPaths will be redered to HTML at build time by getStaticProps and for the paths not specified we'll get 404 page not found
// uses : where displaying small amount of data , pages are not added often,  eg blog website displaying few articles.

// 2. true /*  true  {{{Recommended way by next js unless you benefits something from other values}}}
// 	1. The paths returned from getStaticPaths will be rendered to HTML at build time by getStaticProps.
// 	2. The paths that have not been generated at build time will not result in a 404 page. Instead, Next.js will serve a "fallback" version of the page on the first
// 	request to such path.
// 	3. In the background , Next.js will statically generate the requested path HTML and JSON. This includes running getStaticProps.
// 	4. When that's done , the browser recieves the JSON for the generated path. This will be used to automatically render the page with the require props. From the user's perspective
// 	 , the page will be swapped from the fallback page to the full page.
// 	5. At the same time , Next.js keeps track of the new list of prerendered pages. Subsequent requests to the same path will serve the generated page, just like other pages
// 	pre-rendered at build time.
// When?
// 1. The true value is most suitable if your app has a very large number of static pages that depend on data.
// 2. A large e-commerce site.
// 3. You want all the product pages to be pre-rendered but if you have a few thousand products, builds can take a really long time.
// 4. You may statically generate a small subset of products that are popular and use fallback: true for the rest. When someone requests a page that's not generated yet, the user will see the page with a loading indicator.
// 5. Shortly after, getStatic Props finishes and the page will be rendered with the requested data. From then onwards, everyone who requests the same page will get the statically pre-rendered page
// 6. This ensures that users always have a fast experience while preserving fast builds and the benefits of Static Generation
//   */,

//3. blocking
// 1. The paths returned from getStaticPaths will be rendered to HTML at build time by getStaticProps.
//       2. The paths that have not been generated at build time will not result in a 404 page. Instead, on the first request, Next.js will render the page on the server and return the generated HTML.
//       3. When that's done, the browser receives the HTML for the generated path. From the user's perspective, it will transition from "the browser is requesting the page" to "the full page is loaded". There is no flash of loading/fallback state.
//       4.. At the same time, Next.js keeps track of the new list of pre-rendered pages. Subsequent requests to the same path will serve the generated page, just like other pages pre-rendered at build time.
//       uses:
//       On a UX level, sometimes, people prefer the page to be loaded without a loading indicator if the wait time is a few milli seconds. This helps avoid the layout shift.
//       Some crawlers did not support JavaScript. The loading page would be rendered and then the full page would be loaded which was causing a problem.
// *****NOTE : NextJS team use fallback set to true unless there any proble, if encountered one use blocking .