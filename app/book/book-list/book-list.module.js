angular.module('app.book.list', []).config(config);


//require('../../core/services/book.service');

function config($stateProvider)
{

    $stateProvider.state('app.book_list', {
        url: '/',
        templateUrl: '../app/book/book-list/book-list.template.html',
        controller: 'BookListController',
        data : { title: 'Kitap Listesi' },
        resolve :{
            book: function(BookService){
                return BookService.query({sortBy:"createdDate", order:"asc"}).$promise;
            }
        }
    });
}
