window.HomeController = function ($scope, $http, $routeParams, $location) {
  const baseAPI = "http://localhost:3000";

  // Định nghĩa hàm lấy banners sử dụng async/await
  $http.get(baseAPI + "/banners").then(function (response) {
    $scope.bannerData = response.data;
  });

};
