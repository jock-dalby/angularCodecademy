// In MainController.js we created a new controller named MainController. A controller manages the app's data. Here we use the property title to store a string, and attach it to $scope.

app.controller('MainController', ['$scope', function($scope){
  $scope.title = 'Hello, my name is Dr. Greenthumb';
  $scope.promo = "I'm going to tell you just where I'm from";
  $scope.products = [
    {
      name: 'The Book of Trees',
      price: 19,
      pubdate: new Date('2014', '03', '08'),
      cover: 'img/the-book-of-trees.jpg', // In the controller, you use an object to group together related data about a product. Then in the view, you use dot notation to display the values.
      likes: 0,
      dislikes: 0
    },
    {
      name: 'Program or be Programmed',
      price: 8,
      pubdate: new Date('2013', '08', '01'),
      cover: 'img/program-or-be-programmed.jpg',
      likes: 0,
      dislikes: 0
    },
    {
      name: 'Trainspotting',
      price: 25,
      pubdate: new Date('1993', '09', '14'),
      cover: 'img/trainspotting.jpg',
      likes: 0,
      dislikes: 0
    },
    {
      name: 'Filth',
      price: 28,
      pubdate: new Date('1998', '04', '11'),
      cover: 'img/filth.jpg',
      likes: 0,
      dislikes: 0
  	}
  ];
  $scope.plusOne = function(index) {
    $scope.products[index].likes += 1;
  };
  $scope.minusOne = function(index) {
    $scope.products[index].dislikes += 1;
  }
}]);

// Both books in $scope.products show up in the view. How does it work?
//
// In the controller, we use products to store an array containing two objects.
// Then in the view, we add <div ng-repeat="product in products">. Like ng-app and ng-controller, the ng-repeat is a directive. It loops through an array and displays each element. Here, the ng-repeat repeats all the HTML inside <div class="col-md-6"> for each element in the products array.
// In this way, ng-repeat shows both products in the $scope.products array. Instead of writing the same HTML twice, we just use ng-repeat to generate the HTML twice.
