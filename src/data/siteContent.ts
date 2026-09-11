import chefPortrait from '../assets/images/chef-portrait.jpg';
import diningImage from '../assets/images/gallery-dining.jpg';
import ingredientImage from '../assets/images/gallery-ingredients.jpg';
import heroImage from '../assets/images/hero.jpg';
import burrataImage from '../assets/images/signature-burrata.jpg';
import dessertImage from '../assets/images/signature-dessert.jpg';
import lambImage from '../assets/images/signature-lamb.jpg';
import octopusImage from '../assets/images/signature-octopus.jpg';
import storyFireImage from '../assets/images/story-fire.jpg';

export type NavItem = { label: string; href: string };
export type SignatureDish = { name: string; price: string; description: string; image: string; alt: string; layout: 'portrait' | 'landscape' };
export type ExperienceHighlight = { title: string; description: string; detail: string };
export type MenuItem = { name: string; price: string; description: string };
export type MenuCategory = { id: string; label: string; note: string; items: MenuItem[] };
export type GalleryItem = { title: string; image: string; alt: string; span: string };
export type Testimonial = { quote: string; name: string };

export const heroImageSrc = heroImage;
export const chefPortraitSrc = chefPortrait;
export const storyPrimaryImage = storyFireImage;
export const storySecondaryImage = diningImage;

export const navItems: NavItem[] = [
  { label: 'Menu', href: '#menu' }, { label: 'Experience', href: '#experience' }, { label: 'Story', href: '#story' }, { label: 'Gallery', href: '#gallery' }, { label: 'Location', href: '#location' },
];

export const signatureDishes: SignatureDish[] = [
  { name: 'Charred Octopus', price: '₹1,450', description: 'Wood-fire octopus with preserved lemon, smoked paprika oil and grilled baby potatoes.', image: octopusImage, alt: 'Charred octopus plated with citrus and herbs.', layout: 'portrait' },
  { name: 'Ember-Roasted Lamb', price: '₹1,850', description: 'Slow-roasted lamb shoulder, black garlic jus and flame-kissed seasonal vegetables.', image: lambImage, alt: 'Ember-roasted lamb served on a platter with grilled vegetables.', layout: 'landscape' },
  { name: 'Burrata & Heirloom Tomato', price: '₹1,050', description: 'Creamy burrata, late-season tomatoes, basil ash and first-press olive oil.', image: burrataImage, alt: 'Burrata with heirloom tomatoes and olive oil on a plate.', layout: 'landscape' },
  { name: 'Baklava with Olive Oil Ice Cream', price: '₹750', description: 'Delicate filo, pistachio crumb, orange blossom syrup and silky olive oil ice cream.', image: dessertImage, alt: 'Baklava plated with olive oil ice cream and pistachio.', layout: 'portrait' },
];

export const experienceHighlights: ExperienceHighlight[] = [
  { title: 'The Open Fire', description: 'A kitchen built around flame, smoke and patience.', detail: 'From blistered vegetables to slow-finished meats, every plate carries the quiet depth of live embers.' },
  { title: 'The Table', description: 'Long lunches, intimate dinners and plates designed to be shared.', detail: 'The rhythm is generous and unhurried: layered courses, warm light and service that knows when to step forward and when to disappear.' },
  { title: 'The Cellar', description: 'Mediterranean-inspired pours selected for texture and freshness.', detail: 'Mineral whites, herbaceous aperitifs and low-intervention bottles complement spice, smoke and sea-salt brightness.' },
];

