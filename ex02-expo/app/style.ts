import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    Home: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
        gap: 12,
        marginBottom: 40,
    },
    
    title: {
        width: "90%",
        color: "#750180",
        fontSize: 34,
        fontWeight: "bold",
        fontStyle: "italic",
        marginTop: 22,
        backgroundColor: "#FC94AF",
        textAlign: "center",
        borderWidth: 2,
        borderColor: "#e11584",
        borderRadius: 10,
    },

    description: {
        width: "90%",
        color: "#750180",
        fontSize: 16,
        marginBottom: 12,
        backgroundColor: "#FC94AF",
        textAlign: "center",
        borderWidth: 2,
        borderColor: "#e11584",
        borderRadius: 10,
    },

    portrait:{
        width: 220,
        height: 220,
        borderRadius: 75,
        marginBottom: 20,
        backgroundColor: "#ffdbd3",
        justifyContent: "center",
        alignItems: "center",
        borderColor: "#1d7fb7",
        borderWidth: 3,
    },

    picture: {
        width: 200,
        height: 200,
        borderRadius: 75,
    },

    quote: {
        color: "#ffffff",
        marginBottom: 20,
        fontSize: 18,
        fontStyle: "italic",
        textDecorationLine: "underline",
    },

    sup: {
        fontSize: 12,
        textAlignVertical: "top",
        textDecorationLine: "none",
    },

    segment: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#FC94AF",
        borderWidth: 2,
        borderColor: "#e11584",
        borderRadius: 20,
        width: "85%",
        marginBottom: 15,
    },
    
    chapter:{
        width: "85%",
        fontSize: 24,
        marginBottom: 6,
        display: "flex",
        alignItems: "center",
        textAlign: "center",
    },

    box:{
        width: "85%",
        color: "#750180",
        backgroundColor: "#FEC5E5", 
        fontSize: 16,
        marginBottom: 15,
        padding: 7,
        justifyContent: "flex-start",
        alignSelf: "center",
        borderRadius: 20,
        borderWidth: 2,
        borderColor: "#e11584",
    },

    groupLinks: {
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        rowGap: 3,
        columnGap: 3,
        marginBottom: 12,
    },

    hyperlink: {
        color: 'blue',
        justifyContent: "flex-start",
        alignSelf: "flex-start",
        width: "45%",
        flexShrink: 0,
    },

    logo: {
        width: 16,
        height: 16,
    },

});