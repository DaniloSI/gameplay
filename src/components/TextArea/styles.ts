import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

const { fonts, colors } = theme;

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 95,
    backgroundColor: colors.secondary40,
    borderRadius: 8,
    color: colors.heading,
    fontFamily: fonts.text400,
    fontSize: 13,
    marginRight: 4,
    textAlign: 'center',
  },
});