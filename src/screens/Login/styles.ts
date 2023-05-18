import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`;

export const Area = styled.View`
  align-items: center;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.PRIMARY};

  margin-bottom: 12px;

  font-family: ${({ theme }) => theme.FONTS.BOLD};
  font-size: ${RFValue(24)}px;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

export const Button = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;

  width: ${RFPercentage(42)}px;

  padding: 12px 0;
  margin-bottom: 12px;

  border: 2px solid ${({ theme }) => theme.COLORS.PRIMARY};
  border-radius: 12px;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY_LIGHT};
`;

export const TextButton = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
`;