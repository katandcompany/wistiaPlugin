import { useState, useEffect } from 'react';
import { getSettingsValue, getCollection } from '../data/datastore-functions';
import { settingsCollectionName } from '../data/settings-variables';

const usePluginSettings = (errorHandler) => {
  const [settingsData, setSettingsData] = useState({});

  useEffect(() => {
    getCollection(settingsCollectionName, (err, response) => {
      if (err) {
        errorHandler(err);
      }
      if (response && response.data) {
        setSettingsData({
          apiKey: getSettingsValue(response.data, 'wistiaApiKey'),
          projectId: getSettingsValue(response.data, 'wistiaProjectId'),
          pluginTheme: getSettingsValue(response.data, 'pluginTheme')
        });
      }
    });
  }, []);

  return settingsData;
};

export default usePluginSettings;
