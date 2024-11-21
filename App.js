import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import OpeningScreen from './src/screens/openingScreen';
import LogIn from './src/screens/logIn';
import Notes from './src/screens/Notes';
import Search from './src/screens/search';
import OpenBook from './src/containers/openBookScreen';
import Pdf from './src/screens/pdf';
import IndividualNotes from './src/containers/individualNotes';

// Create a stack navigator for the app
const RootStack = createStackNavigator(
  {
    // Define the screens in the navigation stack
    Home: {screen: OpeningScreen}, // The main screen of the app
    Profile: {screen: LogIn}, // The login screen
    Notes: {screen: Notes}, // The notes screen
    Search: {screen: Search}, // The search screen
    OpenBook: {screen: OpenBook}, // The screen to open a book
    Pdf: {screen: Pdf}, // The screen to view a PDF
    IndividualNotes: {screen: IndividualNotes}, // The screen to view individual notes
  },
  {initialRouteName: 'Home', headerMode: 'none'},
);

// Create the app container with the navigation stack
export default createAppContainer(RootStack);
