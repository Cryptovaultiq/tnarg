const fs = require('fs');
const path = require('path');

const env = process.env;

const visitorConfig = {
  WEB3FORMS_ACCESS_KEY: env.VERCEL_WEB3FORMS_ACCESS_KEY || '',
  VISITOR_CONFIG: {
    API_BASE_URL: env.VERCEL_VISITOR_API_BASE_URL || ''
  }
};

const adminConfig = {
  ADMIN_PANEL_CONFIG: {
    API_BASE_URL: env.VERCEL_ADMIN_API_BASE_URL || ''
  }
};

fs.writeFileSync(path.resolve(__dirname, 'config.generated.js'), `window.WEB3FORMS_ACCESS_KEY = ${JSON.stringify(visitorConfig.WEB3FORMS_ACCESS_KEY)};
window.VISITOR_CONFIG = ${JSON.stringify(visitorConfig.VISITOR_CONFIG)};
`);
fs.writeFileSync(path.resolve(__dirname, 'admin-panel', 'config.generated.js'), `window.ADMIN_PANEL_CONFIG = ${JSON.stringify(adminConfig.ADMIN_PANEL_CONFIG)};
`);
console.log('Generated visitor and admin config from env variables.');
