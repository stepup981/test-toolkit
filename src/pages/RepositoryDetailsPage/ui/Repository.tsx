import { getRepositoryDetail } from "@/pages/RepositoryDetailsPage/model/api";

const Repository = () => {
  (async () => {
    const variables = {
      first: 10,
    };

    try {
      const repositories = await getRepositoryDetail(variables);
      console.log(repositories);
    } catch (error) {
      console.error(error);
    }
  })();
  return <div>Страница с репозиторием</div>;
};

export default Repository;
