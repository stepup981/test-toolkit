import React, { useEffect } from "react";
import useRepositoriesPageStore from '@pages/RepositoriesPage/model/repositoriesPageStore';

import PaginationRepositories from '@/features/pagination/ui/PaginationRepositories';
import SearchRepositories from "@/features/search/ui/SearchRepositories";
import RepositoryList from "@entities/repository/ui/RepositoryList/RepositoryList";
import Loader from '@/shared/ui/loader/Loader';
import useSearchStore from "@/features/search/model/searchStore";


const Home = () => {
  const { fetchRepositories, repositories, loading, error } = useRepositoriesPageStore();
  const { searchQuery } = useSearchStore(); 

  useEffect(() => {
    fetchRepositories({ first: 10, query: searchQuery === '' ? "is:public" : searchQuery });
  }, [fetchRepositories]);

  useEffect(() => {
    console.log(repositories);
  }, [repositories]);

  if (loading) return <Loader></Loader>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      Домашняя страница
      <SearchRepositories />
      <RepositoryList repositories={repositories}></RepositoryList>
      <PaginationRepositories />
    </div>
  );
};

export default Home;