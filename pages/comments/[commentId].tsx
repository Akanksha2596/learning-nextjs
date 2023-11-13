//pre-render individual comment in detail page -- "navigation to "--> "/comments/1"--> visit only 1st comments page --this should be prerendered and so on for different id's--->creating a dynamic page route
//implement a react component with help of getStatic paths to pre-render possible page with commentId-- pre-renderand then finally implement getStaticProps to pass props to these components.
import { comments } from "@/data/comments";
export default function CommentDetail({ comment }: any) {
  return (
    <>
      {comment.id} {comment.text}
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { commentId: "1" } },
      { params: { commentId: "2" } },
      { params: { commentId: "3" } },
    ],
    fallback: false,
  };
}

export async function getStaticProps(context: any) {
  const { params } = context;
  const { commentId } = params;
  const comment = comments.find(
    (comment: any) => comment.id === parseInt(commentId)
  );
  console.log(comment);
  // we have duplicated the logic of finding commentId in practical build reusable component by extracting and building seprate file and import within api route as well as pages.

  //   const response = await fetch(`http://localhost:3000/comments/${commentId}`);
  //   const data = response.json();
  //   console.log(data);
  //Calling your own api routes are not recommended , you can call the external api
  //Calling it via  a url introduces an additional round trip which saves your 100ms.
  //****IMPORTANT POINT: You should not call an Api route in prerendering
  return {
    params: {
      comment,
    },
  };
}
