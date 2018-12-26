angular.module('app.book.list').factory('BookService', ['$resource', 'serviceURL', function ($resource, serviceURL) {
    
    return $resource(
        serviceURL + '/Book/:id',
        { id:'@id' },
        {
            "post": {
                  method: "POST"
            },
            "get": {
                  method: "GET"
            },
            "query": {
                  method: "GET",
                  isArray: true
            }
        }
    );
}])