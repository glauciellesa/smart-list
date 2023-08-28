let meals = [
  {
    name: "Margherita Pizza",
    category: "Main Course",
    image:
      "https://static.toiimg.com/thumb/56868564.cms?imgsize=1948751&width=800&height=800",
    description:
      "A delicious traditional pizza topped with tomatoes, mozzarella, and basil.",
    tags: ["Pizza", "Italian", "Vegetarian"],
    origin: "Italy",
  },
  {
    name: "Chicken Alfredo Pasta",
    price: 12.99,
    category: "Main Course",
    image:
      "https://dinnerthendessert.com/wp-content/uploads/2021/05/Chicken-Alfredo-Pasta-1x1-1.jpg",
    description:
      "Creamy pasta dish with grilled chicken, tossed in a rich Alfredo sauce.",
    tags: ["Pasta", "Italian", "Chicken"],
    origin: "Italy",
    rating: 4,
    offer: "20% off on weekdays",
  },
  {
    name: "Beef Burger",
    price: 8.99,
    category: "Main Course",
    image:
      "https://realfood.tesco.com/media/images/Burger-31LGH-a296a356-020c-4969-86e8-d8c26139f83f-0-1400x919.jpg",
    description:
      "Juicy beef patty topped with cheese, lettuce, tomatoes, and pickles, served in a sesame bun.",
    tags: ["Burger", "American", "Beef"],
    origin: "United States",
    rating: 4,
    offer: "Combo meal at €12.99",
  },
  {
    name: "Caesar Salad",
    price: 7.99,
    category: "Appetizer",
    image:
      "https://www.seriouseats.com/thmb/Fi_FEyVa3_-_uzfXh6OdLrzal2M=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/the-best-caesar-salad-recipe-06-40e70f549ba2489db09355abd62f79a9.jpg",
    description:
      "Classic salad made with romaine lettuce, croutons, Parmesan cheese, and Caesar dressing.",
    tags: ["Salad", "American", "Vegetarian"],
    origin: "United States",
    rating: 4,
    offer: "Add grilled chicken for €2 extra",
  },
  {
    name: "Sushi Rolls",
    price: 14.99,
    category: "Appetizer",
    image:
      "https://www.allrecipes.com/thmb/CBOcP0zp71lR2bn-KUMkgCB92RA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/24228-Sushi-roll-ddmfs-4x3-2914-1839f746d9334814a7a5d93ed45ba082.jpg",
    description:
      "Assorted sushi rolls with fresh fish, rice, and vegetables, served with soy sauce and wasabi.",
    tags: ["Sushi", "Japanese", "Seafood"],
    origin: "Japan",
    rating: 5,
    offer: "50% off on Mondays",
  },
  {
    name: "Chicken Tikka Masala",
    price: 11.99,
    category: "Main Course",
    image:
      "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/06/chicken-tikka-masala-500x500.jpg",
    description:
      "Tender chicken marinated in spices, cooked in a creamy tomato-based sauce, served with naan bread.",
    tags: ["Indian", "Chicken", "Spicy"],
    origin: "India",
    rating: 5,
    offer: "Free delivery on orders above €20",
  },
  {
    name: "Margarita Cocktail",
    price: 8.99,
    category: "Beverage",
    image:
      "https://www.allrecipes.com/thmb/7MYL4WEKP4p1_ouu3wVVstv5aj4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/222416-maragrita-cocktail-ddmfs-3X4-0319-1-35ebaafc51d7410eae4a7991b578dd4c.jpg",
    description:
      "Classic tequila-based cocktail with lime juice and a salted rim.",
    tags: ["Cocktail", "Mexican", "Tequila"],
    origin: "Mexico",
    rating: 4,
    offer: "Happy hour: 2 for 1",
  },
  {
    name: "Caprese Salad",
    price: 9.99,
    category: "Appetizer",
    image:
      "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2019/07/Caprese-Salad-main-1.jpg",
    description:
      "Fresh salad with ripe tomatoes, mozzarella cheese, basil leaves, and balsamic glaze.",
    tags: ["Salad", "Italian", "Vegetarian"],
    origin: "Italy",
    rating: 5,
    offer: "Family-sized portion available",
  },
  {
    name: "Fish and Chips",
    price: 13.99,
    category: "Main Course",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/ff/Fish_and_chips_blackpool.jpg",
    description:
      "Classic British dish with battered fish fillets, served with crispy fries and tartar sauce.",
    tags: ["Fish", "British", "Fried"],
    origin: "United Kingdom",
    rating: 3,
    offer: "Kids eat free on Sundays",
  },
  {
    name: "Chicken Caesar Wrap",
    price: 9.99,
    category: "Main Course",
    image:
      "https://www.tasteandtellblog.com/wp-content/uploads/2017/04/Chicken-Caesar-Wraps-tasteandtellblog.com-horizontal.jpg",
    description:
      "Grilled chicken wrapped in a tortilla with Caesar salad ingredients and dressing.",
    tags: ["Wrap", "American", "Chicken"],
    origin: "United States",
    rating: 4,
    offer: "Lunch combo: Wrap + drink for €11.99",
  },
  {
    name: "Pad Thai",
    price: 11.99,
    category: "Main Course",
    image:
      "data:image/jpeg;base64,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",
    description:
      "Stir-fried rice noodles with shrimp, tofu, bean sprouts, and peanuts, in a tangy sauce.",
    tags: ["Thai", "Noodles", "Seafood"],
    origin: "Thailand",
    rating: 3,
    offer: "Vegetarian option available",
  },
  {
    name: "Beef Tacos",
    price: 10.99,
    category: "Main Course",
    image:
      "https://funwithoutfodmaps.com/wp-content/uploads/2022/07/Low-FODMAP-Beef-Tacos-Square.jpg",
    description:
      "Soft or crispy tortillas filled with seasoned beef, topped with lettuce, cheese, and salsa.",
    tags: ["Mexican", "Tacos", "Beef"],
    origin: "Mexico",
    rating: 4,
    offer: "Taco Tuesday: 50% off",
  },
  {
    name: "Margherita Pasta",
    price: 10.99,
    category: "Main Course",
    image:
      "https://www.nospoonnecessary.com/wp-content/uploads/2018/07/One-Pot-Chicken-Margherita-Pasta-36-2.jpg",
    description:
      "Pasta dish with cherry tomatoes, mozzarella, and fresh basil, tossed in olive oil.",
    tags: ["Pasta", "Italian", "Vegetarian"],
    origin: "Italy",
    rating: 5,
    offer: "Gluten-free option available",
  },
  {
    name: "Chicken Satay",
    price: 8.99,
    category: "Appetizer",
    image:
      "https://hips.hearstapps.com/hmg-prod/images/190418-chicken-satay-horizontal-300-1556573740.jpg?crop=0.8891228070175439xw:1xh;center,top&resize=1200:*",
    description:
      "Grilled marinated chicken skewers served with peanut sauce and cucumber relish.",
    tags: ["Asian", "Chicken", "Grilled"],
    origin: "Southeast Asia",
    rating: 5,
    offer: "Happy hour: 25% off",
  },
  {
    name: "Cheese Platter",
    price: 15.99,
    category: "Appetizer",
    image:
      "https://www.lifeasastrawberry.com/wp-content/uploads/2018/11/how-to-build-a-cheese-plate-1.jpg",
    description:
      "Assortment of fine cheeses, accompanied by crackers, fruits, and honey.",
    tags: ["Cheese", "Appetizer", "Snack"],
    origin: "Various",
    rating: 4,
    offer: "Pair with a bottle of wine at 20% off",
  },
  {
    name: "Chicken Fried Rice",
    price: 9.99,
    category: "Main Course",
    image:
      "https://hips.hearstapps.com/hmg-prod/images/chicken-fried-rice-horizontal-1545488885.png?crop=0.8893333333333334xw:1xh;center,top&resize=1200:*",
    description:
      "Stir-fried rice with chicken, vegetables, and scrambled eggs, seasoned with soy sauce.",
    tags: ["Chinese", "Fried rice", "Chicken"],
    origin: "China",
    rating: 4,
    offer: "Extra portion for €2",
  },
  {
    name: "Garden Salad",
    price: 6.99,
    category: "Appetizer",
    image:
      "https://garlicsaltandlime.com/wp-content/uploads/2022/07/Garden-salad-thumbnail.jpg",
    description:
      "Fresh salad with mixed greens, tomatoes, cucumbers, carrots, and choice of dressing.",
    tags: ["Salad", "Vegetarian", "Healthy"],
    origin: "Various",
    rating: 5,
    offer: "Customize with additional toppings",
  },
  {
    name: "Lemon Meringue Pie",
    price: 8.99,
    category: "Dessert",
    image:
      "data:image/jpeg;base64,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",
    description:
      "Classic pie with a tangy lemon filling, topped with fluffy meringue.",
    tags: ["Pie", "Dessert", "Lemon"],
    origin: "Various",
    rating: 4,
    offer: "Add a scoop of vanilla ice cream for €2",
  },
  {
    name: "Chicken Parmesan",
    price: 13.99,
    category: "Main Course",
    image:
      "https://www.southernliving.com/thmb/rQaGDkAPGa_MeU4eglrAaeuexjg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/southern-living-chicken-parmesan-ddmfs-0047-fe218cb392784e79bfb4bb586685d6f9.jpg",
    description:
      "Breaded chicken cutlets topped with marinara sauce and melted cheese, served with spaghetti.",
    tags: ["Chicken", "Italian", "Comfort food"],
    origin: "Italy",
    rating: 5,
    offer: "Family-sized portion available",
  },
  {
    name: "Beef Stir-Fry",
    price: 12.99,
    category: "Main Course",
    image:
      "https://www.allrecipes.com/thmb/7N-Xq1XMMJw8G0KJv2e0ETUYB2I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/228823-quick-beef-stir-fry-DDMFS-4x3-1f79b031d3134f02ac27d79e967dfef5.jpg",
    description:
      "Sliced beef stir-fried with a variety of vegetables in a savory sauce, served over rice or noodles.",
    tags: ["Beef", "Asian", "Stir-fry"],
    origin: "Various",
    rating: 3,
    offer: "Gluten-free option available",
  },
  {
    name: "Margherita Flatbread",
    price: 9.99,
    category: "Appetizer",
    image:
      "data:image/jpeg;base64,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",
    description:
      "Thin and crispy flatbread topped with fresh tomatoes, mozzarella, and basil.",
    tags: ["Flatbread", "Italian", "Vegetarian"],
    origin: "Italy",
    rating: 5,
    offer: "Half-priced during happy hour",
  },
  {
    name: "Shrimp Scampi",
    price: 14.99,
    category: "Main Course",
    image:
      "https://www.allrecipes.com/thmb/jiV_4f8vXFle1RdFLgd8-_31J3M=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/229960-shrimp-scampi-with-pasta-DDMFS-4x3-e065ddef4e6d44479d37b4523808cc23.jpg",
    description:
      "Garlic butter sautéed shrimp served with pasta and a lemony white wine sauce.",
    tags: ["Seafood", "Italian", "Pasta"],
    origin: "Italy",
    rating: 5,
    offer: "Chef's recommendation",
  },
  {
    name: "Chicken Noodle Soup",
    price: 7.99,
    category: "Soup",
    image:
      "https://www.averiecooks.com/wp-content/uploads/2015/09/chickennoodlesoup-14.jpg",
    description:
      "Hearty soup with tender chicken, vegetables, and egg noodles, simmered in a flavorful broth.",
    tags: ["soup", "comfort food", "Chicken"],
    origin: "Various",
    rating: 2,
    offer: "Bowl + side salad combo at €10.99",
  },
  {
    name: "Chicken Teriyaki",
    price: 11.99,
    category: "Main Course",
    image:
      "https://static01.nyt.com/images/2016/05/28/dining/28COOKING-CHICKEN-TERIYAKI1/28COOKING-CHICKEN-TERIYAKI1-videoSixteenByNineJumbo1600.jpg",
    description:
      "Grilled chicken glazed with a sweet and savory teriyaki sauce, served with steamed rice and vegetables.",
    tags: ["Asian", "Chicken", "teriyaki"],
    origin: "Japan",
    rating: 4,
    offer: "Lunch special: 10% off",
  },
  {
    name: "Margherita Bruschetta",
    price: 8.99,
    category: "Appetizer",
    image:
      "https://www.menu.it/media/ricette/bruschetta-margherita-134555/conversions/B036_Margherita-main.jpg",
    description:
      "Toasted baguette slices topped with fresh tomatoes, mozzarella, and basil.",
    tags: ["bruschetta", "Italian", "vegetarian"],
    origin: "Italy",
    rating: 3,
    offer: "Happy hour: 2 for 1",
  },
  {
    name: "Grilled Salmon",
    price: 15.99,
    category: "Main Course",
    image:
      "https://www.thespruceeats.com/thmb/HgM2h42z1HGEcSWkWk5CgAjDDpQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/how-to-grill-salmon-2216658-hero-01-a9c948f8a238400ebaafc0caf509c7fa.jpg",
    description:
      "Fresh salmon fillet seasoned and grilled to perfection, served with roasted vegetables.",
    tags: ["seafood", "grilled", "healthy"],
    origin: "Various",
    rating: 4,
    offer: "Chef's special",
  },
  {
    name: "Caprese Skewers",
    price: 7.99,
    category: "Appetizer",
    image:
      "https://therecipecritic.com/wp-content/uploads/2022/06/capreseskewers-1.jpg",
    description:
      "Skewers with cherry tomatoes, mozzarella balls, and basil, drizzled with balsamic glaze.",
    tags: ["appetizer", "Italian", "vegetarian"],
    origin: "Italy",
    rating: 4,
    offer: "Perfect for parties",
  },
  {
    name: "Chocolate Lava Cake",
    price: 8.99,
    category: "Dessert",
    image:
      "https://www.melskitchencafe.com/wp-content/uploads/2023/01/updated-lava-cakes7.jpg",
    description:
      "Warm chocolate cake with a gooey, molten chocolate center, served with vanilla ice cream.",
    tags: ["cake", "dessert", "chocolate"],
    origin: "Various",
    rating: 4,
    offer: "Indulge your sweet tooth",
  },
];

export { meals };
