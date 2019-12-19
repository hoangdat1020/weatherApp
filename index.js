/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './Navigator/App';
import Search from './components/Search';
import Home from './components/Home';
import AppNavi from './Navigator/AppNavigation';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => AppNavi);
