# react-redux-arcgis-starter

  A sample project to be used as a starter for building other apps or as reference for the design pattern.
  
  Uses: [React](https://reactjs.org/), [Redux ToolKit](https://redux-toolkit.js.org/) and the [ArcGIS JS API](https://developers.arcgis.com/javascript/latest/) ([arcgis core](https://www.npmjs.com/package/@arcgis/core)). 

![image](https://user-images.githubusercontent.com/83088596/148590400-cf39e652-17fd-430a-9fae-d47541a32244.png)


# IMPORTANT NOTE!!

This project uses a pattern that adds a complex object (arcgis js mapview) to a redux store. This directly goes against the redux style guide and breaks the essential rule: "Do Not Put Non-serializable Values in State or Actions".

  However... this does work! And allows you to access the MapView from outside of the map component. That said, in my experience it does break the ability to use redux dev tools and could cause other problems (I haven't had any other problems but I'm sure the redux team said it for a reason). Just be aware of this.

# Purpose

This project was born out of the need to have a solid sample structure to use the [ArcGIS JS MapView](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html) in other components that are not children but rather neighboring components in a react application. The react context API is another option that works as well, but I ran into problems with all the re-renders of all components when using a single store. 

The arcgis js map really has it's own state that gets updated via the js api. However, react like a single source of truth. And when you use another global state it can get a little fussy. Also, basically all the ArcGIS JS sample code uses the AMD loader which is good to keep it simple but once you start integrating into a larger map centric app that has multiple components, it can be hard to figure out. This was my way of connecting everything together in a single store that just seems to work and keeps it as simple as I can think to make it. 

## Redux Toolkit Note:

This uses a single slice for the whole app and also just creates simple actions that set the state to a new value, nothing fancy. Feel free to hit the [redux toolkit docs](https://redux-toolkit.js.org/usage/usage-guide) and get fancy though. 

# To Use:

### as usual, change into directory and `npm i`

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run build`

Builds the app for production to the `build` folder.\

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


