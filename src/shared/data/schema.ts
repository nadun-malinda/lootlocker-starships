interface StarshipResult {
  name: string;
  manufacturer: string;
  crew: string;
  created: Date;
}

export interface StarshipsResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: StarshipResult[];
}
