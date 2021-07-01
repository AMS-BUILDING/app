import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { Header } from 'react-native-elements';
import { TouchableOpacity } from 'react-native';
export default function HeaderApp({ navigation }) {
    return (
        <Header
            placement="left"
            leftComponent={<MyCustomLeftComponent navigation={navigation} />}
            centerComponent={{ text: 'RESIDENT APP', style: { color: '#fff' } }}
            rightComponent={{ icon: 'home', color: '#fff' }}
        />
    )
};
function MyCustomLeftComponent ({navigation}){
    return(
        <TouchableOpacity  onPress={() => navigation.openDrawer()}>
            <FontAwesome5 name="bars" size={18} color="white"/>
        </TouchableOpacity>
    )
}

