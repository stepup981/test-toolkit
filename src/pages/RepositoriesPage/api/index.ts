import axiosConfig from "@shared/api/axiosConfig";
import { GET_REPOSITORIES_QUERY } from "@/pages/RepositoriesPage/api/queries";

export const getRepositories = async (variables: { first: number; after?: string }) => {
  try {
    const response = await axiosConfig.post("", {
      query: GET_REPOSITORIES_QUERY,
      variables,
    });
    return response.data;
  } catch (error) {
    alert("Failed to fetch repositories:");
    throw error;
  }
};
