const state = {
  items: [
    {
      id: 1,
      name: 'Bagel (plain)',
      category: 'Bagels & Breads',
      images: [
        'https://res.cloudinary.com/whynotearth/image/upload/v1586682068/foodouken/bangbangbakerycafe/Bagels%20and%20Breads/plain_bagel_bang_bang_sozoov.jpg'
      ],
      price: 1.0,
      currency: 'USD'
    },
    {
      id: 2,
      name: 'Bagel (sesame)',
      category: 'Bagels & Breads',
      images: [
        'https://res.cloudinary.com/whynotearth/image/upload/v1586682069/foodouken/bangbangbakerycafe/Bagels%20and%20Breads/sesame_bagel_bang_bang_dreno3.jpg'
      ],
      price: 1.0,
      currency: 'USD'
    },
    {
      id: 3,
      name: '6 Bagels',
      category: 'Bagels & Breads',
      images: [
        'https://res.cloudinary.com/whynotearth/image/upload/v1586682095/foodouken/bangbangbakerycafe/Bagels%20and%20Breads/6_bagels_bang_bang_xef4fc.jpg'
      ],
      price: 5.0,
      currency: 'USD'
    },
    {
      id: 4,
      name: '12 Bagels',
      category: 'Bagels & Breads',
      images: [
        'https://res.cloudinary.com/whynotearth/image/upload/v1585537334/foodouken/bangbangbakerycafe/Bagels%20and%20Breads/12-bagels-bang-bang-bakery_tqgug7.jpg'
      ],
      price: 9.0,
      currency: 'USD'
    },
    {
      id: 5,
      name: 'Ciabatta',
      category: 'Bagels & Breadsnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn',
      images: [
        'https://res.cloudinary.com/whynotearth/image/upload/v1586682068/foodouken/bangbangbakerycafe/Bagels%20and%20Breads/ciabatta_bang_bang_b3tezc.jpg'
      ],
      price: 2.75,
      currency: 'USD'
    },
    {
      id: 6,
      name: 'Normandy White Toast',
      category: 'Bagels & Breads',
      images: [
        'https://res.cloudinary.com/whynotearth/image/upload/v1586682068/foodouken/bangbangbakerycafe/Bagels%20and%20Breads/normandy_bang_bang_u5gj3s.jpg'
      ],
      price: 4.0,
      currency: 'USD'
    },
    {
      id: 7,
      name: 'Light Rye Sourdough',
      category: 'Bagels & Breads',
      images: [
        'https://res.cloudinary.com/whynotearth/image/upload/v1586682068/foodouken/bangbangbakerycafe/Bagels%20and%20Breads/light_rye_sourdough_bang_bang_ixlett.jpg'
      ],
      price: 3.5,
      currency: 'USD'
    },
    {
      id: 8,
      name: 'Tangy Toast Sourdough',
      category: 'Bagels & Breads',
      images: [
        'https://res.cloudinary.com/whynotearth/image/upload/v1586682069/foodouken/bangbangbakerycafe/Bagels%20and%20Breads/tangy_toast_bang_bang_pnopbn.jpg'
      ],
      price: 4.0,
      currency: 'USD'
    },
    {
      id: 9,
      name: 'Challah',
      category: 'Bagels & Breads',
      images: [
        'https://res.cloudinary.com/whynotearth/image/upload/v1586682068/foodouken/bangbangbakerycafe/Bagels%20and%20Breads/challah_bang_bang_l4nj0l.jpg'
      ],
      price: 2.25,
      currency: 'USD'
    },
    {
      id: 10,
      name: 'Multigrain Sour (only WED,SUN)mmmmmmmmmmmmmmmmmm',
      category: 'Bagels & Breads',
      images: [
        'https://res.cloudinary.com/whynotearth/image/upload/v1585537347/foodouken/bangbangbakerycafe/Bagels%20and%20Breads/multigrain-sourdough-bang-bang-bakery_lz7qms.jpg'
      ],
      price: 5.75,
      currency: 'USD'
    }
  ],
  categoryList: [
    {
      id: 17,
      slug: 'bagels-and-breads',
      name: 'Bagels and Breads',
      image:
        'https://res.cloudinary.com/whynotearth/image/upload/v1585961859/foodouken/bangbangbakerycafe/Categories/bagels-and-breads_wqvwji.png',
      description: 'Prices per piece.'
    },
    {
      id: 18,
      slug: 'brunch-and-lunch',
      name: 'Brunch and Lunch',
      image:
        'https://res.cloudinary.com/whynotearth/image/upload/v1585961859/foodouken/bangbangbakerycafe/Categories/brunch-and-lunch_g1c8uj.png',
      description: 'Prices per piece or of whole loaf.'
    },
    {
      id: 19,
      slug: 'sandwiches',
      name: 'Sandwiches',
      image:
        'https://res.cloudinary.com/whynotearth/image/upload/v1586084577/foodouken/bangbangbakerycafe/Categories/sandwiches.png',
      description: ''
    },
    {
      id: 21,
      slug: 'coffee-and-tea',
      name: 'Coffee and Tea',
      image:
        'https://res.cloudinary.com/whynotearth/image/upload/v1585961859/foodouken/bangbangbakerycafe/Categories/coffee-and-tea_eocvj5.png',
      description:
        'Add 0.25 for iced.\r\nMilk options: Regular, Soy, or Almond.'
    },
    {
      id: 16,
      slug: 'cakes-and-cookies',
      name: 'Cake and Cookies',
      image:
        'https://res.cloudinary.com/whynotearth/image/upload/v1585961859/foodouken/bangbangbakerycafe/Categories/cakes-and-cookies_otf9ir.png',
      description: null
    },
    {
      id: 20,
      slug: 'cream-cheese-bagels',
      name: 'Cream Cheese Bagels',
      image:
        'https://res.cloudinary.com/whynotearth/image/upload/v1585961859/foodouken/bangbangbakerycafe/Categories/cream-cheese-bagels_rhih7m.png',
      description: null
    },
    {
      id: 22,
      slug: 'other-drinks',
      name: 'Other Drinks',
      image:
        'https://res.cloudinary.com/whynotearth/image/upload/v1585961859/foodouken/bangbangbakerycafe/Categories/other-drinks_bvg8le.png',
      description: null
    }
  ],
  categories: [
    'Bagels & Breads',
    'Cakes & Cookies',
    'Brunch & Lunch',
    'Cream Cheese Bagels',
    'Coffee & Tea',
    'Other Drinks'
  ],
  item: {
    name: '',
    category: '',
    images: [],
    price: '',
    description: '',
    inventory: '',
    variants: [],
    customisations: []
  },
  category: {
    name: '',
    description: '',
    image: ''
  }
};

