export enum MemberRole {
  PI = "Principal Investigator",
  POSTDOC = "Postdoctoral Researcher",
  PHD = "PhD Student",
  ALUMNI = "Alumni",
  UNDERGRAD = "Undergraduate Researcher"
}

export interface Member {
  id: string;
  name: string;
  role: MemberRole;
  image: string;
  bio: string;
  email: string;
  website?: string;
  twitter?: string;
  googleScholar?: string;
}

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  pdfUrl?: string;
  codeUrl?: string;
  abstract: string;
  tags: string[];
}

export interface NewsItem {
  id: string;
  date: string;
  title: string;
  content: string;
  category: "Award" | "Publication" | "Event" | "General";
}

export interface ResearchArea {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}