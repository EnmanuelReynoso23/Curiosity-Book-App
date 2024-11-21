/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

// The AppRegistry is the JavaScript entry point to running all React Native apps.
// It provides an interface for registering the main component of the app.
AppRegistry.registerComponent(appName, () => App);

// The registerComponent method tells React Native which component to use as the root component for the app.
