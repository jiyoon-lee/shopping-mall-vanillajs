class ProductDetail {
  constructor(id) {
    this.product = {};
    this.id = id;
  }
  // 전체 상품 정보 가져오기
  async getProductData() {
    const response = await fetch(`http://test.api.weniv.co.kr/mall/${this.id}`);
    const data = await response.json();
    this.product = await data;
  }

  // 상품 리스트 세팅하기
  async setProductList() {
    await this.getProductData();
    console.log(this.product);
  }
  render() {
    const container = document.createElement("div");
    const element = document.createElement("h1");
    element.innerHTML = `${this.id} 상품상세 페이지입니다.`;

    const anchor = document.createElement("a");
    anchor.href = "/";
    anchor.innerHTML = "상세목록 페이지 이동";

    container.appendChild(anchor);
    container.appendChild(element);

    this.setProductList();
    return container;
  }
}
export default ProductDetail;
