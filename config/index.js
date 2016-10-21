import path from "path";

const SCREENSHOT_PATH = "screenshots";

const screenShotDir = path.join(__dirname, SCREENSHOT_PATH);

const config = {
    url: "https://www.google.ca",
    testTimeout: 60000,
    nightmareConfig: {
        show: true,
        ignoreSslErrors: true,
        sslProtocol: 'tlsv1',
        waitTimeout: 60000,
        gotoTimeout: 10000
    },
    screenshot: {
      path: path.resolve(screenShotDir)
    }
};

export default config;
