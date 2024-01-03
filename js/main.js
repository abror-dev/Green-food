const navList = document.querySelector('.nav__list');
for (let i of data.nav) {
  navList.innerHTML += `<li class="nav__item"><a class="nav__item-link" href="#">${i}</a></li>`;
}

const typesList = document.querySelector('.types__list');
for (let i of data.categories) {
  typesList.innerHTML += 
  `<li class="types__item item row between">
    <span class="txt">${i.title}</span>
    <span>(${i.count})</span>
  </li>`
}

const topItem = document.querySelectorAll('.list__item');
topItem.forEach(item => {
  item.addEventListener('click', () => {
    topItem.forEach(itemm => {
        itemm.classList.remove('active');
     })
     item.classList.add('active');
  })
})

const productList = document.querySelector('.product__list');
for (let i of data.items) {
  productList.innerHTML +=
  `<li class="product__item item">
    <div class="item__imgs">
      <img class="item__img" src="${i.src}" alt="green">
      <ul class="item__hov hov row center">
          <li class="hov__item">
            <i class="far fa-shopping-cart"></i>
          </li>
          <li class="hov__item">
            <i class="far fa-heart"></i>
          </li>
          <li class="hov__item">
            <i class="far fa-search"></i>
          </li>
      </ul>
    </div>
    <div class="item__titles">
      <span class="item__title">${i.title}</span>
      <span class="item__price">$${i.price}.00</span>
    </div>
  </li>`
}

const blogList = document.querySelector('.blog__list');
for (let i of data.blogs) {
  blogList.innerHTML +=
  `<li class="blog__item item col-3">
    <img class="item__img" src="${i.src}" alt="blog-img">
    <div class="item__titles row">
      <div>
        <time class="item__time" datetime="12-06-2022">September 12  I Read in 6 minutes</time>
        <h3 class="item__title">${i.title}</h3>
        <p class="item__desc">${i.desc}</p>
      </div>
      <a class="item__btn" href="#">
          Read More
          <i class="far fa-long-arrow-right"></i>
      </a>
    </div>
  </li>`
}

const newsList = document.querySelector('.news__list');
for (let i of data.news) {
  newsList.innerHTML +=
  `<li class="news__item item">
    <img class="item__img" src="${i.src}" alt="news-img">
    <span class="item__title">${i.title}</span>
    <p class="item__desc">${i.desc}</p>
  </li>`
}

const footerList1 = document.querySelector('.footer__list1');
for (let i of data.footer.slice(0, 5)) {
  footerList1.innerHTML +=
  `<li class="footer__item"><a href="#">${i}</a></li>`
}
const footerList2 = document.querySelector('.footer__list2');
for (let i of data.footer.slice(5, 10)) {
  footerList2.innerHTML +=
  `<li class="footer__item"><a href="#">${i}</a></li>`
}
const footerList3 = document.querySelector('.footer__list3');
for (let i of data.footer.slice(7, 11)) {
  footerList3.innerHTML +=
  `<li class="footer__item"><a href="#">${i}</a></li>`
}