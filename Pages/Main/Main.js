"use strict";
exports.__esModule = true;
exports.Main = void 0;
var vector_icons_1 = require("@expo/vector-icons");
var styles_1 = require("./styles");
var react_native_1 = require("react-native");
var react_1 = require("react");
function Main() {
    var _a = (0, react_1.useState)(false), showBalance = _a[0], setShowBalance = _a[1];
    return (<>
      <styles_1.Container>
        <styles_1.UpperView>
          <styles_1.UserIconView>
            <vector_icons_1.Ionicons name='person-outline' size={20} color='#FFF'/>
          </styles_1.UserIconView>

          <styles_1.OptionsIcon>
            <react_native_1.TouchableOpacity onPress={function () { return setShowBalance(!showBalance); }}>
              {showBalance ? (<vector_icons_1.Ionicons name='eye-outline' size={25} style={{ marginRight: 16 }} color='#FFF'/>) :
            (<vector_icons_1.Ionicons name='eye-off-outline' size={25} style={{ marginRight: 16 }} color='#FFF'/>)}
            </react_native_1.TouchableOpacity>
            <vector_icons_1.Ionicons name='help-circle-outline' size={25} style={{ marginRight: 16 }} color='#FFF'/>
            <vector_icons_1.Ionicons name='mail-outline' size={25} color='#FFF'/>
          </styles_1.OptionsIcon>        
        </styles_1.UpperView>
        <styles_1.WelcomeText>Olá, William </styles_1.WelcomeText>
      </styles_1.Container>
      <styles_1.TotalBalance>
        <styles_1.AccountView>
          <styles_1.Subtitle>Conta</styles_1.Subtitle>
          <vector_icons_1.Ionicons name='chevron-forward-circle' size={20} color='#9080D91'/>
        </styles_1.AccountView>
        {showBalance ? (<styles_1.BalanceTotal>R$ 1920,34</styles_1.BalanceTotal>) : (<styles_1.BalanceTotalHidden></styles_1.BalanceTotalHidden>)}
      </styles_1.TotalBalance>
      <react_native_1.View>
        <react_native_1.ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ marginLeft: 24, paddingRight: 48 }}>

          <styles_1.OptionView>
            <styles_1.OptionIcon>
              <vector_icons_1.Ionicons name='cash-outline' size={24} color='#9080D91'/>
            </styles_1.OptionIcon>
            <styles_1.OptionText>Pix</styles_1.OptionText>
          </styles_1.OptionView>

          <styles_1.OptionView>
            <styles_1.OptionIcon>
              <vector_icons_1.Ionicons name='cash-outline' size={24} color='#9080D91'/>
            </styles_1.OptionIcon>
            <styles_1.OptionText>Pix</styles_1.OptionText>
          </styles_1.OptionView>

          <styles_1.OptionView>
            <styles_1.OptionIcon>
              <vector_icons_1.Ionicons name='cash-outline' size={24} color='#9080D91'/>
            </styles_1.OptionIcon>
            <styles_1.OptionText>Pix</styles_1.OptionText>
          </styles_1.OptionView>

          <styles_1.OptionView>
            <styles_1.OptionIcon>
              <vector_icons_1.Ionicons name='cash-outline' size={24} color='#9080D91'/>
            </styles_1.OptionIcon>
            <styles_1.OptionText>Pix</styles_1.OptionText>
          </styles_1.OptionView>

          <styles_1.OptionView>
            <styles_1.OptionIcon>
              <vector_icons_1.Ionicons name='cash-outline' size={24} color='#9080D91'/>
            </styles_1.OptionIcon>
            <styles_1.OptionText>Pix</styles_1.OptionText>
          </styles_1.OptionView>

          <styles_1.OptionView>
            <styles_1.OptionIcon>
              <vector_icons_1.Ionicons name='cash-outline' size={24} color='#9080D91'/>
            </styles_1.OptionIcon>
            <styles_1.OptionText>Pix</styles_1.OptionText>
          </styles_1.OptionView>

          <styles_1.OptionView>
            <styles_1.OptionIcon>
              <vector_icons_1.Ionicons name='cash-outline' size={24} color='#9080D91'/>
            </styles_1.OptionIcon>
            <styles_1.OptionText>Pix</styles_1.OptionText>
          </styles_1.OptionView>



        </react_native_1.ScrollView>
      </react_native_1.View>
    </>);
}
exports.Main = Main;
