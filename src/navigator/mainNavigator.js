import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps80570Navigator from '../features/Maps80570/navigator';
import Add-Item80569Navigator from '../features/Add-Item80569/navigator';
import Maps80565Navigator from '../features/Maps80565/navigator';
import UserProfile80561Navigator from '../features/UserProfile80561/navigator';
import UserProfile80538Navigator from '../features/UserProfile80538/navigator';
import Maps80519Navigator from '../features/Maps80519/navigator';
import Settings80497Navigator from '../features/Settings80497/navigator';
import Settings80482Navigator from '../features/Settings80482/navigator';
import NotificationList80481Navigator from '../features/NotificationList80481/navigator';
import Maps80480Navigator from '../features/Maps80480/navigator';
import UserProfile80479Navigator from '../features/UserProfile80479/navigator';
import Maps80460Navigator from '../features/Maps80460/navigator';
import Settings80438Navigator from '../features/Settings80438/navigator';
import Settings80423Navigator from '../features/Settings80423/navigator';
import NotificationList80422Navigator from '../features/NotificationList80422/navigator';
import Maps80421Navigator from '../features/Maps80421/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps80570: { screen: Maps80570Navigator },
Add-Item80569: { screen: Add-Item80569Navigator },
Maps80565: { screen: Maps80565Navigator },
UserProfile80561: { screen: UserProfile80561Navigator },
UserProfile80538: { screen: UserProfile80538Navigator },
Maps80519: { screen: Maps80519Navigator },
Settings80497: { screen: Settings80497Navigator },
Settings80482: { screen: Settings80482Navigator },
NotificationList80481: { screen: NotificationList80481Navigator },
Maps80480: { screen: Maps80480Navigator },
UserProfile80479: { screen: UserProfile80479Navigator },
Maps80460: { screen: Maps80460Navigator },
Settings80438: { screen: Settings80438Navigator },
Settings80423: { screen: Settings80423Navigator },
NotificationList80422: { screen: NotificationList80422Navigator },
Maps80421: { screen: Maps80421Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
