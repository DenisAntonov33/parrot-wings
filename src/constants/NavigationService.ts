import * as React from 'react';
import { NavigationParams } from 'react-navigation';

const navigationRef = React.createRef<any>();

function navigate(name: string, params?: NavigationParams) {
  navigationRef?.current?.navigate(name, params);
}

function replace(name: string, params?: NavigationParams) {
  navigationRef?.current?.replace(name, params);
}

function goBack() {
  navigationRef?.current?.goBack();
}

export default { navigationRef, navigate, goBack, replace };
