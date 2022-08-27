module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '104': '26rem',
        '112': '28rem',
        '120': '30rem',
        '128': '32rem',
      },
      colors: {
        "network-primary-900": "#176155",
        "network-primary-800": "#46756D",
        "network-primary-500": "#2AAD97",
        "network-primary-400": "#36E0C4",
        "network-primary-300": "#0DFAD2",

        "network-secondary-900": "#80300E",
        "network-secondary-800": "#CC4D16",
        "network-secondary-500": "#FF5F1C",
        "network-secondary-400": "#FF9669",
        "network-secondary-300": "#804B34",
        "network-primary-transparent": "#ff005da9",
        "network-dark-900": "#0D3627",
        "network-dark-800": "#154F3B",
        "network-dark-700": "#208763",
        "network-dark-600": "#3C6356",
        "network-dark-500": "#154F3B",
        "network-dark-400": "#32CF98",
        "network-secondary": "#fff0f4",
        "network-light": "#F2F5FB",
        "network-green": "#1fff00",
        "gray": "#f0f0f0"
      },
      blur: {
        "esm": "2px"
      }
    }
  },
  plugins: [],
}