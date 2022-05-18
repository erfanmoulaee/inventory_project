import CategoryView from "./CategoryView.js";
import ProductView from "./ProductView.js";

document.addEventListener("DOMCountentLoaded", () => {
  CategoryView.setApp();
  ProductView.setApp();
  console.log(ProductView);
  CategoryView.crateCategoriesList();
  ProductView.createProductsList();
});
//target :
// 1. create category
// 2. create product based on selected category
// 3. edit product
// 4. remove product
// 5. save product in local storage
//  --> storage class for hanle application methods
//  --> product view class
//  --> categoryview class
//  --> main and app class
