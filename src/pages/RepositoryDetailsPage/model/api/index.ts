import axiosConfig from "@shared/api/axiosConfig";
import { GET_REPOSITORY_DETAIL_QUERY } from "@pages/RepositoryDetailsPage/model/api/queries";

export const getRepositoryDetail = async (variables: { first: number; after?: string }) => {
  const response = await axiosConfig.post("", {
    query: GET_REPOSITORY_DETAIL_QUERY,
    variables,
  });

  return response.data;
};
