/* eslint-disable no-undef */
const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');
const { expect } = require('chai');
const core = require('../src/core');

describe('authorise', () => {
  it('Should call API and return response successfully', async () => {
    // Arrange
    const mock = new MockAdapter(axios);
    const data = {
      grant_type: 'client_credentials',
      client_id: 'jarvis',
      client_secret: '93aCdnu$M1mc61KhzzrrtXN9ob9a&6DvuL9&',
      audience: 'client-tracking-api',
    };
    const headers = {
      Authorization:
        'Basic UDIySFNva3BqWHBidmN4V1JKdG92T0FQR0NsVTM2SFU6VEdlOVVIUkJ2NmxKUml3WWZLLUU0YndSTnJHNmY3RDBWdDhCT0RoRFlWSWpJVERrMkZaZHNuTlVkYjdjXzNJMQ==',
    };
    mock.onPost('https://hermes-client-integration-prod.eu.auth0.com/oauth/token').reply(200, data, headers);
    // Act
    const response = await core.authorise();
    // Assert
    expect(response).to.equal(true);
  });
});
