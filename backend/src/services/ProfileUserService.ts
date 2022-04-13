import prismaClient from '../prisma';

type ServiceParams = {
  user_id: string;
};

const execute = async ({ user_id }: ServiceParams) => {
  const user = await prismaClient.user.findFirst({
    where: {
      id: user_id,
    },
  });

  return user;
};

export default { execute };
