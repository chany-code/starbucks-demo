const searchEl = document.querySelector('.search');//document == HTML
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click',function(){
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus',function(){
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur',function(){
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function(){//lodash.js를 통해 사용 가능
  console.log(window.scrollY);
  if(window.scrollY > 500){
    // 배지 숨기기
    //gsap.to(요소, 지속시간_초단위, 옵션);
    gsap.to(badgeEl, .6, {
      opacity: 0,//요소가 시각적으로만 사라짐
      display: 'none'//요소를 실제로 사라지게 함
    });
  }else{
    // 배지 보이기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
  }
},300));//window == 브라우저 창
// _.throttle(함수,시간_밀리세컨드)


const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index){
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7, // 0.7, 1.4, 2.1, 2.8
    opacity: 1
  });
});
