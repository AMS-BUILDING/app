import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import Header from '../components/Header';

export default function ChangePassword({ navigation }) {
    return <View style={styles.wrapper}>
        <Header />
        <View style={styles.wrapContent}>
            <View style={styles.wrapNav}>
                <View style={styles.nav}>
                    <AntDesign name="leftcircle" size={30} color="white" style={styles.icon} />
                    <Text style={styles.title}>Xác nhận mật khẩu</Text>
                </View>
            </View>
            <Text style={styles.desc}>Để đảm bảo tài khoản của bạn luôn an toàn, vui lòng nhập mật khẩu ABMS của bạn để tiếp tục.</Text>
            <TextInput placeholder="Mật khẩu hiện tại" style={{ padding: 15, backgroundColor: 'white' }} />
            <View style={styles.wrapBtn}>
                <Button title="Tiếp tục" color="white" onPress={() => navigation.navigate('ResetPassword')} />
            </View>
            <View style={{ padding: 15, marginLeft: 'auto' }}>
                <Text style={styles.textForgot} onPress={() => navigation.navigate('ForgetPassword')}>Quên mật khẩu</Text>
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
    desc: {
        padding: 15,
        fontSize: 16,
       
    },
    wrapBtn: {
        backgroundColor: '#949494',
        padding: 10,
        borderRadius: 10,
        marginTop: 20
    },
    textForgot: {
        color: '#9966CC',
        fontSize: 20,
      
    }
});