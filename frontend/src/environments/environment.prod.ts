export const environment = {
  production: true,
  env: 'prod',
  authConfig: {
    issuer: 'https://cq.mpm-stage.prod.connected-quality.com/auth/realms/default',
    clientId: 'cq-mpm',
    responseType: 'code',
    redirectUri: '.',
    requireHttps: false,
    showDebugInformation: true,
},
auditTrailApiUrl: 'https://cq.mpm-stage.prod.connected-quality.com/cq-audittrail-api',
mpmApiUrl: 'https://cq.mpm-stage.prod.connected-quality.com/cq-mpm-api/api/v1',
// mpmApiUrl: 'https://localhost:5001/api/v1'
};
