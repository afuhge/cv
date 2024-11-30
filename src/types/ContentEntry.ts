export type Entry = {
  title?: string;
  description?: string;
  skills?: string[];
  company: Company;
  date: string;
  grade?: string,
  projects?: Project[];
}

type Company = {
  title: string;
  href: string;
}

type Project = {
  name: string,
}

