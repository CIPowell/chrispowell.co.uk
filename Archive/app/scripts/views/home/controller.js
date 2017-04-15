class HomeController {
    constructor(authService) {
        authService.getProfileDeferred().then((profile) => {
            console.debug(profile);
            this.profile = profile;

        });
    }
}

HomeController.$inject = ['authService'];

angular.module('cip').component('home', {
    templateUrl: require('./view.tpl'),
    controller: HomeController
});
