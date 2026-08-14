import appleImg from '../assets/products/apple.webp'
import chickenMaggiImg from '../assets/products/chicken maagi.webp'
import chikooImg from '../assets/products/chikko.webp'
import coffeeImg from '../assets/products/cofee.webp'
import dragonFruitImg from '../assets/products/dragon.webp'
import eggMaggiImg from '../assets/products/egg maagi.webp'
import figImg from '../assets/products/fig.webp'
import lemonImg from '../assets/products/lemon.webp'
import mintImg from '../assets/products/mint.webp'
import mosambiImg from '../assets/products/mosambi.webp'
import paneerMaggiImg from '../assets/products/panner maagi.webp'
import plainMaggiImg from '../assets/products/plain maagi.webp'
import pomegranateImg from '../assets/products/pomogranate.jpg'
import popcornImg from '../assets/products/pop.webp'
import tenderCoconutImg from '../assets/products/tender coconut.webp'
import vegBurgerImg from '../assets/products/veg burger.webp'
import watermelonImg from '../assets/products/watermelon.webp'
import blackCoffeeImg from '../assets/products/balck coffee.avif'
import blackTeaImg from '../assets/products/black tea.avif'
import butterscotchMilkshakeImg from '../assets/products/butterscotch.avif'
import gingerTeaImg from '../assets/ginger tea.webp'
import lemonSodaImg from '../assets/products/lemon soda.avif'
import muskmelonImg from '../assets/products/muskmelon.avif'
import vanillaMilkshakeImg from '../assets/vanilla milkshake.webp'
import avocadoImg from '../assets/avocado.webp'
import badamMilkImg from '../assets/badam milk.webp'
import blueberryMojitoImg from '../assets/blueberry mojito.webp'
import cheeseMaggiImg from '../assets/cheese_maggi_01.png'
import chickenBurgerImg from '../assets/chicken burger.webp'
import chickenNuggetsImg from '../assets/chicken nuggets.webp'
import coldCoffeeImg from '../assets/cold coffee.webp'
import greenTeaImg from '../assets/green tea.webp'
import horlicksImg from '../assets/horlicks.webp'
import lemonTeaImg from '../assets/lemon tea.webp'
import mangoMilkshakeImg from '../assets/mango milkshake.webp'
import masalaFriesImg from '../assets/masala french fries.webp'
import periPeriFriesImg from '../assets/peri peri french fries.webp'
import pistaMilkshakeImg from '../assets/pista shake.webp'
import roseMilkImg from '../assets/rosemilk.webp'
import boostImg from '../assets/products/boost.webp'
import milkImg from '../assets/products/milk.webp'
import vegMaggiImg from '../assets/veg maagi.webp'
import vegMomoImg from '../assets/veg momo.webp'
import chickenMomoImg from '../assets/chicken momo.webp'
import paneerMomoImg from '../assets/panner momo.webp'
import mushroomMomoImg from '../assets/mushroom momo.webp'
import paneerRollImg from '../assets/panner roll.webp'
import teaImg from '../assets/tea.webp'
import breadOmeletteImg from '../assets/bread omlette.webp'
import orangeImg from '../assets/orange.webp'
import redBananaImg from '../assets/redbanana.webp'
import strawberryMojitoImg from '../assets/strawberry mojito.webp'
import cheeseBreadOmeletteImg from '../assets/cheese bread omlette.webp'
import chickenBreadOmeletteImg from '../assets/chicken bread omlette.webp'
import pistaMilkImg from '../assets/pista milk.webp'
import saladImg from '../assets/salad.webp'
import frenchFriesImg from '../assets/french fries.webp'
import chocolateMilkshakeImg from '../assets/chocolate milkshake.webp'
import kitkatMilkshakeImg from '../assets/kitkat milkshake.webp'
import oreoShakeImg from '../assets/oreo shake.webp'

