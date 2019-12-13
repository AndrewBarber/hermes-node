# Hermes Node

Make API calls to Hermes in Node.

## Prerequisites

- [Hermes API Account](http://myhermes.co.uk)
- [Node.js 8.0+](http://nodejs.org)

## Install

The easiest way to get started is to clone the repository:

```bash
npm install hermes-node
```

## Configuration // Usage

Set the API ID and Token

```js
const hermes = require('hermes-node');

hermes.core.grant_type = 'client_credentials';
hermes.core.client_id = '<App Name>'; //This is your unique client id
hermes.core.client_secret = '<App Random Secret String>'; // This is your client secret key
hermes.core.audience = '<App Audience>'; //This should be set to the API you are trying to access. (i.e. “client-print-in-store-api” OR “client-tracking-api”)

hermes.core.auth_id = '<API Auth ID>'; //This is your Auth ID supplied by Hermes
hermes.core.auth_secret = '<API Auth Secret>'; //This is your Auth Secret supplied by Hermes
hermes.core.apikey = '<API API Key>'; //This is your api key supplied by Hermes
```

### Core

```js
// MUST be called before calling other methods.
hermes.core.authorise();
```

### Requests

```js
// Gets trackable events for a given parcel (trackingNumber)
hermes.requests.getEvents(1234);

// Gets an ETA for a given parcel (trackingNumber)
hermes.requests.getETA(1234);

// Gets a signature image in base64 encoding for a given parcel (trackingNumber)
hermes.requests.getSignature(1234);

// Gets a safe place image in base64 encoding for a given parcel (trackingNumber)
hermes.requests.getSafePlace(1234);
```

## Changelog

You can find the changelog for the project in: [CHANGELOG.md](https://github.com/AndrewBarber/hermes-node/blob/master/CHANGELOG.md)

## Contributing

If something is unclear, confusing, or needs to be refactored, please let me know.
Pull requests are always welcome. Please open an issue before
submitting a pull request. This project uses [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) with a few minor exceptions.
