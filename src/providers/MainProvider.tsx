import React from 'react';
import { LaryProvider } from 'lary';
import {Provider as PaperProvider} from 'react-native-paper';
import { SampleProvider } from './SampleProvider';

const MainProvider = ({ children }: { children: JSX.Element }) => {
    return (
        <LaryProvider>
            <PaperProvider>
                <SampleProvider>
                    {children}
                </SampleProvider>
            </PaperProvider>
        </LaryProvider>
    )
}

export default MainProvider