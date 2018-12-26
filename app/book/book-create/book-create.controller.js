angular.module('app.book.create')
    .controller('BookCreateController', ['$scope', '$state', 'toastr', 'BookService',
      function ($scope, $state, toastr, BookService) {

      $scope.save = () => {
        $scope.data.createdDate = new Date();
        BookService.post($scope.data).$promise.then(function(data){
          console.log("Eklenen Veri", data);
          toastr.success('Kayıt eklendi.');
          $state.go('app.book_list');
        });
      }

    }
]);
    