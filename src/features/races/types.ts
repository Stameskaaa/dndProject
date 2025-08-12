export interface Race {
  id: number;
  name: string;
  description: string;
  src: string;
  stats: {
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
  };
  features: string[];
}
