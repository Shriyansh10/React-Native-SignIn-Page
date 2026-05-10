import React from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useWindowDimensions,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const Homepage = () => {
  const { width } = useWindowDimensions();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"dark-content"} />

      <View style={styles.innerContainer}>
        <View>
          <Image
            source={require("../../assets/images/Dragon-Ball-Logo.png")}
            style={styles.image}
          />
        </View>

        <View
          style={{
            marginBottom: 20,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: width * 0.08,
              fontWeight: "900",
              color: "orange",
            }}
          >
            Sign in
          </Text>

          <Text
            style={{
              textAlign: "center",
              fontSize: width * 0.034,
            }}
          >
            Let's experience the world of Dragon Ball
          </Text>
        </View>

        <View style={styles.inputWrapper}>
          <Text style={styles.inputLabel}>Email Address</Text>

          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <TextInput style={styles.textbox} placeholder="Enter your email" />
          </KeyboardAvoidingView>
        </View>

        <View style={styles.inputWrapper}>
          <Text style={styles.inputLabel}>Password</Text>

          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <TextInput
              style={styles.textbox}
              placeholder="Enter your password"
              secureTextEntry
            />
          </KeyboardAvoidingView>
        </View>

        <Pressable style={styles.signInButton}>
          <Text style={styles.signInText}>Sign In →</Text>
        </Pressable>

        <View style={styles.socialContainer}>
          <Pressable style={styles.socialButton}>
            <FontAwesome name="facebook" size={22} color="#1877F2" />
          </Pressable>

          <Pressable style={styles.socialButton}>
            <FontAwesome name="google" size={22} color="#DB4437" />
          </Pressable>

          <Pressable style={styles.socialButton}>
            <Ionicons name="logo-instagram" size={22} color="#E4405F" />
          </Pressable>
        </View>

        <View style={styles.bottomRow}>
          <Text style={styles.bottomText}>Don't have an account?</Text>

          <Pressable>
            <Text style={styles.signUpText}>Sign up.</Text>
          </Pressable>
        </View>

        <Pressable style={styles.forgotPassword}>
          <Text style={styles.forgotPasswordText}>Forgot your Password?</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Homepage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5a623",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },

  innerContainer: {
    width: "88%",
    maxWidth: 380,
    height: "80%",
    backgroundColor: "#fff7e6",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingVertical: 28,
    borderRadius: 30,
    borderWidth: 3,
    borderColor: "#d96b00",
    gap: 14,

    shadowColor: "#6b3200",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.22,
    shadowRadius: 20,
    elevation: 10,
  },

  image: {
    width: 96,
    height: 96,
    resizeMode: "contain",
    marginBottom: 8,
  },

  textbox: {
    width: 280,
    height: 50,
    fontSize: 15,
    marginTop: 8,

    borderWidth: 2,
    borderColor: "#f5a623",
    borderRadius: 16,

    backgroundColor: "#ffffff",
    paddingHorizontal: 16,
    color: "#2f1b0c",

    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },

  inputWrapper: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },

  inputLabel: {
    alignSelf: "flex-start",
    marginLeft: 8,
    marginBottom: 4,
    fontSize: 14,
    fontWeight: "600",
    color: "#5c2c06",
  },

  signInButton: {
    width: 280,
    height: 52,
    backgroundColor: "#ff8c00",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 18,
    marginTop: 10,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
  },

  signInText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "800",
    letterSpacing: 0.5,
  },

  socialContainer: {
    flexDirection: "row",
    gap: 14,
    marginTop: 10,
  },

  socialButton: {
    backgroundColor: "#ffffff",
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#f0c27b",
  },

  socialText: {
    fontWeight: "700",
    color: "#5c2c06",
  },

  bottomRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    gap: 5,
  },

  bottomText: {
    color: "#5c2c06",
    fontSize: 13,
  },

  signUpText: {
    color: "#ff7b00",
    fontWeight: "800",
    fontSize: 13,
  },

  forgotPassword: {
  },

  forgotPasswordText: {
    color: "#cc5c00",
    fontSize: 13,
    fontWeight: "600",
  },
});
