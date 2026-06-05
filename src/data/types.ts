export interface Socials {
  twitter?: string;
  linkedin?: string;
  github?: string;
  facebook?: string;
  instagram?: string;
  website?: string;
  x?: string;
  web?: string;
  huggingface?: string;
  youtube?: string;
}

export interface Person {
  name: string;
  role?: string;
  picture: string;
  socials?: Socials;
}

export type Organizer = Person;
export type Speaker = Person;
export type Collaborator = Person;
export type Developer = Person;

export interface Talk {
  talkTitle: string;
  description: string;
  speakerName: string;
}

export interface SponsorLinks {
  website?: string;
}

export interface Sponsor {
  name: string;
  logo: string;
  links?: SponsorLinks;
  htmlId?: string;
}

export type SponsorCategory = 'Oro' | 'Plata' | 'Bronce';

export type SponsorsData = Record<SponsorCategory, Sponsor[]>;

export interface ScheduleItem {
  hora: string;
  duracion: string;
  titulo: string;
  speaker?: string;
  perfil?: string;
}

export interface ScheduleGroup {
  titulo: string;
  id: string;
  items: ScheduleItem[];
}
