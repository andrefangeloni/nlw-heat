import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

type Payload = {
  sub: string;
};

export const ensureAuthenticate = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const authToken = req.headers.authorization;

  if (!authToken) {
    return res.status(401).json({
      error: 'invalid-token',
    });
  }

  const [, token] = authToken.split(' ');

  try {
    const { sub } = verify(token, process.env.JWT_SECRET) as Payload;

    req.user_id = sub;

    return next();
  } catch (err) {
    return res.status(401).json({ error: 'expired-token' });
  }
};