export const menuCategories: MenuCategory[] = [
  { id: 'small-plates', label: 'Small Plates', note: 'Designed for the centre of the table, with bright herbs, smoke and citrus.', items: [
    { name: 'Charred Octopus', price: '₹1,450', description: 'Preserved lemon, paprika oil, grilled potatoes' }, { name: 'Smoked Labneh', price: '₹850', description: 'Burnt chilli butter, za’atar flatbread' }, { name: 'Burrata & Heirloom Tomato', price: '₹1,050', description: 'Basil ash, olive oil, crisp sourdough' }, { name: 'Crispy Feta', price: '₹750', description: 'Sesame honey, thyme and orange zest' }, { name: 'Coal-Roasted Beetroot', price: '₹780', description: 'Whipped tahini, dill and toasted pistachio' },
  ]},
  { id: 'from-the-fire', label: 'From the Fire', note: 'The heart of the kitchen: live-fire cooking with a Mediterranean point of view.', items: [
    { name: 'Ember-Roasted Lamb', price: '₹1,850', description: 'Black garlic jus, smoked aubergine' }, { name: 'Fire-Grilled Sea Bass', price: '₹1,950', description: 'Fennel pollen, charred citrus, caper leaves' }, { name: 'Charred Chicken', price: '₹1,350', description: 'Green olive salsa, confit garlic and oregano' }, { name: 'Coal-Seared Cauliflower', price: '₹980', description: 'Saffron yoghurt and toasted almond dukkah' },
  ]},
  { id: 'mains', label: 'Mains', note: 'Composed plates made for leisurely dining and generous sharing.', items: [
    { name: 'Seafood Orzo', price: '₹1,650', description: 'Prawns, mussels, fennel broth and tomato' }, { name: 'Saffron Couscous', price: '₹1,180', description: 'Roasted vegetables, herbs and citrus stock' }, { name: 'Braised Short Rib', price: '₹1,920', description: 'Burnt onion glaze and soft polenta' }, { name: 'Wild Mushroom Pilaf', price: '₹1,240', description: 'Olive leaf butter, dill and preserved lemon' },
  ]},
  { id: 'sides', label: 'Sides', note: 'Crafted to share across the table.', items: [
    { name: 'Patatas Bravas', price: '₹520', description: 'Smoked tomato and garlic aioli' }, { name: 'Flame-Torn Greens', price: '₹480', description: 'Lemon oil and toasted seeds' }, { name: 'Wood-Fired Flatbread', price: '₹420', description: 'Sea salt, olive oil and rosemary' }, { name: 'Saffron Rice', price: '₹450', description: 'Golden raisins and fried shallots' },
  ]},
  { id: 'desserts', label: 'Desserts', note: 'Sweet finishes with texture, fragrance and warmth.', items: [
    { name: 'Baklava & Olive Oil Ice Cream', price: '₹750', description: 'Pistachio, orange blossom and honey' }, { name: 'Burnt Basque Cheesecake', price: '₹850', description: 'Fig leaf syrup and sea salt' }, { name: 'Dark Chocolate Torte', price: '₹790', description: 'Tahini cream and candied citrus' }, { name: 'Semolina Cake', price: '₹680', description: 'Poached apricot and mascarpone' },
  ]},
  { id: 'drinks', label: 'Drinks', note: 'A concise cellar of aperitifs, cocktails and zero-proof pours.', items: [
    { name: 'Olive Leaf Martini', price: '₹950', description: 'Gin, dry vermouth and olive distillate' }, { name: 'Citrus Spritz', price: '₹780', description: 'Bitter orange, sparkling wine and tonic' }, { name: 'Fig & Smoke Old Fashioned', price: '₹980', description: 'Bourbon, fig, spice and a cedar finish' }, { name: 'Pomegranate Tonic', price: '₹460', description: 'Zero-proof, bright, herbal and dry' }, { name: 'Aegean White Blend', price: '₹720', description: 'By the glass, mineral and saline' },
  ]},
];

export const galleryItems: GalleryItem[] = [
  { title: 'Dining Room at Dusk', image: heroImage, alt: 'A refined Mediterranean dining room at dusk with warm lighting.', span: 'md:col-span-2 md:row-span-2' },
  { title: 'Live Fire Detail', image: storyFireImage, alt: 'A close view of flames in an open-fire kitchen.', span: 'md:col-span-1 md:row-span-2' },
  { title: 'Ingredient Study', image: ingredientImage, alt: 'Mediterranean ingredients arranged on a stone surface.', span: 'md:col-span-1 md:row-span-1' },
  { title: 'Service & Atmosphere', image: diningImage, alt: 'An atmospheric restaurant dining room with candles and linen tables.', span: 'md:col-span-2 md:row-span-1' },
  { title: 'Chef Portrait', image: chefPortrait, alt: 'Portrait of a chef standing near a live-fire kitchen.', span: 'md:col-span-1 md:row-span-1' },
  { title: 'Signature Dessert', image: dessertImage, alt: 'Baklava served with olive oil ice cream and pistachio garnish.', span: 'md:col-span-1 md:row-span-1' },
];

export const testimonials: Testimonial[] = [
  { quote: 'The kind of dinner that makes you forget to check your phone.', name: 'Aditi R.' },
  { quote: 'Beautiful food, exceptional atmosphere and a kitchen that knows exactly when to let the fire speak.', name: 'Rohan S.' },
  { quote: 'If a hospitality brand can feel cinematic without losing warmth, this is it.', name: 'Mira K.' },
];
