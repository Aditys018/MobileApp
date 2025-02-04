import { FontAwesome } from "@expo/vector-icons";
import { useEffect } from "react";
import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const GITHUB_AUTH_URL = "https://realdevsquad.com/";
const WEB_SIGNIN_URL = "https://realdevsquad.com/";

const AuthScreen = () => {
  useEffect(() => {
    Linking.getInitialURL();
    const handleDeepLink = (event: { url: string }) => {
      const token = event.url.split("token=")[1];
      if (token) {
        console.log("User Token:", token);
        // Handle token storage and user authentication logic here
      }
    };

    const subscription = Linking.addEventListener("url", handleDeepLink);
    return () => {
      subscription.remove();
    };
  }, []);

  const handleGitHubSignIn = () => {
    Linking.openURL(GITHUB_AUTH_URL);
  };

  const handleWebSignIn = () => {
    Linking.openURL(WEB_SIGNIN_URL);
  };

  return (
    <View style={styles.container}>
      <Image source={require("../../assets/images/rdsLogo.png")} style={styles.logo} />
      <Text style={styles.welcomeText}>Welcome to</Text>
      <Text style={styles.title}>REAL DEV SQUAD</Text>

      <TouchableOpacity style={styles.button} onPress={handleGitHubSignIn}>
        <FontAwesome name="github" size={20} color="black" />
        <Text style={styles.buttonText}> GitHub Sign In</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleWebSignIn}>
        <FontAwesome name="globe" size={20} color="black" />
        <Text style={styles.buttonText}> Web Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#10069F",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 22,
    color: "white",
    fontWeight: "500",
  },
  title: {
    fontSize: 28,
    color: "white",
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginVertical: 10,
    width: 220,
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "600",
    color: "black",
  },
});

export default AuthScreen;
