import React, { useEffect, useState } from 'react';
import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';
import ArticleTracking from '../components/ArticleTracking';
import homeImage from '../assets/images/home.png'
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import { useNavigation } from '@react-navigation/native';
import API from '../components/lib/API';
import { useSelector } from 'react-redux';
export default function DetailProcess(props) {
    let navigation = useNavigation();
    let id = props.route.params?.id;
    let [data, setData] = useState()
    useEffect(() => {
        const parent = navigation.dangerouslyGetParent();
        search()
        parent.setOptions({
            tabBarVisible: false
        });
        return () =>
            parent.setOptions({
                tabBarVisible: true
            });
    }, []);
    useEffect(() => {
        search()
    }, [id])
    const token = useSelector(state => state.user?.token);

    let search = async () => {
        try {
            let path = `/landlord/status_request?serviceRequestId=${id}`;
            let resp = await API.authorizedJSONGET(path, token);
            if (resp.ok) {
                let response = await resp.json();
                setData(response)
            }
        } catch (error) {

        }
    }
    return <View style={styles.wrapper}>
        <ImageBackground source={homeImage} style={styles.imageBanner} >
            <View style={styles.overlay}>
            </View>
            <View style={styles.wrapContent}>
                <Text style={{ color: '#fff', fontSize: 18 }}>{data?.serviceName}</Text>

            </View>

            <View style={{ flex: 1 }}>
                <ProgressSteps
                    completedStepNumColor="#fff"
                    activeStepIconColor={"#fff"}
                    disabledStepIconColor={"#333"}
                    activeStep={data?.statusId}

                >
                    <ProgressStep label="Đã nhận"
                        nextBtnDisabled={true}
                        nextBtnText=""
                    >
                        <View style={{ alignItems: 'center' }}>
                            <Text>Đã nhận</Text>
                        </View>
                    </ProgressStep>
                    <ProgressStep label="Kiểm tra"
                        nextBtnDisabled={true}
                        nextBtnText=""
                        previousBtnText=""
                        previousBtnDisabled={true}
                    > 
                        <View style={{ alignItems: 'center' }}>
                            <Text>Kiểm tra</Text>
                        </View>
                    </ProgressStep>
                    <ProgressStep label="Đang thực hiện"
                        nextBtnDisabled={true}
                        nextBtnText=""
                        previousBtnText=""
                        previousBtnDisabled={true}
                    >
                        <View style={{ alignItems: 'center' }}>
                            <Text>Đang thực hiện</Text>
                        </View>
                    </ProgressStep>
                    <ProgressStep label="Hoàn thành"
                        previousBtnText=""
                        previousBtnDisabled={true}
                        nextBtnDisabled={true}
                        finishBtnText=""
                    >
                        <View style={{ alignItems: 'center' }}>
                            <Text>Hoàn thành</Text>
                        </View>
                    </ProgressStep>
                </ProgressSteps>
            </View>

        </ImageBackground>
    </View>
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1
    },
    wrapContent: {
        paddingTop: 30,
        paddingLeft: 15
    },
    imageBanner: {
        height: '100%',
        width: '100%',
        backgroundColor: '#333',

    },
    banner: {
        position: 'relative',
        height: 150,
    },
    overlay: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
        opacity: 0.6,
    },
    textBanner: {
        position: 'absolute',
        left: 15,
        bottom: 25,
        width: '100%'
    },
    test: {
        fontSize: 20,
        color: 'white',
        fontWeight: '700'
    }
});