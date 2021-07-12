import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { AirbnbRating } from 'react-native-elements';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Header from '../components/Header';
export default function Feedback({ navigation }) {
    return <View style={styles.wrapper}>
        <Header navigation={navigation} />
        <View style={styles.wrapContent}>
            <View style={styles.wrapNav}>
                <View style={styles.nav}>
                    <TouchableOpacity onPress={() => navigation.goBack()} activeOpacity={0.8}><AntDesign name="arrowleft" size={20} color="white" /></TouchableOpacity>
                    <Text style={styles.title}>Feedback</Text>
                </View>
            </View>
            <View style={styles.feedback}>
                <Text style={styles.textFeedback}>Đánh giá chúng tôi</Text>
                <AirbnbRating reviews={[]}
                    count={5}
                    defaultRating={4}
                    size={30}
                />
            </View>
            <View style={styles.wrapArea}>
                <View style={styles.textAreaContainer} >
                    <TextInput
                        style={styles.textArea}
                        placeholder="Type something"
                        placeholderTextColor="grey"
                        numberOfLines={10}
                        multiline={true}
                    />
                </View>
            </View>
            <View style={styles.wrapBtn}>       
                <View style={styles.btnFeedback}>
                    <Button title="SEND" color="#9966CC" />
                </View>
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
        padding: 15
    },
    title: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10
    },
    wrapContent: {
        flex: 1,
    },
    wrapArea: {
        padding: 10
    },
    textAreaContainer: {
        borderColor: 'black',
        borderWidth: 1
    },
    textArea: {
        height: 150,
        justifyContent: "flex-start",
        backgroundColor:'#fff'
    },
    feedback: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20
    },
    textFeedback: {
        fontWeight: 'bold',
        fontSize: 30
    },
    wrapBtn: {
        padding: 15
    },
    btnFeedback: {
        padding: 10,
        width: 100,
        marginLeft: 'auto',
        borderRadius: 10,
        marginTop: 10
    }
});