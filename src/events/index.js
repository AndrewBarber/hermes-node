const core = require('../core');

/**
 * Get's trackable events for a given parcel
 * @param {int} trackingNumber
 */
module.exports.getEvents = async (trackingNumber) => {
  const out = await core.performQuery(
    `/client-tracking-api/v1/events?barcode=${trackingNumber}&descriptionType=CLIENT`,
  );
  return out;
};
