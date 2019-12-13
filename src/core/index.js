const axios = require('axios');

module.exports.grant_type = '';
module.exports.client_id = '';
module.exports.client_secret = '';
module.exports.audience = '';

module.exports.auth_id = '';
module.exports.auth_secret = '';
module.exports.apikey = '';

module.exports.base = 'https://api.hermesworld.co.uk';
module.exports.authBase = 'https://hermes-client-integration-prod.eu.auth0.com';

module.exports.access_token = '';

/**
 * Performs the Query to the API Call
 * @param {*} path the query path
 */

module.exports.performQuery = async path => {
  let postData;
  let headerData;
  let method;

  if (this.access_token.length > 32) {
    headerData = {
      Authorization: `Bearer ${this.access_token}`,
      apikey: this.apikey,
    };
  }

  return new Promise((resolve, reject) => {
    let url;
    if (path === 'auth') {
      method = 'post';
      const auth = `Basic ${Buffer.from(`${this.auth_id}:${this.auth_secret}`).toString('base64')}`;
      postData = {
        grant_type: this.grant_type,
        client_id: this.client_id,
        client_secret: this.client_secret,
        audience: this.audience,
      };
      headerData = {
        Authorization: auth,
      };
      url = `${this.authBase}/oauth/token`;
    } else {
      method = 'get';
      url = this.base + path;
    }

    axios({
      method,
      url,
      data: postData,
      headers: headerData,
    })
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        // Error 😨
        if (error.response) {
          console.log(error.response.data);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log('Error', error.message);
        }
      });
  });
};

/**
 * Authorises the app against the Hermes API
 */
module.exports.authorise = async () => {
  const out = await this.performQuery('auth');
  this.access_token = out.access_token;
  return true;
};
