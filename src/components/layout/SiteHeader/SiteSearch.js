import React, { useState } from 'react'
import useGetIcon from '../../../hooks/useGetIcon';

export default function SiteSearch() {
  const [isSearching, setIsSearching] = useState(false);
  const [searchText, setSearchText] = useState();

  let { handleGetIcon } = useGetIcon();

  return (
    <div className="SiteSearch">
      { isSearching && (
        <button
          className="SiteSearch__closeBtn"
          onClick={() => setIsSearching(false)}
        >
          {handleGetIcon("close")}
        </button>
      )}

      <input
        type="text"
        id="search"
        name="search"
        placeholder="How can we help?"
        value={searchText}
        onChange={e => setSearchText(e.target.value)}
        className={`SiteSearch__input SiteSearch__input${isSearching ? "--open" : "--closed"}`}
      />

      <button
        className="SiteSearch__searchBtn"
        onClick={() => {
          if (isSearching) {
            console.log("handle search")
          } else {
            setIsSearching(prevState => !prevState)
          }
        }}
      >
        {handleGetIcon("search")}
      </button>
    </div>
  )
}
