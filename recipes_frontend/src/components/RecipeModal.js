import React, { useEffect } from 'react';

// PUBLIC_INTERFACE
function RecipeModal({ recipe, onClose }) {
  /** Accessible modal to display full recipe details.
   * Args:
   *  - recipe: Recipe | null
   *  - onClose: function()
   * Returns: null if no recipe is selected.
   */
  useEffect(() => {
    const onEsc = (e) => { if (e.key === 'Escape') onClose?.(); };
    if (recipe) document.addEventListener('keydown', onEsc);
    return () => document.removeEventListener('keydown', onEsc);
  }, [recipe, onClose]);

  if (!recipe) return null;

  return (
    <div className="modal__backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-label="Recipe details">
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <header className="modal__header">
          <h2 className="modal__title">{recipe.title}</h2>
          <button className="btn btn-icon" aria-label="Close" onClick={onClose}>✕</button>
        </header>
        <div className="modal__body">
          <div className="modal__media">
            <img src={recipe.image} alt={`${recipe.title}`} />
            <div className="modal__quickfacts">
              <span className="badge">{recipe.time} min</span>
              <span className="badge badge--secondary">{recipe.difficulty}</span>
            </div>
          </div>
          <p className="modal__desc">{recipe.description}</p>

          <section className="modal__section">
            <h3>Ingredients</h3>
            <ul className="checklist">
              {(recipe.ingredients || []).map((ing, i) => (
                <li key={i}><span className="check">•</span>{ing}</li>
              ))}
            </ul>
          </section>

          <section className="modal__section">
            <h3>Instructions</h3>
            <ol className="steps">
              {(recipe.steps || []).map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ol>
          </section>

          {recipe.tags?.length ? (
            <section className="modal__section">
              <h3>Tags</h3>
              <div className="card__tags">
                {recipe.tags.map((t) => <span className="chip" key={t}>{t}</span>)}
              </div>
            </section>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default RecipeModal;
