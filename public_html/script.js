// Bento Box Ingredients Database with Recipes
const ingredientDatabase = {
  proteins: [
    { emoji: '🍗', name: 'Fried Chicken - Crispy & Golden', recipe: 'Coat chicken pieces in seasoned flour, deep fry at 350°F until golden brown (15 mins). Drain on paper towel.' },
    { emoji: '🍖', name: 'Grilled Meat - Teriyaki Glazed', recipe: 'Marinate meat in soy sauce, mirin & ginger for 30 mins. Grill on high heat 4-5 mins each side. Brush with teriyaki glaze.' },
    { emoji: '🥚', name: 'Tamagoyaki - Sweet Rolled Egg', recipe: 'Beat eggs with sugar & mirin. Pour thin layer in pan, roll when set. Repeat until all egg is used. Slice into pieces.' },
    { emoji: '🍤', name: 'Shrimp - Pan-Fried with Garlic', recipe: 'Sauté minced garlic in oil for 30 seconds. Add shrimp, cook 2-3 mins per side until pink. Season with salt & pepper.' },
    { emoji: '🐟', name: 'Fish Fillet - Panko Breaded', recipe: 'Coat fish in flour, then egg, then panko breadcrumbs. Pan-fry in oil 3-4 mins per side until golden & flakes easily.' },
    { emoji: '🥩', name: 'Beef - Braised in Soy Sauce', recipe: 'Brown beef cubes in pot. Add soy sauce, sake, sugar & water. Simmer covered 45 mins until tender.' },
    { emoji: '🍝', name: 'Pasta - Creamy Carbonara', recipe: 'Cook pasta, toss with beaten eggs, parmesan & bacon bits off heat. Stir quickly until creamy. Season with pepper.' },
    { emoji: '🫘', name: 'Edamame Beans - Salted Steamed', recipe: 'Boil water with salt. Add edamame, simmer 5 mins. Drain & sprinkle with sea salt while still warm.' },
    { emoji: '🥔', name: 'Meatball - Sweet & Spicy Glaze', recipe: 'Mix ground meat with breadcrumbs & egg, form balls. Bake at 400°F for 15 mins. Toss in gochujang-honey glaze.' },
    { emoji: '🍚', name: 'Tofu - Marinated & Pan-Fried', recipe: 'Press tofu, cube & marinate in soy-ginger sauce 20 mins. Pan-fry in oil until golden on all sides (8 mins total).' }
  ],
  vegetables: [
    { emoji: '🥕', name: 'Carrot - Glazed with Honey', recipe: 'Slice carrots thin, steam 5 mins. Toss in pan with butter, honey & pinch of salt. Cook 2-3 mins until glossy.' },
    { emoji: '🥦', name: 'Broccoli - Steamed with Sesame Oil', recipe: 'Steam broccoli florets 4-5 mins until tender-crisp. Drizzle with sesame oil, soy sauce & sesame seeds.' },
    { emoji: '🥒', name: 'Cucumber - Quick Pickled', recipe: 'Slice cucumber thin. Mix rice vinegar, sugar & salt, pour over cucumbers. Chill 1 hour. Adds refreshing crunch!' },
    { emoji: '🌽', name: 'Corn - Buttered & Salted', recipe: 'Boil corn for 5-7 mins or steam 10 mins. Brush with melted butter, sprinkle with sea salt & black pepper.' },
    { emoji: '🧅', name: 'Onion - Caramelized & Sweet', recipe: 'Slice onions thin, cook in butter on low heat 30-40 mins, stirring often until golden brown & sweet.' },
    { emoji: '🍅', name: 'Tomato - Fresh with Salt', recipe: 'Slice ripe tomatoes, arrange on plate. Sprinkle with sea salt, fresh basil & light drizzle of olive oil.' },
    { emoji: '🥬', name: 'Lettuce - Crisp Green Salad', recipe: 'Tear lettuce, toss with lemon juice, olive oil, salt & pepper. Add optional cherry tomatoes & cucumber.' },
    { emoji: '🫑', name: 'Bell Pepper - Stir-Fried', recipe: 'Slice peppers, stir-fry in hot oil with garlic 4-5 mins. Season with soy sauce, oyster sauce & a touch of sesame oil.' },
    { emoji: '🥔', name: 'Potato - Boiled & Seasoned', recipe: 'Cube potatoes, boil until fork-tender (12 mins). Drain, toss with butter, parsley, salt & pepper.' },
    { emoji: '🧄', name: 'Garlic Spinach - Sautéed', recipe: 'Sauté minced garlic in oil 1 min. Add spinach, cook 2-3 mins until wilted. Season with salt & pepper.' },
    { emoji: '🍆', name: 'Eggplant - Miso-Glazed', recipe: 'Slice eggplant, pan-fry until soft. Brush with miso-mirin glaze (3:2 ratio). Cook until caramelized (2 mins).' },
    { emoji: '🥦', name: 'Green Beans - Blanched & Buttered', recipe: 'Boil green beans 4-5 mins until tender-crisp. Drain, toss with melted butter, garlic & almond slivers.' }
  ],
  grains: [
    { emoji: '🍚', name: 'White Rice - Fluffy & Steamed', recipe: 'Rinse rice, use 1:1.5 water ratio. Bring to boil, reduce heat, cover & simmer 15 mins. Let rest 5 mins.' },
    { emoji: '🍙', name: 'Rice Ball - Umeboshi Center', recipe: 'Press warm cooked rice into ball shape with umeboshi (pickled plum) in center. Wrap with nori seaweed strip.' },
    { emoji: '🍜', name: 'Noodles - Cold with Dipping Sauce', recipe: 'Cook noodles, chill. Mix dipping sauce: soy, dashi, mirin & wasabi. Serve cold noodles with sauce for dipping.' },
    { emoji: '🥗', name: 'Mixed Salad - Lemon Vinaigrette', recipe: 'Toss mixed greens with lemon juice, olive oil, garlic & honey. Add cherry tomatoes, cucumbers & radishes.' },
    { emoji: '🫔', name: 'Rice Wrap - Sesame Crusted', recipe: 'Roll cooked rice in thin wrapper. Brush with egg wash, roll in sesame seeds. Pan-fry until golden & crispy.' },
    { emoji: '🥖', name: 'Whole Wheat Bread - Toasted', recipe: 'Slice bread, toast in toaster or oven at 375°F until golden brown. Light, fluffy & slightly crispy.' },
    { emoji: '🥐', name: 'Mini Croissant - Buttery Flake', recipe: 'Use store-bought mini croissants or homemade. Bake at 375°F until golden with visible flaky layers (12 mins).' },
    { emoji: '🍚', name: 'Brown Rice - Nutty Flavor', recipe: 'Rinse brown rice, use 1:2.5 water ratio. Bring to boil, reduce heat, cover & simmer 45 mins until tender.' },
    { emoji: '🍤', name: 'Soba Noodles - Buckwheat & Chewy', recipe: 'Boil soba noodles 4-5 mins until al dente. Rinse with cold water. Serve with dipping sauce or in broth.' }
  ],
  fruits: [
    { emoji: '🍎', name: 'Apple - Crispy Sliced Red', recipe: 'Wash apple, core & slice thin. Toss with lemon juice to prevent browning. Serve immediately for crisp texture.' },
    { emoji: '🍊', name: 'Orange - Segments & Sweet', recipe: 'Peel orange, separate into segments. Remove white pith if desired. Serve as is for natural sweetness.' },
    { emoji: '🍌', name: 'Banana - Soft & Creamy', recipe: 'Select ripe banana with few brown spots. Peel & slice into rounds. Serve immediately or refrigerate.' },
    { emoji: '🍇', name: 'Grapes - Red & Juicy', recipe: 'Rinse grapes thoroughly, pat dry. Chill before serving for extra refreshment. Great for snacking!' },
    { emoji: '🍓', name: 'Strawberry - Fresh & Sweet', recipe: 'Wash strawberries, remove stems & hulls. Slice or leave whole. Best eaten within 1 day for peak freshness.' },
    { emoji: '🍑', name: 'Peach - Juicy & Ripe', recipe: 'Select soft peaches that yield slightly to pressure. Slice in half around pit, twist apart & remove pit. Serve fresh.' },
    { emoji: '🥝', name: 'Kiwi - Tangy Green', recipe: 'Peel kiwi with vegetable peeler or spoon. Slice into thin rounds. Tangy sweetness complements other items!' },
    { emoji: '🍒', name: 'Cherries - Tart & Bright', recipe: 'Rinse cherries & pat dry. Remove pits if desired or leave for eating. Serve chilled for best flavor.' },
    { emoji: '🍈', name: 'Melon - Refreshing Cubed', recipe: 'Cut melon in half, scoop seeds. Cube flesh into bite-sized pieces. Chill & serve for refreshing sweetness.' },
    { emoji: '🫐', name: 'Blueberry - Small & Sweet', recipe: 'Rinse blueberries gently, pat dry. Serve as is. Perfect for adding a pop of antioxidants & sweetness!' },
    { emoji: '🍓', name: 'Raspberry - Delicate & Tart', recipe: 'Handle raspberries gently as they bruise easily. Rinse just before serving. Enjoy fresh or with a light dusting of sugar.' }
  ],
  snacks: [
    { emoji: '🍪', name: 'Cookie - Chocolate Chip', recipe: 'Mix butter, sugar & eggs. Add flour, baking soda & chocolate chips. Bake at 375°F for 10-12 mins until golden.' },
    { emoji: '🍩', name: 'Donut - Glazed & Fluffy', recipe: 'Use store-bought donuts or make homemade. Dip in powdered sugar glaze while warm. Light, fluffy & sweet!' },
    { emoji: '🍫', name: 'Chocolate - Dark & Rich', recipe: 'Break chocolate into pieces. Optionally melt & drizzle. Rich, decadent & perfect for chocolate lovers.' },
    { emoji: '🥜', name: 'Peanuts - Roasted & Salted', recipe: 'Raw peanuts roasted at 350°F for 15-20 mins until golden. Toss with salt while hot. Crunchy & satisfying!' },
    { emoji: '🌰', name: 'Chestnut - Honey Roasted', recipe: 'Roast chestnuts at 375°F for 15 mins. Cool, peel & toss with honey drizzle. Sweet & buttery texture!' },
    { emoji: '🍰', name: 'Cake - Vanilla Sponge', recipe: 'Mix flour, sugar, eggs & vanilla. Bake at 350°F for 25 mins. Light spongy crumb with delicate vanilla flavor.' },
    { emoji: '🧁', name: 'Cupcake - Cream Frosting', recipe: 'Bake cupcakes at 350°F for 18-20 mins. Cool & frost with cream cheese frosting. Decadent & portion-controlled!' },
    { emoji: '🍘', name: 'Rice Cracker - Seaweed Flavor', recipe: 'Bake thin rice mixture at 400°F for 10 mins. Brush with nori seaweed paste. Crispy, salty & addictive!' },
    { emoji: '🥒', name: 'Wasabi Pea - Spicy Crunch', recipe: 'Roast peas with wasabi powder, oil & salt at 325°F for 15 mins. Cooling, crunchy & packs a spicy punch!' }
  ]
};

