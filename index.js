const runServer = require('saml-idp').runServer

runServer({
    acsUrl: "http://localhost:8080/bolt-saml/saml/SSO",
    sloUrl: "http://localhost:8080/bolt-saml/saml/SingleLogout",
    // audience: "com:rbs:bolt:dev:sp",
    audience: "https://localhost:8443/saml/metadata",
    cert: "./idp-public-cert.pem",
    key: "./idp-private-key.pem",
    configFile: require.resolve("./config.js")
})