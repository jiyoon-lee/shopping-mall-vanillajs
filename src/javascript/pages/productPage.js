import { ProductCard } from "../components/ProductCard/index.js";
import Component from "../core/Component.js";

class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.mainElement = document.createElement("main");
  }
  // 전체 상품 정보 가져오기
  async getProductData() {
    const response = await fetch("http://test.api.weniv.co.kr/mall");
    const data = await response.json();
    this.product = await data;
  }

  // 상품 리스트 세팅하기
  async setProductList() {
    await this.getProductData();

    this.mainElement.classList.add("product");

    const productPageHeader = document.createElement("h1");
    productPageHeader.setAttribute("class", "ir");
    productPageHeader.innerHTML = "상품목록 페이지";
    this.mainElement.appendChild(productPageHeader);

    const productList = document.createElement("ul");
    productList.setAttribute("class", "product-list");

    // this.mainElement.innerHTML = `
    //   <h1 class="ir">상품목록 페이지</h1>
    //   <ul class="product-list"></ul>
    // `;

    // const productList = this.mainElement.querySelector(".product-list");
    this.product.forEach((item) => {
      const productItem = document.createElement("li");
      productItem.setAttribute("class", "product-item");
      const productCard = new ProductCard({ item });
      productItem.appendChild(productCard.render());
      productList.appendChild(productItem);
    });

    this.mainElement.append(productList);
  }

  render() {
    // const container = document.createElement("div");
    // const element = document.createElement("h1");
    // element.innerHTML = "상품목록 페이지입니다.";

    // const anchor1 = document.createElement("a");
    // anchor1.href = "/detail/1";
    // anchor1.innerHTML = "1. 상세페이지 이동";

    // container.appendChild(anchor1);

    // const anchor2 = document.createElement("a");
    // anchor2.href = "/detail/2";
    // anchor2.innerHTML = "2. 상세페이지 이동";

    // container.appendChild(anchor2);

    // const anchor3 = document.createElement("a");
    // anchor3.href = "/detail/3";
    // anchor3.innerHTML = "3. 상세페이지 이동";

    // container.appendChild(anchor3);

    // container.appendChild(element);

    // return container;
    this.setProductList();
    return this.mainElement;
  }
}
export default ProductPage;
