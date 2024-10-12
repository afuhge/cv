export type Entry = {
  title: string;
  description?: string;
  skills?: string[];
  company: Company;
  date: string;
  grade?: string,
}

type Company = {
  title: string;
  href: string;
}

