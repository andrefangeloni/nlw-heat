import { Request, Response } from 'express';

import GetLast3MessagesService from '../services/GetLast3MessagesService';

const handle = async (req: Request, res: Response) => {
  try {
    const result = await GetLast3MessagesService.execute();

    return res.json(result);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

export default { handle };
