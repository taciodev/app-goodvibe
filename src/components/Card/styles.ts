import { RFValue } from "react-native-responsive-fontsize";
import { AntDesign } from '@expo/vector-icons';
import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.COLORS.SHAPE};

  padding: 19px 23px;
  margin-bottom: 12px;

  border-radius: 5px;
`;

export const UserPhoto = styled.Image`
  width: ${RFValue(32)}px;
  height: ${RFValue(32)}px;

  border-radius: 64px;
  margin-right: 12px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const UserName = styled.Text`
  font-size: ${RFValue(10)}px;
  font-family: ${({ theme }) => theme.FONTS.BOLD};
`;



export const Body = styled.Text`
  margin-top: 12px;
  margin-bottom: 8px;
  
  font-size: ${RFValue(8)}px;
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
`;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const Icon = styled(AntDesign)`
  font-size: ${RFValue(14)}px;
`;
