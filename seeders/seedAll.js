import { seedSubjects } from "./seedSubject.js";
import { seedCareerRequirements } from "./seedCareerRequirements.js";


const runSeeds = async () => {
  await seedSubjects();
  await seedCareerRequirements();
  process.exit();
};

runSeeds();

