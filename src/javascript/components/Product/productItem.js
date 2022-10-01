import { ProductImage, ProductPrice, ProductName } from "../Product/index.js";
class ProductItem {
  constructor(item) {
    this.item = item;
  }
  render() {
    // const productItem = document.createElement("li");

    const product = document.createElement("a");
    product.setAttribute("href", `/detail/${this.item.id}`);

    // const productImageContainer = document.createElement("div");
    // productImageContainer.setAttribute("class", "product-img");

    // const productImage = document.createElement("img");
    // productImage.setAttribute(
    //   "src",
    //   `http://test.api.weniv.co.kr/${this.item.thumbnailImg}`
    // );
    // productImage.setAttribute("alt", "상품이미지");
    // productImageContainer.appendChild(productImage);

    // const productName = document.createElement("strong");
    // productName.setAttribute("class", "product-name");
    // productName.innerText = this.item.productName;

    // const productPriceContainer = document.createElement("div");
    // productPriceContainer.setAttribute("class", "product-price");

    // const productPrice = document.createElement("strong");
    // productPrice.setAttribute("class", "price m-price");
    // productPrice.innerHTML = this.item.price;

    // const PriceType = document.createElement("span");
    // PriceType.innerText = "원";

    // productPrice.appendChild(PriceType);

    // productPriceContainer.appendChild(productPrice);

    const productImage = new ProductImage(this.item.thumbnailImg);
    const productName = new ProductName(this.item.productName);
    const productPrice = new ProductPrice(this.item.price);

    product.appendChild(productImage.render());
    product.appendChild(productName.render());
    product.appendChild(productPrice.render());

    // productItem.innerHTML = `
    // <a href="/detail/${this.item.id}" class="product-item">
    //   <div class="product-img>
    //     <img src=http://test.api.weniv.co.kr/${this.item.thumbnailImg} alt=${item.id}>
    //   </div>
    //   <strong class="product-name">${this.item.productName}</strong>
    //   <div class="product-price">
    //     <strong>${this.item.price}</strong>
    //   </div>
    // </a>
    // `;
    return product;
  }
}

export default ProductItem;
