import { AntDesign } from '@expo/vector-icons';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import React from 'react';
import { Button, CheckBox, Image, StyleSheet, Text, View } from 'react-native';
import RNPickerSelect from "react-native-picker-select";
import BannerImage from '../assets/images/banner1.png';
import Header from '../components/Header';

export default function Pool({ navigation }) {
    return <View style={styles.wrapper}>
        <Header navigation={navigation} />
        <View style={styles.wrapContent}>
            <View style={styles.banner}>
                <Image source={BannerImage} style={styles.imageBanner} />
                <View style={styles.overlay}></View>
                <View style={styles.textBanner}>
                    <Text style={styles.test}>Đăng kí</Text>
                </View>
            </View>
            <View style={styles.main}>
                <View style={styles.confirm}>
                    <AntDesign name="arrowleft" size={40} color="#9966FF" />
                    <Text style={styles.textConfirm}>Hồ bơi</Text>
                </View>

                <View style={styles.wrapTime}>
                    <View>
                        <Text>Ngày đặt</Text>
                        <RNDateTimePicker value={new Date()} style={{ width: 100 }} />
                    </View>
                    <View style={styles.widthContent}>
                        <Text>Từ</Text>
                        <RNPickerSelect
                            style={pickerSelectStyles}
                            onValueChange={(value) => console.log(value)}
                            items={[
                                { label: "JavaScript", value: "JavaScript" },
                                { label: "TypeStript", value: "TypeStript" },
                                { label: "Python", value: "Python" },
                                { label: "Java", value: "Java" },
                                { label: "C++", value: "C++" },
                                { label: "C", value: "C" },
                            ]}
                        />
                    </View>
                    <View style={styles.widthContent}>
                        <Text>Đến</Text>
                        <RNPickerSelect
                            style={pickerSelectStyles}
                            onValueChange={(value) => console.log(value)}
                            items={[
                                { label: "JavaScript", value: "JavaScript" },
                                { label: "TypeStript", value: "TypeStript" },
                                { label: "Python", value: "Python" },
                                { label: "Java", value: "Java" },
                                { label: "C++", value: "C++" },
                                { label: "C", value: "C" },
                            ]}
                        />
                    </View>
                </View>
                <Text style={styles.textRule}>Quy định khi đăng kí thẻ ra vào</Text>
                <View style={styles.wrapCommit}>
                    <CheckBox style={styles.checkbox} />
                    <Text style={styles.textCommit}>Tôi đã đọc và cam kết</Text>
                </View>
                <View style={styles.wrapBtn}>
                    <View style={styles.btnConfirm}>
                        <Button title="Đăng kí" color="#9966FF" onPress={() => navigation.navigate('ServiceQuote')} />
                    </View>
                </View>
            </View>
        </View>
    </View>
}
const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        color: 'black',
        padding: 5
        // to ensure the text is never behind the icon
    },
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: 'purple',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
    },
});
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
        height: 40,
        backgroundColor: 'black',
        opacity: 0.4,
    },
    textBanner: {
        position: 'absolute',
        left: 15,
        bottom: 5,
        width: '100%'
    },
    main: {
        padding: 15
    },
    confirm: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5
    },
    textConfirm: {
        fontWeight: 'bold',
        fontSize: 30,
        marginLeft: 10
    },
    test: {
        fontSize: 30,
        color: 'white'
    },
    wrapTime: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30
    },
    wrapBtn: {
        padding: 10,
        marginTop: 15,
        borderRadius: 10
    },
    checkbox: {
        width: 20,
        height: 20,
        borderColor: 'black'
    },
    textRule: {
        color: '#9966FF',
        textDecorationLine: 'underline',
        marginBottom: 10
    },
    wrapCommit: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5
    },
    textCommit: {
        marginLeft: 10,
        fontSize: 18
    },
});