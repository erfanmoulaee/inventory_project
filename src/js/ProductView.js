import Storage from "./Storage.js";

const addNewProductBtn = document.getElementById("add-new-product");
class ProductView {
  constructor() {
    addNewProductBtn.addEventListener("click", (e) => this.addNewProduct(e));
    this.products = [];
  }
  setApp() {
    this.products = Storage.getAllProducts();
  }
  addNewProduct(e) {
    e.preventDefault();
    const title = document.querySelector("#product-title").value;
    const quantity = document.querySelector("#product-quantity").value;
    const category = document.querySelector("#product-category").value;
    if (!title || !quantity || !category) return;
    Storage.saveProducts({ title, quantity, category });
    this.products = Storage.getAllProducts();
    this.createProductsList(this.products);
  }
  createProductsList() {
    const productDom = document.getElementById("products-list");
    let result = "";
    this.products.forEach((item) => {
      const selectedCategory = Storage.getAllCategories().find(
        (c) => c.id == item.category
      );
      result += `<div class="flex justify-between items-center mb-3">
          <span class="text-slate-400">${item.title}</span>
          <div class="flex items-center gap-x-3">
            <span class="text-slate-400">${new Date().toLocaleDateString(
              "fa-IR"
            )}</span>
            <span
              class="block px-3 py-0.5 text-salte-400 border border-slate-400 text-sm rounded-2xl"
              >${selectedCategory.title}</span
            >
            <span
              class="flex justify-center items-center w-7 h-7 rounded-full bg-slate-500 border-2 border-slate-300 text-slate-300"
              >${item.quantity}</span
            >
            <button
              class="border px-2 py-0.5 rounded-2xl border-red-400 text-red-400" data-id=${
                item.id
              }
            >
              delete
            </button>
          </div>
        </div>`;
    });
    productDom.innerHTML = result;
  }
}

export default new ProductView();
