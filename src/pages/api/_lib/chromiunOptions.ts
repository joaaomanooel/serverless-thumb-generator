import chrome from 'chrome-aws-lambda';

const chromeExecPaths = {
  win32: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  linux: '/usr/bin/google-chrome',
  darwin: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
}

const exePath = chromeExecPaths[process.platform];

interface Options {
  args: string[];
  executablePath: string;
  handless: boolean;
}

export async function getOptions(isDev: boolean): Promise<Options> {
  return isDev
    ? { args: [], executablePath: exePath, handless: true }
    : { args: chrome.args, executablePath: await chrome.executablePath, handless: true }
}