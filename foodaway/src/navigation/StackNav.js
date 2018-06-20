import { StackNavigator } from 'react-navigation';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Home from '../pages/Home';
import Loading from '../pages/Loading';

export default StackHome = StackNavigator({
  Login: {
    screen: Login
  },
  Loading: {
    screen: Loading
  },
  Signup: {
    screen: Signup
  },
  Home: {
    screen: Home
  }
});
