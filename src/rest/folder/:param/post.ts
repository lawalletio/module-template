import { ExtendedRequest } from '@lawallet/module';
import type { Response } from 'express';

const handler = (_req: ExtendedRequest, res: Response) => {
  res.status(200).json({ message: 'Test POST response' }).send();
};

export default handler;
