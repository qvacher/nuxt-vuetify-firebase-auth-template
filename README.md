# nuxt-vuetify-firebase-auth-template

## Nuxt

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Vuetify
```bash
# In nuxt.config.js, find the vuetify section and set the font you want
defaultAssets: {
  font: {
    family: 'YOUR_FONT_GOES_HERE' 
  },
  icons: 'mdi'
}

# Also set your custom colors
theme: {
  options: { customProperties: true },
  themes: {
    light: {
      YOUR_CUSTOM_LIGHT_MODE_COLORS
    },
    dark: {
      YOUR_CUSTOM_DARK_MODE_COLORS
    }
  }
}
```
For detailed explanation on how things work, check out the [documentation](https://github.com/nuxt-community/vuetify-module#readme)

## Firebase
```bash
# create a new .env file at the root of the project
# fill the template below with your own credential provided by Firebase

FIREBASE_API_KEY='YOUR_API_KEY'
FIREBASE_AUTH_DOMAIN='XXXX.firebaseapp.com'
FIREBASE_PROJECT_ID='XXXX'
FIREBASE_STORAGE_BUCKET='XXXX.appspot.com'
FIREBASE_MESSAGING_SENDER_ID='XXXX'
FIREBASE_APP_ID='XXXX'
```


