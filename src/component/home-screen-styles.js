import StyleSheet from './styles';
import theme from './theme';

const styles = StyleSheet.create({
  root: {
    margin: '0 auto',
    minWidth: '320px',
    minHeight: '100vh',
    width: '100%',
    color: theme.textColor,
    textAlign: 'center',
    paddingTop: '60px',
    fontSize: '13px',
    lineHeight: '18px',
    [theme.media.fromDesktop]: {
      paddingTop: '160px',
      width: '960px',
    },
  },
  logoContainer: {
    display: 'inline-block',
    position: 'relative',
    width: '200px',
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
    fontSize: '1em',
    transform: 'translate(0, 22%)',
    [theme.media.fromDesktop]: {
      fontSize: '16px',
      transform: 'translate(0, 30%)',
    },
  },
  iam: {
    margin: '10px 0 18px 0',
    fontSize: '15px',
    [theme.media.fromDesktop]: {
      margin: '21px 0 32px 0',
      fontSize: '16px',
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
  websites: {
    padding: '20px 0',
    marginTop: '50px',
    [theme.media.fromDesktop]: {
      marginTop: '100px',
    },
  },
  githubIcon: {
    display: 'inline-block',
    width: '35px',
    margin: '0 10px',
    [theme.media.fromDesktop]: {
      width: '48px',
      margin: '0 5px',
    },
  },
  twitterIcon: {
    display: 'inline-block',
    position: 'relative',
    top: '-2px',
    width: '35px',
    margin: '0 10px',
    [theme.media.fromDesktop]: {
      width: '48px',
      margin: '0 5px',
    },
  },
  linkedinIcon: {
    display: 'inline-block',
    position: 'relative',
    top: '2px',
    width: '35px',
    margin: '0 10px',
    [theme.media.fromDesktop]: {
      width: '48px',
      margin: '0 5px',
    },
  },
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
