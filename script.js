
const container = document.querySelector(".container")
const swiper = new Swiper('.swiper-container', {
  
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
  });

  document.querySelectorAll('.tabs_btn').forEach(function(tabsBtn){
    tabsBtn.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;

    document.querySelectorAll('.tab-content').forEach(function(tabContent){
      tabContent.classList.remove('tab-content-active')
    });

    e.currentTarget.classList.add('tabs_btn');
    document.querySelectorAll('.tab-content').forEach(function(tabsBtn){
    tabsBtn.classList.remove('tab-content-active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active');
    });
  });

  $( function() {
    $( "#accordion" ).accordion({
       icons: false,
       heightStyle: "content",
       collapsible: true,
       active: false
     });
      
   } );

   document.querySelector('#burger').addEventListener('click', function(){
     document.querySelector('#menu').classList.toggle('is-active')
   })
   document.querySelector(".nav__close").addEventListener("click", function() {
    document.querySelector('#menu').classList.remove('is-active');
  })
  document.querySelector(".form-btn__open").addEventListener("click", function() {
    document.querySelector(".header-form").classList.add("form__active");
    this.classList.add("active");
  })
  
  document.addEventListener("click", function(e) {
    let target = e.target;
    let form = document.querySelector(".header-form");
    if (!target.closest(".form-container")) {
    form.classList.remove("form__active");
      form.querySelector(".form__input").value = "";
      document.querySelector(".form-btn__open").classList.remove("active")
    }
  })