import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seedColleges() {
  const colleges = [
    { name: "Test4", email_domain: "test4.ac.in", country: "India", state: "Rajasthan" },
    { name: "Test5", email_domain: "test5.ac.in", country: "India", state: "Kerala" },
  ];

  for (const college of colleges) {
    await prisma.college.upsert({
      where: { email_domain: college.email_domain },
      update: {},
      create: college,
    });
  }

  console.log("✅ Colleges seeded!");
}

async function seedUsers() {
  const testUsers = [
    { email: "testuser_test4@test4.ac.in", collegeDomain: "test4.ac.in" },
    { email: "testuser_test5@test5.ac.in", collegeDomain: "test5.ac.in" },
  ];

  for (const { email, collegeDomain } of testUsers) {
    const college = await prisma.college.findUnique({
      where: { email_domain: collegeDomain },
    });
    if (!college) continue;

    await prisma.user.upsert({
      where: { email },
      update: {},
      create: {
        full_name: email.split("@")[0],
        username: email.split("@")[0],
        avatar_url: "https://api.dicebear.com/7.x/identicon/svg?seed=" + email,
        email,
        gender: "Other",
        age: 21,
        college_id: college.id,
        country: "India",
        tags: ["test", "user"],
      },
    });
  }

  console.log("✅ Users seeded!");
}

async function main() {
  await seedColleges();
  await seedUsers();
}

main()
  .then(() => {
    console.log("🌱 Seeding completed");
    process.exit(0);
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
