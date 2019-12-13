const core = require('../core');

/**
 * Gets trackable events for a given parcel
 * @param {int} trackingNumber
 */
module.exports.getEvents = async trackingNumber => {
  const out = await core.performQuery(
    `/client-tracking-api/v1/events?barcode=${trackingNumber}&descriptionType=CLIENT`,
  );
  return out;
};

/**
 * Gets an estimated time of arival for a given parcel
 * @param {int} trackingNumber
 */
module.exports.getETA = async trackingNumber => {
  const out = await core.performQuery(`/client-tracking-api/v1/etas?barcode=${trackingNumber}`);
  return out;
};

/**
 * Gets a signature image in base64 encoding for a given parcel
 * @param {int} trackingNumber
 */
module.exports.getSignature = async trackingNumber => {
  const out = await core.performQuery(`/client-tracking-api/v1/signatures?barcode=${trackingNumber}`);
  return out;
};

/**
 * Gets a safe place image in base64 encoding for a given parcel
 * @param {int} trackingNumber
 */
module.exports.getSafePlace = async trackingNumber => {
  const out = await core.performQuery(`/client-tracking-api/v1/safe-place-photos?barcode=${trackingNumber}`);
  return out;
};
