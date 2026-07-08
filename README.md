# 🥗 Healthy Recipes

A curated collection of 43 healthy recipes — browse, search, and filter by category, diet, nutrition, and more. Built as a static site for GitHub Pages.

🔗 **Live Demo**: https://migueljrodrigues.github.io/healthy-recipes/

## Features

- **Full-text search** — search across recipe names, ingredients, instructions, and tags (accent-insensitive)
- **Category & diet filters** — filter by dessert, main course, snack, high-protein, low-carb, vegan, etc.
- **Sorting** — sort by name, calories, protein, or prep time
- **Detailed recipe modal** — view ingredients, step-by-step instructions, and nutrition info
- **Responsive design** — works on desktop, tablet, and mobile
- **Keyboard shortcuts** — press `/` to focus search, `Esc` to close modals
- **No build tools** — pure HTML, CSS, and JavaScript

## GitHub Repository

Repository: https://github.com/migueljrodrigues/healthy-recipes

## Deploy to GitHub Pages

This site is already deployed at https://migueljrodrigues.github.io/healthy-recipes/

To deploy your own fork:
1. Fork this repository
2. Go to **Settings → Pages** in your GitHub repository
3. Under **Source**, select **Deploy from a branch**
4. Choose `main` branch and `/ (root)` folder
5. Click **Save**
6. Your site will be live at `https://YOUR_USERNAME.github.io/healthy-recipes/`

## Run Locally

Simply open `index.html` in your browser, or use a local server:

```bash
# Python
python3 -m http.server 8000

# Node.js
npx serve .
```

Then visit `http://localhost:8000`.

## Project Structure

```
healthy-recipes/
├── index.html          # Main HTML page
├── css/
│   └── styles.css      # All styles
├── js/
│   ├── recipes_clean.json  # Recipe data (43 recipes in English & Portuguese)
│   ├── recipes.js          # Legacy recipe data
│   └── app.js              # Search, filter, sort & modal logic
└── README.md
```

## Recipe Collection

**43 recipes** including:
- High-protein dishes (chicken crust pizza, protein mozzarella sticks, etc.)
- Low-carb & keto options (zucchini wraps, cabbage lasagna, etc.)
- Healthy desserts (protein cookies, cottage cheese cookie dough, frozen grape ice cream, etc.)
- Main courses (burger bombs, meatball lasagna, broccoli pasta, etc.)
- Snacks & appetizers
- Condiments & sauces

All recipes are available in both **English** and **Portuguese**.

## Recipe Categories

- 🍽️ Main Courses
- 🍰 Desserts & Sweets
- 🥤 Snacks & Appetizers
- 🧂 Condiments & Sauces
- 💪 High-Protein Options
- 🥬 Low-Carb & Keto
- 🌱 Vegan & Vegetarian
- 🚫 Gluten-Free & Sugar-Free
