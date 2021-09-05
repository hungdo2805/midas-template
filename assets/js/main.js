
const dropCategory = document.getElementById('drop-category');
const selectText = document.getElementById('select-text');
const dropOptions = document.getElementsByClassName('drop-category-option');
const dropCategoryList = document.getElementById('drop-category-list');
const arrowIcon = document.getElementById('arrow-icon');


dropCategory.onclick = function(){
  dropCategoryList.classList.toggle('open-drop');
  arrowIcon.classList.toggle('rotate');
}

for( option of dropOptions)
{
    option.onclick = function(){
        
        selectText.innerHTML = this.textContent;
    }
}


const categoryToogle = document.querySelector('.category-toogle');
const categoryDropdown = document.querySelector('.category-dropdown');


categoryToogle.addEventListener('click',function(){
    categoryDropdown.classList.toggle('open');
})



// Menu

const expandBtns = document.querySelectorAll(".expand-btn");

expandBtns.forEach((btn) => {
  
    btn.addEventListener("click", () => {
      btn.classList.toggle("open");  
    });
});
  


// Tab
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$(".tab-item");
const panes = $$(".tab-pane");

const tabActive = $(".tab-item.active");
const line = $(".tabs .line");

// line.style.left = tabActive.offsetLeft + "px";
// line.style.width = tabActive.offsetWidth + "px";

tabs.forEach((tab, index) => {
  const pane = panes[index];

  tab.onclick = function () {
    $(".tab-item.active").classList.remove("active");
    $(".tab-pane.active").classList.remove("active");

    // line.style.left = this.offsetLeft + "px";
    // line.style.width = this.offsetWidth + "px";

    this.classList.add("active");
    pane.classList.add("active");
  };
});



const tabsProduct = $$(".tab-product .tab-item");
const panesProduct = $$(".pane-product .tab-pane");

const tabActiveProduct = $(".tab-product .tab-item.active");

const sliderVisible = $(".pane-product .tab-pane .trending-list");

const lineTabProduct = $(".tab-product .line");

// lineTabProduct.style.left = tabActiveProduct.offsetLeft + "px";
// lineTabProduct.style.width = tabActiveProduct.offsetWidth + "px";


// tabsProduct.forEach((tab, index) => {
//   const pane = panesProduct[index];

//   tab.onclick = function () {

//     sliderVisible.classList.add('d-none');

//     $(".tab-product .tab-item.active").classList.remove("active");
//     $(".pane-product .tab-pane.active").classList.remove("active");

//     lineTabProduct.style.left = this.offsetLeft + "px";
//     lineTabProduct.style.width = this.offsetWidth + "px";

//     this.classList.add("active");
//     pane.classList.add("active");
//   };
// });




//toogle menu mobile

const toogleMobile = document.getElementById('toogle-mobile');

const menuMobileWrapper =  document.querySelector('.menu-mobile-wrapper');

const mobileClose = document.querySelector('.mobile-close');

const overlay = document.querySelector('.overlay');

toogleMobile.onclick = function(){
    menuMobileWrapper.classList.toggle('open');
    overlay.classList.toggle('open');
}


overlay.onclick = function(){
    menuMobileWrapper.classList.toggle('open');
    overlay.classList.toggle('open');
}

mobileClose.onclick = function(){
    menuMobileWrapper.classList.toggle('open');
    overlay.classList.toggle('open');
}



// flickity hero

var heroList = document.querySelector('.hero-list');

var heroSlider = new Flickity( heroList, {
  contain: true,
  cellAlign: 'left',
  pageDots: true,
  prevNextButtons: false,
  wrapAround: true

});






// Equal height cells
// add this code 
Flickity.prototype._createResizeClass = function() {
  this.element.classList.add('flickity-resize');
};

Flickity.createMethods.push('_createResizeClass');

var resize = Flickity.prototype.resize;
Flickity.prototype.resize = function() {
  this.element.classList.remove('flickity-resize');
  resize.call( this );
  this.element.classList.add('flickity-resize');
};


// flickity brand

var brandList = document.querySelector('.brand-list');

var brandSlider = new Flickity( brandList, {
  contain: true,
  cellAlign: 'right',
  pageDots: false,
  prevNextButtons: false,
  wrapAround: true

});

const nextButton =  document.querySelector('.next-btn');
const previousButton =  document.querySelector('.previous-btn');

nextButton.onclick = function(){
  brandSlider.next();
}
previousButton.onclick = function(){
  brandSlider.previous();
}


// flickity trending

var trendingList = document.querySelector('.trending-list');

