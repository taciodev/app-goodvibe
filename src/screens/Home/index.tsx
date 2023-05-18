import React from 'react';
import axios from 'axios';
import { FlatList } from 'react-native';

import { Card } from '../../components/Card';

import {
  Container,
  Header,
  Photo,
  UserInfo,
  User,
  UserGreeting,
  UserName,
  UserWrapper,
  Icon,
  Feed,
} from './styles';

import { TypeUser } from '../../@types/TypeUser';

export function Home() {
  const [users, setUsers] = React.useState<[TypeUser]>();

  React.useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const { data } = await axios.get("https://jsonplaceholder.typicode.com/users")
    setUsers(data);
  }

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{ uri: 'https://paisefilhos.uol.com.br/wp-content/uploads/2020/11/bob-esponja-instagram-1.jpg' }}
            />
            <User>
              <UserGreeting>Olá, </UserGreeting>
              <UserName>Bob</UserName>
            </User>
          </UserInfo>

          <Icon name='menu' />
        </UserWrapper>
      </Header>

      <Feed>
        <FlatList
          data={users}
          keyExtractor={item => item.username}
          renderItem={({ item }) => <Card key={item.id} username={item.username} />}
          showsVerticalScrollIndicator={false}
        />
      </Feed>
    </Container>
  );
}