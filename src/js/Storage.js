const products = [
  {
    id: 1,
    title: "React.js",
    category: "Frontend",
    createdAt: "2021-10-31T15:02:00.411Z",
  },
  {
    id: 2,
    title: "Node.js",
    category: "Backend",
    createdAt: "2021-10-31T15:03:23.556Z",
  },
  {
    id: 3,
    title: "Vue.js",
    category: "Frontend",
    createdAt: "2021-10-31T15:47:26.889Z",
  },
];
const categories = [
  {
    id: 1,
    title: "frontend",
    description: "frontend of applications",
    cratedAt: "2021-10-31T15:03:23.556Z",
  },
  {
    id: 2,
    title: "backend",
    description: "the backend of the applications",
    cratedAt: "2021-9-31T15:03:23.556Z",
  },
];

export default class Storage {
  //property
  // save , delete, update ,... ==> methods
  static getAllCategories() {
    // products , categories ==> localstorage
    const savedCategories = JSON.parse(localStorage.getItem("category")) || [];
    //sort ==> نزولی ==> desending
    const sortedCategories = savedCategories.sort((a, b) => {
      return new Date(a.cratedAt) > new Date(b.cratedAt) ? -1 : 1;
    });
    return sortedCategories;
  }
  static savedCategory(categoryToSave) {
    const savedCategories = Storage.getAllCategories();
    //edit ==> ... save
    //new ==> ... save
    const existedItem = savedCategories.find((c) => c.id === categoryToSave.id);
    if (existedItem) {
      //edit
      existedItem.title = categoryToSave.title;
      existedItem.description = categoryToSave.description;
    } else {
      //new
      categoryToSave.id = new Date().getTime();
      categoryToSave.cratedAt = new Date().toISOString();
      savedCategories.push(categoryToSave);
    }
    localStorage.setItem("category", JSON.stringify(savedCategories));
  }
  static getAllProducts() {
    const savedProducts = JSON.parse(localStorage.getItem("products")) || [];
    return savedProducts.sort((a, b) => {
      return new Date(a.cratedAt) > new Date(b.cratedAt) ? -1 : 1;
    });
  }
  static saveProducts(productToSave) {
    const savedProducts = Storage.getAllProducts();
    //edit ==> ... save
    //new ==> ... save
    const existedItem = savedProducts.find((c) => c.id === productToSave.id);
    if (existedItem) {
      //edit
      existedItem.title = productToSave.title;
      existedItem.quantity = productToSave.quantity;
      existedItem.category = productToSave.category;
    } else {
      //new
      productToSave.id = new Date().getTime();
      productToSave.cratedAt = new Date().toISOString();
      savedProducts.push(productToSave);
    }
    localStorage.setItem("products", JSON.stringify(savedProducts));
  }
}
