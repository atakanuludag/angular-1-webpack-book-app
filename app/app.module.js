//Angular Modules
import angular from 'angular';
import 'angular-ui-router';
import 'angular-resource';
import 'angular-animate';
import 'angular-toastr'
import 'angular-toastr/dist/angular-toastr.min.css'

//Other Modules and Plugins
import 'jquery';
import './index.scss';
import 'ng-table/bundles/ng-table';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';

//Modules
import './book/book.module';

//Settings
const serviceURL = 'https://5bad31c7092a7800144a22ba.mockapi.io/book/api/v1';

angular.module('app', [
    "ui.router",
    "ngResource",
    "ngAnimate",
    "toastr",
    "ngTable",
    "app.book"
]).run(run).config(config)
.constant('serviceURL', serviceURL);

run.$inject = ['$rootScope','$transitions', '$timeout'];
function run($rootScope, $transitions, $timeout) {
    $rootScope.loading = false;
    
    $transitions.onStart({ }, function(trans) {
        $rootScope.loading = true;
    });

    $transitions.onSuccess({ }, function(trans) {
        $timeout( function(){
            $rootScope.loading = false;
        }, 700 );
    });
    
    

}


config.$inject =  ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
function config( $stateProvider, $urlRouterProvider, $locationProvider ) {

   
  
    $stateProvider
    .state('app', {
        views: {
            '': {
                templateUrl:'../app/core/layout/body.html'
            },
            'loading@app': {
                templateUrl:'../app/core/layout/loading.html'
            },
            'header@app': {
                templateUrl:'../app/core/layout/header.html'
            },
            'content@app': {
                template:'<div class="container pt-5 pb-5"><ui-view></ui-view></div>'
            },
            'footer@app': {
                templateUrl:'../app/core/layout/footer.html'
            }
        },
        abstract: true
    });
    

    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);

}