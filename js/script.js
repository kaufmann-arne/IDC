'use strict';

const openNav = document.querySelector('.open_nav');
const overlayA = document.querySelectorAll('.menu-close-items');


openNav.addEventListener('click', function(){
    this.classList.toggle('active');
    document.querySelector('.overlay').classList.toggle('active');
    document.querySelector('body').classList.toggle('active');
});

overlayA.forEach(function(curr){
    curr.addEventListener('click', function(){
        this.classList.remove('active');
        document.querySelector('.overlay').classList.remove('active');
        document.querySelector('body').classList.remove('active');
    });
});

(function(){

    var doc = document.documentElement;
    var w = window;
  
    var prevScroll = w.scrollY || doc.scrollTop;
    var curScroll;
    var direction = 0;
    var prevDirection = 0;
  
    var header = document.getElementById('header');
  
    var checkScroll = function() {
  
      curScroll = w.scrollY || doc.scrollTop;
      console.log(curScroll);
      if (curScroll > prevScroll) { 
        //scrolled up
        direction = 2;
      }
      else if (curScroll < prevScroll) { 
        //scrolled down
        direction = 1;
      }

      if(curScroll == 0){
        header.classList.remove('header-up');
      }
  
      if (direction !== prevDirection) {
        toggleHeader(direction, curScroll);
    }
    
    prevScroll = curScroll;
      
    };
  
    var toggleHeader = function(direction, curScroll) {
      if (direction === 2 && curScroll > 92) { 
  
        header.classList.add('hide');
        header.classList.remove('header-up');
        prevDirection = direction;
      }
      else if (direction === 1) {
        header.classList.remove('hide');
        header.classList.add('header-up');
        prevDirection = direction;
      }
    };
    
    window.addEventListener('scroll', checkScroll);
  
  })();