import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  ScrollView,
  Text,
  View,
  Image,
  Dimensions,
  TouchableHighlight,
  Button,
} from "react-native";
import styles from "./styles";
import Carousel, { Pagination } from "react-native-snap-carousel";
import {
  getIngredientName,
  getCategoryName,
  getCategoryById,
} from "../../data/MockDataAPI";
import BackButton from "../../components/BackButton/BackButton";
import ViewIngredientsButton from "../../components/ViewIngredientsButton/ViewIngredientsButton";
import { Audio } from "expo-av";
import Ionicons from '@expo/vector-icons/Ionicons';

const { width: viewportWidth } = Dimensions.get("window");

export default function RecipeScreen(props) {
  const { navigation, route } = props;

  const [sound, setSound] = useState()

  async function playSoundOne() {
    const{sound} = await Audio.Sound.createAsync(require('../../../assets/audio/meditExapmple.mp3'))
    setSound(sound);
    await sound.playAsync();
  }

  async function playSoundTwo() {
    const{sound} = await Audio.Sound.createAsync(require('../../../assets/audio/diet_fifth.mp3'))
    setSound(sound);
    await sound.playAsync();
  }

  async function playSoundThree() {
    const{sound} = await Audio.Sound.createAsync(require('../../../assets/audio/diet_first.mp3'))
    setSound(sound);
    await sound.playAsync();
  }

  async function playSoundFour() {
    const{sound} = await Audio.Sound.createAsync(require('../../../assets/audio/diet_fourth.mp3'))
    setSound(sound);
    await sound.playAsync();
  }

  async function playSoundFive() {
    const{sound} = await Audio.Sound.createAsync(require('../../../assets/audio/diet_second.mp3'))
    setSound(sound);
    await sound.playAsync();
  }

  async function playSoundSix() {
    const{sound} = await Audio.Sound.createAsync(require('../../../assets/audio/diet_sixth.mp3'))
    setSound(sound);
    await sound.playAsync();
  }

  async function playSoundSeven() {
    const{sound} = await Audio.Sound.createAsync(require('../../../assets/audio/diet_third.mp3'))
    setSound(sound);
    await sound.playAsync();
  }

  async function playSoundEight() {
    const{sound} = await Audio.Sound.createAsync(require('../../../assets/audio/meditExapmple.mp3'))
    setSound(sound);
    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
        sound.unloadAsync();
      }
      : undefined;
  }, [sound])

  const item = route.params?.item;
  const category = getCategoryById(item.categoryId);
  const title = getCategoryName(category.id);

  const [activeSlide, setActiveSlide] = useState(0);

  const slider1Ref = useRef();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTransparent: "true",
      headerLeft: () => (
        <BackButton
          onPress={() => {
            navigation.goBack();
          }}
        />
      ),
      headerRight: () => <View />,
    });
  }, []);

  const renderImage = ({ item }) => (
    <TouchableHighlight underlayColor='transparent'>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: item }} />
      </View>
    </TouchableHighlight>
  );

  const onPressIngredient = (item) => {
    var name = getIngredientName(item);
    let ingredient = item;
    navigation.navigate("Ingredient", { ingredient, name });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.carouselContainer}>
        <View style={styles.carousel}>
          <Carousel
            ref={slider1Ref}
            data={item.photosArray}
            renderItem={renderImage}
            sliderWidth={viewportWidth}
            itemWidth={viewportWidth}
            inactiveSlideScale={1}
            inactiveSlideOpacity={1}
            firstItem={0}
            loop={false}
            autoplay={false}
            autoplayDelay={500}
            autoplayInterval={3000}
            onSnapToItem={(index) => setActiveSlide(0)}
          />
          <Pagination
            dotsLength={item.photosArray.length}
            activeDotIndex={activeSlide}
            containerStyle={styles.paginationContainer}
            dotColor="rgba(255, 255, 255, 0.92)"
            dotStyle={styles.paginationDot}
            inactiveDotColor="white"
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
            carouselRef={slider1Ref.current}
            tappableDots={!!slider1Ref.current}
          />
        </View>
      </View>
      <View style={styles.infoRecipeContainer}>
        <Text style={styles.infoRecipeName}>{item.title}</Text>
        <View style={styles.infoContainer}>
          <TouchableHighlight
            underlayColor='transparent'
            onPress={() =>
              navigation.navigate("RecipesList", { category, title })
            }
          >
            <Text style={styles.category}>
              {getCategoryName(item.categoryId).toUpperCase()}
            </Text>
          </TouchableHighlight>
        </View>

        <View style={styles.infoContainer}>
          <Image
            style={styles.infoPhoto}
            source={require("../../../assets/icons/time.png")}
          />
          <Text style={styles.infoRecipe}>{item.time} минут </Text>
        </View>


        <View style={styles.infoContainer}>
          <Text style={styles.infoDescriptionRecipe}>{item.description}</Text>
        </View>


        <View style={styles.audio}>
          <View style={styles.lineView}>
            <Ionicons name="play-circle" size={45} color="#A4C4E3" onPress={playSoundOne}/>
            <Text style={{
              fontSize: 20,
            }}>Направленная медитация</Text>
          </View>

          <View style={styles.lineView}>
            <Ionicons name="play-circle" size={45} color="#A4C4E3" onPress={playSoundTwo}/>
            <Text style={{
              fontSize: 20,
            }}>Медитация Випассана</Text>
          </View>

          <View style={styles.lineView}>
            <Ionicons name="play-circle" size={45} color="#A4C4E3" onPress={playSoundThree}/>
            <Text style={{
              fontSize: 20,
            }}>Медитация Шаматха</Text>
          </View>

          <View style={styles.lineView}>
            <Ionicons name="play-circle" size={45} color="#A4C4E3" onPress={playSoundFour}/>
            <Text style={{
              fontSize: 20,
            }}>Трансцендентальная медитация</Text>
          </View>
          
          <View style={styles.lineView}>
            <Ionicons name="play-circle" size={45} color="#A4C4E3" onPress={playSoundFive}/>
            <Text style={{
              fontSize: 20,
            }}>Медитация на чакры</Text>
          </View>

          <View style={styles.lineView}>
            <Ionicons name="play-circle" size={45} color="#A4C4E3" onPress={playSoundSix}/>
            <Text style={{
              fontSize: 20,
            }}>Медитация в йоге</Text>
          </View>

          <View style={styles.lineView}>
            <Ionicons name="play-circle" size={45} color="#A4C4E3" onPress={playSoundSeven}/>
            <Text style={{
              fontSize: 20,
            }}>Дзен-медитация</Text>
          </View>
          
          <View style={styles.lineView}>
            <Ionicons name="play-circle" size={45} color="#A4C4E3" onPress={playSoundEight}/>
            <Text style={{
              fontSize: 20,
            }}>Дыхательные упражнения и медитация</Text>
          </View>
          
        </View>

        {/* <View style={styles.infoContainer}>
          <ViewIngredientsButton
            onPress={() => {
              let ingredients = item.ingredients;
              let title = "Ingredients for " + item.title;
              navigation.navigate("IngredientsDetails", { ingredients, title });
            }}
          />
        </View> */}
        
      </View>
    </ScrollView>
  );
}
