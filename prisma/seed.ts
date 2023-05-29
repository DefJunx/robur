import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  let pitch = await prisma.pitch.findFirst({ where: { name: { contains: "gumini" } } });

  if (!pitch) {
    pitch = await prisma.pitch.create({
      data: {
        name: "Campo Sportivo Gumini",
        address: "Via del Cristo Manzano (UD), 33044",
      },
    });
  }

  const robur = await prisma.team.findFirst({ where: { name: { contains: "robur" } } });

  if (!robur) {
    console.log("Robur not available, seeding it");

    await prisma.team.create({
      data: { name: "ASD Robur Natisa", pitchId: pitch.id },
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async e => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
