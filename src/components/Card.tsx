import React from 'react';
import {Element, Container, laryfy} from 'lary'
import {Title as PaperTitle, Button as PaperButton } from 'react-native-paper'
import {Image as NativeImage} from 'react-native'
import { useNavigation } from '@react-navigation/native';

const Title = laryfy<React.ComponentProps<typeof PaperTitle>>(PaperTitle)
const Image = laryfy<React.ComponentProps<typeof NativeImage>>(NativeImage)
const Button = laryfy<React.ComponentProps<typeof PaperButton>>(PaperButton)

const Card = (): JSX.Element => {
    const {navigate} = useNavigation()
    return (
        <Element m1 r4 bgWarning flexBasis={'30%'}>
            <Container column widthFull>
                <Image height={400} r4 source={{uri: 'https://img.freepik.com/free-vector/animal-doing-dabbing-movement_23-2147851266.jpg'}} />
                <Container row m6>
                    <Title f3 inWhite bold textCenter>Dabbing Unicorn</Title>
                    <Title f1 inWhite bold textCenter>$5.6</Title>
                    <Button f1 bgSecondary mode="contained" onPress={() => console.log('Pressed')}>
                        Buy
                    </Button>
                </Container>
            </Container>
        </Element>
    )
}

const CardContainer = (): JSX.Element => {
    return (
        <>
            <Container xl row m8 wrap>
                <Card />
            </Container>
        </>
    )
}

export default CardContainer