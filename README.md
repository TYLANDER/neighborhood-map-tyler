##Udacity Neighborhood Map
A map of all the good Dim Sum spots in San Francisco.

This app uses Create-React-App as a boilerplate.
This app uses the Google Maps API for mapping.
This app uses the Foursquare API for cross streets and imagery.

Getting Started:
clone this repository to your local device, then:

```cd neighborhood-map-tyler```
```$ npm install```
```$ npm run start```

##Production Mode
To test the offline capabilities of this app's service worker create a production build:

```$ npm run build```
```$ serve -s build```

Then, open your browser's Dev Tools. Go to Application, and change the status of the Service Worker to test offline capabilities. 