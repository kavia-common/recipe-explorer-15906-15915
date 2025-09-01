import React, { useMemo, useState, useEffect } from 'react';
import './App.css';
import './index.css';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import RecipeGrid from './components/RecipeGrid';
import RecipeModal from './components/RecipeModal';
import recipesData from './data/recipes';

// PUBLIC_INTERFACE
function App() {
  /**
   * A modern, minimalistic recipe explorer app with:
   * - Top navigation bar
   * - Searchable recipe grid/list
   * - Modal for viewing recipe details
   * Theme: Light (with CSS variables defined in App.css), colors applied via CSS variables.
   */
  const [query, setQuery] = useState('');
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'list'
  const [theme] = useState('light'); // fixed light theme as per requirements

  useEffect(() => {
    // Ensure the app uses the light theme
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return recipesData;
    return recipesData.filter((r) => {
      const hay = [
        r.title,
        r.description,
        ...(r.tags || []),
        ...(r.ingredients || []),
      ]
        .join(' ')
        .toLowerCase();
      return hay.includes(q);
    });
  }, [query]);

  const openRecipe = (recipe) => setSelectedRecipe(recipe);
  const closeRecipe = () => setSelectedRecipe(null);

  return (
    <div className="app-root">
      <NavBar
        title="Recipe Explorer"
        onToggleView={() => setViewMode((m) => (m === 'grid' ? 'list' : 'grid'))}
        viewMode={viewMode}
      />
      <main className="container">
        <SearchBar value={query} onChange={setQuery} />
        <RecipeGrid
          recipes={filtered}
          onSelect={openRecipe}
          viewMode={viewMode}
        />
      </main>
      <RecipeModal
        recipe={selectedRecipe}
        onClose={closeRecipe}
      />
      <footer className="footer">
        <span>Made with ♥ for food lovers</span>
      </footer>
    </div>
  );
}

export default App;
