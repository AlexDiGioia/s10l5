import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Research = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    onSearch(searchQuery);
    navigate(`/research/${searchQuery}`); // Aggiorna l'URL con la query
  };

  return (
    <div className="container">
      <div className="row height d-flex justify-content-center align-items-center">
        <div className="col-md-8">
          <div className="search d-flex">
            <input
              type="text"
              className="form-control"
              placeholder="Search your city"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="btn btn-primary" onClick={handleSearch}>Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Research;