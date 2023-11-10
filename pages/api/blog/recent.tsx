import { NextApiRequest, NextApiResponse } from "next";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ name: "Recent blog API routes" });
}
//without any custom server setup code or configuration we can create our own api in nextjs
//one can create their own api using api-routes for their whole project without 
//the code written in api folder is never bundled with frontend code