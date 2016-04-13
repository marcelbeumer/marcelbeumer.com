import React from 'react';
import pureRender from 'pure-render-decorator';
import SiteLogo from '../site-logo';
import SpeechBubble from '../speech-bubble';
import JavaScriptIcon from '../javascript-icon';
import ReactIcon from '../react-icon';
import GithubIcon from '../github-icon';
import TwitterIcon from '../twitter-icon';
import LinkedinIcon from '../linkedin-icon';
import styles from './styles';

const { object, string } = React.PropTypes;

@pureRender
export default class HomeScreen extends React.Component {

  static propTypes = {
    actions: object,
    demoPageUrl: string,
    githubUrl: string,
    twitterUrl: string,
    linkedinUrl: string,
  }

  render() {
    const { actions, demoPageUrl, githubUrl, twitterUrl, linkedinUrl } = this.props;

    return (
      <div className={styles.root}>
        <div className={styles.foreground}>
          <div className={styles.logoContainer}>
            <div className={styles.speechBubble}>
              <SpeechBubble />
              <span className={styles.speechText}>ik ben</span>
            </div>
            <div className={styles.siteLogo}>
              <SiteLogo />
              Marcel Beumer
            </div>
          </div>
          <div className={styles.iam}>
            I'm a freelancer and I love
          </div>
          <a className={styles.javaScriptIcon} href={demoPageUrl} alt="demo"
            onClick={actions.trackLink}>
            <JavaScriptIcon />
          </a>
          <a className={styles.reactIcon} href={demoPageUrl} alt="demo"
            onClick={actions.trackLink}>
            <ReactIcon />
          </a>

          <div className={styles.websites}>
            <a className={styles.githubIcon} href={githubUrl} alt="Github"
              onClick={actions.trackLink}>
              <GithubIcon />
            </a>

            <a className={styles.twitterIcon} href={twitterUrl} alt="Twitter"
              onClick={actions.trackLink}>
              <TwitterIcon />
            </a>

            <a className={styles.linkedinIcon} href={linkedinUrl} alt="LinkedIn"
              onClick={actions.trackLink}>
              <LinkedinIcon />
            </a>
          </div>

          <div className={styles.contact}>
            <a className={styles.mailto}
              href="mailto:marcel@marcelbeumer.com">
              marcel@marcelbeumer.com
            </a>
          </div>
        </div>
      </div>
    );
  }
}
