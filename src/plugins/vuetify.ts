import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { aliases, mdi } from "vuetify/iconsets/mdi";
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import "@/styles/global.sass";

const customTheme = {
  dark: false,
  colors: {
    "app-black": "#000000",
    "app-white": "#FFFFFF",
    "app-beige": "#F2EBDB",
    "app-green": "#3B755F",
    "app-purple": "#2E3A8C",
    "app-dark-gray": "#212121",
    "app-light-gray": "#B0B0B0",
    "app-dirty-white": "#F9F9F9",
    "app-light-green": "#AFC6BD",
  },
};

export const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
  theme: {
    defaultTheme: "customTheme",
    themes: {
      customTheme,
    },
    variations: {
      colors: ["primary", "secondary"],
      lighten: 1,
      darken: 2,
    },
  },
  defaults: {
    VBtn: {
      variant: "flat",
    },
    VTextField: {
      variant: "outlined",
    },
  },
});
