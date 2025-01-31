// ==UserScript==
// @name         Redirect from Graphite to GitHub
// @namespace    https://gaunt.dev/
// @version      2025-01-06
// @description  Redirect from Graphite to GitHub
// @author       gauntface
// @match        https://app.graphite.dev/github/pr/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=graphite.dev
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  // URL Format: https://app.graphite.dev/github/pr/<org>/<repo>/<PR Number>/<PR Title>
  const href = window.location.href.trim();
  console.log(`Checking Graphite URL for GitHub redirect: ${href}`);
  const regex = /https:\/\/app.graphite.dev\/github\/pr\/([^/]+)\/([^/]+)\/(\d+)\/.*/;
  const match = href.match(regex);
  if (!match) {
      console.log(`Not a match`);
      return;
  }
  const org = match[1];
  const repo = match[2];
  const prNumber = match[3];
  const gitHubURL = `https://github.com/${org}/${repo}/pull/${prNumber}`;
  console.log(`Redirecting from Graphite to GitHub.\n\n    Graphite: ${href}\n    GitHub: ${gitHubURL}`);
  window.location.href = gitHubURL;
})();
