// import { comments } from "@/data/comments";
// import { NextApiRequest, NextApiResponse } from "next";

// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//   const { commentId } = req.query;

//   if (commentId) {
//     const comment = comments.find(
//       (comment) => comment.id === parseInt(commentId as string)
//     );
//     if (comment) {
//       res.status(200).json(comment);
//     } else {
//       res.status(404).json({ message: "Comment not found" });
//     }
//   } else {
//     res.status(400).json({ message: "Invalid request, commentId is missing" });
//   }
// }
import { comments } from "@/data/comments";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { commentId } = req.query;

  if (req.method === "GET") {
    let comment = comments.find(
      (comment: any) => comment.id === parseInt(commentId as string)
    );

    res.status(200).json({ comment });
  } else if (req.method === "DELETE") {
    let deletedComment = comments.find(
      (comment: any) => comment.id === parseInt(commentId as string)
    );

    const index = comments.findIndex(
      (comment: any) => comment.id === parseInt(commentId as string)
    );

    comments.splice(index, 1);
    // console.log(index);

    res.status(200).json({ deletedComment });
  }
}
