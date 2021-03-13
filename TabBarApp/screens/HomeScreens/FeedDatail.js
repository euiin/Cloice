import _ from 'lodash';
import {useRoute, TabActions} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import React, {useCallback, useState} from 'react';
import InputSpinner from 'react-native-input-spinner';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  ScrollView,
  Pressable,
  TextInput,
  Alert,
} from 'react-native';

const aspectRatio = 640 / 480;

export default function FeedDatail() {
  const route = useRoute();
  const insets = useSafeAreaInsets();

  const item = route.params.item;

  return (
    <>
      <ScrollView
        style={[
          styles.container,
          {
            paddingBottom: insets.bottom,
            marginBottom: 20,
          },
        ]}>
        <ImageBackground
          source={{uri: _.get(route, 'imageUrl', '')}}
          resizeMode="cover"
          style={styles.mainImage}>
          <PublicText style={styles.productName}>
            {_.get(route, 'params.item.productName', '')}
          </PublicText>
          <PublicText style={styles.productPrice}>
            &#8361;{' '}
            {numeral(_.get(route, 'params.item.price', 0)).format('0,0')}
          </PublicText>
        </ImageBackground>
        <View style={styles.contentContainer}>
          <Row title="상품 등록일">
            <PublicText>
              {moment(_.get(route, 'params.item.createdAt', '')).format(
                'YYYY. MM. DD',
              )}
            </PublicText>
          </Row>

          <Row title="상품 상세 정보">
            <PublicText>
              {_.get(route, 'params.item.productDescription', '')}
            </PublicText>
          </Row>
          <Row title="색상">
            <ColorView size={5} color={_.get(route, 'params.item.color', '')} />
          </Row>
          <Row title="소재">
            <PublicText>
              {_.get(route, 'params.item.productMaterial', '')}
            </PublicText>
          </Row>
          <Row title="상품 종류">
            <PublicText>{_.get(route, 'params.item.product', '')}</PublicText>
          </Row>
          <Row title="수량">
            <InputSpinner
              max={10}
              min={1}
              step={1}
              skin="square"
              value={quantity}
              onChange={(num) => {
                setQuantity(num);
              }}
            />
          </Row>
          <Row title="총금액">
            <PublicText style={styles.totalPrice}>
              {' '}
              &#8361;{' '}
              {numeral(_.get(route, 'params.item.price', 0) * quantity).format(
                '0,0',
              )}
            </PublicText>
          </Row>
          <Row title="주소">
            <TextInput
              style={styles.textInput}
              placeholder="우편번호"
              placeholderTextColor="#333"
              value={zipCode}
              onFocus={onAddressSearch}
            />
            <TextInput
              style={styles.textInput}
              placeholder="주소"
              placeholderTextColor="#333"
              value={address}
              onFocus={onAddressSearch}
            />
            <TextInput
              style={styles.textInput}
              placeholder="상세주소"
              placeholderTextColor="#333"
              value={addressDetail}
              onChangeText={setAddressDetail}
            />
          </Row>
        </View>
      </ScrollView>
      <Pressable style={styles.orderBtn} onPress={onOrder}>
        <PublicText style={styles.orderBtnText}>주문 하기</PublicText>
      </Pressable>
    </>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingTop: 20,
    paddingRight: 20,
    paddingLeft: 20,
  },
  container: {
    flex: 1,
  },
  mainImage: {
    alignSelf: 'stretch',
    aspectRatio,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  row: {
    marginTop: 20,
  },
  orderBtn: {
    alignSelf: 'stretch',
    padding: 30,
    backgroundColor: '#B9D3DE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  orderBtnText: {
    fontSize: 30,
  },
  productName: {
    position: 'absolute',
    bottom: 50,
    right: 20,
    fontSize: 30,
    color: '#fff',
  },
  productPrice: {
    position: 'absolute',
    bottom: 10,
    right: 20,
    fontSize: 30,
    color: '#fff',
  },
  textInput: {
    height: 50,
    borderColor: 'gray',
    alignSelf: 'stretch',
    borderWidth: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 20,
  },
  totalPrice: {
    fontSize: 30,
  },
});
