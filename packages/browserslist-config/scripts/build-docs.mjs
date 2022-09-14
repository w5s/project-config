import { writeFile, readFile } from 'node:fs/promises';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';
import browserslist from 'browserslist';
// eslint-disable-next-line import/no-extraneous-dependencies
import { groupBy, entries } from 'lodash-es';

const Package = {
  async readBrowsersListConfig(fileName) {
    const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
    const rootDirectory = path.dirname(scriptDirectory);
    const configModule = await import(path.join(rootDirectory, fileName));
    return configModule.default;
  },
};
const BrowserListDev = {
  getURL(browsersListConfig) {
    const url = `https://browserslist.dev/?q=${btoa(
      browsersListConfig.join(',')
    )}`;
    return url;
  },
};
const Browser = (() => {
  const map = new Map(
    Object.entries({
      and_chr: {
        name: 'Chrome for Android',
        iconName: 'chrome',
      },
      and_ff: {
        name: 'Firefox for Android',
        iconName: 'firefox',
      },
      and_qq: {
        name: 'QQ Browser',
        iconName: 'qq',
      },
      and_uc: {
        name: 'UC Browser',
        iconName: 'uc',
      },
      ios_saf: {
        name: 'Safari for iOS',
        iconName: 'ios-safari',
      },
      op_mob: {
        name: 'Opera Mobile',
        iconName: 'opera',
      },
      op_mini: {
        name: 'Opera Mini',
        iconName: 'opera-mini',
      },
      bb: {
        name: 'Blackberry',
        iconName: 'blackberry',
      },
      ie: {
        name: 'Internet Explorer',
        iconName: 'ie',
      },
      ie_mob: {
        name: 'IE Mobile',
        iconName: 'ie',
      },
    })
  );

  function getVersion(browser) {
    return browser.split(' ')?.[1];
  }

  function getName(browser) {
    return map.has(browser)
      ? map.get(browser).name
      : browser[0].toUpperCase() + browser.slice(1);
  }

  function getIconName(browser) {
    return map.has(browser) ? map.get(browser).iconName : browser;
  }
  return {
    getVersion,
    getName,
    getIconName,
  };
})();

async function buildPageContent() {
  function groupsByDeviceType(browserList) {
    const getPrefix = (browser) => browser.split(' ')[0];

    const deviceMap = groupBy(browserList, (browser) =>
      browser.startsWith('ios_') ||
      browser.startsWith('and_') ||
      browser.startsWith('op_') ||
      browser.startsWith('ie_')
        ? 'mobile'
        : 'desktop'
    );

    return {
      desktop: groupBy(deviceMap.desktop, getPrefix),
      mobile: groupBy(deviceMap.mobile, getPrefix),
    };
  }

  const browsersListConfig = await Package.readBrowsersListConfig('default.js');
  const url = BrowserListDev.getURL(browsersListConfig);
  const supportedBrowsers = browserslist(browsersListConfig);
  const grouped = groupsByDeviceType(supportedBrowsers);
  const buildSection = (deviceType, browsers) => `
    ### ${deviceType[0].toUpperCase() + deviceType.slice(1)}

    ${entries(browsers)
      .map(
        ([browserCode, versions]) =>
          `- ${Browser.getName(browserCode)} (${versions
            .map(Browser.getVersion)
            .join(', ')})`
      )
      .join('\n')}
  `;
  const header = `_Generated Automatically at ${new Date().toUTCString()}_`;
  return (
    header +
    `
    ${entries(grouped)
      .map(([deviceType, data]) => buildSection(deviceType, data))
      .join('')}
    [View more in browserlist.dev (usages, coverage)](${url})
  `
      .split('\n')
      .map((_) => _.trimStart())
      .join('\n')
  );
}

async function main() {
  const file = 'BROWSER_LIST.md';
  const [markdownContentNew, markdownContent] = await Promise.all([
    buildPageContent(),
    (async () => {
      try {
        return await readFile(file, 'utf8');
      } catch {
        return '';
      }
    })(),
  ]);
  const getBody = (content) => content.split('\n').slice(1).join('\n');
  const hasChanged = getBody(markdownContentNew) !== getBody(markdownContent);
  if (hasChanged) {
    await writeFile(file, markdownContentNew);
  }
}

await main();
