import {
    createNavigationContainerRef,
    StackActions,
    CommonActions,
  } from '@react-navigation/native';
  
  export const navigationRef = createNavigationContainerRef();
  
  function navigate(name, params) {
    if (navigationRef.isReady()) {
      navigationRef.navigate(name, params);
    }
  }
  
  function replace(routeName, params) {
    navigationRef.current.dispatch(StackActions.replace(routeName, params));
  }
  
  
  function reset(routeName, params) {
    navigationRef.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          {
            name: routeName,
            params,
          },
        ],
      }),
    );
  }
  
  
  function pop() {
    navigationRef.current.dispatch(StackActions.pop());
  }
  
  export {navigate, replace, reset, pop};
  