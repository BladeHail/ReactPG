export interface Player {
  id: number;
  time: string;
  age: string;
  name: string;
  body: string;
  type: string;
  team: string;
  media: string | null;   // nullable
  awards: string[];
}