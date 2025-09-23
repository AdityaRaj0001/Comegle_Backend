import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const iits = [
  {
    name: "IIT Bombay",
    email_domain: "iitb.ac.in",
    country: "India",
    state: "Maharashtra",
  },
  {
    name: "IIT Delhi",
    email_domain: "iitd.ac.in",
    country: "India",
    state: "Delhi",
  },
  {
    name: "IIT Madras",
    email_domain: "iitm.ac.in",
    country: "India",
    state: "Tamil Nadu",
  },
  {
    name: "IIT Kanpur",
    email_domain: "iitk.ac.in",
    country: "India",
    state: "Uttar Pradesh",
  },
  {
    name: "IIT Kharagpur",
    email_domain: "iitkgp.ac.in",
    country: "India",
    state: "West Bengal",
  },
  {
    name: "IIT Roorkee",
    email_domain: "iitr.ac.in",
    country: "India",
    state: "Uttarakhand",
  },
  {
    name: "IIT Guwahati",
    email_domain: "iitg.ac.in",
    country: "India",
    state: "Assam",
  },
  {
    name: "IIT BHU",
    email_domain: "iitbhu.ac.in",
    country: "India",
    state: "Uttar Pradesh",
  },
  {
    name: "IIT Hyderabad",
    email_domain: "iith.ac.in",
    country: "India",
    state: "Telangana",
  },
  {
    name: "IIT Gandhinagar",
    email_domain: "iitgn.ac.in",
    country: "India",
    state: "Gujarat",
  },
  {
    name: "IIT Ropar",
    email_domain: "iitrpr.ac.in",
    country: "India",
    state: "Punjab",
  },
  {
    name: "IIT Indore",
    email_domain: "iiti.ac.in",
    country: "India",
    state: "Madhya Pradesh",
  },
  {
    name: "IIT Jodhpur",
    email_domain: "iitj.ac.in",
    country: "India",
    state: "Rajasthan",
  },
  {
    name: "IIT Mandi",
    email_domain: "iitmandi.ac.in",
    country: "India",
    state: "Himachal Pradesh",
  },
  {
    name: "IIT Patna",
    email_domain: "iitp.ac.in",
    country: "India",
    state: "Bihar",
  },
  {
    name: "IIT Palakkad",
    email_domain: "iitpkd.ac.in",
    country: "India",
    state: "Kerala",
  },
  {
    name: "IIT Tirupati",
    email_domain: "iittp.ac.in",
    country: "India",
    state: "Andhra Pradesh",
  },
  {
    name: "IIT Bhubaneswar",
    email_domain: "iitbbs.ac.in",
    country: "India",
    state: "Odisha",
  },
  {
    name: "IIT Goa",
    email_domain: "iitgoa.ac.in",
    country: "India",
    state: "Goa",
  },
  {
    name: "IIT Jammu",
    email_domain: "iitjammu.ac.in",
    country: "India",
    state: "Jammu & Kashmir",
  },
  {
    name: "IIT Dharwad",
    email_domain: "iitdh.ac.in",
    country: "India",
    state: "Karnataka",
  },
];
const nits = [
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
    name: "NIT Calicut",
    email_domain: "nitc.ac.in",
    country: "India",
    state: "Kerala",
  },
  {
    name: "NIT Rourkela",
    email_domain: "nitrkl.ac.in",
    country: "India",
    state: "Odisha",
  },
  {
    name: "NIT Durgapur",
    email_domain: "nitdgp.ac.in",
    country: "India",
    state: "West Bengal",
  },
  {
    name: "NIT Jamshedpur",
    email_domain: "nitjsr.ac.in",
    country: "India",
    state: "Jharkhand",
  },
  {
    name: "NIT Jaipur",
    email_domain: "mnit.ac.in",
    country: "India",
    state: "Rajasthan",
  },
  {
    name: "NIT Jalandhar",
    email_domain: "nitj.ac.in",
    country: "India",
    state: "Punjab",
  },
  {
    name: "NIT Patna",
    email_domain: "nitp.ac.in",
    country: "India",
    state: "Bihar",
  },
  {
    name: "NIT Kurukshetra",
    email_domain: "nitkkr.ac.in",
    country: "India",
    state: "Haryana",
  },
  {
    name: "NIT Hamirpur",
    email_domain: "nith.ac.in",
    country: "India",
    state: "Himachal Pradesh",
  },
  {
    name: "NIT Silchar",
    email_domain: "nits.ac.in",
    country: "India",
    state: "Assam",
  },
  {
    name: "NIT Srinagar",
    email_domain: "nitsri.ac.in",
    country: "India",
    state: "Jammu & Kashmir",
  },
  {
    name: "NIT Nagpur",
    email_domain: "vnit.ac.in",
    country: "India",
    state: "Maharashtra",
  },
  {
    name: "NIT Allahabad",
    email_domain: "mnnit.ac.in",
    country: "India",
    state: "Uttar Pradesh",
  },
  {
    name: "NIT Goa",
    email_domain: "nitgoa.ac.in",
    country: "India",
    state: "Goa",
  },
  {
    name: "NIT Sikkim",
    email_domain: "nitsikkim.ac.in",
    country: "India",
    state: "Sikkim",
  },
  {
    name: "NIT Arunachal Pradesh",
    email_domain: "nitap.ac.in",
    country: "India",
    state: "Arunachal Pradesh",
  },
  {
    name: "NIT Meghalaya",
    email_domain: "nitm.ac.in",
    country: "India",
    state: "Meghalaya",
  },
  {
    name: "NIT Puducherry",
    email_domain: "nitpy.ac.in",
    country: "India",
    state: "Puducherry",
  },
  {
    name: "NIT Manipur",
    email_domain: "nitmanipur.ac.in",
    country: "India",
    state: "Manipur",
  },
  {
    name: "NIT Mizoram",
    email_domain: "nitmz.ac.in",
    country: "India",
    state: "Mizoram",
  },
  {
    name: "NIT Agartala",
    email_domain: "nita.ac.in",
    country: "India",
    state: "Tripura",
  },
  {
    name: "NIT Uttarakhand",
    email_domain: "nituk.ac.in",
    country: "India",
    state: "Uttarakhand",
  },
  {
    name: "NIT Delhi",
    email_domain: "nitdelhi.ac.in",
    country: "India",
    state: "Delhi",
  },
  {
    name: "NIT Raipur",
    email_domain: "nitrr.ac.in",
    country: "India",
    state: "Chhattisgarh",
  },
];
const iims = [
  {
    name: "IIM Ahmedabad",
    email_domain: "iima.ac.in",
    country: "India",
    state: "Gujarat",
  },
  {
    name: "IIM Bangalore",
    email_domain: "iimb.ac.in",
    country: "India",
    state: "Karnataka",
  },
  {
    name: "IIM Calcutta",
    email_domain: "iimcal.ac.in",
    country: "India",
    state: "West Bengal",
  },
  {
    name: "IIM Lucknow",
    email_domain: "iiml.ac.in",
    country: "India",
    state: "Uttar Pradesh",
  },
  {
    name: "IIM Indore",
    email_domain: "iimidr.ac.in",
    country: "India",
    state: "Madhya Pradesh",
  },
  {
    name: "IIM Kozhikode",
    email_domain: "iimk.ac.in",
    country: "India",
    state: "Kerala",
  },
  {
    name: "IIM Shillong",
    email_domain: "iimshillong.ac.in",
    country: "India",
    state: "Meghalaya",
  },
  {
    name: "IIM Ranchi",
    email_domain: "iimranchi.ac.in",
    country: "India",
    state: "Jharkhand",
  },
  {
    name: "IIM Rohtak",
    email_domain: "iimrohtak.ac.in",
    country: "India",
    state: "Haryana",
  },
  {
    name: "IIM Kashipur",
    email_domain: "iimkashipur.ac.in",
    country: "India",
    state: "Uttarakhand",
  },
  {
    name: "IIM Raipur",
    email_domain: "iimraipur.ac.in",
    country: "India",
    state: "Chhattisgarh",
  },
  {
    name: "IIM Tiruchirappalli",
    email_domain: "iimtrichy.ac.in",
    country: "India",
    state: "Tamil Nadu",
  },
  {
    name: "IIM Udaipur",
    email_domain: "iimu.ac.in",
    country: "India",
    state: "Rajasthan",
  },
  {
    name: "IIM Bodh Gaya",
    email_domain: "iimbg.ac.in",
    country: "India",
    state: "Bihar",
  },
  {
    name: "IIM Sambalpur",
    email_domain: "iimsambalpur.ac.in",
    country: "India",
    state: "Odisha",
  },
  {
    name: "IIM Sirmaur",
    email_domain: "iimsirmaur.ac.in",
    country: "India",
    state: "Himachal Pradesh",
  },
  {
    name: "IIM Visakhapatnam",
    email_domain: "iimv.ac.in",
    country: "India",
    state: "Andhra Pradesh",
  },
  {
    name: "IIM Jammu",
    email_domain: "iimj.ac.in",
    country: "India",
    state: "Jammu & Kashmir",
  },
  {
    name: "IIM Nagpur",
    email_domain: "iimnagpur.ac.in",
    country: "India",
    state: "Maharashtra",
  },
  {
    name: "IIM Amritsar",
    email_domain: "iimamritsar.ac.in",
    country: "India",
    state: "Punjab",
  },
];
const bits = [
  {
    name: "BITS Pilani",
    email_domain: "bits-pilani.ac.in",
    country: "India",
    state: "Rajasthan",
  },
  {
    name: "BITS Goa",
    email_domain: "goa.bits-pilani.ac.in",
    country: "India",
    state: "Goa",
  },
  {
    name: "BITS Hyderabad",
    email_domain: "hyderabad.bits-pilani.ac.in",
    country: "India",
    state: "Telangana",
  },

  {
    name: "BIT Mesra",
    email_domain: "bitmesra.ac.in",
    country: "India",
    state: "Jharkhand",
  },
];
const iiits = [
  {
    name: "IIIT Hyderabad",
    email_domain: "iiit.ac.in",
    country: "India",
    state: "Telangana",
  },
  {
    name: "IIIT Delhi",
    email_domain: "iiitd.ac.in",
    country: "India",
    state: "Delhi",
  },
  {
    name: "IIIT Allahabad",
    email_domain: "iiita.ac.in",
    country: "India",
    state: "Uttar Pradesh",
  },
  {
    name: "IIITM Gwalior",
    email_domain: "iiitm.ac.in",
    country: "India",
    state: "Madhya Pradesh",
  },
  {
    name: "IIIT Bangalore",
    email_domain: "iiitb.ac.in",
    country: "India",
    state: "Karnataka",
  },
  {
    name: "IIITDM Jabalpur",
    email_domain: "iiitdmj.ac.in",
    country: "India",
    state: "Madhya Pradesh",
  },
  {
    name: "IIIT Kottayam",
    email_domain: "iiitkottayam.ac.in",
    country: "India",
    state: "Kerala",
  },
  {
    name: "IIIT Sonepat",
    email_domain: "iiitsonepat.ac.in",
    country: "India",
    state: "Haryana",
  },
];

async function seedColleges() {
  const colleges = [...iits, ...nits, ...iims, ...bits, ...iiits];

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
    { email: "testuser_test1@test1.ac.in", collegeDomain: "test1.ac.in" },
    { email: "testuser_test2@test2.ac.in", collegeDomain: "test2.ac.in" },
    { email: "testuser_test3@test3.ac.in", collegeDomain: "test3.ac.in" },
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
  // await seedUsers();
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
