import styled from 'styled-components';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');



// @ts-ignore
export const Container = styled.View`
  width: 100%;
  height: 20%;

  padding: 40px 24px 8px 24px;

  background-color: #820AD1;
  justify-content: space-around;
`;
// @ts-ignore

export const UpperView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

// @ts-ignore

export const OptionsIcon = styled.View`
  flex-direction: row;

`;

// @ts-ignore

export const UserIconView = styled.View`
  width: 40px;
  aspect-ratio: 1;
  justify-content: center;
  align-items: center;
  background-color: #A75DD9;
  border-radius: 100px;
`;

// @ts-ignore

export const WelcomeText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

// @ts-ignore

export const TotalBalance = styled.View`
  padding: 24px;
`;
// @ts-ignore

export const AccountView = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

// @ts-ignore

export const Subtitle = styled.Text`
  font-size: 16px;
  font-weight:600;
  margin-bottom:8px;
`;

// @ts-ignore

export const BalanceTotal = styled.Text`
  font-size: 20px;
  font-weight:700;
  margin-top:8px;
`;

// @ts-ignore

export const BalanceTotalHidden = styled.View`
  margin-top: 8px;
  height: 30px;
  width: 70%;
  background-color: #C1BEC2;
  border-radius: 2px;
`;

// @ts-ignore

export const OptionView = styled.TouchableOpacity`
  align-items: center;
  margin: 0 10px;
`;
// @ts-ignore

export const OptionIcon = styled.View`
  width: ${width * 0.18}px;
  aspect-ratio: 1;
  background-color: #E6E6E6;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
`;
// @ts-ignore

export const OptionText = styled.Text`
  font-size: 14px;
  font-weight: 700;
`;