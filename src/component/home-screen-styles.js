import StyleSheet from './styles';
import theme from './theme';

const styles = StyleSheet.create({
  root: {
    margin: '0 auto',
    width: '960px',
    minHeight: '100vh',
    color: theme.textColor,
    textAlign: 'center',
    paddingTop: '160px',
  },
  logoContainer: {
    display: 'inline-block',
    position: 'relative',
    width: '40%',
  },
  siteLogo: {
    fontSize: 0,
    lineHeight: 0,
  },
  speechBubble: {
    width: '35%',
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
    fontSize: '1.25rem',
    textAlign: 'center',
    transform: 'translate(0, 30%)',
    color: theme.inverseTextColor,
  },
  iam: {
    margin: '1.25rem 0',
    fontSize: '1.25rem',
  },
  javaScriptIcon: {
    display: 'inline-block',
    width: '9%',
    margin: '0 0.2rem',
  },
  reactIcon: {
    display: 'inline-block',
    width: '10%',
    margin: '0 0.2rem',
  },
  websites: {
    padding: '1.25rem 0',
  },
  githubIcon: {
    display: 'inline-block',
    width: '7%',
    margin: '0 0.5rem',
  },
  twitterIcon: {
    display: 'inline-block',
    position: 'relative',
    top: '-2px',
    width: '7%',
    margin: '0 0.5rem',
  },
  linkedinIcon: {
    display: 'inline-block',
    position: 'relative',
    top: '2px',
    width: '7%',
    margin: '0 0.5rem',
  },
  controls: {
    display: 'flex',
    padding: '100px 20%',
  },
  control: {
    flex: '1',
    margin: '0 25px',
  },
  controlsSpacer: {
    height: '25px',
  },
  contact: {
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
