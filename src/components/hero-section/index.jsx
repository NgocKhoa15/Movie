import React, { useState } from 'react'
import "./index.scss"
import { useNavigate } from 'react-router-dom';

function HeroSection() {
  const [keyWord, setKeyWord] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    // nhảy qua trang search
    navigate(`/search/${keyWord}`);
    
  }

  return (
    <div className="hero-section">
        <div className="hero-section__content">
            <h1>Welcome</h1>
            <p>Millions of movies, TV shows and people to discover. Explore now.</p>
            <div className="search">
                <input 
                type="text" 
                placeholder="Search for the movie or TV show..."
                value={keyWord}
                onChange={(e) => setKeyWord(e.target.value)}
                />
                <button onClick={handleSearch}>Search</button>
            </div>
        </div>
        
        <div className="overlay"></div>
    </div>
  )
}

export default HeroSection