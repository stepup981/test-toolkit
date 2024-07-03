import React from 'react';
import PropTypes from 'prop-types';

const RepositoryCard = ({infoRepository}) => {
  const {id, name, stargazerCount, updatedAt, owner } = infoRepository
  return (
    <div className='repository-card'>
      <ul className='repository-card__list'>
        <li>{name}</li>
        <li>{stargazerCount}</li>
        <li>{updatedAt}</li>
        <li>{owner.url}</li>
      </ul>
    </div>
  );
};

RepositoryCard.propTypes = {
  
};

export default RepositoryCard;