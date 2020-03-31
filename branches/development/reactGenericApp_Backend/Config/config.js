
const ROOT_URL='http://10.11.21.228:3302/'
const WEB_URL='http://localhost:3000'
const LinkedInDeepLink=ROOT_URL+"oauth2redirect"
const LinkedInConfig = {
     client_id: '81sf59gto8d9sm',
     clientSecret: 'Q03Jz6DlP3VjDUOD',
     redirectUrl: ROOT_URL+'LinkedInRedirect',
     scopes: ['r_emailaddress'],
     serviceConfiguration: {
       authorizationEndpoint: 'https://www.linkedin.com/oauth/v2/authorization',
       tokenEndpoint: 'https://www.linkedin.com/oauth/v2/accessToken',
     },
   }
 
   const EmailConfig = {
    from: 'no-reply@example.com',
    host: 'smtp.gmail.com', // hostname
    secureConnection: true, // use SSL
    port: 465, // port for secure SMTP
    transportMethod: 'SMTP', // default is SMTP. Accepts anything that nodemailer accepts
    auth: {
      user: 'webgenestore@gmail.com',
      pass: 'Resource123!'
    }
  }
module.exports = {
     'ROOT_URL' : ROOT_URL,
     'WEB_URL'  : WEB_URL,
     LinkedInDeepLink:LinkedInDeepLink,
     LinkedInConfig:LinkedInConfig,
     EmailConfig:EmailConfig
};