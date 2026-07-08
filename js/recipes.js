// Lightweight browser loader for recipes data.
// Exposes `window.recipes` (array) synchronously and populates it from `js/recipes_clean.json`.
window.recipes = window.recipes || [];
// Ensure a global `recipes` identifier exists for scripts that reference it directly
var recipes = window.recipes;

(function loadRecipes() {
  fetch('js/recipes_clean.json', { cache: 'no-store' })
    .then(resp => {
      if (!resp.ok) throw new Error('HTTP ' + resp.status);
      return resp.json();
    })
    .then(data => {
      if (!Array.isArray(data)) throw new Error('recipes_clean.json did not contain an array');
      // Replace in-place so references remain valid
      window.recipes.length = 0;
      data.forEach(r => window.recipes.push(r));
      // Keep a global identifier in sync
      recipes = window.recipes;
      console.info('recipes.js: loaded', window.recipes.length, 'recipes');
      if (typeof render === 'function') {
        try { render(); } catch (e) { console.warn('render() failed after recipes load', e); }
      }
    })
    .catch(err => console.warn('Failed to load recipes_clean.json:', err && err.message));
})();

// Keep CommonJS compatibility for Node tools that might require this file.
if (typeof module !== 'undefined' && module.exports) module.exports = window.recipes;
