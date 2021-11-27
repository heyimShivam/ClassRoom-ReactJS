const Auth = {
    isAuthenticated: false,
    userDataTempStorage: null,
    authenticate() {
    this.isAuthenticated = true;
    },
    signout() {
    this.isAuthenticated = false;
    },
    getAuth() {
        return this.isAuthenticated;
    }
};

export default Auth;