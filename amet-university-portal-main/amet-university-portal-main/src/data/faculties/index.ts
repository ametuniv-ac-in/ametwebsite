
// Main entry point for faculty data
import { faculties } from './faculties';
import { maritimeDepartments } from './maritime';
import { managementDepartments } from './management';
import { commerceDepartments } from './commerce';
import { lifeSciencesDepartments } from './life-sciences';
import { engineeringTechDepartments } from './engineering-tech';
import { scienceHumanitiesDepartments } from './science-humanities';
import { aviationDepartments } from './aviation';
import { computingSciencesDepartments } from './computing-sciences';
import { alliedHealthSciencesDepartments } from './allied-health-sciences';

export {
  faculties,
  maritimeDepartments,
  managementDepartments,
  commerceDepartments,
  lifeSciencesDepartments,
  engineeringTechDepartments,
  scienceHumanitiesDepartments,
  aviationDepartments,
  computingSciencesDepartments,
  alliedHealthSciencesDepartments
};

export type { Faculty, Department } from './types';
