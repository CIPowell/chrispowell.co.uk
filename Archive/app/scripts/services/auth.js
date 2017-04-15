class AuthService {
    constructor($q, lock, authManager) {
        this.lock = lock;
        this.authManager = authManager;
        this.deferredProfile = $q.defer();
    }

    login () {
        this.lock.show();
    }

    getProfileDeferred() {
        return this.deferredProfile.promise;
    }


    registerAuthenticationListener() {
        this.lock.on('authenticated', (authResult) => {
            sessionStorage.setItem('id_token', authResult.idToken);
            this.authManager.authenticate();

            this.lock.getProfile(authResult.idToken, (error, profile) => {
                if (error) {
                    return console.log(error);
                }

                localStorage.setItem('profile', JSON.stringify(profile));
                this.deferredProfile.resolve(profile);
            });
        })
    }
}

angular.module('cip').service('authService', AuthService);
