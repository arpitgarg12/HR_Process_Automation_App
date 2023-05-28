/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import StackNavigator from './src/Navigation/StackNavigator';

AppRegistry.registerComponent(appName, () => StackNavigator);
