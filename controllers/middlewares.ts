import { NextApiRequest, NextApiResponse } from "next";

export function validateBody(bodySchema: any, callback: Function) {
  return async function (
    req: NextApiRequest,
    res: NextApiResponse
  ): Promise<void> {
    try {
      await bodySchema.validate(req.body);
      callback(req, res);
    } catch (e) {
      res.status(422).send({ field: "body", message: e });
    }
  };
}
