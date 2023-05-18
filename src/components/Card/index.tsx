import React from 'react'
import LottieView from "lottie-react-native";

import {
  Container,
  UserPhoto,
  UserName,
  Header,
  Footer,
  Body,
  CountLike,
  ButtonLike
} from './styles'

type Props = {
  username: string
}

export function Card({ username }: Props) {
  const [countLike, setCountLike] = React.useState<number>(1);
  const [like, setLike] = React.useState<boolean>(true);
  const animation = React.useRef(null);

  React.useEffect(() => {
    if (like) {
      animation.current.play(0, 0);
      setCountLike((state) => state - 1);
    } else {
      animation.current.play(0, 94);
      setCountLike((state) => state + 1)
    }
  }, [like]);

  return (
    <Container>
      <Header>
        <UserPhoto
          source={{ uri: 'https://cinebuzz.uol.com.br/media/_versions/serie-derivada-de-bob-esponja-focada-em-patrick-estrela-ganha-primeiro-previa-1024x576_widelg.jpg' }}
        />
        <UserName>
          {username}
        </UserName>
      </Header>
      <Body>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis vitae molestias, suscipit vero possimus in, doloremque, excepturi est architecto dolores aliquid .
      </Body>
      <Footer>
        <ButtonLike onPress={() => setLike(!like)}>
          <LottieView
            source={require('../../assets/like.json')}
            autoPlay={false}
            loop={false}
            style={{ width: 70, height: 70 }}
            resizeMode="cover"
            ref={animation}
          />
        </ButtonLike>
        <CountLike>
          {countLike}
        </CountLike>
      </Footer>
    </Container>
  )
}