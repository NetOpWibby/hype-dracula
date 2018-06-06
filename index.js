"use strict";



exports.decorateConfig = config => {
  const font = config.fontFamily;

  return Object.assign({}, config, {
    cursorColor:      "#878787",
    foregroundColor:  "#fff",
    backgroundColor:  "#292e38",
    borderColor:      "rgba(255, 255, 255, 0.1)",

    colors: {
      black:    "#000",
      red:      "#ff625d",
      green:    "#50f583",
      yellow:   "#f2f793",
      blue:     "#c39ffa",
      magenta:  "#ff87ca",
      cyan:     "#8feafd",
      white:    "#b7b7b7",

      lightBlack:   "#5b5b5b",
      lightRed:     "#ff625d",
      lightGreen:   "#50f583",
      lightYellow:  "#f2f793",
      lightBlue:    "#c39ffa",
      lightMagenta: "#ff87ca",
      lightCyan:    "#8feafd",
      lightWhite:   "#e2e2e2"
    },

    css: `
      ${config.css || ""}

      .hyper_main,
      .tab_tab,
      .tabs_borderShim {
        border: none !important;
      }

      .header_header {
        top: 0 !important; right: 0 !important; left: 0 !important;
      }

      .splitpane_divider {
        background-color: rgba(255, 255, 255, 0.1) !important;
        border: 0;
        margin: 0;
      }

      .splitpane_divider_vertical {
        width: 2px;
      }

      .splitpane_divider_horizontal {
        height: 2px;
      }

      .footer_footer,
      .tabs_nav {
        font-family: ${font} !important;
      }

      .footer_footer,
      .tabs_nav {
        background-color: #1d1e21 !important;
      }

      .footer_footer,
      .footer_footer .item_active {
        opacity: 1 !important;
      }

      .footer_footer::before {
        display: none !important;
      }

      .tab_text:not(.tab_textActive) {
        opacity: 0.3 !important;
      }

      .tab_active,
      .terms_terms {
        background-color: #292e38 !important;
      }

      .tab_textActive {
        opacity: 1 !important;
      }
    `
  });
};
