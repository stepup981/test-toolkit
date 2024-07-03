import PropTypes from "prop-types";

import RepositoryCard from "@entities/repository/ui/RepositoryCard/RepositoryCard";

import "@entities/repository/ui/RepositoryList/repositoryList.scss";

const RepositoryList = ({ repositories }) => {
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

RepositoryList.propTypes = {};

export default RepositoryList;
