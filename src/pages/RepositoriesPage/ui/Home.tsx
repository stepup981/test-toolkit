import { useEffect } from "react";

import useRepositoriesPageStore from '@pages/RepositoriesPage/model/repositoriesPageStore';

import Loader from '@/shared/ui/loader/Loader';
import RepositoryList from "@entities/repository/ui/RepositoryList/RepositoryList";

const Home = () => {
  const { fetchRepositories, repositories, loading, error } = useRepositoriesPageStore();

  useEffect(() => {
    fetchRepositories({ first: 10 });
  }, [fetchRepositories]);

  useEffect(() => {
    console.log(repositories);
  }, [repositories]);

  if (loading) return <Loader></Loader>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      Домашняя страница
      <RepositoryList repositories={repositories}></RepositoryList>
    </div>
  );
};

export default Home;