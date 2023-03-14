import { View, Text, Image, TextInput } from "react-native";
import { assets, COLORS, FONTS, SIZES } from "../constants";

const HomeHeader = ({ onSearch }) => {
  return (
    <View
      style={{
        backgroundColor: COLORS.primary,
        padding: SIZES.font,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignContent: "center",
        }}
      >
        <Image
          source={assets.logo}
          resizeMode="contain"
          style={{ width: 90, height: 25 }}
        />
        <View style={{ width: 45, height: 45 }}>
          <Image
            source={assets.person01}
            resizeMode="contain"
            style={{ width: "100%", height: "100%" }}
          />
          <Image
            source={assets.badge}
            resizeMode="contain"
            style={{
              position: "absolute",
              bottom: 0,
              right: 0,
              width: 15,
              height: 15,
            }}
          />
        </View>
      </View>
      <View
        style={{
          marginVertical: SIZES.font,
        }}
      >
        <Text
          style={{
            fontFamily: FONTS.regular,
            color: COLORS.white,
            fontSize: SIZES.small,
          }}
        >
          Hello, Elizabeth 👋
        </Text>
        <Text
          style={{
            fontFamily: FONTS.semiBold,
            color: COLORS.white,
            fontSize: SIZES.large,
          }}
        >
          Let's, find a masterpiece
        </Text>
      </View>
      <View
        style={{
          marginTop: SIZES.font,
          borderRadius: SIZES.extraLarge,
          backgroundColor: COLORS.gray,
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: SIZES.font,
          paddingVertical: SIZES.small - 2,
        }}
      >
        <Image
          source={assets.search}
          resizeMode="contain"
          style={{ width: 20, height: 20, marginRight: SIZES.base }}
        />
        <TextInput
          placeholder="Search NFTs"
          style={{ flex: 1 }}
          onChangeText={onSearch}
        />
      </View>
    </View>
  );
};

export default HomeHeader;
