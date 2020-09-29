import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile115506Navigator from '../features/UserProfile115506/navigator';
import Tutorial115505Navigator from '../features/Tutorial115505/navigator';
import NotificationList115477Navigator from '../features/NotificationList115477/navigator';
import Settings115476Navigator from '../features/Settings115476/navigator';
import Settings115468Navigator from '../features/Settings115468/navigator';
import UserProfile115466Navigator from '../features/UserProfile115466/navigator';
import UserProfile115370Navigator from '../features/UserProfile115370/navigator';
import Tutorial115369Navigator from '../features/Tutorial115369/navigator';
import NotificationList115341Navigator from '../features/NotificationList115341/navigator';
import Settings115340Navigator from '../features/Settings115340/navigator';
import Settings115332Navigator from '../features/Settings115332/navigator';
import UserProfile115330Navigator from '../features/UserProfile115330/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile115506: { screen: UserProfile115506Navigator },
Tutorial115505: { screen: Tutorial115505Navigator },
NotificationList115477: { screen: NotificationList115477Navigator },
Settings115476: { screen: Settings115476Navigator },
Settings115468: { screen: Settings115468Navigator },
UserProfile115466: { screen: UserProfile115466Navigator },
UserProfile115370: { screen: UserProfile115370Navigator },
Tutorial115369: { screen: Tutorial115369Navigator },
NotificationList115341: { screen: NotificationList115341Navigator },
Settings115340: { screen: Settings115340Navigator },
Settings115332: { screen: Settings115332Navigator },
UserProfile115330: { screen: UserProfile115330Navigator },

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
