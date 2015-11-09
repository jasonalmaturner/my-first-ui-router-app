angular.module('miniRouting').controller('productsCtrl', function($scope, productsService, $stateParams) {
  if ($stateParams.id === 'shoes') {
    $scope.products = productsService.shoeData;
  } else if ($stateParams.id === 'socks') {
    $scope.products = productsService.sockData;
  }
});
