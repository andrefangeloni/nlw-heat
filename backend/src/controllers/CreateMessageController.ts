import { Request, Response } from 'express';

import CreateMessageService from '../services/CreateMessageService';

const handle = async (req: Request, res: Response) => {
  const { user_id } = req;
  const { text } = req.body;

  try {
    const result = await CreateMessageService.execute({
      text,
      user_id,
    });

    return res.status(201).json(result);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

export default { handle };
