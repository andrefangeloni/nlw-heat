import { Request, Response } from 'express';

import ProfileUserService from '../services/ProfileUserService';

const handle = async (req: Request, res: Response) => {
  const { user_id } = req;

  try {
    const result = await ProfileUserService.execute({ user_id });

    return res.json(result);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

export default { handle };
