var app = angular.module("blog", ["ngRoute"]);
app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'tpl/home.html',
    })
    .when('/gulp', {
      templateUrl: 'tpl/gulp.html',
    })
    .when('/this', {
      templateUrl: 'tpl/this.html',
    })
    .when('/jiqiao', {
      templateUrl: 'tpl/jiqiao.html',
    })
    .when('/comment', {
      templateUrl: 'tpl/comment.html',
    })
    .when('/moban', {
      templateUrl: 'tpl/moban.html',
    })
    .when('/kuayu', {
      templateUrl: 'tpl/kuayu.html',
    })
    .when('/mobile', {
      templateUrl: 'tpl/mobile.html',
    })
    .when('/stickey', {
      templateUrl: 'tpl/stickey.html',
    })
    .when('/timu', {
      templateUrl: 'tpl/timu.html',
    })
    .when('/reg', {
      templateUrl: 'tpl/reg.html',
    })
    .when('/zuopin', {
      templateUrl: 'tpl/zuopin.html',
    })
    .when('/es6', {
      templateUrl: 'tpl/es6.html',
    })
    .otherwise({
      redirectTo: '/'
    });
});
app.run(['$rootScope', '$location', function($rootScope, $location) {
  /* 监听路由的状态变化 */
  $rootScope.$on('$routeChangeStart', function(evt, next, current) {
    console.log('route begin change');
  });
  $rootScope.$on('$routeChangeSuccess', function(evt, current, previous) {
    console.log('route have already changed ：' + $location.path());
  });
}])
