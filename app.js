(function () {
'use strict';

angular.module('breakfastCalc', [])

.controller('breakfastCalcController', function ($scope) {
  $scope.foods = "";
  $scope.message = "";
  $scope.colorr = "";

  $scope.publicMessage = function (){
    console.log(calculBreakfast());

    if(calculBreakfast()<=3 && calculBreakfast() > 0){
      $scope.message = "Enjoy!";
      $scope.colorr = "lime"}
    else if (calculBreakfast()>3){
     $scope.message = "Too much";
     $scope.colorr = "lime"}
    else{
     $scope.message = "Please enter data first"
     $scope.colorr = "red"}
  };

  function calculBreakfast(){
    var food = $scope.foods.split(",");
    var account = 0;
  console.log(food);
    for (var f in food) {

      if(food[f]!=="")
     account++;
   }
   return account;
  };

});


})();