// Get random element from array
function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// Get all categories
function getAllCategories() {
  return Object.keys(ingredientDatabase);
}

// Generate random ingredients
function generateRandomIngredients() {
  const categories = getAllCategories();
  const ingredients = [];
  
  // Get one random ingredient from different categories
  for (let i = 0; i < 4; i++) {
    const category = categories[i % categories.length];
    const ingredient = getRandomElement(ingredientDatabase[category]);
    ingredients.push({
      ...ingredient,
      category: category
    });
  }
  
  return ingredients;
}

// Update bento box display
function updateBentoBox(ingredients) {
  const compartments = document.querySelectorAll('.bento-compartment');
  
  compartments.forEach((comp, index) => {
    const ingredientDiv = comp.querySelector('.ingredient');
    const ingredient = ingredients[index];
    
    // Clear and add new ingredient with animation
    ingredientDiv.classList.remove('new');
    ingredientDiv.textContent = '';
    
    // Trigger reflow to restart animation
    void ingredientDiv.offsetWidth;
    
    ingredientDiv.textContent = ingredient.emoji;
    ingredientDiv.classList.add('new');
  });
}

// Update ingredients list with detailed recipes
function updateIngredientsList(ingredients) {
  const list = document.getElementById('ingredientsList');
  
  list.innerHTML = '';
  
  ingredients.forEach(ingredient => {
    const li = document.createElement('li');
    li.className = 'recipe-item';
    li.innerHTML = `
      <div class="recipe-header">${ingredient.emoji} <strong>${ingredient.name}</strong></div>
      <div class="recipe-text">${ingredient.recipe}</div>
    `;
    list.appendChild(li);
  });
}

// Generate bento box
function generateBentoBox() {
  const ingredients = generateRandomIngredients();
  updateBentoBox(ingredients);
  updateIngredientsList(ingredients);
  
  // Add button animation
  const btn = document.getElementById('generateBtn');
  btn.style.transform = 'scale(0.95)';
  setTimeout(() => {
    btn.style.transform = 'scale(1)';
  }, 100);
}

// Clear bento box
function clearBentoBox() {
  const compartments = document.querySelectorAll('.ingredient');
  compartments.forEach(comp => {
    comp.textContent = '';
  });
  
  const list = document.getElementById('ingredientsList');
  list.innerHTML = '<li class="placeholder">Click "Generate" to create your bento box!</li>';
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
  const generateBtn = document.getElementById('generateBtn');
  const clearBtn = document.getElementById('clearBtn');
  
  generateBtn.addEventListener('click', generateBentoBox);
  clearBtn.addEventListener('click', clearBentoBox);
  
  // Generate on page load for fun
  generateBentoBox();
});
