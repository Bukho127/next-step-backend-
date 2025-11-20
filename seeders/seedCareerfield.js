import CareerField from '../models/CareerField.js';

export const seedCareerFields = async () => {
  await CareerField.bulkCreate([
    { name: "Software Engineer", description: "Build software systems and applications", apScore: 28 },
    { name: "Data Scientist", description: "Analyze data using ML and stats", apScore: 30 },
    { name: "Civil Engineer", description: "Design buildings, bridges, and roads", apScore: 28 },
    { name: "Mechanical Engineer", description: "Develop machines and mechanical systems", apScore: 28 },
    { name: "Nurse", description: "Provide medical care to patients", apScore: 25 },
    { name: "Doctor", description: "Diagnose and treat patients", apScore: 35 },
    { name: "Teacher", description: "Educate learners in schools", apScore: 24 },
    { name: "Accountant", description: "Manage financial records and audits", apScore: 27 },
    { name: "Lawyer", description: "Provide legal advice and representation", apScore: 30 },
  ]);
  console.log('CareerFields seeded!');
};
