import React from 'react'

import {
  Container,
  UserPhoto,
  UserName,
  Header,
  Footer,
  Body,
  Icon
} from './styles'

type Props = {
  username: string
}

export function Card({ username }: Props) {
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
        <Icon name="like2" />
        <Icon name="download" />
        <Icon name="sync" />
        <Icon name="close" />
      </Footer>
    </Container>
  )
}