const app = angular.module("myApp", ["ngRoute"]);

app.config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "app/pages/homepage.html",
      controller: HomeController,
    })
    .when("/login", {
      templateUrl: "app/pages/login.html",
      controller: HomeController,
    })
    .when("/register", {
      templateUrl: "app/pages/register.html",
      controller: HomeController,
    })
    .when("/product", {
      templateUrl: "app/pages/detail.html",
      controller: HomeController,
    })
    .when("/products", {
      templateUrl: "app/pages/list.html",
      controller: HomeController,
    })
    .when("/checkout", {
      templateUrl: "app/pages/checkout.html",
      controller: HomeController,
    })
    .when("/admin-category", {
      templateUrl: "app/pages/admin/category.html",
      controller: AdminController,
    })
    .when("/admin-product", {
      templateUrl: "app/pages/admin/product.html",
      controller: AdminController,
    })
    .when("/admin-order", {
      templateUrl: "app/pages/admin/order.html",
      controller: AdminController,
    });
});

app.directive("angularSlick", function () {
  return {
    restrict: "A",
    link: function (scope, element) {
      $(element).slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [
          {
            breakpoint: 1080,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              arrows: false,
              centerMode: true,
              centerPadding: "40px",
            },
          },
          {
            breakpoint: 600,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: "40px",
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: "40px",
              slidesToShow: 1,
            },
          },
        ],
      });
    },
  };
});
