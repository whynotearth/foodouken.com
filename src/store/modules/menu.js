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
  getCategories: state => state.item.categories
};

const actions = {};

const mutations = {
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
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
