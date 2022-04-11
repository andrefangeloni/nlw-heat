import axios from 'axios';

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

  return response.data;
};

export default { execute };
