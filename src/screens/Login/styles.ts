import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(14)}px;

  background-color: ${({ theme }) => theme.COLORS.PRIMARY};

  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const UserWrapper = styled.View`
  width: 100%;

  padding: 0 24px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Photo = styled.Image`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;

  border-radius: 10px;
`;

export const User = styled.View`
  margin-left: 17px;
`;

export const UserGreeting = styled.Text`
  color: ${({ theme }) => theme.COLORS.SHAPE};

  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
`;

export const UserName = styled.Text`
  color: ${({ theme }) => theme.COLORS.SHAPE};

  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.FONTS.BOLD};
`;

export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.COLORS.SECONDARY};
  font-size: ${RFValue(24)}px;
`;

export const Feed = styled.View`
  flex: 1;
  padding: 0 24px;

  margin-top: ${RFPercentage(2)}px;
`;



