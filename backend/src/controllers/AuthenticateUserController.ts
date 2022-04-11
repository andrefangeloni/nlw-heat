import { Request, Response } from 'express';

import AuthenticateUserService from '../services/AuthenticateUserService';

const handle = async (req: Request, res: Response) => {
  const { code } = req.body;

  try {
    const result = await AuthenticateUserService.execute(code);

    return res.json(result);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

export default { handle };
