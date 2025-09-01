import React from 'react';

// PUBLIC_INTERFACE
function SearchBar({ value, onChange }) {
  /** A searchable input field to filter recipes.
   * Args:
   *  - value: string
   *  - onChange: function(newValue: string)
   */
  return (
    <div className="searchbar">
      <div className="searchbar__field">
        <span className="searchbar__icon" aria-hidden="true">🔎</span>
        <input
          type="text"
          className="input"
          placeholder="Search recipes by name, ingredient, or tag…"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          aria-label="Search recipes"
        />
      </div>
    </div>
  );
}

export default SearchBar;
