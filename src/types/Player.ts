export interface Player {
  id: number;
  time: string;
  age: string;
  name: string;
  type: string;
  team: string;
  media: string | null;   // nullable
  awards: string[];
}