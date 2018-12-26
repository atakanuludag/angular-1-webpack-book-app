angular.module('app.book.create', []).config(config);

function config($stateProvider)
{
    $stateProvider.state('app.book_create', {
        url: '/create',
        templateUrl: '../app/book/book-create/book-create.template.html',
        controller: 'BookCreateController',
        data : { title: 'Yeni Kitap' },

    });
}
