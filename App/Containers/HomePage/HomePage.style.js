import { StyleSheet } from 'react-native'
import { Helpers, Metrics, Fonts, Colors } from 'App/Theme'

export default StyleSheet.create({
  wrapper: { flex: 1, padding: "3%" },
  inputContainer: { flex: 0.1, justifyContent: "center" },
  input: { borderWidth: 1, height: "50%", padding: "2%" },
  listcontainer: { flex: 0.9 },
  footorcomponent: { justifyContent: "center", alignItems: "center", flex: 1 },
  flatlistComponent: { justifyContent: "center", alignItems: "center", height: 70 }
})
