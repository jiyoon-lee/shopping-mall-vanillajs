class ProductLikeButton {
  constructor(id) {
    this.productId = id;
    this.liked = this.checkLikeList();
  }
  checkLikeList() {
    if (!localStorage.getItem("likeList")) {
      localStorage.setItem("likeList", JSON.stringify([]));
    }
    const likeList = JSON.parse(localStorage.getItem("likeList"));
    return likeList.includes(this.productId);
  }
  addClickEvent(likeButton) {
    likeButton.addEventListener("click", (e) => {
      e.preventDefault();
      console.log("여기로", this.liked);
      e.stopPropagation(); // 클릭했을 때 url이 이동하지 않도록 하기 위해 버블링 중단하기(이벤트 캡처링과 버블링)
      // 클릭을 하면 좋아요 목록에 추가한다.
      // 좋아요 목록에 추가되었다면 'on' 클래스를 버튼에 추가한다.
      // 좋아요 목록은 로컬스토리지를 활용하여 클라이언트에 저장하도록 한다.
      // this.liked = !this.liked;
      // this.liked
      //   ? e.target.classList.add("on")
      //   : e.target.classList.remove("on");
      const likeList = JSON.parse(localStorage.getItem("likeList"));
      // if (!this.liked) {
      //   this.liked = false;
      //   localStorage.setItem(
      //     "likeList",
      //     JSON.stringify(likeList.filter((id) => id != this.productId))
      //   );
      // } else {
      //   this.liked = true;
      //   likeList.push(this.productId);
      //   localStorage.setItem("likeList", JSON.stringify(likeList));
      // }
      this.liked = !this.liked;
      this.liked && likeList.push(this.productId);
      const newLikeList = this.liked
        ? likeList
        : likeList.filter((id) => id != this.productId);
      localStorage.setItem("likeList", JSON.stringify(newLikeList));
      this.liked
        ? e.target.classList.add("on")
        : e.target.classList.remove("on");
    });
  }
  render() {
    const likeButton = document.createElement("button");
    likeButton.setAttribute("class", "like-btn");
    this.liked && likeButton.classList.add("on");

    const likeButtonIr = document.createElement("span");
    likeButtonIr.setAttribute("class", "ir");
    likeButtonIr.innerText = "좋아요 버튼";

    likeButton.appendChild(likeButtonIr);
    this.addClickEvent(likeButton);

    return likeButton;
  }
}

export default ProductLikeButton;
