import React from 'react'
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native'
import { Colors } from '../../../utils';

export default function Wrapper({ children }: any) {
    const scheme = useColorScheme();
    return (
        <SafeAreaView>
            <StatusBar
                barStyle={scheme == "dark" ? 'light-content' : 'dark-content'}
                backgroundColor={scheme == "dark" ? Colors.white : Colors.black}
            />
            {children}
        </SafeAreaView>
    )
}
