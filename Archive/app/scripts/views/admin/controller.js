class AdminController {
    constructor(authService) {
        this.authService = authService;
    }
    
    login () {
        this.authService.login();
    }
}

angular.module('cip').component('admin', {
    templateUrl: require('./view.tpl'),
    controller: AdminController
})
