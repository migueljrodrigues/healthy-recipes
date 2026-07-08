# 🥗 Healthy Recipes

A curated collection of 21 healthy recipes — browse, search, and filter by category, diet, nutrition, and more. Built as a static site for GitHub Pages.

## Features

- **Full-text search** — search across recipe names, ingredients, instructions, and tags (accent-insensitive)
- **Category & diet filters** — filter by dessert, main course, snack, high-protein, low-carb, vegan, etc.
- **Sorting** — sort by name, calories, protein, or prep time
- **Detailed recipe modal** — view ingredients, step-by-step instructions, and nutrition info
- **Responsive design** — works on desktop, tablet, and mobile
- **Keyboard shortcuts** — press `/` to focus search, `Esc` to close modals
- **No build tools** — pure HTML, CSS, and JavaScript

## Deploy to GitHub Pages

1. Create a new GitHub repository (e.g. `healthy-recipes`)
2. Push this folder to the repository:
   ```bash
   cd healthy-recipes
   git init
   git add .
   git commit -m "Initial commit: healthy recipes web app"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/healthy-recipes.git
   git push -u origin main
   ```
3. Go to **Settings → Pages** in your GitHub repository
4. Under **Source**, select **Deploy from a branch**
5. Choose `main` branch and `/ (root)` folder
6. Click **Save**
7. Your site will be live at `https://YOUR_USERNAME.github.io/healthy-recipes/`

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
│   ├── recipes.js      # Recipe data (21 recipes)
│   └── app.js          # Search, filter, sort & modal logic
└── README.md
```

## Recipes Included

| # | Recipe | Tags |
|---|--------|------|
| 1 | Brownie de Maçã (Apple Brownie) | dessert, gluten-free, sugar-free |
| 2 | Massa de Brócolos (Broccoli Pasta) | main-course, high-protein, vegetarian |
| 3 | Egg Cloud Sandwich | lunch, high-protein, low-carb |
| 4 | Marshmallows Saudáveis | dessert, snack, kids, easy |
| 5 | Tempero de Alho e Cebola | condiment, seasoning, zero-waste |
| 6 | Marshmallow de Maçã | dessert, snack, sugar-free |
| 7 | Chocolate Yogurt Cheesecake | dessert, high-protein, chocolate |
| 8 | Maionese Caseira | condiment, sauce, easy |
| 9 | Raspberry Cheesecake Bites | dessert, snack, weight-loss |
| 10 | Raspberry Yogurt Bark | dessert, low-calorie, frozen |
| 11 | Zero Carb Buffalo Ranch Pizza | main-course, high-protein, keto |
| 12 | Maionese de Ovos Cozidos | condiment, high-protein, low-carb |
| 13 | Bananinha | dessert, snack, brazilian |
| 14 | Chocolate de Banana Saudável | dessert, chocolate, easy |
| 15 | Cloud Cream Cheese Greek Yoghurt | breakfast, high-protein, overnight |
| 16 | Cabbage Hamburger | main-course, low-carb, burger |
| 17 | Chocolate Pudding | dessert, high-protein, chocolate |
| 18 | Chocolate Protein Fluff | dessert, high-protein, low-calorie |
| 19 | Cabbage Lasagna | main-course, high-protein, low-carb |
| 20 | Vegan Chocolate Flan | dessert, vegan, gluten-free |
| 21 | 3-Ingredient Protein Cookies | dessert, high-protein, sugar-free |
