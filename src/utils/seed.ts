import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seedUserSocials() {
  const testUsersEmails = [
    "testuser_test1@test1.ac.in",
    "testuser_test2@test2.ac.in",
    "testuser_test3@test3.ac.in",
    "testuser_test4@test4.ac.in",
    "testuser_test5@test5.ac.in",
  ];

  for (const email of testUsersEmails) {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) continue;

    await prisma.userSocials.upsert({
      where: { user_id: user.id },
      update: {},
      create: {
        user_id: user.id,
        linked_in: `https://linkedin.com/in/${user.username}`,
        twitter: `https://twitter.com/${user.username}`,
        instagram: `https://instagram.com/${user.username}`,
      },
    });
  }

  console.log("✅ UserSocials seeded for existing users!");
}

seedUserSocials()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
