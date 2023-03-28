import React from 'react'
import { View, Text, Image } from 'react-native'
import { checkImageURL } from '../../../utils'

import styles from './company.style';

import { icons } from '../../../constants';

const Company = ({companyLogo, jobTitle, companyName, location}) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image
          source={{
            uri: checkImageURL(companyLogo) 
            ? companyLogo 
            : "https://rapidapi.com/cdn/images?url=https://rapidapi-prod-apis.s3.amazonaws.com/a99a424f-cd68-4345-932c-46941476bc89.png"
          }}
          style={styles.logoImage}
        />
      </View>

      <View style={styles.jobTitleBox}>
        <Text style={styles.jobTitle}>{jobTitle}</Text>
      </View>

      <View style={styles.companyInfoBox}>
        <Text style={styles.companyName}>{companyName} / </Text>
        <View style={styles.locationBox}> 
          <Image
            source={icons.location}
            resizeMode="contain"
            style={styles.locationImage}
          />
          <Text style={styles.locationName}>{location}</Text>
        </View>
      </View>
    </View>
  )
}

export default Company