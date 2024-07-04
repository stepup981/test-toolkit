import { create } from "zustand";
import { getRepositories } from "@/pages/RepositoriesPage/api";
import { Repository } from "@/entities/repository/model/repository";

interface RepositoriesPageState {
  repositories: Repository[];
  loading: boolean;
  error: string | null;
  fetchRepositories: (variables: { first: number; after?: string; query?: string }) => Promise<void>;
}

export const useRepositoriesPageStore = create<RepositoriesPageState>((set) => ({
  repositories: [],
  loading: false,
  error: null,
  fetchRepositories: async (variables) => {
    set({ loading: true, error: null });
    try {
      const response = await getRepositories(variables);
      console.log(response.data.search.edges);
      set({ repositories: response.data.search.edges, loading: false });
    } catch (error) {
      set({ error: "Failed to fetch repositories", loading: false });
    }
  },
}));

export default useRepositoriesPageStore;