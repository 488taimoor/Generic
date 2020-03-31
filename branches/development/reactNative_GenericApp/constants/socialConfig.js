const GoogleConfig = {
  
  clientId: '1014974210009-ed4h74fb8mbur105kcglfppeda92encf.apps.googleusercontent.com',
  redirectUrl: 'com.googleusercontent.apps.1014974210009-ed4h74fb8mbur105kcglfppeda92encf:/oauth2redirect/google',
  scopes: ['profile', 'email'],
  serviceConfiguration: {
    authorizationEndpoint: 'https://accounts.google.com/o/oauth2/auth',
    tokenEndpoint: 'https://oauth2.googleapis.com/token?client_secret=dE8VIAlOrWF2CuNb7LPaYRAx',
  },
};
const FaceBookConfig = {
  serviceConfiguration: {
    authorizationEndpoint: 'https://www.facebook.com/v4.0/dialog/oauth',
    tokenEndpoint: 'https://graph.facebook.com/v4.0/oauth/access_token?client_id=511808346054261&client_secret=63a6d2f447fc39154f3b48beede628d0',
  },
  clientId: '511808346054261',
  redirectUrl: 'https://ebb9c133.ngrok.io/oauth2redirect',
  clientSecret:'63a6d2f447fc39154f3b48beede628d0',
  scopes: ['email']
}

const LinkedInConfig = {
  
  clientId: '81sf59gto8d9sm',
  clientSecret: 'Q03Jz6DlP3VjDUOD',
  redirectUrl: 'http://10.11.21.228:3302/LinkedInRedirect',
  scopes: ['r_emailaddress'],
  serviceConfiguration: {
    authorizationEndpoint: 'https://www.linkedin.com/oauth/v2/authorization',
    tokenEndpoint: 'https://www.linkedin.com/oauth/v2/accessToken'
  },
}

module.exports = {
    GoogleConfig,
    FaceBookConfig,
    LinkedInConfig,
    
};
