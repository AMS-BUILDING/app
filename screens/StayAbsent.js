import { AntDesign } from '@expo/vector-icons';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Alert, Button, ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import HomeImage from '../assets/images/home.png';
import { TextInputMask } from 'react-native-masked-text'
import { doGet, doPost } from '../components/lib/DataSource';
export default function StayAbsent({ navigation }) {


    const [data, setData] = useState()
    const [absentType, setAbsent] = useState(1);
    const [message, setMessge] = useState();
   
    const addAbsent = async () => {

        const path = "/absent/add";
        const headers = {
            "Content-Type": "application/json"
        }
        let bodyRequest = {
            name: data.name,
            dob: moment(data?.dob,'DD-MM-YYYY').format('YYYY-MM-DD'),
            identifyCard: data.identifyCard,
            homeTown: data.homeTown,
            reason: data.reason,
            startDate: moment(data.startDate,'DD-MM-YYYY').format('YYYY-MM-DD'),
            endDate: moment(data.endDate,'DD-MM-YYYY').format('YYYY-MM-DD'),
            absentType: 1,
            accountDetailId: 1
        }
        console.log(bodyRequest)
        try {
            let res = await doPost(path, headers, JSON.stringify(bodyRequest))
            console.log(res.status)
            if (res.status === 201) {
                alert("Đăng ký thành công")
                setData(null)
            }

        } catch (error) {
            alert("Vui lòng kiểm tra lại thông tin!")
            
        }
    }

    
    return <View style={styles.wrapper}>
        <View style={styles.wrapContent}>
            <ImageBackground source={HomeImage} style={styles.image}>
                <View style={styles.overlay}>
                    <View style={styles.main}>
                        <View style={styles.confirm}>
                            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.btnBack}>
                                <AntDesign name="arrowleft" size={30} color="#fff" />
                            </TouchableOpacity>
                            <View style={styles.wrapText}>
                                <Text style={styles.textConfirm}>Gửi xe</Text>
                            </View>
                        </View>
                        <View style={styles.headerText}>
                            <TouchableOpacity style={[styles.wrapItem, (absentType === 1) && styles.active]} onPress={() => setAbsent(1)}>
                                <Text style={styles.textItem}>Tạm trú</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.wrapItem, styles.noneBorder, (absentType === 2) && styles.active]} onPress={() => setAbsent(2)}>
                                <Text style={styles.textItem}>Tạm vắng</Text>
                            </TouchableOpacity>

                        </View>
                        <View style={styles.features}>

                            <View style={styles.numberCar}>
                                <Text style={styles.textNumber}>Họ tên:</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Nguyen Van A"
                                    onChangeText={(text) => {
                                        setData({
                                            ...data,
                                            name: text
                                        })
                                    }}
                                    value={data?.name}
                                />
                            </View>
                            <View style={styles.numberCar}>
                                <Text style={styles.textNumber}>Ngày sinh:</Text>
                                <TextInputMask
                                    type={'datetime'}
                                    options={{
                                        format: 'DD-MM-YYYY'
                                    }}
                                    style={styles.input}
                                    value={data?.dob}
                                    onChangeText={(text) => {
                                        
                                        setData({
                                            ...data,
                                            dob: text
                                        })
                                    }}
                                />
                            </View>
                            <View style={styles.numberCar}>
                                <Text style={styles.textNumber}>Số CMND:</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="0361xxxxx"
                                    onChangeText={(text) => {
                                        setData({
                                            ...data,
                                            identifyCard: text
                                        })
                                    }}
                                    value={data?.identifyCard}
                                />
                            </View>
                            <View style={styles.numberCar}>
                                <Text style={styles.textNumber}>Địa chỉ:</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder=""
                                    onChangeText={(text) => {
                                        setData({
                                            ...data,
                                            homeTown: text
                                        })
                                    }}
                                    value={data?.homeTown}
                                />
                            </View>
                            <View style={styles.numberCar}>
                                <Text style={styles.textNumber}>Lý do:</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder=""
                                    onChangeText={(text) => {
                                        setData({
                                            ...data,
                                            reason: text
                                        })
                                    }}
                                    value={data?.reason}
                                />
                            </View>
                            <View style={styles.numberCar}>
                                <Text style={styles.textNumber}>Ngày đến:</Text>
                                <TextInputMask
                                    type={'datetime'}
                                    options={{
                                        format: 'DD-MM-YYYY'
                                    }}
                                    style={styles.input}
                                    value={data?.startDate}
                                    onChangeText={(text) => {
                                        setData({
                                            ...data,
                                            startDate: text
                                        })
                                    }}
                                />
                            </View>
                            <View style={styles.numberCar}>
                                <Text style={styles.textNumber}>Ngày đi:</Text>
                                <TextInputMask
                                    type={'datetime'}
                                    options={{
                                        format: 'DD-MM-YYYY'
                                    }}
                                    style={styles.input}
                                    value={data?.endDate}
                                    onChangeText={(text) => {
                                        setData({
                                            ...data,
                                            endDate: text
                                        })
                                    }}
                                />
                            </View>
                        </View>
                        <View style={styles.wrapBtn}>
                            <View style={styles.btnConfirm}>
                                <Button title="Xác nhận" color="#006633" onPress={() => addAbsent()} />
                            </View>
                        </View>
                    </View>
                </View>

            </ImageBackground>
        </View>
    </View>
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1
    },
    wrapContent: {
        flex: 1,
        position: 'relative'
    },
    imageBanner: {
        height: '100%'
    },

    overlay: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#161b224d',

    },
    textBanner: {
        position: 'absolute',
        left: 15,
        bottom: 25,
        width: '100%',
        zIndex: 1
    },
    image: {
        resizeMode: "cover",
        position: 'relative',
        height: '100%',
    },
    main: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        zIndex: 3
    },
    wrapText: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    confirm: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        height: 100,
        backgroundColor: '#006633',
        width: '100%',
        paddingTop: 30,
        position: 'relative',
        borderBottomColor: '#282828',
        borderBottomWidth: 1,
        borderStyle: 'solid'
    },
    btnBack: {
        position: 'absolute',
        left: 15,
        top: 50
    },
    textConfirm: {
        fontWeight: 'bold',
        fontSize: 25,
        color: '#fff'
    },
    test: {
        fontSize: 30,
        color: 'white'
    },
    headerText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: 'black',
        height: 29,
        marginTop: 20,
        marginLeft: 14,
        marginRight: 14
    },
    wrapItem: {
        width: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textItem: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '700',
        color: '#fff'
    },
    active: {
        backgroundColor: '#006633',
    },
    noneBorder: {
        borderTopLeftRadius: 0,
        borderBottomStartRadius: 0,
    },
    features: {
        height: 420,
        backgroundColor: '#fff',
        marginTop: 0,
        marginLeft: 15,
        marginRight: 15
    },
    numberCar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10
    },
    textNumber: {
        marginRight: 15,
        fontSize: 14
    },
    featureItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10
    },
    featureInput: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10
    },
    input: {
        borderWidth: 1,
        width: 230,
        height: 40,
        borderRadius: 5,
        paddingLeft: 8,
    },
    wrapBtn: {
        padding: 10,

        marginTop: 15,
        borderRadius: 10
    },
    textPrice: {
        fontSize: 15,
        fontWeight: '700'
    }
});