import RNDateTimePicker from '@react-native-community/datetimepicker';
import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import Header from '../components/Header';

export default function StayAbsent({ navigation }) {
    return <View style={styles.wrapper}>
        <Header navigation={navigation} />
        <View style={styles.container}>
            <Text style={styles.textCart}>Tạm trú tạm vắng</Text>
            <View style={styles.main}>
                <View style={styles.wrapContent}>
                    <View style={styles.wrapForm}>
                        <Text style={styles.textForm}>Họ và tên</Text>
                        <TextInput style={styles.input} />
                    </View>
                    <View style={styles.wrapForm}>
                        <Text style={styles.textForm}>Ngày sinh</Text>
                        <RNDateTimePicker value={new Date()} style={{ flex: 1 }} />
                    </View>
                    <View style={styles.wrapForm}>
                        <Text style={styles.textForm}>Số CMND</Text>
                        <TextInput style={styles.input} />
                    </View>
                    <View style={styles.wrapForm}>
                        <Text style={styles.textForm}>Địa chỉ thường trú</Text>
                        <TextInput style={styles.input} />
                    </View>
                    <View style={styles.wrapForm}>
                        <Text style={styles.textForm}>Lý do</Text>
                        <TextInput style={styles.input} />
                    </View>
                </View>
                <View style={styles.wrapBtn}>
                    <View style={styles.btnConfirm}>
                        <Button title="Đăng kí" color="white" onPress={() => navigation.navigate('SuccessfulIdentify')} />
                    </View>
                </View>

            </View>
        </View>
    </View>
};
const test = StyleSheet.create({
})

const styles = StyleSheet.create({
    wrapper: {
        flex: 1
    },
    container: {
        flex: 1
    },
    main: {
        padding: 15,
    },
    textCart: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'gray',
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 25
    },
    wrapContent: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 10
    },
    wrapForm: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderColor: 'gray',
        padding: 10,

    },
    input: {
        borderWidth: 1,
        flex: 1,
        padding: 10,
        borderRadius: 5
    },
    textForm: {
        marginRight: 20,
        fontWeight: 'bold',
        fontSize: 18,
        width: 100
    },
    wrapBtn: {
        padding: 10,
        backgroundColor: '#9966FF',
        marginTop: 15,
        borderRadius: 10,
        marginTop: 20
    },

})