import React from 'react'
import { Text as NativeText, TouchableOpacity as NativeTouchable} from 'react-native'
import { Element, Container, laryfy } from 'lary'

const Text = laryfy<React.ComponentProps<typeof NativeText>>(NativeText)
const Touchable = laryfy<React.ComponentProps<typeof NativeTouchable>>(NativeTouchable)

const Menu: React.FunctionComponent = () => {
    return (
        <Element widthFull bgWhite alignCenter pt5 pb5>
            <Container row widthFull justifyCenter alignCenter>
                <Touchable f1 p4 mr8 ml8 bgPrimary r8><Text textCenter inWhite>A</Text></Touchable>
                <Touchable f1 p4 mr8 ml8 bgPrimary r8><Text textCenter inWhite>C</Text></Touchable>
                <Touchable f1 p4 mr8 ml8 bgPrimary r8><Text textCenter inWhite>B</Text></Touchable>
            </Container>
        </Element>
    )
}

export default Menu