import React, { useState, useEffect } from 'react';
import { hot } from 'react-hot-loader/root';
import {
  getSettingsValue,
  saveCollection,
  getCollection
} from '../../data/datastore-functions';
import { settingsCollectionName } from '../../data/settings-variables';
import Form from '../components/Form';
import TextControl from '../components/TextControl';
import Button from '../components/Button';

const Settings = () => {
  const [apiKey, setApiKey] = useState('');
  const [projectId, setProjectId] = useState('');
  const [currentSettings, setCurrentSettings] = useState({});

  const saveSettings = (event) => {
    event.preventDefault();
    saveCollection(currentSettings, settingsCollectionName, (err) => {
      if (err) console.log(err);
    });
  };

  useEffect(() => {
    getCollection(settingsCollectionName, (err, response) => {
      if (err) console.log(err);
      if (response && response.data) {
        setCurrentSettings(response.data);
        setApiKey(getSettingsValue(response.data, 'wistiaApiKey'));
        setProjectId(getSettingsValue(response.data, 'wistiaProjectId'));
      }
    });
  }, []);

  useEffect(() => {
    setCurrentSettings({
      ...currentSettings,
      ...{
        wistiaApiKey: apiKey,
        wistiaProjectId: projectId
      }
    });
  }, [apiKey, projectId]);

  return (
    <Form id="settingsForm" formAction="#" submitHandler={saveSettings}>
      <TextControl type="text" id="wistiaApiKey" label="Wistia API Key" placeholder="Enter Wistia API Key" value={apiKey} changeHandler={event => setApiKey(event.target.value)} />
      <TextControl type="text" id="wistiaProjectId" label="Wistia Project ID" placeholder="Enter Wistia Project ID" value={projectId} changeHandler={event => setProjectId(event.target.value)} />
      <Button buttonType="submit" id="saveBtn" classList="btn btn-success">Save Settings</Button>
    </Form>
  );
};
export default hot(Settings);
