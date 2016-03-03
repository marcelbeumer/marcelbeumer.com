import StyleSheet from '../styles';
import theme from '../theme';

const websiteIconShared = {
  display: 'inline-block',
  position: 'relative',
  width: '35px',
  margin: '0 10px',
  [theme.media.fromDesktop]: {
    width: '48px',
    margin: '0 5px',
  },
};

const styles = StyleSheet.create({
  root: {
    margin: '0 auto',
    minWidth: '320px',
    minHeight: '100vh',
    width: '100%',
    color: theme.textColor,
    textAlign: 'center',
    paddingTop: '60px',
    fontFamily: theme.fontFamily,
    fontWeight: theme.fontWeight,
    fontSize: '12px',
    lineHeight: '16px',
    [theme.media.fromTablet]: {
      fontSize: '14px',
      lineHeight: '18px',
      paddingTop: '100px',
    },
    [theme.media.fromDesktop]: {
      fontSize: '16px',
      lineHeight: '20px',
      paddingTop: '160px',
    },
  },
  logoContainer: {
    display: 'inline-block',
    position: 'relative',
    width: '200px',
    [theme.media.fromTablet]: {
      width: '300px',
    },
    [theme.media.fromDesktop]: {
      width: '384px',
    },
  },
  siteLogo: {
    fontSize: 0,
    lineHeight: 0,
  },
  speechBubble: {
    width: '30%',
    position: 'absolute',
    top: 0,
    left: 0,
    transform: 'translate(-90%, -90%)',
    textAlign: 'center',
  },
  speechText: {
    position: 'absolute',
    display: 'block',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    textAlign: 'center',
    color: theme.inverseTextColor,
    fontSize: '15px',
    transform: 'translate(0, 23%)',
    [theme.media.fromTablet]: {
      fontSize: '20px',
      transform: 'translate(0, 33%)',
    },
    [theme.media.fromDesktop]: {
      fontSize: '24px',
      transform: 'translate(0, 33%)',
    },
  },
  iam: {
    margin: '10px 0 18px 0',
    fontSize: '15px',
    [theme.media.fromTablet]: {
      margin: '21px 0 32px 0',
      fontSize: '20px',
    },
    [theme.media.fromDesktop]: {
      margin: '30px 0 38px 0',
      fontSize: '24px',
    },
  },
  javaScriptIcon: {
    display: 'inline-block',
    margin: '0 5px',
    width: '50px',
    [theme.media.fromDesktop]: {
      width: '76px',
    },
  },
  reactIcon: {
    display: 'inline-block',
    margin: '0 5px',
    width: '55px',
    [theme.media.fromDesktop]: {
      width: '83px',
    },
  },
  widgets: {
    margin: '0 auto',
    padding: '65px 0 20px',
    width: '170px',
    [theme.media.fromTablet]: {
      width: '270px',
    },
    [theme.media.fromDesktop]: {
      width: '354px',
    },
  },
  websites: {
    padding: '20px 0',
    marginTop: '50px',
    [theme.media.fromDesktop]: {
      marginTop: '40px',
    },
  },
  githubIcon: websiteIconShared,
  twitterIcon: Object.assign({}, websiteIconShared, {
    position: 'relative',
    top: '-2px',
  }),
  linkedinIcon: Object.assign({}, websiteIconShared, {
    top: '2px',
  }),
  controls: {
    display: 'flex',
    padding: '120px 10% 80px 10%',
  },
  control: {
    flex: '1',
    margin: '0 25px',
  },
  controlsSpacer: {
    height: '25px',
  },
  contact: {
    padding: '0 10px',
  },
  mailto: {
    display: 'block',
    textAlign: 'center',
    color: theme.textColor,
    textDecoration: 'none',
    [':hover']: {
      textDecoration: 'underline',
    },
  },
});

export default styles;