export const CATEGORIES = [
  { id: 'all', label: 'All', emoji: '🍽️' },
  { id: 'tea-coffee', label: 'Tea & Coffee', emoji: '🍵' },
  { id: 'fresh-juices', label: 'Fresh Juices', emoji: '🍊' },
  { id: 'bread-omelette', label: 'Bread Omelette', emoji: '🍳' },
  { id: 'maggi', label: 'Maggi', emoji: '🍜' },
  { id: 'french-fries', label: 'French Fries', emoji: '🍟' },
  { id: 'momos', label: 'Momos', emoji: '🥟' },
  { id: 'sandwiches', label: 'Sandwiches', emoji: '🥪' },
  { id: 'burgers-snacks', label: 'Burgers & Snacks', emoji: '🍔' },
  { id: 'fruit-salad', label: 'Fruit Salad', emoji: '🍎' },
  { id: 'milkshakes', label: 'Milkshakes', emoji: '🥤' },
  { id: 'milk-special', label: 'Milk & Special Drinks', emoji: '🥛' },
  { id: 'mojitos', label: 'Mojitos', emoji: '🍹' },
]

export const POPULAR_ITEMS = [
  { id: 'chicken-burger', label: 'Chicken Burger', price: 110 },
  { id: 'chicken-popcorn', label: 'Chicken Popcorn', price: 110 },
  { id: 'chicken-nuggets', label: 'Chicken Nuggets', price: 110 },
  { id: 'mango-milkshake', label: 'Mango Milkshake', price: 100 },
  { id: 'blueberry-mojito', label: 'Blueberry Mojito', price: 110 },
  { id: 'avocado-juice', label: 'Avocado Juice', price: 100 },
  { id: 'peri-peri-fries', label: 'Peri Peri French Fries', price: 90 },
]

