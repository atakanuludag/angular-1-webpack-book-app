import '../book/book-list/book-list.module';
import '../book/book-list/book-list.controller';

import '../book/book-create/book-create.module';
import '../book/book-create/book-create.controller';

import '../book/book-detail/book-detail.module';
import '../book/book-detail/book-detail.controller';

import '../core/services/book.service';

angular.module('app.book', [
            'app.book.list',
            'app.book.create',
            'app.book.detail'
          ])
          .config(config);

  function config()
  {

  }
 