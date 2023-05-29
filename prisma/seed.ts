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

  let robur = await prisma.team.findFirst({ where: { name: { contains: "robur" } } });

  if (!robur) {
    console.log("Robur not available, seeding it");

    robur = await prisma.team.create({
      data: { name: "ASD Robur Natisa", pitch: { connect: { id: pitch.id } } },
    });
  }

  let player = await prisma.player.findFirst({ where: { name: { contains: "cencig" } } });

  if (!player) {
    player = await prisma.player.create({
      data: {
        dob: new Date("1993-09-25"),
        name: "Daniele Cencig",
        role: "cm",
        team: { connect: { id: robur.id } },
        birthPlace: "Livorno",
      },
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
