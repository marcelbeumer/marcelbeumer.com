import StyleSheet from './styles';
import theme from './theme';

const styles = StyleSheet.create({
  root: {
    margin: '0 auto',
    width: '960px',
    minHeight: '100vh',
    color: theme.textColor,
    textAlign: 'center',
    marginTop: '160px',
  },
  logoContainer: {
    display: 'inline-block',
    position: 'relative',
    width: '40%',
  },
  siteLogo: {
    fontSize: 0,
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
    margin: '1.25em 0',
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
});

export default styles;
