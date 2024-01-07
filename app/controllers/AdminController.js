window.AdminController = function ($scope, $http, $routeParams, $location) {
  console.log(13);
  $scope.addCategory = function () {
    $scope.currentCategory = {}; // Reset the currentCategory
    $("#categoryModal").modal("show");
  };

  $scope.addProduct = function () {
    $scope.currentCategory = {}; // Reset the currentCategory
    $("#productModal").modal("show");
  };

  $scope.viewProduct = function () {
    $scope.currentProduct = {}; // Reset the currentCategory
    $("#productViewModal").modal("show");
  };

  $scope.viewOrder = function() {
    $("#orderViewModal").modal("show");
  }

  $scope.orderEditModal = function() {
    $("#orderModal").modal("show");
  }
};
