import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    formRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
        gap: 10,
        fontWeight: "bold",
    },
    errorMessage: {
        color: 'red',
        fontWeight: 'bold',
        borderRadius: 5,
        fontSize: 16,
    }
});