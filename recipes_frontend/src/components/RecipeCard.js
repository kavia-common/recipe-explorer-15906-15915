import React from 'react';

// PUBLIC_INTERFACE
function RecipeCard({ recipe, onClick, viewMode = 'grid' }) {
  /** A compact card showing recipe preview information.
   * Args:
   *  - recipe: Recipe
   *  - onClick: function()
   *  - viewMode: 'grid' | 'list'
   */
  const { title, description, image, time, difficulty, tags } = recipe;
  if (viewMode === 'list') {
    return (
      <article className="card card--list" onClick={onClick} role="button" tabIndex={0}
        onKeyDown={(e)=>{ if(e.key==='Enter') onClick(); }}>
        <img className="card__thumb" src={image} alt="" />
        <div className="card__body">
          <h3 className="card__title">{title}</h3>
          <p className="card__desc">{description}</p>
          <div className="card__meta">
            <span className="badge">{time} min</span>
            <span className="badge badge--secondary">{difficulty}</span>
          </div>
        </div>
        <div className="card__tags">
          {(tags || []).slice(0, 3).map((t) => <span key={t} className="chip">{t}</span>)}
        </div>
      </article>
    );
  }

  return (
    <article className="card" onClick={onClick} role="button" tabIndex={0}
      onKeyDown={(e)=>{ if(e.key==='Enter') onClick(); }}>
      <div className="card__image">
        <img src={image} alt="" />
      </div>
      <div className="card__content">
        <h3 className="card__title">{title}</h3>
        <p className="card__desc">{description}</p>
        <div className="card__meta">
          <span className="badge">{time} min</span>
          <span className="badge badge--secondary">{difficulty}</span>
        </div>
        <div className="card__tags">
          {(tags || []).slice(0, 3).map((t) => <span key={t} className="chip">{t}</span>)}
        </div>
      </div>
    </article>
  );
}

export default RecipeCard;
