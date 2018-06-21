import { StackNavigator } from 'react-navigation';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Deliver from '../pages/Deliver';
import Loading from '../pages/Loading';
import bottomTabNav from '../navigation/bottomTabNav';

export default StackHome = StackNavigator({
  Loading: {
    screen: Loading
  },
  Login: {
    screen: Login
  },
  Signup: {
    screen: Signup
  },
  Deliver: {
    screen: Deliver
  },
  bottomTabNav: {
    screen: bottomTabNav,
    navigationOptions: {
      headerTitle: 'FOODAWAY',
      headerLeft: null,
      headerStyle: {
        backgroundColor: '#ffa726',
      },
      headerTitleStyle: {
        textAlign: 'center',
        alignSelf: 'center',
        flex: 1,
        color: '#ffffff'
      }

    },
  }
});
