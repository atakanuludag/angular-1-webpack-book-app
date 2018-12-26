angular.module('app.book.detail', []).config(config);

function config($stateProvider)
{

    $stateProvider.state('app.book_detail', {
        url: '/detail/:id',
        templateUrl: '../app/book/book-detail/book-detail.template.html',
        controller: 'BookDetailController',
        data : { title: 'Kitap Detayı' },
        resolve: {
            book: function(BookService, $stateParams){
                return BookService.get({id:$stateParams.id}).$promise;
            }
        }

    });
}
