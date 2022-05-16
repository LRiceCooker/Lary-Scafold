import React from 'react';
import { LaryProvider } from 'lary';
import {Provider as PaperProvider} from 'react-native-paper';

const MainProvider = ({ children }: { children: JSX.Element }) => {
    return (
        <LaryProvider>
            <PaperProvider>
                {children}
            </PaperProvider>
        </LaryProvider>
    )
}

export default MainProvider