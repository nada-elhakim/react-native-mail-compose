import {NativeModules} from 'react-native';

const {RNMailCompose} = NativeModules;

export default {
  canSendMail() {
    return RNMailCompose.canSendMail();
  },

  send(data) {
    return RNMailCompose.send(data);
  },
};
