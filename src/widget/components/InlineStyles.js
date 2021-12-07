import React, { useContext, useEffect, useState } from 'react';
import { hot } from 'react-hot-loader/root';
import { PluginContext } from '../../contexts/PluginContext';

const InlineStyles = () => {
  const [theme, setTheme] = useState({});
  const { pluginTheme } = useContext(PluginContext);

  useEffect(() => {
    setTheme({
      ...pluginTheme
    });
  }, [pluginTheme]);

  const styles = `
    :root, .root{
        ${!theme.bodyHeadingsColor ? '' : `--body-headings-color: ${theme.bodyHeadingsColor};`}
        ${!theme.bodyTextColor ? '' : `--body-text-color: ${theme.bodyTextColor};`}        
        ${!theme.filterBgColor ? '' : `--filter-bg: ${theme.filterBgColor};`}
        ${!theme.filterTextColor ? '' : `--filter-text: ${theme.filterTextColor};`}
        ${!theme.actionIconsColor ? '' : `--card-actions-color: ${theme.actionIconsColor};`}
        ${!theme.cardTextColor ? '' : `--card-caption: ${theme.cardTextColor};`}
    }`;
  return <style>{styles}</style>;
};

export default hot(InlineStyles);
