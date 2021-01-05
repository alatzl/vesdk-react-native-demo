/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableHighlight,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {VESDK, Configuration, TintMode} from 'react-native-videoeditorsdk';

/**
 * Uncomment the following single line of code to unlock VideoEditor SDK automatically
 * for both platforms. Every platform requires a separate license file which must be
 * named `vesdk_license.ios.json` for the iOS license and `vesdk_license.android.json`
 * for the Android license file.
 */
// VESDK.unlockWithLicense(require('./vesdk_license'));

const App: () => React$Node = () => {
  const openEditor = () => {
    // Set up sample video
    let video = 'https://publish-cdn-qa.bnservers.com/7c519ea8-3de3-48f3-aab9-bd2519978805/sources/427bf2ca9b15f45103e5846c72c6815c8dc4838591d56991b55f3ca6a98e005c.mp4';
    // Set up configuration
    let configuration: Configuration = {
    "transform": {
      "allowFreeCrop": false,
      "items": [
        { "width": 9, "height": 16, "toggleable": false, "name": "customLabel" }
      ]
    },
    "forceCrop": true,
    "export": { "serialization": { "enabled": true, "exportType": "object" } }
  };


    VESDK.openEditor(video, configuration).then(
      (result) => {
        console.log(result);
      },
      (error) => {
        console.log(error);
      },
    );
  };
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>VideoEditor SDK</Text>
              <TouchableHighlight onPress={openEditor}>
                <Text style={styles.sectionDescription}>
                  Click here to <Text style={styles.highlight}>edit a sample video</Text>.
                </Text>
              </TouchableHighlight>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Step One</Text>
              <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>App.js</Text> to change this
                screen and then come back to see your edits.
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Debug</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
