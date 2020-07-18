import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
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
