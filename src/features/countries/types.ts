export interface FlagsTypes {
  png: string;
  svg: string;
}

export interface MapsTypes {
  googleMaps: string;
  openStreetMaps: string;
}

export interface NameTypes {
  common: string;
  official: string;
}

export interface CountryTypes {
  name: NameTypes;
  timezones: string[];
  capital?: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  maps: MapsTypes;
  area: number;
  borders: string[];
  population: number;
  flags: FlagsTypes;
  cioc: string;
}
