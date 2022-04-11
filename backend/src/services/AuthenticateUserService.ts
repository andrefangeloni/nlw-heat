import axios from 'axios';
import { sign } from 'jsonwebtoken';

import prismaClient from '../prisma';

type AuthServices = {
  access_token: string;
};

type UserResponse = {
  id: number;
  name: string;
  login: string;
  avatar_url: string;
};

const execute = async (code: string) => {
  const url = 'https://github.com/login/oauth/access_token';

  const { data } = await axios.post<AuthServices>(url, null, {
    params: {
      code,
      client_id: process.env.GITHUB_CLIENT_ID,
      client_secret: process.env.GITHUB_CLIENT_SECRET,
    },
    headers: {
      Accept: 'application/json',
    },
  });

  const response = await axios.get<UserResponse>(
    'https://api.github.com/user',
    {
      headers: {
        authorization: `Bearer ${data.access_token}`,
      },
    },
  );

  const { id, name, login, avatar_url } = response.data;

  let user = await prismaClient.user.findFirst({
    where: { github_id: id },
  });

  if (!user) {
    user = await prismaClient.user.create({
      data: {
        name,
        login,
        avatar_url,
        github_id: id,
      },
    });
  }

  const token = sign(
    {
      user: {
        id: user.id,
        name: user.name,
        avatar_url: user.avatar_url,
      },
    },
    process.env.JWT_SECRET,
    {
      subject: user.id,
      expiresIn: '1d',
    },
  );

  return { token, user };
};

export default { execute };
