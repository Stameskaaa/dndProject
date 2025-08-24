export interface CharacterClass {
  id: number;
  name: string;
  description: string;
  src: string;
  levelTable: LevelEntry[];
  features: Features;
}

interface LevelEntry {
  level: number;
  masteryBonus: number;
  abilities: string[];
  knownSpells: number;
  spellSlots: number;
  spellSlotLevels: (number | null)[];
}

interface Features {
  mainCharacteristic: string;
  hitDice: string;
  savingThrows: string[];
  skills: string;
  weapons: string;
  instruments: string;
  armor: string;
  startingEquipment: string[];
}
