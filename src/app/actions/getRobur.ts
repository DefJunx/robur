import prismaClient from "../../lib/prisma";

async function getRobur() {
  return prismaClient.team.findFirstOrThrow({ where: { name: { contains: "robur" } }, include: { roster: true } });
}

export default getRobur;
