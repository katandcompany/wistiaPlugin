/**
* A set of functions to handle the plugin settings' data.
*/
export const setSettingsValue = (data, key, value) => { data[key] = value; };

export const getSettingsValue = (response, key) => response[key];

export const saveCollection = (data, collectionName, callback) => buildfire.datastore.save(
  data,
  collectionName,
  callback
);

export const getCollection = (collectionName, callback) => buildfire.datastore.get(
  collectionName,
  callback
);