const getters = {
  getMenuItems: state => state.items,
  getItem: state => state.item,
  getItemName: state => state.item.name,
  getItemCategory: state => state.item.category,
  getItemImages: state => state.item.images,
  getItemPrice: state => state.item.price,
  getItemDescription: state => state.item.description,
  getItemInventory: state => state.item.inventory,
  getItemVariants: state => state.item.variants,
  getItemCustomisations: state => state.item.customisations,
  getCategories: state => state.categories,
  getCategoryList: state => state.categoryList,
  getCategory: state => state.category,
  getCategoryName: state => state.category.name,
  getCategoryDescription: state => state.category.description,
  getCategoryImage: state => state.category.image
};

const actions = {};

const mutations = {
  updateItem(state, payload) {
    state.item = payload;
  },
  updateItemName(state, payload) {
    state.item.name = payload;
  },
  updateItemCategory(state, payload) {
    state.item.category = payload;
  },
  updateItemPrice(state, payload) {
    state.item.price = payload;
  },
  updateItemDescription(state, payload) {
    state.item.description = payload;
  },
  updateItemInventory(state, payload) {
    state.item.inventory = payload;
  },
  updateItemImages(state, payload) {
    state.item.images = payload;
  },
  updateItemVariants(state, payload) {
    state.item.variants = payload;
  },
  updateItemCustomisations(state, payload) {
    state.item.customisations = payload;
  },
  updateCategory(state, payload) {
    state.category = payload;
  },
  updateCategoryName(state, payload) {
    state.category.name = payload;
  },
  updateCategoryDescription(state, payload) {
    state.category.description = payload;
  },
  updateCategoryImage(state, payload) {
    state.category.image = payload;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
