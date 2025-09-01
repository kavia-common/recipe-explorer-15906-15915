import React from 'react';
import RecipeCard from './RecipeCard';

// PUBLIC_INTERFACE
function RecipeGrid({ recipes, onSelect, viewMode = 'grid' }) {
  /** Displays recipes in a responsive grid or compact list.
   * Args:
   *  - recipes: Array<Recipe>
   *  - onSelect: function(recipe)
   *  - viewMode: 'grid' | 'list'
   */
  if (!recipes || recipes.length === 0) {
    return <div className="empty-state">No recipes found. Try a different search.</div>;
  }

  return (
    <section className={viewMode === 'grid' ? 'grid' : 'list'}>
      {recipes.map((r) => (
        <RecipeCard
          key={r.id}
          recipe={r}
          onClick={() => onSelect(r)}
          viewMode={viewMode}
        />
      ))}
    </section>
  );
}

export default RecipeGrid;
