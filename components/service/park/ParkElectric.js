import React, { useState } from 'react';
import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Toast from 'react-native-toast-message';
import { useSelector } from 'react-redux';
import HomeImage from '../../../assets/images/home.png';
import API from '../../lib/API';
import LoadingProgressBar from '../../LoadingProgressBar';

export default function ParkElectric() {

    const [loading, setLoading] = useState(false);

    const [open, setOpen] = useState(false);
    const [data, setData] = useState();
    const [items, setItems] = useState([
        { label: "5 chỗ", value: "3" },
        { label: "7 chỗ", value: "4" }
    ]);


    const token = useSelector(state => state.user?.token)
    const accountIdRedux = useSelector(state => state.user?.accountId)
    console.log(token)
    let addPark = async () => {
        setLoading(true);
        let path = '/landlord/vehicle_card/add';
        console.log(data)
        let objReq = {
            vehicleId: 1,
            accountId: accountIdRedux,
            vehicleBranch: data?.vehicleBranch,
            licensePlate: data?.licensePlate,
            vehicleColor: data?.vehicleColor
        }
        let resp = await API.authorizedJSONPost(path, [objReq], token);
        if (resp.ok) {
            setLoading(false)
            setData(null)
            Toast.show({
                type: 'success',
                position: 'bottom',
                bottomOffset: 50,
                text1: 'OK',
                text2: 'Đăng ký thành công?'
            })
        } else {
            Toast.show({
                type: 'error',
                position: 'bottom',
                bottomOffset: 50,
                text1: 'Error',
                text2: 'Đã xảy ra lỗi, thử lại?.'
            })
        }

    }
    const currencyFormat = (num) => {
        return num?.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + ' VNĐ'
    }
    return (
        <>
            <ImageBackground source={HomeImage} style={styles.image}>
                <View style={[styles.features, { position: 'absolute', zIndex: 5 }]}>

                    <View style={{ padding: 15 }}>
                        <View style={styles.featureItem}>
                            <Text style={styles.textNumber}>Xe :</Text>


                        </View>
                        <View style={styles.featureInput}>
                            <TextInput placeholder="Loại xe" style={styles.input}
                                onChangeText={text => {
                                    setData({
                                        ...data,
                                        vehicleBranch: text
                                    })
                                }}
                                value={data?.vehicleBranch}
                            />
                            <TextInput placeholder="Màu xe" style={[styles.input, { marginLeft: 10 }]}
                                onChangeText={text => {
                                    setData({
                                        ...data,
                                        vehicleColor: text
                                    })
                                }}
                                value={data?.vehicleColor}
                            />
                        </View>
                        <View style={styles.featureInput}>
                            <TextInput placeholder="Biển số" style={styles.input}
                                onChangeText={text => {
                                    setData({
                                        ...data,
                                        licensePlate: text
                                    })
                                }}
                                value={data?.licensePlate}
                            />
                        </View>
                        <View>
                            <Text style={styles.textPrice}>Phí xe: {currencyFormat(90000?.toString())}</Text>

                        </View>
                    </View>
                    <View style={{ width: '100%', height: 0.5, backgroundColor: '#eaeaea' }} />
                    <View style={styles.wrapBtn}>
                        <TouchableOpacity style={styles.btnLogin} onPress={() => addPark()} disabled={loading}>
                            <Text style={styles.shareNowText}>XÁC NHẬN {loading && <LoadingProgressBar />}</Text>
                        </TouchableOpacity>

                    </View>
                </View>
                <View style={{
                    backgroundColor: '#000', opacity: .5,
                    position: "absolute",
                    zIndex: 4,
                    width: '100%',
                    height: '100%'
                }} />
            </ImageBackground>
        </>
    )
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
    btnLogin: {
        backgroundColor: '#006633',
        width: '100%',
        height: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    shareNowText: {
        color: '#fff'
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
        width: '33.333%',
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
        height: 200,
        backgroundColor: '#fff',
        marginTop: 50,
        marginLeft: 15,
        marginRight: 15
    },
    numberCar: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 2,
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
        width: 150,
        height: 40,
        borderRadius: 15,
        paddingLeft: 8,
    },
    wrapBtn: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 30,
        borderRadius: 10,
        width: '100%'
    },
    textPrice: {
        fontSize: 15,
        fontWeight: '700'
    }
});