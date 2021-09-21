import React, { useState, useEffect } from 'react';
import { hot } from 'react-hot-loader/root';
import {
  setSettingsValue,
  getSettingsValue,
  saveCollection,
  getCollection
} from '../../../data/datastore-functions';
import { settingsCollectionName, settingsData } from '../../../data/settings-variables';
import Form from './Form';
import TextControl from './TextControl';
import Button from './Button';

const Settings = () => {
  const [apiKey, setApiKey] = useState('');
  const [projectId, setProjectId] = useState('');

  const saveSettings = (event) => {
    event.preventDefault();
    setSettingsValue(settingsData, 'wistiaApiKey', apiKey);
    setSettingsValue(settingsData, 'wistiaProjectId', projectId);
    saveCollection(settingsData, settingsCollectionName, (err) => {
      if (err) console.log(err);
    });
  };

  useEffect(() => {
    getCollection(settingsCollectionName, (err, response) => {
      if (err) console.log(err);
      if (response && response.data) {
        setApiKey(getSettingsValue(response.data, 'wistiaApiKey'));
        setProjectId(getSettingsValue(response.data, 'wistiaProjectId'));
      }
    });
  }, []);

  return (
    <Form id="settingsForm" formAction="#" submitHandler={saveSettings}>
      <TextControl type="text" id="wistiaApiKey" label="Wistia API Key" placeholder="Enter Wistia API Key" value={apiKey} changeHandler={event => setApiKey(event.target.value)} />
      <TextControl type="text" id="wistiaProjectId" label="Wistia Project ID" placeholder="Enter Wistia Project ID" value={projectId} changeHandler={event => setProjectId(event.target.value)} />
      <Button buttonType="submit" id="saveBtn" classList="btn btn-success">Save Settings</Button>
    </Form>
  );
};
export default hot(Settings);
