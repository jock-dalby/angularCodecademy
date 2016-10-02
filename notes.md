AngularJS is a framework for building dynamic web apps.

1. A user visits the AngularJS app.
2. The view presents the app's data through the use of expressions, filters, and directives. Directives bind new behavior HTML elements.
3. A user clicks an element in the view. If the element has a directive, AngularJS runs the function.
4. The function in the controller updates the state of the data.
5. The view automatically changes and displays the updated data. The page doesn't need to reload at any point.
_________________________________________________________________
A typical workflow when making an AngularJS app:

1. Create a module, and use ng-app in the view to define the application scope.
2. Create a controller, and use ng-controller in the view to define the controller scope.
3. Add data to $scope in the controller so they can be displayed with expressions in the view.
_________________________________________________________________
Quick review:

1. A module contains the different components of an AngularJS app
2. A controller manages the app's data
3. An expression displays values on the page
4. A filter formats the value of an expression

_________________________________________________________________
AngularJS directives

ng-app, ng-controller, ng-repeat, and ng-src. What can we generalize about directives?

Directives bind behavior to HTML elements. When the app runs, AngularJS walks through each HTML element looking for directives. When it finds one, AngularJS triggers that behavior (like attaching a scope or looping through an array).

Each time you click on the number of likes, the number goes up. How does it work?

1. The ng-click is a directive. When <p class="likes"> is clicked, ng-click tells AngularJS to run the plusOne() function in the controller.
2. The plusOne() function gets the index of the product that was clicked, and then adds one to that product's likes property.

Notice that the plusOne() doesn't interact with the view at all; it just updates the controller. Any change made to the controller shows up in the view.
_________________________________________________________________
AngularJS filters

<p class="price">{{ product.price | currency }}</p>

The product price changed from a number to a formatted currency. How does it work?

1. AngularJS gets the value of product.price.
2. It sends this number into the currency filter. The pipe symbol (|) takes the output on the left and "pipes" it to the right.
3. The filter outputs a formatted currency with the dollar sign and the correct decimal places.
In this way, filters help to separate the content in the controller from its presentation in the view.

Also in index.html we can see examples of 'date' and 'uppercase' filters.
_________________________________________________________________