export const MENU_ITEMS = [
  {
    id: 'tea',
    name: 'Tea',
    category: 'tea-coffee',
    price: 15,
    type: 'veg',
    description: 'Classic refreshing tea brewed fresh, served piping hot.',
    image: teaImg,
  },
  {
    id: 'lemon-tea',
    name: 'Lemon Tea',
    category: 'tea-coffee',
    price: 20,
    type: 'veg',
    description: 'Zesty black tea with a squeeze of fresh lemon.',
    image: lemonTeaImg,
  },
  {
    id: 'green-tea',
    name: 'Green Tea',
    category: 'tea-coffee',
    price: 20,
    type: 'veg',
    description: 'Light, soothing green tea with delicate floral notes.',
    image: greenTeaImg,
  },
  {
    id: 'ginger-tea',
    name: 'Ginger Tea',
    category: 'tea-coffee',
    price: 20,
    type: 'veg',
    description: 'Warming tea infused with fresh crushed ginger.',
    image: gingerTeaImg,
  },
  {
    id: 'black-tea',
    name: 'Black Tea',
    category: 'tea-coffee',
    price: 20,
    type: 'veg',
    description: 'Bold, robust tea without milk, with a clean finish.',
    image: blackTeaImg,
  },
  {
    id: 'coffee',
    name: 'Coffee',
    category: 'tea-coffee',
    price: 20,
    type: 'veg',
    description: 'Smooth, aromatic coffee blended with creamy milk.',
    image: coffeeImg,
  },
  {
    id: 'black-coffee',
    name: 'Black Coffee',
    category: 'tea-coffee',
    price: 20,
    type: 'veg',
    description: 'Strong, pure coffee for those who love it bold.',
    image: blackCoffeeImg,
  },
  {
    id: 'boost',
    name: 'Boost',
    category: 'tea-coffee',
    price: 20,
    type: 'veg',
    description: 'Energising malt drink that boosts your day.',
    image: boostImg,
  },
  {
    id: 'horlicks',
    name: 'Horlicks',
    category: 'tea-coffee',
    price: 20,
    type: 'veg',
    description: 'Classic malt drink, warm and comforting.',
    image: horlicksImg,
  },
  {
    id: 'fresh-lemon-juice',
    name: 'Fresh Lemon Juice',
    category: 'fresh-juices',
    price: 30,
    type: 'veg',
    description: 'Tart, refreshing lemon juice freshly squeezed.',
    image: lemonImg,
  },
  {
    id: 'lemon-soda',
    name: 'Lemon Soda (Sweet / Salt)',
    category: 'fresh-juices',
    price: 40,
    type: 'veg',
    description: 'Fizzy lemon cooler, served sweet or salted as you like.',
    image: lemonSodaImg,
  },
  {
    id: 'orange-juice',
    name: 'Orange Juice',
    category: 'fresh-juices',
    price: 60,
    type: 'veg',
    description: 'Sunshine-sweet orange juice, squeezed to order.',
    image: orangeImg,
  },
  {
    id: 'mosambi-juice',
    name: 'Mosambi Juice',
    category: 'fresh-juices',
    price: 60,
    type: 'veg',
    description: 'Light, tangy-sweet sweet lime juice, chilled and fresh.',
    image: mosambiImg,
  },
  {
    id: 'watermelon-juice',
    name: 'Watermelon Juice',
    category: 'fresh-juices',
    price: 60,
    type: 'veg',
    description: 'Icy-cold watermelon juice packed with summer coolness.',
    image: watermelonImg,
    imagePosition: 'center 20%',
  },
  {
    id: 'muskmelon-juice',
    name: 'Muskmelon Juice',
    category: 'fresh-juices',
    price: 60,
    type: 'veg',
    description: 'Sweet muskmelon juice, creamy and refreshing.',
    image: muskmelonImg,
  },
  {
    id: 'chikoo-juice',
    name: 'Chikoo Juice',
    category: 'fresh-juices',
    price: 70,
    type: 'veg',
    description: 'Rich, caramel-sweet chikoo blended into a smooth juice.',
    image: chikooImg,
  },
  {
    id: 'red-banana-juice',
    name: 'Red Banana Juice',
    category: 'fresh-juices',
    price: 70,
    type: 'veg',
    description: 'Creamy red banana shake-style juice, naturally sweet.',
    image: redBananaImg,
    imagePosition: 'center 20%',
  },
  {
    id: 'pomegranate-juice',
    name: 'Pomegranate Juice',
    category: 'fresh-juices',
    price: 70,
    type: 'veg',
    description: 'Ruby-red pomegranate juice bursting with antioxidants.',
    image: pomegranateImg,
    imagePosition: 'center 20%',
  },
  {
    id: 'fig-juice',
    name: 'Fig Juice',
    category: 'fresh-juices',
    price: 70,
    type: 'veg',
    description: 'Naturally sweet fig juice, thick and wholesome.',
    image: figImg,
  },
  {
    id: 'apple-juice',
    name: 'Apple Juice',
    category: 'fresh-juices',
    price: 70,
    type: 'veg',
    description: 'Crisp apple juice with a clean, orchard-fresh taste.',
    image: appleImg,
  },
  {
    id: 'dragon-fruit-juice',
    name: 'Dragon Fruit Juice',
    category: 'fresh-juices',
    price: 70,
    type: 'veg',
    description: 'Vibrant pink dragon fruit juice, light and exotic.',
    image: dragonFruitImg,
  },
  {
    id: 'avocado-juice',
    name: 'Avocado Juice',
    category: 'fresh-juices',
    price: 100,
    type: 'veg',
    description: 'Silky avocado blended with milk for a rich treat.',
    image: avocadoImg,
  },
  {
    id: 'tender-coconut',
    name: 'Tender Coconut',
    category: 'fresh-juices',
    price: 100,
    type: 'veg',
    description: 'Cool tender coconut water with soft, juicy malai.',
    image: tenderCoconutImg,
  },
  {
    id: 'bread-omelette',
    name: 'Bread Omelette',
    category: 'bread-omelette',
    price: 50,
    type: 'nonveg',
    description: 'Fluffy omelette served with toasted bread. Contains egg.',
    image: breadOmeletteImg,
  },
  {
    id: 'cheese-bread-omelette',
    name: 'Cheese Bread Omelette',
    category: 'bread-omelette',
    price: 60,
    type: 'nonveg',
    description: 'Omelette loaded with melted cheese and toasted bread. Contains egg.',
    image: cheeseBreadOmeletteImg,
  },
  {
    id: 'chicken-bread-omelette',
    name: 'Chicken Bread Omelette',
    category: 'bread-omelette',
    price: 70,
    type: 'nonveg',
    description: 'Hearty omelette with spiced chicken and toasted bread. Contains egg.',
    image: chickenBreadOmeletteImg,
  },
  {
    id: 'plain-maggi',
    name: 'Plain Maggi',
    category: 'maggi',
    price: 50,
    type: 'veg',
    description: 'Classic steaming Maggi with masala, a comfort classic.',
    image: plainMaggiImg,
  },
  {
    id: 'egg-maggi',
    name: 'Egg Maggi',
    category: 'maggi',
    price: 60,
    type: 'nonveg',
    description: 'Maggi tossed with scrambled egg. Contains egg.',
    image: eggMaggiImg,
  },
  {
    id: 'veg-maggi',
    name: 'Veg Maggi',
    category: 'maggi',
    price: 60,
    type: 'veg',
    description: 'Maggi loaded with crunchy vegetables and masala.',
    image: vegMaggiImg,
  },
  {
    id: 'cheese-maggi',
    name: 'Cheese Maggi',
    category: 'maggi',
    price: 60,
    type: 'veg',
    description: 'Creamy Maggi topped with gooey melted cheese.',
    image: cheeseMaggiImg,
  },
  {
    id: 'chicken-maggi',
    name: 'Chicken Maggi',
    category: 'maggi',
    price: 70,
    type: 'nonveg',
    description: 'Spicy Maggi with tender chunks of chicken.',
    image: chickenMaggiImg,
  },
  {
    id: 'paneer-maggi',
    name: 'Paneer Maggi',
    category: 'maggi',
    price: 70,
    type: 'veg',
    description: 'Maggi with soft paneer cubes in a rich masala.',
    image: paneerMaggiImg,
  },
  {
    id: 'french-fries',
    name: 'French Fries',
    category: 'french-fries',
    price: 80,
    type: 'veg',
    description: 'Crispy golden fries, salted and served hot.',
    image: frenchFriesImg,
  },
  {
    id: 'peri-peri-fries',
    name: 'Peri Peri French Fries',
    category: 'french-fries',
    price: 90,
    type: 'veg',
    description: 'Fries dusted with fiery peri peri spice.',
    image: periPeriFriesImg,
  },
  {
    id: 'masala-fries',
    name: 'Masala French Fries',
    category: 'french-fries',
    price: 100,
    type: 'veg',
    description: 'Fries tossed in a punchy desi masala blend.',
    image: masalaFriesImg,
  },
  {
    id: 'veg-momos',
    name: 'Veg Momos',
    category: 'momos',
    price: 80,
    type: 'veg',
    description: 'Steamed dumplings with a juicy vegetable filling.',
    image: vegMomoImg,
  },
  {
    id: 'chicken-momos',
    name: 'Chicken Momos',
    category: 'momos',
    price: 90,
    type: 'nonveg',
    description: 'Steamed dumplings packed with spiced chicken.',
    image: chickenMomoImg,
  },
  {
    id: 'paneer-momos',
    name: 'Paneer Momos',
    category: 'momos',
    price: 90,
    type: 'veg',
    description: 'Soft paneer and veggie dumplings, steamed to perfection.',
    image: paneerMomoImg,
  },
  {
    id: 'mushroom-momos',
    name: 'Mushroom Momos',
    category: 'momos',
    price: 90,
    type: 'veg',
    description: 'Earthy mushroom and vegetable dumplings.',
    image: mushroomMomoImg,
  },
  {
    id: 'veg-sandwich',
    name: 'Veg Sandwich',
    category: 'sandwiches',
    price: 70,
    type: 'veg',
    description: 'Grilled sandwich stacked with fresh veggies and chutney.',
    image: vegBurgerImg,
  },
  {
    id: 'egg-sandwich',
    name: 'Egg Sandwich',
    category: 'sandwiches',
    price: 80,
    type: 'nonveg',
    description: 'Grilled sandwich with seasoned egg filling. Contains egg.',
    image: eggMaggiImg,
  },
  {
    id: 'paneer-sandwich',
    name: 'Paneer Sandwich',
    category: 'sandwiches',
    price: 80,
    type: 'veg',
    description: 'Crispy grilled sandwich with spiced paneer filling.',
    image: paneerMaggiImg,
  },
  {
    id: 'chicken-sandwich',
    name: 'Chicken Sandwich',
    category: 'sandwiches',
    price: 90,
    type: 'nonveg',
    description: 'Toasted sandwich loaded with juicy chicken.',
    image: chickenMaggiImg,
  },
  {
    id: 'veg-burger',
    name: 'Veg Burger',
    category: 'burgers-snacks',
    price: 90,
    type: 'veg',
    description: 'Crispy veggie patty with fresh toppings in a soft bun.',
    image: vegBurgerImg,
  },
  {
    id: 'chicken-burger',
    name: 'Chicken Burger',
    category: 'burgers-snacks',
    price: 110,
    type: 'nonveg',
    description: 'Juicy chicken burger stacked with crisp lettuce and sauce.',
    image: chickenBurgerImg,
  },
  {
    id: 'chicken-nuggets',
    name: 'Chicken Nuggets',
    category: 'burgers-snacks',
    price: 110,
    type: 'nonveg',
    description: 'Crispy golden nuggets of tender chicken.',
    image: chickenNuggetsImg,
  },
  {
    id: 'chicken-popcorn',
    name: 'Chicken Popcorn',
    category: 'burgers-snacks',
    price: 110,
    type: 'nonveg',
    description: 'Bite-sized crunchy chicken popcorn, perfect for snacking.',
    image: popcornImg,
  },
  {
    id: 'paneer-roll',
    name: 'Paneer Roll',
    category: 'burgers-snacks',
    price: 80,
    type: 'veg',
    description: 'Soft roll wrapped around spiced paneer and veggies.',
    image: paneerRollImg,
  },
  {
    id: 'fruit-salad',
    name: 'Fruit Salad',
    category: 'fruit-salad',
    price: 50,
    type: 'veg',
    addon: { label: 'Add Ice Cream', price: 10 },
    description: 'A bowl of seasonal fresh fruits, sweet and juicy.',
    image: saladImg,
    imagePosition: 'center 20%',
  },
  {
    id: 'vanilla-milkshake',
    name: 'Vanilla Milkshake',
    category: 'milkshakes',
    price: 90,
    type: 'veg',
    addon: { label: 'Add Ice Cream', price: 10 },
    description: 'Creamy vanilla shake topped with a swirl of ice cream.',
    image: vanillaMilkshakeImg,
  },
  {
    id: 'butterscotch-milkshake',
    name: 'Butterscotch Milkshake',
    category: 'milkshakes',
    price: 100,
    type: 'veg',
    addon: { label: 'Add Ice Cream', price: 10 },
    description: 'Rich butterscotch shake with caramel-buttery notes.',
    image: butterscotchMilkshakeImg,
  },
  {
    id: 'chocolate-milkshake',
    name: 'Chocolate Milkshake',
    category: 'milkshakes',
    price: 100,
    type: 'veg',
    addon: { label: 'Add Ice Cream', price: 10 },
    description: 'Decadent chocolate shake, thick, creamy and indulgent.',
    image: chocolateMilkshakeImg,
  },
  {
    id: 'oreo-milkshake',
    name: 'Oreo Milkshake',
    category: 'milkshakes',
    price: 100,
    type: 'veg',
    addon: { label: 'Add Ice Cream', price: 10 },
    description: 'Crunchy Oreo cookies blended into a creamy shake.',
    image: oreoShakeImg,
  },
  {
    id: 'kitkat-milkshake',
    name: 'KitKat Milkshake',
    category: 'milkshakes',
    price: 100,
    type: 'veg',
    addon: { label: 'Add Ice Cream', price: 10 },
    description: 'Chocolatey KitKat pieces in a rich, milky shake.',
    image: kitkatMilkshakeImg,
    imgZoom: true,
  },
  {
    id: 'mango-milkshake',
    name: 'Mango Milkshake',
    category: 'milkshakes',
    price: 100,
    type: 'veg',
    addon: { label: 'Add Ice Cream', price: 10 },
    description: 'Sunny mango shake made with ripe Alphonso mangoes.',
    image: mangoMilkshakeImg,
  },
  {
    id: 'pista-milkshake',
    name: 'Pista Milkshake',
    category: 'milkshakes',
    price: 100,
    type: 'veg',
    addon: { label: 'Add Ice Cream', price: 10 },
    description: 'Nutty pistachio shake, subtly sweet and aromatic.',
    image: pistaMilkshakeImg,
  },
  {
    id: 'milk',
    name: 'Milk',
    category: 'tea-coffee',
    price: 20,
    type: 'veg',
    description: 'A chilled glass of fresh milk, served plain.',
    image: milkImg,
  },
  {
    id: 'cold-coffee',
    name: 'Cold Coffee',
    category: 'milk-special',
    price: 60,
    type: 'veg',
    description: 'Iced coffee blended frothy with chilled milk.',
    image: coldCoffeeImg,
    imagePosition: 'center 20%',
  },
  {
    id: 'rose-milk',
    name: 'Rose Milk',
    category: 'milk-special',
    price: 60,
    type: 'veg',
    description: 'Chilled milk perfumed with sweet rose syrup.',
    image: roseMilkImg,
  },
  {
    id: 'badam-milk',
    name: 'Badam Milk',
    category: 'milk-special',
    price: 60,
    type: 'veg',
    description: 'Almond-rich milk, warming and nourishing.',
    image: badamMilkImg,
  },
  {
    id: 'pista-milk',
    name: 'Pista Milk',
    category: 'milk-special',
    price: 60,
    type: 'veg',
    description: 'Smooth milk blended with ground pistachios.',
    image: pistaMilkImg,
    imagePosition: 'center 20%',
  },
  {
    id: 'mint-mojito',
    name: 'Mint Mojito',
    category: 'mojitos',
    price: 90,
    type: 'veg',
    description: 'Cool mint mojito with lime and sparkling soda.',
    image: mintImg,
  },
  {
    id: 'strawberry-mojito',
    name: 'Strawberry Mojito',
    category: 'mojitos',
    price: 100,
    type: 'veg',
    description: 'Berry-sweet strawberry mojito with a minty fizz.',
    image: strawberryMojitoImg,
    imagePosition: 'center 20%',
  },
  {
    id: 'blueberry-mojito',
    name: 'Blueberry Mojito',
    category: 'mojitos',
    price: 110,
    type: 'veg',
    description: 'Deep blueberry mojito, fruity and refreshingly fizzy.',
    image: blueberryMojitoImg,
  },
]

export const CATEGORY_LABELS = Object.fromEntries(
  CATEGORIES.map((c) => [c.id, c.label]),
)

export const getItemById = (id) =>
  MENU_ITEMS.find((item) => item.id === id)

export const getItemsByCategory = (categoryId) =>
  MENU_ITEMS.filter((item) => item.category === categoryId)

export const getCategoryLabel = (categoryId) =>
  CATEGORY_LABELS[categoryId] || 'Menu'

export const formatPrice = (price) => `₹${price}`
