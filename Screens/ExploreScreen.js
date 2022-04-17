import { Ionicons } from "@expo/vector-icons";
import React, { Component } from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Platform,
  StatusBar,
  ImageBackground
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { NewsCategory, NewsSources } from "../NewsProps";

const { width, height } = Dimensions.get("window");

// Platform.isPad

export default class ExploreScreen extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View>

        <ScrollView>
          <StatusBar />
          <View>
            {/* <TouchableOpacity onPress={()=>{
              this.props.navigation.navigate('Business')
            }}>
            <Ionicons name="menu" size={30} />
            </TouchableOpacity> */}
            <Text style={styles.categoryText}>Category</Text>
          </View>
          <FlatList
            keyExtractor={(element) => element.id}
            data={NewsCategory}
            renderItem={(element) => {
              return (
                <View style={{ marginTop: 100, marginLeft: 30 }}>
                  <TouchableOpacity 
                  style={styles.cardContainer}
                  onPress={() =>{
                    this.props.navigation.navigate(element.item.type)
                  }}
                  >
                    <Image
                      source={{ uri: element.item.image }}
                      style={styles.imageStyle}
                    />
                    <Text style={styles.textStyle}>{element.item.type}</Text>
                  </TouchableOpacity>
                </View>
              );
            }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
          <Text style={styles.sourceText}>Sources</Text>
          <FlatList
            keyExtractor={(element) => element.id}
            data={NewsSources}
            renderItem={(element) => {
              return (
                <View style={{ paddingLeft: 20 }}>
                  <TouchableOpacity 
                  style={styles.sourceCardContainer}
                  onPress={() =>{
                    this.props.navigation.navigate(element.item.id)
                  }}
                  >
                    <Image
                      source={{ uri: element.item.pic }}
                      style={styles.sourceImageStyle}
                    />
                    <Text style={styles.sourceTextStyle}>
                      {element.item.name}
                    </Text>
                  </TouchableOpacity>
                </View>
              );
            }}
            style={{ margin: 10 }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dcdcdc",
    alignItems: "center",
    justifyContent: "center",
  },
  cardContainer: {
    top: -70,
    backgroundColor: "#F5F5f1",
    width: 250,
    height: 300,
    borderRadius: 20,
    borderWidth: 4,
    borderColor: "#dcdcdc",
  },
  imageStyle: {
    width: 230,
    height: 200,
    marginLeft: 5,
    marginTop: 5,
    marginRight: 60,
    borderRadius: 10,
  },
  textStyle: {
    marginLeft: '10%',
    marginTop: 10,
    fontSize: RFValue(18),
    fontFamily: "Fira Code iScript",
    fontWeight: "900",
  },
  sourceCardContainer: {
    backgroundColor: "#F5F5f1",
    width: 250,
    height: 300,
    borderRadius: 20,
    borderWidth: 4,
  },
  sourceTextStyle: {
    marginLeft: 20,
    fontSize: 35,
    fontFamily: "Fira Code iScript",
    // fontWeight: "900",
    marginTop: 10,
  },
  sourceImageStyle: {
    marginLeft: 10,
    marginTop: 10,
    width: 220,
    height: 200,
    borderRadius: 10,
    resizeMode: "cover",
  },
  categoryText: {
    paddingTop: -100,
    marginLeft: 30,
    fontSize: RFValue(30),
    fontFamily: 'Fira Code iScript',
    borderRadius: 10,
    width: '40%',
  },
  sourceText: {
    paddingTop: -40,
    marginLeft: 30,
    fontSize: RFValue(35),
    fontFamily: 'Fira Code iScript',
    borderRadius: 20,
    width: 230,
  },
});