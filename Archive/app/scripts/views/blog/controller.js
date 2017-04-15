class BlogController{
    constructor($http, $sce) {
        $http.get('https://api.chrisipowell.co.uk/api/dev/posts')
        .then(response => {
            this.articles = response.data.map(function(article){
                return {
                    title: article.title,
                    body: $sce.trustAsHtml(article.body),
                    created: article.created
                };
            });
        });
    }

}

BlogController.$inject = ['$http', '$sce'];

angular.module('cip').component('blog', {
    templateUrl: require('./view.tpl'),
    controller: BlogController
});
