export interface World {
  id: number;
  src: string;
  name: string;
  shortDescription: string;
  mdDescription: string;
  mdHistory: string;

  countryIds: number[];
  countrys?: { id: number; name: string }[];

  locationIds: number[];
  locations?: { id: number; name: string }[];

  raceIds: number[];
  races?: { id: number; name: string }[];

  classIds: number[];
  classs?: { id: number; name: string }[];

  originIds: number[];
  origins?: { id: number; name: string }[];

  traitIds: number[];
  traits?: { id: number; name: string }[];

  godIds: number[];
  gods?: { id: number; name: string }[];
}
