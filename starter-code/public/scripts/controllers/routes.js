'use strict';
//client side routing. 

// page('/', articleController.index);
page('/about', aboutController.index);
//registering the handler
page();
//we are calling the function 'page' without arguments. It executes pages core functionality thus rendering the content to the page.

//this is a function, inside a function -- or a callback function. we are registering the articlecontroller.index to respond to the command route.

//we are going to call the page function with two parameters, the first one is 'about' string and the second is the 'aboutController')

//the first parameter is the route, the second parameter is the callback.
//it is registering the route handler.

//we are invoking page with two arguments, a route and a route handler.
