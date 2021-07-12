import { AntDesign, Entypo, FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import Header from '../components/Header';
export default function ResetPassword({ navigation }) {
    return <View style={styles.wrapper}>
        <Header navigation={navigation} />
        <View style={styles.wrapContent}>
            <View style={styles.wrapNav}>
                <View style={styles.nav}>
                    <AntDesign name="leftcircle" size={30} color="white" style={styles.icon} />
                    <Text style={styles.title}>Đặt lại mật khẩu</Text>
                </View>
            </View>
            <View style={styles.formGroup}>
                <FontAwesome name="lock" size={30} color="#6B6B6B" />
                <TextInput placeholder="Mật khẩu mới" type="text" style={styles.inputText} secureTextEntry={true} />
            </View>
            <View style={styles.formGroup}>
                <Entypo name="dots-three-horizontal" size={30} color="black" />
                <TextInput placeholder="Nhập lại mật khẩu mới" type="text" style={styles.inputText} secureTextEntry={true} />
            </View>
            <View style={styles.btnLogin}>
                <Button title="Đồng ý" color="white" style={styles.textLogin} />
            </View>
        </View>
    </View>
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1
    },
    wrapNav: {
        backgroundColor: '#666666'
    },
    nav: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
        position: 'relative'
    },
    title: {
        color: 'white',
     
        fontSize: 30,
        fontWeight: 'bold',
    },
    wrapContent: {
        flex: 1,
        backgroundColor: '#F2F2F2'
    },
    icon: {
        position: 'absolute',
        top: '50%',
        left: 20,
    },
    formGroup: {
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: 30,
        marginTop: 20
    },
    inputText: {
        flex: 1,
        padding: 10,
        fontSize: 18,
       
    },
    btnLogin: {
        width: '100%',
        backgroundColor: '#949494',
        padding: 10,
        borderRadius: 10,
        marginBottom: 20
    },
});