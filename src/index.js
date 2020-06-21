import Backbone from 'backbone';
import $ from 'jquery';

import Router from './router/router';

$(() => {
  $("app-header").load("./src/shared/header.html");
  $("app-footer").load("./src/shared/footer.html");

  new Router();
  Backbone.history.start();
});