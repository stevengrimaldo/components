import React, { Component } from 'react';
import { ServerStyleSheet } from 'styled-components';
import {
  AfterRoot,
  AfterData,
  AfterScripts,
  AfterStyles,
} from '@jaredpalmer/after';

const Document = ({ helmet, styleTags }) => {
  const htmlAttrs = helmet.htmlAttributes.toComponent();
  const bodyAttrs = helmet.bodyAttributes.toComponent();

  return (
    <html {...htmlAttrs}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {helmet.title.toComponent()}
        {helmet.meta.toComponent()}
        {helmet.link.toComponent()}
        {styleTags}
        <AfterStyles />
      </head>
      <body {...bodyAttrs}>
        <AfterRoot />
        <AfterData />
        <AfterScripts />
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/dat-gui/0.7.7/dat.gui.min.js"
          integrity="sha512-LF8ZB1iTwi4Qvkm4pekHG4a437Y9Af5ZuwbnW4GTbAWQeR2E4KW8WF+xH8b9psevV7wIlDMx1MH9YfPqgKhA/Q=="
          crossOrigin="anonymous"
        ></script>
      </body>
    </html>
  );
};

Document.getInitialProps = async ({ renderPage }) => {
  const sheet = new ServerStyleSheet();
  const page = await renderPage(App => props =>
    sheet.collectStyles(<App {...props} />)
  );
  const styleTags = sheet.getStyleElement();
  return { ...page, styleTags };
};

export default Document;
