import Storage from "./Storage.js";

const categoryTitle = document.querySelector("#category-title");
const categoryDescription = document.querySelector("#category-description");
const addNewCategoryBtn = document.querySelector("#add-new-category");
class categoryView {
  constructor() {
    addNewCategoryBtn.addEventListener("click", (e) => this.addNewCategory(e));
    this.categories = [];
  }
  addNewCategory(e) {
    e.preventDefault();
    const title = categoryTitle.value;
    const description = categoryDescription.value;
    if (!title || !description) return;
    Storage.savedCategory({ title, description });
    this.categories = Storage.getAllCategories();
    this.crateCategoriesList(this.categories);
    categoryTitle.value = "";
    categoryDescription.value = "";
  }
  setApp() {
    this.categories = Storage.getAllCategories();
  }

  crateCategoriesList(categories) {
    let result = ` <option class="bg-slate-500 text-slate-400" value="">
       selesct a category
     </option>
`;
    categories.forEach((element) => {
      result += `<option class="bg-slate-500 text-slate-400" value=${element.id}>
        ${element.title}
      </option>`;
    });
    const categoryDom = document.getElementById("product-category");
    categoryDom.innerHTML = result;
  }
}

export default new categoryView();
