import Backbone from 'backbone';
import $ from 'jquery';

export default Backbone.Router.extend({
  routes: {
    '': 'home',
    'about': 'about',
    'heavy(/:heavy_param)': 'heavy',
    '*handleMissingRoute': 'handle404',
  },

 

  home() {   
    $("app-view").load("./src/main/home/index.html");
  },
    
  about() {
    $("app-view").load("./src/main/destaque/index.html");
  },
  
  heavy(heavy_param) {
    $('#app').html(`You're viewing that heavy app, heavy param from the URL is: ${heavy_param}`);
  },
  
  handle404() {
    alert('404');
  }
});

