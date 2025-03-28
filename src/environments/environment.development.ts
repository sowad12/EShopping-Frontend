export const environment = {
    production: false,
    baseUrl: 'https://localhost:5005/api/v1/',
    userKey: 'user',
    //apiRoot : "https://localhost:9000",
    // clientRoot : "http://localhost:4200",
    // idpAuthority : "https://localhost:5006",
    // clientId : "angular-client"
    authority: "https://localhost:5006/",
    clientId: "vue id",
    clientSecret: "vue secret",
    redirectUri: "http://localhost:8080/authcallback",
    postLogoutRedirectUri: "http://localhost:8080/authcallbacksignout",
};

