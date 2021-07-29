import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { CheckBox } from 'react-native-elements';
import Bidv from '../assets/images/bidv.png';
import MoMo from '../assets/images/momo.png';
import Money from '../assets/images/money.png';
import Vietcombank from '../assets/images/vietcombank.png';
import ViettelPay from '../assets/images/viettelpay.png';
import Header from '../components/Header';

export default function Payment({ navigation }) {

    return <View style={styles.wrapper}>
        <Header navigation={navigation} />
        <View style={styles.wrapContent}>
            <View style={styles.main}>
                <View style={styles.confirm}>
                    <TouchableOpacity onPress={() => navigation.goBack()}><AntDesign name="arrowleft" size={25} color="#9966FF" /></TouchableOpacity>
                    <Text style={styles.textConfirm}>Thanh Toán</Text>
                </View>
                <View>
                    <Text style={styles.title}>Căn hộ 099</Text>
                    <View style={styles.content}>
                        <Text style={styles.textContent}>Nội dung</Text>
                        <Text style={styles.textContent}>Nộp tiền phí dịch vụ</Text>
                    </View>
                    <View style={styles.content}>
                        <Text style={[styles.textContent, styles.textColor]}>Tháng 5</Text>
                    </View>
                    <View style={styles.content}>
                        <Text style={styles.textContent}>Tổng</Text>
                        <Text style={[styles.textContent, styles.textColor]}>10.000.000đ</Text>
                    </View>
                    <Text style={[styles.textContent, styles.textPay]}>Thanh toán bằng</Text>
                    <Text style={styles.textContent}>Ví điện tử</Text>
                    <View style={styles.wrapPayment}>
                        <View style={styles.wrapPay}>
                            <CheckBox
                                checkedIcon='dot-circle-o'
                                uncheckedIcon='circle-o'
                                checked={true}
                            />
                            <Image source={MoMo} />
                        </View>
                        <View style={styles.wrapPay}>
                            <CheckBox
                                checkedIcon='dot-circle-o'
                                uncheckedIcon='circle-o'
                                checked={false}
                            />
                            <Image source={ViettelPay} />
                        </View>
                    </View>
                    <Text style={styles.textContent}>Ngân hàng nội địa</Text>
                    <View style={styles.wrapPayment}>
                        <View style={styles.wrapPay}>
                            <CheckBox
                                checkedIcon='dot-circle-o'
                                uncheckedIcon='circle-o'
                                checked={false}
                            />
                            <Image source={Vietcombank} />
                        </View>
                        <View style={styles.wrapPay}>
                            <CheckBox
                                checkedIcon='dot-circle-o'
                                uncheckedIcon='circle-o'
                                checked={false}
                            />
                            <Image source={Bidv} />
                        </View>
                    </View>
                    <Text style={styles.textContent}>Tiền mặt</Text>
                    <View style={styles.wrapPayment}>
                        <View style={styles.wrapPay}>
                            <CheckBox
                                checkedIcon='dot-circle-o'
                                uncheckedIcon='circle-o'
                                checked={false}
                            />
                            <Image source={Money} />
                        </View>
                    </View>
                </View>
                <View style={styles.wrapBtn}>       
                    <View style={styles.btnConfirm}>
                        <Button title="Thanh toán" color="#9966FF" />
                    </View>
                </View>
            </View>
        </View>
    </View>
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1
    },
    wrapContent: {
        flex: 1
    },
    imageBanner: {
        height: '100%'
    },
    banner: {
        position: 'relative',
        height: 200,
    },
    overlay: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: 80,
        backgroundColor: 'black',
        opacity: 0.4,
    },
    textBanner: {
        position: 'absolute',
        left: 15,
        bottom: 25,
        width: '100%'
    },
    main: {
        padding: 15
    },
    confirm: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    textConfirm: {
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 10
    },
    test: {
        fontSize: 30,
        color: 'white'
    },
    detailList: {
        borderBottomColor: '#666666',
        borderBottomWidth: 2,
        height: 100
    },
    detail: {
        borderColor: '#666666',
        borderWidth: 2,
        padding: 10
    },
    detailItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 15
    },
    detailTotal: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#9966FF'
    },
    detailText: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    wrapBtn: {
        padding: 10,
        marginTop: 15,
        borderRadius: 10
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 10
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 2,
        paddingTop: 5,
        paddingBottom: 5
    },
    textContent: {
        fontSize: 16,
    },
    textColor: {
        color: '#9966FF'
    },
    textPay: {
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10
    },
    wrapPay: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    wrapPayment: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
    }
});