import React from 'react';
import { usePaginationStore } from '@/features/pagination/model/paginationStore';
import useRepositoriesPageStore from '@pages/RepositoriesPage/model/repositoriesPageStore';
import useSearchStore from '@features/search/model/searchStore'; 

const PaginationRepositories: React.FC = () => {
  const { page, setPage } = usePaginationStore();
  const { fetchRepositories, repositories } = useRepositoriesPageStore();
  const { searchQuery } = useSearchStore(); 

  const handlePageClick = (newPage: number) => {
    setPage(newPage);

    let after = undefined;
    if (newPage > 1 && repositories.length > 0) {
      const lastRepository = repositories[repositories.length - 1];
      after = lastRepository.cursor;
    }
    fetchRepositories({ first: 10, after, query: searchQuery === '' ? "is:public" : searchQuery }); 
  };

  const generatePageNumbers = () => {
    const pages = [];
    for (let i = Math.max(page - 2, 1); i <= page + 2; i++) {
      pages.push(i);
    }
    return pages;
  };

  const pageNumbers = generatePageNumbers();

  return (
    <div>
      {pageNumbers.map((p) => (
        <button
          key={p}
          onClick={() => handlePageClick(p)}
          style={{ color: page === p ? 'red' : 'black' }}
        >
          {p}
        </button>
      ))}
    </div>
  );
};

export default PaginationRepositories;