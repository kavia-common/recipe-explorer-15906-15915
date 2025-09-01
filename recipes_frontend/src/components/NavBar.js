import React from 'react';

// PUBLIC_INTERFACE
function NavBar({ title, onToggleView, viewMode }) {
  /** Top navigation bar for the app. Includes brand/title and a view toggle.
   * Args:
   *  - title: string, the app title to show
   *  - onToggleView: function, toggles between grid and list views
   *  - viewMode: 'grid' | 'list'
   */
  return (
    <nav className="navbar">
      <div className="navbar__left">
        <div className="brand">
          <span className="brand__dot" aria-hidden="true" />
          <span className="brand__title">{title}</span>
        </div>
      </div>
      <div className="navbar__center" />
      <div className="navbar__right">
        <button
          className="btn btn-ghost"
          aria-label="Toggle view mode"
          onClick={onToggleView}
          title="Toggle grid/list"
        >
          {viewMode === 'grid' ? '☰ List' : '▦ Grid'}
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