var trendingSlider = new Flickity( trendingList, {
  contain: false,
  cellAlign: 'right',
  pageDots: true,
  prevNextButtons: false,
  groupCells: true,
  wrapAround: true

});



const nextButtonTrending =  document.querySelector('.trending .next-btn');
const previousButtonTrending =  document.querySelector('.trending .previous-btn');

nextButtonTrending.onclick = function(){
  trendingSlider.next();
}
previousButtonTrending.onclick = function(){
  trendingSlider.previous();
}



// flickity Electronic

var categoryElectronic = document.querySelector('.electronic .category-product-list');

var categoryElectronicSlider = new Flickity( categoryElectronic, {
  contain: false,
  cellAlign: 'left',
  pageDots: false,
  prevNextButtons: false,
  groupCells: false,
  wrapAround: true,
  draggable: true

});

const nextButtonCategoryElectronic=  document.querySelector('.electronic .next-btn');
const previousButtonCategoryElectronic =  document.querySelector('.electronic .previous-btn');

nextButtonCategoryElectronic.onclick = function(){
  categoryElectronicSlider.next();
}
previousButtonCategoryElectronic.onclick = function(){
  categoryElectronicSlider.previous();
}


var flktycategoryElectronic = Flickity.data( categoryElectronic )


// console.log($(".category .previous-btn")) 

flktycategoryElectronic.on( 'change', function( event, index ) {
  if(flktycategoryElectronic.selectedIndex == 0) {
    $('.electronic .previous-btn').style.display = 'none';
  } else {
    $('.electronic .previous-btn').style.display = 'flex';
  }
  if(flktycategoryElectronic.selectedIndex == flktycategoryElectronic.slides.length - 1) {
      $('.electronic .next-btn').style.display = 'none';
  } else {
      $('.electronic .next-btn').style.display = 'flex';
  }
});



// flickity Furniture

var categoryFurniture = document.querySelector('.furniture .category-product-list');

var categoryFurnitureSlider = new Flickity( categoryFurniture, {
  contain: false,
  cellAlign: 'left',
  pageDots: false,
  prevNextButtons: false,
  groupCells: false,
  wrapAround: true,
  draggable: true

});

// flickity Clothing

var categoryClothing = document.querySelector('.clothing .category-product-list');

var categoryClothingSlider = new Flickity( categoryClothing, {
  contain: false,
  cellAlign: 'left',
  pageDots: false,
  prevNextButtons: false,
  groupCells: false,
  wrapAround: true,
  draggable: true

});

// flickity Cooking

var categoryCooking = document.querySelector('.cooking .category-product-list');

var categoryCookingSlider = new Flickity( categoryCooking, {
  contain: false,
  cellAlign: 'left',
  pageDots: false,
  prevNextButtons: false,
  groupCells: false,
  wrapAround: true,
  draggable: true

});

// flickity Blog

var blog = document.querySelector('.blog-list');

var blogSlider = new Flickity( blog, {
  contain: false,
  cellAlign: 'left',
  pageDots: true,
  prevNextButtons: false,
  groupCells: false,
  wrapAround: true,
  draggable: true

});



// Set the date we're counting down to

var productCountDown =  document.querySelectorAll('.product-countdown');

productCountDown.forEach(element => {
  renderCountDown(element)
});

function renderCountDown(element){

  // console.log(element.innerHTML)

  var countDownDate = new Date(element.innerHTML).getTime();

  // Update the count down every 1 second
  var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
     
  element.innerHTML = `
    <div class="product-countdown-item">
      <div class="product-countdown-count">${days}</div>
      <div class="product-countdown-time">days</div>
    </div>
    <div class="product-countdown-item">
      <div class="product-countdown-count">${hours}</div>
      <div class="product-countdown-time">hours</div>
    </div>
    <div class="product-countdown-item">
      <div class="product-countdown-count">${minutes}</div>
      <div class="product-countdown-time">mins</div>
    </div>
    <div class="product-countdown-item">
      <div class="product-countdown-count">${seconds}</div>
      <div class="product-countdown-time">secs</div>
    </div>
  `
    // If the count down is over, write some text 
    if (distance < 0) {
      clearInterval(x);
      element.appendChild = "EXPIRED";
    }
  }, 1000);
}




//scroll to top 

let scrollTop = document.getElementById('scroll-top');

window.addEventListener('scroll',function(){
    let value = window.scrollY;
    if(value < 1200){
        scrollTop.style.display ='none';
    }
    if(value > 1200){
        scrollTop.style.display ='block';
    }
});

scrollTop.onclick = function(){
    window.scrollTo(0, 0);
}


document.getElementById("year").innerHTML = new Date().getFullYear();