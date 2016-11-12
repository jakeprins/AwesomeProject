// Index.ios.js - Place code for Ios here!

// Import a library to help create a component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

//Create a component
const App = () => (
  <Header />
);

// Render it to the devise
AppRegistry.registerComponent('AwesomeProject', () => App);
