import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function seedColleges() {
  const colleges = [
    {
      name: "IIT Ropar",
      email_domain: "iitrpr.ac.in",
      country: "India",
      state: "Punjab",
    },
    {
      name: "MNNIT Allahabad",
      email_domain: "mnnit.ac.in",
      country: "India",
      state: "Uttar Pradesh",
    },
    {
      name: "IIT Bombay",
      email_domain: "iitb.ac.in",
      country: "India",
      state: "Maharashtra",
    },
    {
      name: "IIT Kharagpur",
      email_domain: "iitkgp.ac.in",
      country: "India",
      state: "West Bengal",
    },
    {
      name: "IIT Madras",
      email_domain: "iitm.ac.in",
      country: "India",
      state: "Tamil Nadu",
    },
    {
      name: "NIT Trichy",
      email_domain: "nitt.edu",
      country: "India",
      state: "Tamil Nadu",
    },
    {
      name: "NIT Surathkal",
      email_domain: "nitk.ac.in",
      country: "India",
      state: "Karnataka",
    },
    {
      name: "NIT Warangal",
      email_domain: "nitw.ac.in",
      country: "India",
      state: "Telangana",
    },
    {
      name: "IIT Delhi",
      email_domain: "iitd.ac.in",
      country: "India",
      state: "Delhi",
    },
    {
      name: "IIT Kanpur",
      email_domain: "iitk.ac.in",
      country: "India",
      state: "Uttar Pradesh",
    },
  ];

  for (const college of colleges) {
    await prisma.college.upsert({
      where: { email_domain: college.email_domain },
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
