import { AntDesign } from '@expo/vector-icons';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import React from 'react';
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import RNPickerSelect from "react-native-picker-select";
import BannerImage from '../assets/images/banner1.png';
import Header from '../components/Header';

export default function Repair({ navigation }) {
    return <View style={styles.wrapper}>
        <Header navigation={navigation} />
        <View style={styles.wrapContent}>
            <View style={styles.banner}>
                <Image source={BannerImage} style={styles.imageBanner} />
                <View style={styles.overlay}></View>
                <View style={styles.textBanner}>
                    <Text style={styles.test}>Yêu cầu dịch vụ</Text>
                </View>
            </View>
            <View style={styles.main}>
                <View style={styles.confirm}>
                    <AntDesign name="arrowleft" size={40} color="#9966FF" />
                    <Text style={styles.textConfirm}>Sửa chữa</Text>
                </View>
                <View style={styles.wrapDevice}>
                    <View>
                        <Text style={styles.textDevice}>Thiết bị</Text>
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
                    <View>
                        <Text style={styles.textDevice}>Vấn đề</Text>
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
                <View style={styles.textAreaContainer} >
                    <TextInput
                        style={styles.textArea}
                        placeholder="Type something"
                        placeholderTextColor="grey"
                        numberOfLines={5}
                        multiline={true}
                    />
                </View>
                <View style={styles.wrapDevice}>
                    <View>
                        <Text style={styles.textDevice}>Ngày đặt</Text>
                        <RNDateTimePicker value={new Date()} style={styles.selectDate} />
                    </View>
                    <View>
                        <Text style={styles.textDevice}>Giờ</Text>
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
                <View style={styles.wrapBtn}>
                    <View style={styles.btnConfirm}>
                        <Button title="Gửi yêu cầu" color="white" onPress={() => navigation.navigate('ServicePrice')} />
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
    wrapBtn: {
        padding: 10,
        backgroundColor: '#9966FF',
        marginTop: 15,
        borderRadius: 10
    },
    textPrice: {
        fontSize: 18
    },
    wrapDevice: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    textAreaContainer: {
        borderColor: 'black',
        borderWidth: 1,
        padding: 5,
        marginTop: 10
    },
    textArea: {
        height: 100,
        justifyContent: "flex-start"
    },
    selectDate: {
        width: 100,
    },
    textDevice: {
        marginBottom: 5,
        marginTop: 3,
        fontSize: 16
    }
});