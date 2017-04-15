<article ng-repeat="article in $ctrl.articles">
  <h2>{{article.title}}</h2>
  <p>{{article.created}}</p>
  <div ng-bind-html="article.body">
  </div>
</article>
