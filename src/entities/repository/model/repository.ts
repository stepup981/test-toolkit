interface Repository {
  node: {
    id: string;
    name: string;
    stars: number;
    lastCommit: string;
    url: string;
  };
}

export type { Repository };