import { Ionicons } from '@expo/vector-icons';

import {
  Container,
  UpperView,
  UserIconView,
  OptionsIcon,
  WelcomeText, 
  TotalBalance,
  AccountView,
  Subtitle,
  BalanceTotal,
  BalanceTotalHidden,
  OptionView,
  OptionIcon,
  OptionText
} from './styles';

import { TouchableOpacity, View, ScrollView} from 'react-native';
import React, { useState } from 'react';

export function Main(){

  const [showBalance, setShowBalance] = useState(false);

  return(
    <>
      <Container>
        <UpperView>
          <UserIconView>
            <Ionicons name='person-outline' size={20} color='#FFF'/>
          </UserIconView>

          <OptionsIcon>
            <TouchableOpacity onPress={() => setShowBalance(!showBalance)}>
              {showBalance ? (
                <Ionicons name='eye-outline' size={25} style={{marginRight: 16}} color='#FFF'/>) :
                (<Ionicons name='eye-off-outline' size={25} style={{marginRight: 16}} color='#FFF'/>)

              }
            </TouchableOpacity>
            <Ionicons name='help-circle-outline' size={25} style={{marginRight: 16}} color='#FFF'/>
            <Ionicons name='mail-outline' size={25} color='#FFF'/>
          </OptionsIcon>        
        </UpperView>
        <WelcomeText>Olá, William </WelcomeText>
      </Container>
      <TotalBalance>
        <AccountView>
          <Subtitle>Conta</Subtitle>
          <Ionicons name='chevron-forward-circle' size={20} color='#9080D91'/>
        </AccountView>
        {showBalance ? (
          <BalanceTotal>R$ 1920,34</BalanceTotal>

        ):(
          <BalanceTotalHidden></BalanceTotalHidden>

        )}
      </TotalBalance>
      <View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{marginLeft: 24, paddingRight: 48}}>

          <OptionView>
            <OptionIcon>
              <Ionicons name='cash-outline' size={24} color='#9080D91'/>
            </OptionIcon>
            <OptionText>Pix</OptionText>
          </OptionView>

          <OptionView>
            <OptionIcon>
              <Ionicons name='cash-outline' size={24} color='#9080D91'/>
            </OptionIcon>
            <OptionText>Pix</OptionText>
          </OptionView>

          <OptionView>
            <OptionIcon>
              <Ionicons name='cash-outline' size={24} color='#9080D91'/>
            </OptionIcon>
            <OptionText>Pix</OptionText>
          </OptionView>

          <OptionView>
            <OptionIcon>
              <Ionicons name='cash-outline' size={24} color='#9080D91'/>
            </OptionIcon>
            <OptionText>Pix</OptionText>
          </OptionView>

          <OptionView>
            <OptionIcon>
              <Ionicons name='cash-outline' size={24} color='#9080D91'/>
            </OptionIcon>
            <OptionText>Pix</OptionText>
          </OptionView>

          <OptionView>
            <OptionIcon>
              <Ionicons name='cash-outline' size={24} color='#9080D91'/>
            </OptionIcon>
            <OptionText>Pix</OptionText>
          </OptionView>

          <OptionView>
            <OptionIcon>
              <Ionicons name='cash-outline' size={24} color='#9080D91'/>
            </OptionIcon>
            <OptionText>Pix</OptionText>
          </OptionView>



        </ScrollView>
      </View>
    </>
  );
}