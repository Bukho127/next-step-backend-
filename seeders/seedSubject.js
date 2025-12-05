import Subjects from "../models/Subjects.js";
import { Op } from "sequelize"; 

export const seedSubjects = async () => {
  const subjects = [
    { name: "Mathematics", code: "MAT"},
    { name: "Physical Sciences", code: "PHY" },
    { name: "Life Sciences", code: "LIF" },
    { name: "Geography", code: "GEO" },
    { name: "Accounting", code: "ACC" },
    { name: "Information Technology", code: "IT"},
    { name: "English", code: "ENG" }
  ];

  for (const subj of subjects) {
    // Check if a subject with the same code or name exists
    const existing = await Subjects.findOne({
      where: {
        [Op.or]: [  // <-- use Op from sequelize
          { name: subj.name },
          { code: subj.code }
        ]
      }
    });

    if (!existing) {
      await Subjects.create(subj);
    } else {
      // Optional: update if name or code differs
      if (existing.name !== subj.name || existing.code !== subj.code) {
        existing.name = subj.name;
        existing.code = subj.code;
        await existing.save();
      }
    }
  }

  console.log("Subjects seeded successfully!");
};
