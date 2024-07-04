import React from 'react';
import { usePaginationStore } from '@/features/pagination/model/paginationStore';
import useRepositoriesPageStore from '@pages/RepositoriesPage/model/repositoriesPageStore';
import useSearchStore from '@features/search/model/searchStore'; 

const SearchRepositories: React.FC = () => {
  const { fetchRepositories } = useRepositoriesPageStore();
  const { searchQuery, setSearchQuery } = useSearchStore(); 
  const { setPage } = usePaginationStore();

  const handleSearch = () => {
    setPage(1);
    fetchRepositories({ first: 10, query: searchQuery });
  };

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)} 
        placeholder="Search repositories by name"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchRepositories;