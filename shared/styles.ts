import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 32,
    },
    textInput: {
        backgroundColor: "white",
        borderRadius: 20,
        height: 40,
        paddingHorizontal: 20,
    },
    textInputLabel: {
        fontSize: 28,
    },
    formRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
        gap: 10,
        fontWeight: "bold"
    }
});