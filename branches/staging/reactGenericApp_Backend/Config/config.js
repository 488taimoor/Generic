
const LinkedInConfig = {
  
     client_id: '81sf59gto8d9sm', 
     clientId: '81sf59gto8d9sm',
     clientSecret: 'Q03Jz6DlP3VjDUOD',
     redirectUrl: 'http://10.11.21.228:3302/LinkedInRedirect',
     scopes: ['r_emailaddress'],
     serviceConfiguration: {
       authorizationEndpoint: 'https://www.linkedin.com/oauth/v2/authorization',
       tokenEndpoint: 'https://www.linkedin.com/oauth/v2/accessToken',
     },
   }
   const FaceBookConfig = {
     serviceConfiguration: {
       authorizationEndpoint: 'https://www.facebook.com/v4.0/dialog/oauth',
       tokenEndpoint: 'https://graph.facebook.com/v4.0/oauth/access_token',
   
     },
     clientId: '511808346054261',
     redirectUrl: 'https://74bf7eae.ngrok.io/FaceBookRedirect',
     clientSecret:'63a6d2f447fc39154f3b48beede628d0',
     scopes: ['email'],
   }
   
module.exports = {
     'URL' : 'http://localhost:3000/',
     'WEB_URL'  : 'http://localhost:3000',
     LinkedInConfig:LinkedInConfig,
     FaceBookConfig:FaceBookConfig
};