//catch all api routes with the help of params  --catching all routes associated with "./api"
// "/api/1" --> gettion o/p: ["one"]  ;adding "api/1/2/3" --> ["one, "two", "three"]---any no of seg one adds the same api-route is executed with all request available on obj req.query object
//if one wants to navigate to "/api" without index.js we can delete it --we get error 404 --so this part is considered as optional parameter --> use[[...params]].tsx-->no 404 error
//depending upon the requirement of application one can use [params] or[[...params]]

import { NextApiRequest, NextApiResponse } from "next";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const params = req.query.params; // param refers to the file name
  console.log(params);
  res.status(200).json(params);
}
