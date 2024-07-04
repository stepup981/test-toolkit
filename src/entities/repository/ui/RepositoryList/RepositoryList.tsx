import RepositoryCard from "@entities/repository/ui/RepositoryCard/RepositoryCard";
import {Repository} from "@/entities/repository/model/repository";

import "@entities/repository/ui/RepositoryList/repositoryList.scss";

interface RepositoryListProps {
  repositories: Repository[];
}

const RepositoryList: React.FC<RepositoryListProps> = ({ repositories }) => {
  return (
    <div className="repositories">
      <ul className="repositories__list">
        {repositories.map((repo) => (
          <li key={repo.node.id}>
            <RepositoryCard infoRepository={repo.node}></RepositoryCard>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default RepositoryList;
