import CareerRequirement from "../models/CareerRequirement.js"; // CareerSubjectRequirement
import CareerField from "../models/CareerField.js";
import Subject from "../models/Subjects.js";

export const seedCareerRequirements = async () => {
  const requirements = [
    {
      career: "Engineering",
      subjects: [
        { name: "Mathematics", score: 70 },
        { name: "Physical Sciences", score: 65 }
      ]
    },
    {
      career: "Medicine",
      subjects: [
        { name: "Life Sciences", score: 70 },
        { name: "Physical Sciences", score: 65 }
      ]
    },
    {
      career: "Accounting",
      subjects: [
        { name: "Mathematics", score: 60 },
        { name: "Accounting", score: 65 },
        { name: "Economics", score: 55 }
      ]
    },
    {
      career: "Computer Science",
      subjects: [
        { name: "Mathematics", score: 60 },
        { name: "Physical Sciences", score: 55 },
        { name: "Information Technology", score: 50 }
      ]
    }
  ];

  for (const req of requirements) {
    // Find CareerField by name
    const careerField = await CareerField.findOne({ where: { name: req.career } });
    if (!careerField) {
      console.error(`CareerField not found: ${req.career}`);
      continue;
    }

    for (const item of req.subjects) {
      const subject = await Subject.findOne({ where: { name: item.name } });
      if (!subject) {
        console.error(`Subject not found: ${item.name}`);
        continue;
      }

      // Use findOrCreate to avoid duplicate inserts
      await CareerRequirement.findOrCreate({
        where: {
          careerFieldId: careerField.id,
          subjectId: subject.id
        },
        defaults: {
          minimumScore: item.score,
          isMandatory: true
        }
      });
    }
  }

  console.log("Career requirements seeded successfully!");
};
