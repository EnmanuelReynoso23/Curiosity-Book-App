# Curiosity eBook Reader App
> This was a personal project, made out of the curiosity to read books and the unavailability of good e-book readers with the note taking functionality that I wanted.<br/>

The app has the following features:<br/>

1. Download any book you like.
2. Save the books in the app itself.
3. Read with a built-in pdf Reader.
4. Create Notes, with features like Adding Tags to track important Highlights/Notes.

## Steps to Start
Feel free to pull and use the app. Run the following commands:

```javascript
npm install 
```
```javascript
react-native run-android 
```
```javascript
react-native start
```

## Screenshots

<p float="left" >
  <img src="./screenshot-1.jpg" width="65%" />
  <img src="./screenshot-2.jpg" width="65%" /> 
</p>

<!-- ![alt text](./ss1.png "Screenshot 1") ![alt text](./ss2.png "Screenshot 2") -->

## Repository Overview

This repository contains a React Native project for an eBook reader app with note-taking functionality. Here is an overview of the repository:

* The main application code is in `App.js`, which sets up the navigation stack for the app.
* The entry point for the app is `index.js`, which registers the main component.
* The `android` directory contains the Android-specific configuration and code, including the main activity in `android/app/src/main/java/com/airbnb/MainActivity.java` and the main application class in `android/app/src/main/java/com/airbnb/MainApplication.java`.
* The `ios` directory contains the iOS-specific configuration and code, including the app delegate in `ios/airbnb/AppDelegate.m` and `ios/airbnb/AppDelegate.h`.
* The `src` directory contains the main source code for the app, including components, containers, and screens:
  * `src/components` contains reusable components like `src/components/downloadFailed.js` and `src/components/downloadPopup.js`.
  * `src/containers` contains container components like `src/containers/book.js`, `src/containers/individualBookPage.js`, and `src/containers/individualNotes.js`.
  * `src/screens` contains screen components like `src/screens/logIn.js`, `src/screens/Notes.js`, and `src/screens/search.js`.
* The `Assets` directory contains various assets like JSON files and images.
* The `README.md` file provides an overview of the app, its features, and steps to start the app.
* The `package.json` file lists the dependencies and scripts for the project.
* The `metro.config.js` file contains the Metro bundler configuration for React Native.
