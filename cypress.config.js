module.exports = {
  projectId: '4kub7r',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://petlov.vercel.app',
    // Browser launch arguments for better Docker compatibility
    chromeWebSecurity: false,
  },
}
