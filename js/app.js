(() => {
  'use strict';

  // ── i18n ──
  const translations = {
    en: {
      siteTitle: '🥗 Healthy Recipes',
      siteSubtitle: 'A curated collection of nutritious & delicious recipes',
      searchPlaceholder: 'Search recipes, ingredients, tags...',
      categoryLabel: 'Category',
      dietLabel: 'Diet',
      sortLabel: 'Sort by',
      sortNameAsc: 'Name (A → Z)',
      sortNameDesc: 'Name (Z → A)',
      sortCalAsc: 'Calories (low → high)',
      sortCalDesc: 'Calories (high → low)',
      sortProteinDesc: 'Protein (high → low)',
      sortPrepAsc: 'Prep time (quick first)',
      resetAll: 'Reset all',
      noResultsTitle: '😕 No recipes found',
      noResultsMsg: 'Try a different search or adjust your filters.',
      recipesCount: 'recipes',
      ofWord: 'of',
      prepTime: 'Prep time',
      servings: 'Servings',
      calories: 'Calories',
      protein: 'Protein',
      carbs: 'Carbs',
      fat: 'Fat',
      quantity: 'Quantity',
      units: 'Units',
      original: 'Original',
      metric: 'Metric',
      imperial: 'Imperial',
      ingredients: '📋 Ingredients',
      instructions: '👨‍🍳 Instructions',
      viewSource: '🔗 View original source',
    },
    pt: {
      siteTitle: '🥗 Receitas Saudáveis',
      siteSubtitle: 'Uma coleção de receitas nutritivas e deliciosas',
      searchPlaceholder: 'Pesquisar receitas, ingredientes, tags...',
      categoryLabel: 'Categoria',
      dietLabel: 'Dieta',
      sortLabel: 'Ordenar por',
      sortNameAsc: 'Nome (A → Z)',
      sortNameDesc: 'Nome (Z → A)',
      sortCalAsc: 'Calorias (baixo → alto)',
      sortCalDesc: 'Calorias (alto → baixo)',
      sortProteinDesc: 'Proteína (alto → baixo)',
      sortPrepAsc: 'Tempo de preparo (rápido)',
      resetAll: 'Limpar filtros',
      noResultsTitle: '😕 Nenhuma receita encontrada',
      noResultsMsg: 'Tente uma pesquisa diferente ou ajuste os filtros.',
      recipesCount: 'receitas',
      ofWord: 'de',
      prepTime: 'Tempo de preparo',
      servings: 'Porções',
      calories: 'Calorias',
      protein: 'Proteína',
      carbs: 'Hidratos',
      fat: 'Gordura',
      quantity: 'Quantidade',
      units: 'Unidades',
      original: 'Original',
      metric: 'Métrico',
      imperial: 'Imperial',
      ingredients: '📋 Ingredientes',
      instructions: '👨‍🍳 Preparação',
      viewSource: '🔗 Ver receita original',
    }
  };

  const tagTranslations = {
    pt: {
      'dessert': 'Sobremesa', 'snack': 'Lanche', 'breakfast': 'Pequeno-almoço',
      'lunch': 'Almoço', 'dinner': 'Jantar', 'main-course': 'Prato Principal',
      'condiment': 'Condimento', 'seasoning': 'Tempero', 'sauce': 'Molho', 'basics': 'Básicos',
      'high-protein': 'Rico em Proteína', 'low-carb': 'Baixo em Hidratos', 'low-calorie': 'Baixo em Calorias',
      'gluten-free': 'Sem Glúten', 'sugar-free': 'Sem Açúcar', 'vegan': 'Vegano',
      'vegetarian': 'Vegetariano', 'dairy-free': 'Sem Lactose', 'keto': 'Keto',
      'weight-loss': 'Perda de Peso', 'chocolate': 'Chocolate', 'fruit': 'Fruta',
      'chicken': 'Frango', 'beef': 'Carne', 'cheese': 'Queijo', 'pasta': 'Massa',
      'pizza': 'Pizza', 'burger': 'Hambúrguer', 'cookies': 'Bolachas', 'cheesecake': 'Cheesecake',
      'sandwich': 'Sanduíche', 'air-fryer': 'Air Fryer', 'easy': 'Fácil', 'quick': 'Rápido',
      'simple': 'Simples', 'kids': 'Crianças', 'frozen': 'Gelado', 'overnight': 'De Véspera',
      'meal-prep': 'Meal Prep', '3-ingredients': '3 Ingredientes', 'brazilian': 'Brasileiro',
      'zero-waste': 'Desperdício Zero', 'no-bake': 'Sem Forno', 'freezer-friendly': 'Congelável',
      'microwave': 'Micro-ondas', 'single-serve': 'Dose Individual', 'brownies': 'Brownies',
      'peanut-butter': 'Manteiga de Amendoim', 'banana': 'Banana', 'flourless': 'Sem Farinha',
      'one-bowl': 'Uma Tigela', 'portuguese': 'Português', 'traditional': 'Tradicional',
      'filling': 'Recheio', 'custard': 'Creme', 'conventual': 'Conventual',
      'glaze': 'Glacê', 'topping': 'Cobertura', 'professional': 'Profissional',
      'pastry-base': 'Base de Pastelaria', 'cake': 'Bolo', 'birthday': 'Aniversário',
      'celebration': 'Celebração', 'oats': 'Aveia', 'bark': 'Bark',
    }
  };

  let currentLang = localStorage.getItem('recipe-lang') || 'en';

  // --- Auto-migrate existing recipes in-memory to new `translations` structure ---
  if (typeof recipes !== 'undefined' && Array.isArray(recipes)) {
    recipes.forEach(r => {
      if (!r.translations) {
        const baseTags = r.tags || [];
        const baseIngredients = r.ingredients || [];
        const baseInstructions = r.instructions || [];
        const baseNutrition = r.nutrition || null;
        r.translations = {
          en: {
            title: r.titleEn || (r.language === 'en' ? r.title : r.titleEn || r.title) || r.title || '',
            description: r.descriptionEn || (r.language === 'en' ? r.description : r.descriptionEn || r.description) || r.description || '',
            tags: baseTags,
            servings: r.servings || '',
            prepTime: r.prepTime || '',
            nutrition: baseNutrition,
            ingredients: baseIngredients,
            instructions: baseInstructions,
          },
          pt: {
            title: r.titlePt || (r.language === 'pt' ? r.title : r.titlePt || r.title) || r.title || '',
            description: r.descriptionPt || (r.language === 'pt' ? r.description : r.descriptionPt || r.description) || r.description || '',
            tags: baseTags,
            servings: r.servings || '',
            prepTime: r.prepTime || '',
            nutrition: baseNutrition,
            ingredients: baseIngredients,
            instructions: baseInstructions,
          }
        };
      }
    });
  }

  function t(key) {
    return translations[currentLang]?.[key] || translations.en[key] || key;
  }

  function formatTagLocalized(tag) {
    if (currentLang !== 'en' && tagTranslations[currentLang]?.[tag]) {
      return tagTranslations[currentLang][tag];
    }
    return tag.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  }

  // ── Recipe title/subtitle based on UI language ──
  function getRecipeDisplayTitle(recipe) {
    const tr = getTranslation(recipe, currentLang);
    const other = getTranslation(recipe, currentLang === 'en' ? 'pt' : 'en');
    return tr.title || other.title || recipe.title || recipe.titleEn || recipe.titlePt || '';
  }

  function getRecipeSubtitle(recipe) {
    const primary = getRecipeDisplayTitle(recipe);
    const otherLang = currentLang === 'en' ? 'pt' : 'en';
    const other = getTranslation(recipe, otherLang).title || recipe.title || recipe.titleEn || recipe.titlePt || '';
    if (other && other !== primary) return other;
    return null;
  }

  function getRecipeDescription(recipe) {
    const tr = getTranslation(recipe, currentLang);
    return tr.description || recipe.description || '';
  }

  // --- Translation helpers (keep backwards compatibility) ---
  function getTranslation(recipe, lang) {
    if (recipe.translations && recipe.translations[lang]) return recipe.translations[lang];
    // Fallback: construct from existing fields
    const isPt = lang === 'pt';
    return {
      title: isPt ? (recipe.titlePt || recipe.title) : (recipe.titleEn || recipe.title),
      description: isPt ? (recipe.descriptionPt || recipe.description) : (recipe.descriptionEn || recipe.description),
      tags: recipe.tags || [],
      servings: recipe.servings || '',
      prepTime: recipe.prepTime || '',
      nutrition: recipe.nutrition || null,
      ingredients: recipe.ingredients || [],
      instructions: recipe.instructions || [],
    };
  }

  function getRecipeTags(recipe) {
    const tr = getTranslation(recipe, currentLang);
    return tr.tags || recipe.tags || [];
  }

  function getRecipeIngredients(recipe) {
    const tr = getTranslation(recipe, currentLang);
    return tr.ingredients || recipe.ingredients || [];
  }

  function getRecipeInstructions(recipe) {
    const tr = getTranslation(recipe, currentLang);
    return tr.instructions || recipe.instructions || [];
  }

  function getRecipePrepTime(recipe) {
    const tr = getTranslation(recipe, currentLang);
    return tr.prepTime || recipe.prepTime || '';
  }

  function getRecipeServings(recipe) {
    const tr = getTranslation(recipe, currentLang);
    return tr.servings || recipe.servings || '';
  }

  function getRecipeNutrition(recipe) {
    const tr = getTranslation(recipe, currentLang);
    return tr.nutrition || recipe.nutrition || null;
  }

  // ── Emoji map for tags ──
  const tagEmoji = {
    'dessert': '🍰', 'snack': '🍿', 'breakfast': '🌅', 'lunch': '🥪', 'dinner': '🌙',
    'main-course': '🍽️', 'condiment': '🧂', 'seasoning': '🌿', 'sauce': '🥫', 'basics': '📦',
    'high-protein': '💪', 'low-carb': '🥬', 'low-calorie': '🔥', 'gluten-free': '🌾',
    'sugar-free': '🚫🍬', 'vegan': '🌱', 'vegetarian': '🥕', 'dairy-free': '🥛',
    'keto': '🥑', 'weight-loss': '⚖️',
    'chocolate': '🍫', 'fruit': '🍎', 'chicken': '🍗', 'beef': '🥩', 'cheese': '🧀',
    'pasta': '🍝', 'pizza': '🍕', 'burger': '🍔', 'cookies': '🍪', 'cheesecake': '🎂',
    'sandwich': '🥪',
    'air-fryer': '🌀', 'easy': '✨', 'quick': '⚡', 'simple': '👌',
    'kids': '👶', 'frozen': '🧊', 'overnight': '🌙', 'meal-prep': '📦',
    '3-ingredients': '3️⃣', 'brazilian': '🇧🇷', 'zero-waste': '♻️',
  };

  const categoryTags = ['dessert', 'main-course', 'snack', 'breakfast', 'condiment'];
  const dietTags = ['high-protein', 'low-carb', 'vegan', 'gluten-free', 'sugar-free', 'low-calorie', 'keto'];

  // ── Card emoji based on primary tag ──
  function getCardEmoji(recipe) {
    const map = {
      'dessert': '🍰', 'main-course': '🍽️', 'snack': '🍿', 'breakfast': '🌅',
      'condiment': '🧂', 'lunch': '🥪',
    };
    const tags = getRecipeTags(recipe);
    for (const tag of tags) {
      if (map[tag]) return map[tag];
    }
    return '🥗';
  }

  // ── Unit Conversion ──
  const conversionTable = {
    // volume: imperial → metric
    'cup': { metric: { unit: 'ml', factor: 236.588 } },
    'cups': { metric: { unit: 'ml', factor: 236.588 } },
    'tbsp': { metric: { unit: 'ml', factor: 14.787 } },
    'tablespoon': { metric: { unit: 'ml', factor: 14.787 } },
    'tablespoons': { metric: { unit: 'ml', factor: 14.787 } },
    'tsp': { metric: { unit: 'ml', factor: 4.929 } },
    'teaspoon': { metric: { unit: 'ml', factor: 4.929 } },
    'teaspoons': { metric: { unit: 'ml', factor: 4.929 } },
    'fl oz': { metric: { unit: 'ml', factor: 29.574 } },
    // weight: imperial → metric
    'oz': { metric: { unit: 'g', factor: 28.35 } },
    'lb': { metric: { unit: 'g', factor: 453.592 } },
    'lbs': { metric: { unit: 'g', factor: 453.592 } },
    // metric → imperial
    'ml': { imperial: { unit: 'fl oz', factor: 0.0338 } },
    'l': { imperial: { unit: 'cups', factor: 4.227 } },
    'g': { imperial: { unit: 'oz', factor: 0.0353 } },
    'kg': { imperial: { unit: 'lb', factor: 2.205 } },
  };

  // Also handle colheres de sopa / colheres de chá (Portuguese)
  const ptUnitMap = {
    'colher de sopa': 'tbsp', 'colheres de sopa': 'tbsp', 'colheres (sopa)': 'tbsp',
    'colher de chá': 'tsp', 'colheres de chá': 'tsp',
    'xic (cha)': 'cup', 'xícara': 'cup', 'xícaras': 'cups', 'copo': 'cup', 'copos': 'cups',
  };

  function parseIngredient(text) {
    // Match patterns like: "2 cups", "1/2 cup", "1½ tsp", "250g", "100ml", "3-4 tbsp"
    const fractionMap = { '½': 0.5, '⅓': 0.333, '⅔': 0.667, '¼': 0.25, '¾': 0.75, '⅛': 0.125 };
    
    // Handle Portuguese units first
    let normalized = text;
    for (const [pt, en] of Object.entries(ptUnitMap)) {
      if (normalized.toLowerCase().includes(pt)) {
        normalized = normalized.replace(new RegExp(pt, 'i'), en);
      }
    }

    // Pattern: number (with optional fraction/range) + unit
    const regex = /([\d]+[\s]?[½⅓⅔¼¾⅛]?|[½⅓⅔¼¾⅛]|[\d]*\.?[\d]+\/[\d]+|[\d]+[–-][\d]+|[\d]*\.?[\d]+)\s*(cup|cups|tbsp|tablespoons?|tsp|teaspoons?|fl oz|oz|lb|lbs|ml|l|g|kg)\b/i;
    const match = normalized.match(regex);
    
    if (!match) return { original: text, qty: null, unit: null, rest: text };

    let qtyStr = match[1].trim();
    let qty;

    // Handle range like "3-4" or "3–4" — use average
    if (/[–-]/.test(qtyStr) && !/\//.test(qtyStr)) {
      const parts = qtyStr.split(/[–-]/);
      qty = (parseFloat(parts[0]) + parseFloat(parts[1])) / 2;
    } else if (qtyStr.includes('/')) {
      const [num, den] = qtyStr.split('/');
      qty = parseFloat(num) / parseFloat(den);
    } else {
      // Handle mixed like "1 ½" or single unicode fraction
      let numPart = 0;
      let fracPart = 0;
      for (const [frac, val] of Object.entries(fractionMap)) {
        if (qtyStr.includes(frac)) {
          fracPart = val;
          qtyStr = qtyStr.replace(frac, '').trim();
          break;
        }
      }
      numPart = qtyStr ? parseFloat(qtyStr) : 0;
      qty = numPart + fracPart;
    }

    const unit = match[2].toLowerCase();
    const rest = text;
    return { original: text, qty, unit, rest, matchStart: match.index, matchEnd: match.index + match[0].length, matchedText: match[0] };
  }

  function convertUnit(qty, unit, targetSystem) {
    const entry = conversionTable[unit];
    if (!entry) return null;
    const conversion = entry[targetSystem];
    if (!conversion) return null;
    return { qty: qty * conversion.factor, unit: conversion.unit };
  }

  function formatQty(num) {
    if (num === 0) return '0';
    // Round to 1 decimal, remove trailing zero
    const rounded = Math.round(num * 10) / 10;
    if (rounded >= 100) return Math.round(rounded).toString();
    if (Number.isInteger(rounded)) return rounded.toString();
    return rounded.toFixed(1);
  }

  function renderIngredient(text, multiplier, unitSystem) {
    const parsed = parseIngredient(text);
    if (!parsed.qty || !parsed.unit) {
      // Try to at least multiply plain numbers like "3 bananas"
      if (multiplier !== 1) {
        const plainNum = text.match(/^([\d]+\.?[\d]*)\s/);
        if (plainNum) {
          const scaled = parseFloat(plainNum[1]) * multiplier;
          return text.replace(plainNum[1], formatQty(scaled));
        }
      }
      return text;
    }

    let displayQty = parsed.qty * multiplier;
    let displayUnit = parsed.unit;

    // Convert units if needed
    const isMetricUnit = ['ml', 'l', 'g', 'kg'].includes(parsed.unit);
    const isImperialUnit = ['cup', 'cups', 'tbsp', 'tablespoon', 'tablespoons', 'tsp', 'teaspoon', 'teaspoons', 'fl oz', 'oz', 'lb', 'lbs'].includes(parsed.unit);

    if (unitSystem === 'metric' && isImperialUnit) {
      const converted = convertUnit(displayQty, parsed.unit, 'metric');
      if (converted) { displayQty = converted.qty; displayUnit = converted.unit; }
    } else if (unitSystem === 'imperial' && isMetricUnit) {
      const converted = convertUnit(displayQty, parsed.unit, 'imperial');
      if (converted) { displayQty = converted.qty; displayUnit = converted.unit; }
    }

    const newText = `${formatQty(displayQty)} ${displayUnit}`;
    return parsed.original.slice(0, parsed.matchStart) + newText + parsed.original.slice(parsed.matchEnd);
  }

  // ── State ──
  let activeCategories = new Set();
  let activeDiets = new Set();
  let searchQuery = '';
  let currentModalRecipe = null;
  let modalMultiplier = 1;
  let modalUnitSystem = 'original'; // 'original', 'metric', 'imperial'

  // ── DOM refs ──
  const searchInput = document.getElementById('searchInput');
  const clearBtn = document.getElementById('clearSearch');
  const searchStats = document.getElementById('searchStats');
  const categoryContainer = document.getElementById('categoryFilters');
  const dietContainer = document.getElementById('dietFilters');
  const sortSelect = document.getElementById('sortSelect');
  const resetBtn = document.getElementById('resetFilters');
  const recipesGrid = document.getElementById('recipesGrid');
  const activeFiltersEl = document.getElementById('activeFilters');
  const modalOverlay = document.getElementById('modalOverlay');
  const modalBody = document.getElementById('modalBody');
  const modalClose = document.getElementById('modalClose');

  // ── Init filter buttons ──
  function renderFilterButtons() {
    categoryTags.forEach(tag => {
      const btn = document.createElement('button');
      btn.className = 'tag-btn';
      btn.textContent = `${tagEmoji[tag] || ''} ${formatTag(tag)}`;
      btn.dataset.tag = tag;
      btn.addEventListener('click', () => toggleFilter('category', tag, btn));
      categoryContainer.appendChild(btn);
    });

    dietTags.forEach(tag => {
      const btn = document.createElement('button');
      btn.className = 'tag-btn';
      btn.textContent = `${tagEmoji[tag] || ''} ${formatTag(tag)}`;
      btn.dataset.tag = tag;
      btn.addEventListener('click', () => toggleFilter('diet', tag, btn));
      dietContainer.appendChild(btn);
    });
  }

  function formatTag(tag) {
    return formatTagLocalized(tag);
  }

  function toggleFilter(type, tag, btn) {
    const set = type === 'category' ? activeCategories : activeDiets;
    if (set.has(tag)) {
      set.delete(tag);
      btn.classList.remove('active');
    } else {
      set.add(tag);
      btn.classList.add('active');
    }
    render();
  }

  // ── Search ──
  function normalizeText(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  }

  function matchesSearch(recipe, query) {
    if (!query) return true;
    const norm = normalizeText(query);
    const trEn = getTranslation(recipe, 'en');
    const trPt = getTranslation(recipe, 'pt');
    const fields = [
      trEn.title || '', trPt.title || '',
      trEn.description || '', trPt.description || '',
      ...(trEn.ingredients || []), ...(trPt.ingredients || []),
      ...(trEn.tags || []), ...(trPt.tags || []),
      ...(trEn.instructions || []), ...(trPt.instructions || []),
    ];
    return fields.some(f => normalizeText(String(f)).includes(norm));
  }

  function highlightText(text, query) {
    if (!query) return escapeHTML(text);
    const norm = normalizeText(query);
    const normText = normalizeText(text);
    const idx = normText.indexOf(norm);
    if (idx === -1) return escapeHTML(text);
    const before = text.slice(0, idx);
    const match = text.slice(idx, idx + query.length);
    const after = text.slice(idx + query.length);
    return `${escapeHTML(before)}<mark>${escapeHTML(match)}</mark>${escapeHTML(after)}`;
  }

  function escapeHTML(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  // ── Filter & Sort ──
  function getFilteredRecipes() {
    let filtered = recipes.filter(r => {
      if (!matchesSearch(r, searchQuery)) return false;
      // check tags across translations
      const allTags = new Set([...(getTranslation(r, 'en').tags || []), ...(getTranslation(r, 'pt').tags || [])]);
      if (activeCategories.size > 0 && ![...allTags].some(t => activeCategories.has(t))) return false;
      if (activeDiets.size > 0 && ![...allTags].some(t => activeDiets.has(t))) return false;
      return true;
    });

    const sort = sortSelect.value;
    filtered.sort((a, b) => {
      switch (sort) {
        case 'name-asc': return getRecipeDisplayTitle(a).localeCompare(getRecipeDisplayTitle(b));
        case 'name-desc': return getRecipeDisplayTitle(b).localeCompare(getRecipeDisplayTitle(a));
        case 'calories-asc':
          return (getRecipeNutrition(a)?.calories || Infinity) - (getRecipeNutrition(b)?.calories || Infinity);
        case 'calories-desc':
          return (getRecipeNutrition(b)?.calories || 0) - (getRecipeNutrition(a)?.calories || 0);
        case 'protein-desc': {
          const pA = parseFloat(getRecipeNutrition(a)?.protein) || 0;
          const pB = parseFloat(getRecipeNutrition(b)?.protein) || 0;
          return pB - pA;
        }
        case 'prep-asc': {
          const tA = parsePrepTime(getRecipePrepTime(a));
          const tB = parsePrepTime(getRecipePrepTime(b));
          return tA - tB;
        }
        default: return 0;
      }
    });

    return filtered;
  }

  function parsePrepTime(str) {
    if (!str) return Infinity;
    const m = str.match(/(\d+)/);
    return m ? parseInt(m[1], 10) : Infinity;
  }

  // ── Render ──
  function render() {
    try {
      const filtered = getFilteredRecipes();
      recipesGrid.innerHTML = '';
      console.info('app.js render: recipes=', (window.recipes||recipes||[]).length, 'filtered=', filtered.length, 'lang=', currentLang);

    // Stats
    if (searchQuery || activeCategories.size || activeDiets.size) {
      searchStats.textContent = `${filtered.length} ${t('ofWord')} ${recipes.length} ${t('recipesCount')}`;
    } else {
      searchStats.textContent = `${recipes.length} ${t('recipesCount')}`;
    }

    // Active filters chips
    activeFiltersEl.innerHTML = '';
    [...activeCategories, ...activeDiets].forEach(tag => {
      const chip = document.createElement('span');
      chip.className = 'active-tag';
      chip.innerHTML = `${escapeHTML(formatTag(tag))} <button data-tag="${escapeHTML(tag)}">&times;</button>`;
      chip.querySelector('button').addEventListener('click', () => removeFilter(tag));
      activeFiltersEl.appendChild(chip);
    });

    if (filtered.length === 0) {
      recipesGrid.innerHTML = `
        <div class="no-results">
          <h3>${t('noResultsTitle')}</h3>
          <p>${t('noResultsMsg')}</p>
        </div>`;
      return;
    }

    filtered.forEach(recipe => {
      const card = document.createElement('article');
      card.className = 'recipe-card';
      card.tabIndex = 0;
      card.setAttribute('role', 'button');
      card.setAttribute('aria-label', `View recipe: ${getRecipeDisplayTitle(recipe)}`);

      const primaryTitle = getRecipeDisplayTitle(recipe);
      const subtitle = getRecipeSubtitle(recipe);
      const metaParts = [];
      const prep = getRecipePrepTime(recipe);
      const serv = getRecipeServings(recipe);
      const nut = getRecipeNutrition(recipe) || {};
      if (prep) metaParts.push(`<span>⏱️ ${escapeHTML(prep)}</span>`);
      if (serv) metaParts.push(`<span>🍽️ ${escapeHTML(serv)}</span>`);
      if (nut.calories) metaParts.push(`<span>🔥 ${nut.calories} kcal</span>`);
      if (nut.protein) metaParts.push(`<span>💪 ${escapeHTML(nut.protein)} ${currentLang === 'pt' ? 'proteína' : 'protein'}</span>`);

      card.innerHTML = `
        <div class="card-header">
          <div>
            <div class="card-title">${highlightText(primaryTitle, searchQuery)}</div>
            ${subtitle ? `<div class="card-title-en">${highlightText(subtitle, searchQuery)}</div>` : ''}
          </div>
          <span class="card-emoji">${getCardEmoji(recipe)}</span>
        </div>
        <p class="card-description">${highlightText(getRecipeDescription(recipe), searchQuery)}</p>
        ${metaParts.length ? `<div class="card-meta">${metaParts.join('')}</div>` : ''}
        <div class="card-tags">
          ${getRecipeTags(recipe).map(t => {
            const isMatch = searchQuery && normalizeText(t).includes(normalizeText(searchQuery));
            return `<span class="card-tag${isMatch ? ' highlight' : ''}">${tagEmoji[t] || ''} ${escapeHTML(formatTag(t))}</span>`;
          }).join('')}
        </div>`;

      card.addEventListener('click', () => openModal(recipe));
      card.addEventListener('keydown', e => { if (e.key === 'Enter') openModal(recipe); });
      recipesGrid.appendChild(card);
    });
    } catch (err) {
      console.error('render() error', err && err.stack || err);
      throw err;
    }
  }

  function removeFilter(tag) {
    activeCategories.delete(tag);
    activeDiets.delete(tag);
    document.querySelectorAll(`.tag-btn[data-tag="${tag}"]`).forEach(btn => btn.classList.remove('active'));
    render();
  }

  // ── Modal ──
  function renderModalContent(recipe) {
    const primaryTitle = getRecipeDisplayTitle(recipe);
    const subtitle = getRecipeSubtitle(recipe);

    // Meta items
    const metaItems = [];
    const prepTime = getRecipePrepTime(recipe);
    const servings = getRecipeServings(recipe);
    const nutrition = getRecipeNutrition(recipe) || {};
    if (prepTime) metaItems.push({ label: t('prepTime'), value: prepTime });
    if (servings) metaItems.push({ label: t('servings'), value: servings });
    if (nutrition.calories) metaItems.push({ label: t('calories'), value: `${Math.round(nutrition.calories * modalMultiplier)}` });
    if (nutrition.protein) {
      const pVal = parseFloat(nutrition.protein);
      metaItems.push({ label: t('protein'), value: pVal ? `${formatQty(pVal * modalMultiplier)}g` : nutrition.protein });
    }
    if (nutrition.carbs) {
      const cVal = parseFloat(nutrition.carbs);
      metaItems.push({ label: t('carbs'), value: cVal ? `${formatQty(cVal * modalMultiplier)}g` : nutrition.carbs });
    }
    if (nutrition.fat) {
      const fVal = parseFloat(nutrition.fat);
      metaItems.push({ label: t('fat'), value: fVal ? `${formatQty(fVal * modalMultiplier)}g` : nutrition.fat });
    }

    // Ingredients HTML with conversion
    const ingredientsHTML = getRecipeIngredients(recipe).map(ing => {
      if (typeof ing === 'string' && ing.startsWith('---') && ing.endsWith('---')) {
        return `<li class="ingredient-separator">${escapeHTML(ing.replace(/---/g, '').trim())}</li>`;
      }
      const converted = renderIngredient(ing, modalMultiplier, modalUnitSystem);
      const changed = converted !== ing;
      return `<li>${changed ? `<span class="converted">${escapeHTML(converted)}</span>` : escapeHTML(ing)}</li>`;
    }).join('');

    // Instructions HTML
    const instructionsHTML = getRecipeInstructions(recipe).map(step =>
      `<li>${escapeHTML(step)}</li>`
    ).join('');

    modalBody.innerHTML = `
      <div class="modal-title">${escapeHTML(primaryTitle)}</div>
      ${subtitle ? `<div class="modal-title-en">${escapeHTML(subtitle)}</div>` : ''}
      <p class="modal-description">${escapeHTML(getRecipeDescription(recipe))}</p>

      ${metaItems.length ? `
        <div class="modal-meta">
          ${metaItems.map(m => `
            <div class="meta-item">
              <span class="meta-value">${escapeHTML(m.value)}</span>
              <span class="meta-label">${escapeHTML(m.label)}</span>
            </div>
          `).join('')}
          ${getRecipeNutrition(recipe)?.note ? `<div class="meta-item"><span class="meta-value" style="font-size:.75rem">ℹ️</span><span class="meta-label">${escapeHTML(getRecipeNutrition(recipe).note)}</span></div>` : ''}
        </div>` : ''}

      <div class="modal-controls">
        <div class="control-group">
          <label>${t('quantity')}</label>
          <div class="multiplier-btns">
            ${[0.5, 1, 2, 3, 4].map(m => `<button class="mult-btn${modalMultiplier === m ? ' active' : ''}" data-mult="${m}">${m === 0.5 ? '½' : m}x</button>`).join('')}
          </div>
        </div>
        <div class="control-group">
          <label>${t('units')}</label>
          <div class="unit-toggle">
            <button class="unit-btn${modalUnitSystem === 'original' ? ' active' : ''}" data-unit="original">${t('original')}</button>
            <button class="unit-btn${modalUnitSystem === 'metric' ? ' active' : ''}" data-unit="metric">${t('metric')}</button>
            <button class="unit-btn${modalUnitSystem === 'imperial' ? ' active' : ''}" data-unit="imperial">${t('imperial')}</button>
          </div>
        </div>
      </div>

      <h3 class="modal-section-title">${t('ingredients')}</h3>
      <ul class="modal-ingredients">${ingredientsHTML}</ul>

      <h3 class="modal-section-title">${t('instructions')}</h3>
      <ol class="modal-instructions">${instructionsHTML}</ol>

      <div class="modal-tags">
        ${getRecipeTags(recipe).map(t => `<span class="card-tag">${tagEmoji[t] || ''} ${escapeHTML(formatTag(t))}</span>`).join('')}
      </div>

      ${recipe.source ? `<a class="modal-source" href="${escapeHTML(recipe.source)}" target="_blank" rel="noopener noreferrer">${t('viewSource')}</a>` : ''}
    `;

    // Attach control listeners
    modalBody.querySelectorAll('.mult-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        modalMultiplier = parseFloat(btn.dataset.mult);
        renderModalContent(recipe);
      });
    });
    modalBody.querySelectorAll('.unit-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        modalUnitSystem = btn.dataset.unit;
        renderModalContent(recipe);
      });
    });
  }

  function openModal(recipe) {
    currentModalRecipe = recipe;
    modalMultiplier = 1;
    modalUnitSystem = 'original';
    renderModalContent(recipe);
    modalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    modalClose.focus();
  }

  function closeModal() {
    modalOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  // ── Event listeners ──
  searchInput.addEventListener('input', () => {
    searchQuery = searchInput.value.trim();
    clearBtn.classList.toggle('visible', searchQuery.length > 0);
    render();
  });

  clearBtn.addEventListener('click', () => {
    searchInput.value = '';
    searchQuery = '';
    clearBtn.classList.remove('visible');
    searchInput.focus();
    render();
  });

  sortSelect.addEventListener('change', render);

  resetBtn.addEventListener('click', () => {
    searchInput.value = '';
    searchQuery = '';
    clearBtn.classList.remove('visible');
    activeCategories.clear();
    activeDiets.clear();
    sortSelect.value = 'name-asc';
    document.querySelectorAll('.tag-btn').forEach(btn => btn.classList.remove('active'));
    render();
  });

  modalClose.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', e => { if (e.target === modalOverlay) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  // ── Keyboard shortcut: focus search with '/' ──
  document.addEventListener('keydown', e => {
    if (e.key === '/' && document.activeElement !== searchInput) {
      e.preventDefault();
      searchInput.focus();
    }
  });

  // ── Init ──
  function updateStaticUI() {
    // Header
    document.querySelector('.hero h1').textContent = t('siteTitle');
    document.querySelector('.hero-subtitle').textContent = t('siteSubtitle');
    searchInput.placeholder = t('searchPlaceholder');

    // Filter labels
    const filterLabels = document.querySelectorAll('.filter-group > label');
    if (filterLabels[0]) filterLabels[0].textContent = t('categoryLabel');
    if (filterLabels[1]) filterLabels[1].textContent = t('dietLabel');
    if (filterLabels[2]) filterLabels[2].textContent = t('sortLabel');

    // Sort options
    const sortOptions = sortSelect.querySelectorAll('option');
    const sortKeys = ['sortNameAsc', 'sortNameDesc', 'sortCalAsc', 'sortCalDesc', 'sortProteinDesc', 'sortPrepAsc'];
    sortOptions.forEach((opt, i) => { if (sortKeys[i]) opt.textContent = t(sortKeys[i]); });

    // Reset button
    resetBtn.textContent = t('resetAll');

    // Language toggle active state
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === currentLang);
    });

    // Re-render filter buttons with translated tags
    categoryContainer.innerHTML = '';
    dietContainer.innerHTML = '';
    renderFilterButtons();
  }

  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('recipe-lang', lang);
    updateStaticUI();
    render();
    if (currentModalRecipe) renderModalContent(currentModalRecipe);
  }

  // Language toggle listener
  document.addEventListener('click', e => {
    if (e.target.classList.contains('lang-btn')) {
      setLanguage(e.target.dataset.lang);
    }
  });

  renderFilterButtons();
  updateStaticUI();
  
  // Expose render globally so recipes.js can trigger re-render after loading data
  window.render = render;
  
  render();
})();
