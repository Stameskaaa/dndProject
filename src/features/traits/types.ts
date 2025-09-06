export interface Trait {
  id: string;
  name: string;
  trait_type_id: string;
  requirements: string;
  md_description: string;

  world_ids?: string[];
  world_data?: { id: string; name: string }[];
}

export interface TraitType {
  id: string;
  name: string;
  description: string;
  icon: any;
}
