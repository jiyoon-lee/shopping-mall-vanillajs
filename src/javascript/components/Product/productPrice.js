class ProductPrice {
  constructor(price) {
    this.price = price;
  }
  render() {
    const productPriceContainer = document.createElement("div");
    productPriceContainer.setAttribute("class", "product-price");

    const productPrice = document.createElement("strong");
    productPrice.setAttribute("class", "price m-price");
    productPrice.innerHTML = this.price;

    const PriceType = document.createElement("span");
    PriceType.innerText = "원";

    productPrice.appendChild(PriceType);

    productPriceContainer.appendChild(productPrice);

    return productPriceContainer;
  }
}
export default ProductPrice;
