import { AntDesign, Entypo, FontAwesome } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LoadingProgressBar from '../LoadingProgressBar';
import { Controller, useForm } from "react-hook-form";
import { useSelector } from 'react-redux';
import API from '../lib/API';
import Toast from 'react-native-toast-message';

export default function ChangePassword() {
    let navigation = useNavigation();
    const { control, reset, handleSubmit, formState: { errors } } = useForm();
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState()
    const token = useSelector(state => state.user?.token)
    let changePassword = async (data) => {
        setLoading(true)
        console.log(data)
        let path = `/tenant/change-password-web`;
        let resp = await API.authorizedJSONPost(path, data, token);
        if (resp.ok) {
            setLoading(false)
            reset()
            Toast.show({
                type: 'success',
                position: 'bottom',
                bottomOffset: 50,
                text1: 'OK',
                text2: 'Bạn đã thay đổi mật khẩu thành công!.'
            })
        } else {
            let response = await resp.json();
            setLoading(false)
            setMessage(response?.message)
            Toast.show({
                type: 'error',
                position: 'bottom',
                bottomOffset: 50,
                text1: 'Error',
                text2: "Mật khẩu bạn nhập chưa đúng!"
            })
        }

    }
    return <View style={styles.wrapper}>

        <View style={styles.wrapContent}>

            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <View style={styles.formGroup}>
                        <FontAwesome name="lock" size={18} color="#6B6B6B" />
                        <TextInput
                            onBlur={onBlur}
                            onChangeText={value => onChange(value)}
                            value={value}
                            placeholder={"Mật khẩu cũ"}
                            placeholderTextColor="#999"
                            style={[styles.inputText]}
                            underlineColorAndroid="transparent"
                            keyboardType="default"
                            secureTextEntry={true}
                            autoCorrect={false}
                        />
                    </View>
                )}
                name="password"
                rules={{ required: true }}
                defaultValue=""
            />
            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <View style={styles.formGroup}>
                        <FontAwesome name="lock" size={18} color="#6B6B6B" />
                        <TextInput
                            onBlur={onBlur}
                            onChangeText={value => onChange(value)}
                            value={value}
                            placeholder={"Mật khẩu mới"}
                            placeholderTextColor="#999"
                            style={[styles.inputText]}
                            underlineColorAndroid="transparent"
                            keyboardType="default"
                            secureTextEntry={true}
                            autoCorrect={false}
                        />
                    </View>
                )}
                name="newPassword"
                rules={{ required: true }}
                defaultValue=""
            />
            <View style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row' }}>
                <TouchableOpacity style={styles.btnLogin} disabled={loading} onPress={handleSubmit(changePassword)}>
                    <Text style={styles.shareNowText}>XÁC NHẬN {loading && <LoadingProgressBar />}</Text>
                </TouchableOpacity>
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
    shareNowText: {
        fontSize: 16,
        color: '#fff'
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
        fontSize: 18,
        fontWeight: 'bold',
    },
    wrapContent: {
        flex: 1,
        backgroundColor: '#F2F2F2'
    },
    icon: {
        position: 'absolute',
        top: '70%',
        left: 20,
    },
    formGroup: {
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: 30,
        marginTop: 20,
        borderColor: '#333',
        borderWidth: 1,
        borderStyle: 'solid',
        marginLeft: 10,
        marginRight: 10
    },
    inputText: {
        flex: 1,
        padding: 10,
        fontSize: 14,
    },
    btnLogin: {
        width: '50%',
        backgroundColor: '#006633',
        padding: 15,
        borderRadius: 10,
        marginBottom: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'

    }
});