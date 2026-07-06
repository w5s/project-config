import browserslist from 'browserslist';
import { entries, groupBy } from 'lodash-es';
import { readFile, writeFile } from 'node:fs/promises';
import nodePath from 'node:path';
import { fileURLToPath } from 'node:url';

const Package = {
  async readBrowsersListConfig(fileName) {
    const scriptDirectory = nodePath.dirname(fileURLToPath(import.meta.url));
    const rootDirectory = nodePath.dirname(scriptDirectory);
    const configModule = await import(nodePath.join(rootDirectory, fileName));
    return configModule.default;
  },
};
const BrowserListDev = {
  getURL(browsersListConfig) {
    // eslint-disable-next-line unicorn/prefer-uint8array-base64
    const url = `https://browserslist.dev/?q=${btoa(browsersListConfig.join(','))}`;
    return url;
  },
};
const Browser = (() => {
  const map = new Map(
    Object.entries({
      and_chr: {
        iconName: 'chrome',
        name: 'Chrome for Android',
      },
      and_ff: {
        iconName: 'firefox',
        name: 'Firefox for Android',
      },
      and_qq: {
        iconName: 'qq',
        name: 'QQ Browser',
      },
      and_uc: {
        iconName: 'uc',
        name: 'UC Browser',
      },
      bb: {
        iconName: 'blackberry',
        name: 'Blackberry',
      },
      ie: {
        iconName: 'ie',
        name: 'Internet Explorer',
      },
      ie_mob: {
        iconName: 'ie',
        name: 'IE Mobile',
      },
      ios_saf: {
        iconName: 'ios-safari',
        name: 'Safari for iOS',
      },
      op_mini: {
        iconName: 'opera-mini',
        name: 'Opera Mini',
      },
      op_mob: {
        iconName: 'opera',
        name: 'Opera Mobile',
      },
    }),
  );

  function getVersion(browser) {
    return browser.split(' ', 2)?.[1];
  }

  function getName(browser) {
    return map.has(browser) ? map.get(browser).name : browser[0].toUpperCase() + browser.slice(1);
  }

  function getIconName(browser) {
    return map.has(browser) ? map.get(browser).iconName : browser;
  }
  return {
    getIconName,
    getName,
    getVersion,
  };
})();

async function buildPageContent() {
  function groupsByDeviceType(browserList) {
    const getPrefix = (browser) => browser.split(' ', 1)[0];

    const deviceMap = groupBy(browserList, (browser) =>
      (browser.startsWith('ios_') || browser.startsWith('and_') || browser.startsWith('op_') || browser.startsWith('ie_')
        ? 'mobile'
        : 'desktop'),
    );

    return {
      desktop: groupBy(deviceMap.desktop, getPrefix),
      mobile: groupBy(deviceMap.mobile, getPrefix),
    };
  }

  const browsersListConfig = await Package.readBrowsersListConfig('dist/default.js');
  const url = BrowserListDev.getURL(browsersListConfig);
  const supportedBrowsers = browserslist(browsersListConfig);
  const grouped = groupsByDeviceType(supportedBrowsers);
  const buildSection = (deviceType, browsers) => `
    ### ${deviceType[0].toUpperCase() + deviceType.slice(1)}

    ${entries(browsers)
      .map(
        ([browserCode, versions]) =>
          `- ${Browser.getName(browserCode)} (${versions.map(Browser.getVersion).join(', ')})`,
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
    [View more in browserslist.dev (usages, coverage)](${url})
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
