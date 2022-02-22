import React from 'react';
import { View, Text } from 'react-native';
import CustomButton from '../CustomButton';

import Amplify, { Auth, Hub } from 'aws-amplify';
import { withOAuth } from 'aws-amplify-react-native';
import awsconfig from './../../aws-exports';

const SocialSignInButtons = (props) => {
  const {
    oAuthUser,
    oAuthError,
    hostedUISignIn,
    facebookSignIn,
    googleSignIn,
    amazonSignIn,
    customProviderSignIn,
    signOut,
  } = props;
  const onSignInFacebook = () => {
    console.warn('onSignInFacebook');
  };

  const onSignInGoogle = () => {
    console.warn('onSignInGoogle');
  };

  const onSignInApple = () => {
    console.warn('onSignInApple');
  };

  return (
    <>
      <CustomButton
        text='Sign In with Facebook'
        onPress={onSignInFacebook}
        bgColor='#E7EAF4'
        fgColor='#4765A9'
      />
      <CustomButton
        text='Sign In with Google'
        onPress={googleSignIn}
        bgColor='#FAE9EA'
        fgColor='#DD4D44'
      />
      <CustomButton
        text='Sign In with Apple'
        onPress={onSignInApple}
        bgColor='#e3e3e3'
        fgColor='#363636'
      />
    </>
  );
};

export default withOAuth(SocialSignInButtons);
