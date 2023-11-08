import Link from "next/link";

let date = new Date().toLocaleString();
export default function PostList({ posts }: any) {
  return (
    <>
      <h1>List of Posts</h1>
      last rendered :{date}
      {posts.map((post: any) => {
        return (
          <div key={post.id}>
            <Link href={`posts/${post.id}`} passHref>
              <h2>
                {post.id} {post.title}
              </h2>
            </Link>
            <hr />
          </div>
        );
      })}
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return {
    props: {
      // posts: data.slice(0, 3),
      posts: data,
    },
  };
}
