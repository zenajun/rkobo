const app = {};

app.box = () => {
  $('.start-now').on('click', () => {
    $('.main-content li').toggleClass('active');    
  });
}

app.init= () => {
  app.box();
}

$(function() {
  app.init();
});