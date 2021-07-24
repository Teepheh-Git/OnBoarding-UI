import React from "react";
import { StyleSheet, Image, Dimensions, Text, View } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign'
import Swiper from 'react-native-swiper'
// import AppLoading from 'expo-app-loading'
import {
    useFonts,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";



const App = () => {

    let [fontsLoaded] = useFonts({
        Montserrat_400Regular,
        Montserrat_500Medium,
        Montserrat_600SemiBold,
        Montserrat_700Bold,

    });

    // if (!fontsLoaded) {
    //     return <AppLoading/>
    // } else {
    return (
        <Swiper
            buttonWrapperStyle={{
                backgroundColor: "transparent",
                flexDirection: "row",
                position: "absolute",
                bottom: 0,
                left: 0,
                flex: 1, 
                paddingHorizontal: 30,
                paddingVertical: 20,
                justifyContent: "flex-end",
                alignItems: "flex-end",
            }}
            style={styles.wrapper}
            showsButtons={true}
            paginationStyle={{
                marginRight: w * 0.7,
                marginBottom: h * 0.02,
            }}
            activeDotColor="#DC23CD"
            dotColor="#998FA2"

            nextButton={
                <View
                    style={{
                        height: 60,
                        borderRadius: 30,
                        alignItems: "center",
                        justifyContent: "center",
                        width: 60,
                        backgroundColor: "#DC23CD",
                    }}
                >
                    <AntDesign name="arrowright" size={22} color="#FFF" />
                </View>
            }
            prevButton={
                <View
                    style={{
                        height: 60,
                        borderRadius: 30,
                        alignItems: "center",
                        justifyContent: "center",
                        width: 60,
                        backgroundColor: "#DC23CD",
                        marginHorizontal: 20,
                    }}
                >
                    <AntDesign name="arrowleft" size={22} color="#FFF" />
                </View>
            }
        >
            <View style={styles.slide}>
                <Image source={require("./images/img.png")} style={styles.img} />
                <Text style={styles.title}>Stretch Up The Body</Text>
                <Text style={styles.text}>
                    The word 'Yoga' is derived from the Sanskrit root 'Yuj',
                    meaning 'to join' or 'to yoke' or 'to unite'. As per Yogic scriptures the practice of Yoga
                    leads to the union of
                    individual consciousness with that of the Universal Consciousness,
                    indicating a perfect harmony between the mind and body, Man & Nature.

                </Text>
            </View>
            <View style={styles.slide}>
                <Image source={require("./images/img2.png")} style={styles.img} />
                <Text style={styles.title}>Discover With Meditation</Text>
                <Text style={styles.text}>
                    Consciousness is often likened to a stream, shifting and changing smoothly as it
                    passes over the terrain. Meditation is one deliberate means of changing the course of this stream,
                    and in turn, altering how you perceive and respond to the world around you.
                </Text>
            </View>

            <View style={styles.slide}>
                <Image source={require("./images/img3.png")} style={styles.img} />
                <Text style={styles.title}>Experience Nature</Text>
                <Text style={styles.text}>
                    Research reveals that environments can increase or reduce our stress,
                    which in turn impacts our bodies.
                    What you are seeing, hearing, experiencing at any moment
                    is changing not only your mood, but how your nervous, endocrine, and immune systems are working.
                </Text>
            </View>
            <View style={styles.slide}>
                <Image source={require("./images/img4.png")} style={styles.img} />
                <Text style={styles.title}>Explore Nature</Text>
                <Text style={styles.text}>
                    Don’t focus on the distance or destination, just enjoy the journey.
                    Make a list of some things that can be found outside and have a scavenger hunt.
                    Includes things like: acorn, pine cone, flat rock, leaf etc.
                </Text>
            </View>
        </Swiper>
    );
    // }
};


const w = Dimensions.get("window").width
const h = Dimensions.get("window").height

const styles = StyleSheet.create({
    slide: {
        flex: 1,
        paddingTop: 80,
        // marginHorizontal: 10,
        backgroundColor: "#EBDEEB",

    },
    img: {
        alignSelf: "center",
        borderTopRightRadius: 80,
        borderBottomLeftRadius: 80,
        height: h * 0.5,
        width: w * 0.9,
    },
    title: {
        fontFamily: "Montserrat_700Bold",
        marginTop: 60,
        marginHorizontal: 30,
        fontSize: 32,
        fontWeight:'bold',
    },
    text: {
        color: "#767676",
        fontFamily: "Montserrat_400Regular",
        textAlign:"left",
        marginTop: 20,
        fontSize: 16,
        lineHeight: 25,
        marginHorizontal: 30,
    },
})

export default App;

