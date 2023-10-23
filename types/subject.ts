export interface SubjectDataType {
  data: SubjectType[];
  teachers: TeachersType[]
}

export interface SubjectType {

  subjectName: string;
  course: string;
  semestr: string;
  studentsNumber: string;
  groupName: string;
  lecturesHours: string;
  laboratoryHours: string;
  practicHours: string;
  seminarHours: string;
  exam: boolean;
  offset: boolean;
  additionalInfo: string;
  countPodgroups: string;
  uniqueId: string;
  podgroups: string[]
}

export interface TeachersType {
  id: string;
  name: string
}

