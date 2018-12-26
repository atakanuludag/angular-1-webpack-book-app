angular.module('app.book.detail')
    .controller('BookDetailController', ['$scope', 'book',
      function ($scope, book) {

        $scope.book = book;

    }
]);
    