import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function seedColleges() {
  const colleges = [
    {
      name: "IIT Ropar",
      emailDomain: "iitrpr.ac.in",
      country: "India",
      state: "Punjab",
    },
    {
      name: "MNNIT Allahabad",
      emailDomain: "mnnit.ac.in",
      country: "India",
      state: "Uttar Pradesh",
    },
    {
      name: "IIT Bombay",
      emailDomain: "iitb.ac.in",
      country: "India",
      state: "Maharashtra",
    },
    {
      name: "IIT Kharagpur",
      emailDomain: "iitkgp.ac.in",
      country: "India",
      state: "West Bengal",
    },
    {
      name: "IIT Madras",
      emailDomain: "iitm.ac.in",
      country: "India",
      state: "Tamil Nadu",
    },
    {
      name: "NIT Trichy",
      emailDomain: "nitt.edu",
      country: "India",
      state: "Tamil Nadu",
    },
    {
      name: "NIT Surathkal",
      emailDomain: "nitk.ac.in",
      country: "India",
      state: "Karnataka",
    },
    {
      name: "NIT Warangal",
      emailDomain: "nitw.ac.in",
      country: "India",
      state: "Telangana",
    },
    {
      name: "IIT Delhi",
      emailDomain: "iitd.ac.in",
      country: "India",
      state: "Delhi",
    },
    {
      name: "IIT Kanpur",
      emailDomain: "iitk.ac.in",
      country: "India",
      state: "Uttar Pradesh",
    },
  ];

  for (const college of colleges) {
    await prisma.college.upsert({
      where: { emailDomain: college.emailDomain },
      update: {}, // do nothing if exists
      create: college,
    });
  }

  return { message: "Seeded colleges!" };
}

seedColleges()
  .then(() => {
    console.log("Seeding completed!");
    process.exit(0);
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
