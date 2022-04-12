import prismaClient from '../prisma';

type ServiceParams = {
  text: string;
  user_id: string;
};

const execute = async ({ text, user_id }: ServiceParams) => {
  const message = await prismaClient.message.create({
    data: {
      text,
      user_id,
    },
    include: {
      user: true,
    },
  });

  return message;
};

export default { execute };
