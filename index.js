/* jshint undef: true, unused: true, esversion: 6 */
/* global exports */



exports.decorateConfig = (config) => {
  const font = config.fontFamily;

  return Object.assign({}, config, {
    cursorColor: "#878787",
    foregroundColor: "#fff",
    backgroundColor: "#292e38",

    colors: {
      black: "#000",
      red: "#ff625d",
      green: "#50f583",
      yellow: "#f2f793",
      blue: "#c39ffa",
      magenta: "#ff87ca",
      cyan: "#8feafd",
      white: "#b7b7b7",

      lightBlack: "#5b5b5b",
      lightRed: "#ff625d",
      lightGreen: "#50f583",
      lightYellow: "#f2f793",
      lightBlue: "#c39ffa",
      lightMagenta: "#ff87ca",
      lightCyan: "#8feafd",
      lightWhite: "#e2e2e2"
    },

    css: `
			${config.css || ""}

      .hyper_main,
      .tabs_borderShim,
			.tab_tab {
        border: none !important;
      }

      .header_header {
        top: 0 !important; right: 0 !important; left: 0 !important;
      }

      .tabs_nav,
      .footer_footer {
        font-family: ${font} !important;
      }

      .tabs_nav,
      .footer_footer {
        background-color: #1d1e21 !important;
      }

      .footer_footer,
      .footer_footer .item_active {
        opacity: 1 !important;
      }

      .footer_footer:before {
        display: none !important;
      }

      .tab_text:not(.tab_textActive) {
        opacity: 0.3 !important;
      }

      .tab_active,
      .terms_termGroupActive {
        background-color: #292d2f !important;
      }

			.tab_textActive {
        opacity: 1 !important;
			}
		`
  });
};
