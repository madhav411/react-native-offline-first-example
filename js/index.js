/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StackNavigator as stack } from 'react-navigation';
import { Provider } from 'react-redux';
import DeviceInfo from 'react-native-device-info';

import { setUser } from 'DoOfflineFirstApps/js/services/User/actions';

import store from './store';
import HomeScreen from './routes/Home';
import ImageDetailScreen from './routes/ImageDetail';
import ImageAddScreen from './routes/ImageAdd';

const Navigator = stack({
    Home: { screen: HomeScreen },
    ImageAdd: { screen: ImageAddScreen },
    ImageDetail: { screen: ImageDetailScreen },
});

export default class DoOfflineFirstApps extends Component {
    componentWillMount() {
        if (!store.getState().User.user.saved) {
            store.dispatch(setUser({ uuid: DeviceInfo.getUniqueID() }));
        }
    }

    render() {
        return (
            <Provider store={store}>
                <Navigator />
            </Provider>
        );
    }
}
