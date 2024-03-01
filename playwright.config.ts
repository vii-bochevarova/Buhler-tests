import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
    globalSetup: "./global-setup",
    testDir: './tests',
    fullyParallel: true,
    timeout: 30000,
    reporter: 'html', 
    use: {
        actionTimeout: 30000,
        navigationTimeout: 30000,
        storageState: "./LoginAuth.json",
        video: 'retain-on-failure',
        screenshot: 'only-on-failure',
        baseURL: 'https://www.saucedemo.com/'
    },

    projects: [
        {
        name: 'chromium',
        use: { ...devices['Desktop Chrome'] },
        },
    ],
});
