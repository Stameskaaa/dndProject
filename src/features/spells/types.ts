export interface SpellDataType {
  id: string;
  name: string;
  level: number;
  school: string;
  classes: string[];
  casting_time: string;
  range: string;
  components: {
    V: boolean;
    S: boolean;
    M: boolean;
    material: string | null;
  };
  duration: string;
  concentration: boolean;
  ritual: boolean;
  save?: string;
  attack_roll?: boolean;
  damage?: {
    type: string;
    dice: string;
    scales_with_level?: Record<number, string>;
  };
  area?: string;
  higher_level_text?: string;
  full_description: string;
  examples?: string[];
  tags?: string[];
  source?: {
    book: string;
    page: number;
  };
  srd?: boolean;
  icon?: string;
  art_url?: string;
  notes?: string;
}

// EXTENDS типы скорее всего сходятся

export interface SpellCardType {
  id: string;
  name: string;
  level: number;
  school: string;
  classes: string[];
  casting_time: string;
  range: string;
  components: {
    V: boolean;
    S: boolean;
    M: boolean;
    material: string | null;
  };
  concentration: boolean;
  ritual: boolean;
  short_desc: string;
  icon: string;
  levelColorKey: string;
}
