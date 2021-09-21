import React, { useState, useEffect } from 'react';
import { hot } from 'react-hot-loader/root';
import { getSettingsValue, getCollection } from '../../data/datastore-functions';
import { settingsCollectionName } from '../../data/settings-variables';
import ErrorMsg from './ErrorMsg';
import WistiaVideosCollection from './WistiaVideosCollection';

const Widget = () => {
  const [errorMsg, setErrorMsg] = useState(false);
  const [apiKey, setApiKey] = useState('');
  const [projectId, setProjectId] = useState('');

  useEffect(() => {
    getCollection(settingsCollectionName, (err, response) => {
      if (err) setErrorMsg(err);
      if (response && response.data) {
        setApiKey(getSettingsValue(response.data, 'wistiaApiKey'));
        setProjectId(getSettingsValue(response.data, 'wistiaProjectId'));
      }
    });
  }, [getCollection, setApiKey, setProjectId]);

  return (
    <>
      { errorMsg && <ErrorMsg message={errorMsg} /> }
      {
        !errorMsg && apiKey && projectId
        && (
          <WistiaVideosCollection
            apiKey={apiKey}
            projectId={projectId}
            errorHandler={setErrorMsg}
          />
        )
      }
    </>
  );
};

export default hot(Widget);
