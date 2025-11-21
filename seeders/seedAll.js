import { seedSubjects } from "./seedSubject.js";
import { seedCareerRequirements } from "./seedCareerRequirements.js";
import { seedCareerFields } from "./seedCareerfield.js";


const runSeeds = async () => {
  await seedSubjects();
  await seedCareerRequirements();
  await seedCareerFields();
  process.exit();
};

runSeeds();

