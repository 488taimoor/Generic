import { NavigationActions, StackActions  } from 'react-navigation';

let _navigator;


function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

function navigate(routeName, params) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  );
}
function navigateToBack() {
  _navigator.dispatch(
    StackActions.pop({
      n: 1,
    })
  );
}
export default {
    navigate,
    setTopLevelNavigator,
    navigateToBack
  };
// add other navigation functions that you need and export them
