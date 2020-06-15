import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    containerWrapper: { flex: 1, padding: "3%", height: 200, flexDirection: "column" },
    imageView: { width: "100%", height: "100%", resizeMode: "contain", borderWidth: 1, },
    ImageWrapper: { flex: 0.35 },
    bodyWrapper: { flex: 0.65, paddingLeft: "4%", justifyContent: "center", alignItems: "center" },
    textWrapper: { fontWeight: "100", marginTop: "2%" },
    bold: { fontWeight: "bold" },
    descWrapper: { marginTop: "2%" },
    priceWrapper: { marginTop: "2%", color: "maroon" }
})
