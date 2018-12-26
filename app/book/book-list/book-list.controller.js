angular.module('app.book.list')
    .controller('BookListController', ['$scope', '$state', 'NgTableParams', 'book',
      function ($scope, $state, NgTableParams, book) {
        var data = book;
        $scope.tableParams = new NgTableParams({count: 10}, { counts: [], dataset: data });
        
        $scope.detailBook = (id) => {
            $state.go('app.book_detail', {id: id});
        }
    }
]);
    