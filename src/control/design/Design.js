import React, { useState, useEffect } from 'react';
import { hot } from 'react-hot-loader/root';
import { MdOutlinePalette } from 'react-icons/md';
import {
  saveCollection,
  getCollection
} from '../../data/datastore-functions';
import { settingsCollectionName } from '../../data/settings-variables';
import useBuildfireObjects from '../../hooks/useBuildfireObjects';
import Form from '../components/Form';
import InputControl from '../components/InputControl';
import Button from '../components/Button';

const Design = () => {
  const { bfColorLib } = useBuildfireObjects();
  const [currentSettings, setCurrentSettings] = useState({
    pluginTheme: {
      bodyHeadingsColor: '',
      bodyTextColor: '',
      filterBgColor: '',
      filterTextColor: '',
      cardTextColor: '',
      actionIconsColor: '',
    }
  });
  const colorPickerIcon = (
    <span className="color-picker-icon">
      <MdOutlinePalette style={{ fontSize: '17px' }} />
    </span>
  );

  const updateCurrentSetting = (key, value) => {
    const mutatedSettings = {
      ...currentSettings
    };
    mutatedSettings.pluginTheme[key] = value;
    setCurrentSettings(mutatedSettings);
  };

  const toggleColorDialog = (event, setter) => {
    event.preventDefault();
    const inputToUpdate = event.currentTarget.previousElementSibling;
    bfColorLib.showDialog(
      {
        colorType: 'solid',
        solid: {
          colorHex: inputToUpdate.value,
          opacity: 100,
        }
      },
      {
        hideGradient: true,
      },
      null,
      (err, result) => {
        if (err) console.log(err);
        if (result && result.solid.colorHex) {
          return setter(inputToUpdate.getAttribute('id'), result.solid.colorHex);
        }
      }
    );
  };

  const saveSettings = (event) => {
    event.preventDefault();
    saveCollection(currentSettings, settingsCollectionName, (err) => {
      if (err) console.log(err);
    });
  };

  useEffect(() => {
    getCollection(settingsCollectionName, (err, response) => {
      if (err) console.log(err);
      if (response && response.data && response.data.pluginTheme) {
        setCurrentSettings(response.data);
      } else {
        setCurrentSettings(
          {
            wistiaApiKey: response.data.wistiaApiKey,
            wistiaProjectId: response.data.wistiaProjectId,
            pluginTheme: {
              bodyHeadingsColor: '#000000',
              bodyTextColor: '#000000',
              filterBgColor: '#000000',
              filterTextColor: '#FFFFFF',
              cardTextColor: '#000000',
              actionIconsColor: '#000000',
            }
          }
        );
      }
    });
  }, []);

  return (
    <Form id="settingsForm" formAction="#" submitHandler={saveSettings}>
      <InputControl
        type="text"
        id="bodyHeadingsColor"
        label="Body Headings Color"
        placeholder="Enter Body Headings Color (ie. #000000)"
        appendStyle={{ backgroundColor: currentSettings.pluginTheme.bodyHeadingsColor }}
        appendText={colorPickerIcon}
        value={currentSettings.pluginTheme.bodyHeadingsColor}
        changeHandler={event => updateCurrentSetting(event.currentTarget.getAttribute('name'), event.currentTarget.value)}
        focusHandler={event => toggleColorDialog(event, updateCurrentSetting)}
      />
      <InputControl
        type="text"
        id="bodyTextColor"
        label="Body Text Color"
        placeholder="Enter Body Text Color (ie. #000000)"
        appendStyle={{ backgroundColor: currentSettings.pluginTheme.bodyTextColor }}
        appendText={colorPickerIcon}
        value={currentSettings.pluginTheme.bodyTextColor}
        changeHandler={event => updateCurrentSetting(event.currentTarget.getAttribute('name'), event.currentTarget.value)}
        focusHandler={event => toggleColorDialog(event, updateCurrentSetting)}
      />
      <InputControl
        type="text"
        id="filterBgColor"
        label="Section Filter Background Color"
        placeholder="Enter Filter Background Color (ie. #000000)"
        appendStyle={{ backgroundColor: currentSettings.pluginTheme.filterBgColor }}
        appendText={colorPickerIcon}
        value={currentSettings.pluginTheme.filterBgColor}
        changeHandler={event => updateCurrentSetting(event.currentTarget.getAttribute('name'), event.currentTarget.value)}
        focusHandler={event => toggleColorDialog(event, updateCurrentSetting)}
      />
      <InputControl
        type="text"
        id="filterTextColor"
        label="Section Filter Text Color"
        placeholder="Enter Filter Text Color (ie. #FFFFFF)"
        appendStyle={{ backgroundColor: currentSettings.pluginTheme.filterTextColor }}
        appendText={colorPickerIcon}
        value={currentSettings.pluginTheme.filterTextColor}
        changeHandler={event => updateCurrentSetting(event.currentTarget.getAttribute('name'), event.currentTarget.value)}
        focusHandler={event => toggleColorDialog(event, updateCurrentSetting)}
      />
      <InputControl
        type="text"
        id="cardTextColor"
        label="Card Text Color"
        placeholder="Enter Card Text Color (ie. #000000)"
        appendStyle={{ backgroundColor: currentSettings.pluginTheme.cardTextColor }}
        appendText={colorPickerIcon}
        value={currentSettings.pluginTheme.cardTextColor}
        changeHandler={event => updateCurrentSetting(event.currentTarget.getAttribute('name'), event.currentTarget.value)}
        focusHandler={event => toggleColorDialog(event, updateCurrentSetting)}
      />
      <InputControl
        type="text"
        id="actionIconsColor"
        label="Action Icons Color"
        placeholder="Enter Icon Color (ie. #FFFFFF)"
        appendStyle={{ backgroundColor: currentSettings.pluginTheme.actionIconsColor }}
        appendText={colorPickerIcon}
        value={currentSettings.pluginTheme.actionIconsColor}
        changeHandler={event => updateCurrentSetting(event.currentTarget.getAttribute('name'), event.currentTarget.value)}
        focusHandler={event => toggleColorDialog(event, updateCurrentSetting)}
      />
      <Button
        buttonType="submit"
        id="saveBtn"
        classList="btn btn-success"
      >
        Save Settings
      </Button>
    </Form>
  );
};

export default hot(Design);
