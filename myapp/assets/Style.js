import { StyleSheet } from "react-native";

const inputViewSize = 350;

export default StyleSheet.create({
  // *
  container: {
    flex: 1,
    backgroundColor: "OffWhite",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },

  //HomeScreen
  viewContainer: {
    justifyContent: "center",
    alignItems: "center",
    margin: 25,
  },
  HSBtn: {
    margin: 25,
    padding: 15,
    borderWidth: 2,
    backgroundColor: "#FFA000",
    borderColor: "#FFA000",
    borderRadius: 15,
  },
  userInput: {
    marginTop: 25,
    width: 200,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 2,
    borderColor: "#6495ed",
    borderRadius: 10,
    fontSize: 20,
    color: "gray",
  },
  flatList: {
    justifyContent: "center",
    alignItems: "center",
  },

  //HomeScreen - GridTile
  gridTileContainer: {
    width: 250,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "#80D8FF",
    padding: 15,
    margin: 5,
    backgroundColor: "#80D8FF",
  },
  HSText: {
    textAlign: "center",
    fontSize: 25,
  },

  //NewRestaurant
  Btn: {
    textAlign: "center",
    width: 200,
    margin: 25,
    padding: 15,
    backgroundColor: "#f0f8ff",
    borderColor: "#f0f8ff",
    borderRadius: 15,
    borderWidth: 4,
    borderColor: "#6495ed",
  },
  BtnAddImage: {
    textAlign: "center",
    width: 150,
    margin: 25,
    padding: 15,
    backgroundColor: "#6495ed",
    borderColor: "#6495ed",
    borderRadius: 15,
    borderWidth: 4,
    borderColor: "#f0f8ff",
  },

  //newForm
  listQuestWrapper:{
    display:'flex',
    justifyContent:'center',
    alignContent:'center',
    textAlign:'center'
  },

  //Main body style
  mainBackground: {
    flex: 1,
  },

  // Grid component alignment
  gridComponent: {
    flex: 1,
    margin: 15,
    height: 170,
  },

  // Grid component style
  gridComponentBackground: {
    height: 170,
    borderRadius: 25,
  },

  // the style of the container of the grid components
  gridContainer: {
    flex: 1,
    borderRadius: 25,
    shadowColor: "grey",
    shadowOpacity: 0.7,
    shadowOffset: { width: 2, height: 4 },
    shadowRadius: 10,
  },

  // main style of the text in the app
  content: {
    fontSize: 27,
    textAlign: "center",
    fontWeight: 'bold',
    margin: 5,
  },

  // the main style of the text in the restaurant page
  restContent: {
    fontSize: 20,
    color: "#01579B",
    // fontFamily: font,
  },

  // style of the image in restaurant page
  restImage: {
    marginTop: 30,
    marginBottom: 20,
    width: 250,
    height: 250,
    borderRadius: 25,
    borderWidth: 6,
    borderColor: "#633974",
    backgroundColor: "white",
  },

  // main style of all the input boxes in the app
  input: {
    height: 30,
    color: "white",
    width: 300,
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 8,
    paddingLeft: 5,
    paddingRight: 5,
    margin: 10,
  },

  // the style of the input text
  textInput: {
    color: "white",
    fontSize: 18,
    margin: 10,
  },

  // general style of the buttons in the app
  button: {
    marginTop: 20,
    width: 150,
  },

  // general button text style
  buttonText: {
    fontSize: 23,
    color: "white",
    textAlign: "center",
    textShadowColor: "black",
    textShadowOffset: { width: 3, height: 0 },
    textShadowRadius: 3,
    elevation: 3, // for android - to see the shadow
    textAlign: "auto",
  },

  // general style of some buttons in the app
  navigateButton: {
    backgroundColor: "#17a2b8",
    padding: 3,
    borderWidth: 4,
    borderColor: "white",
    borderRadius: 20,
    shadowColor: "grey",
    shadowOpacity: 0.7,
    shadowOffset: { width: 2, height: 4 },
    shadowRadius: 7,
    elevation: 3, // for android - to see the shadow
    alignItems: "center",
    alignSelf: "center",
    width: 250,
    height: 45,
    marginBottom: 7,
  },

  gradeView: {
    margin: 30,
    alignItems: "center",
    borderColor: "#37474F",
    borderWidth: 4,
    borderRadius: 9,
    padding: 5,
    width: 250,
    alignSelf: "center",
  },
});
