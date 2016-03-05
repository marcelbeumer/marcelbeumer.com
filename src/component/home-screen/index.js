import React from 'react';
import pureRender from 'pure-render-decorator';
import SiteLogo from '../site-logo';
import SpeechBubble from '../speech-bubble';
import JavaScriptIcon from '../javascript-icon';
import ReactIcon from '../react-icon';
import GithubIcon from '../github-icon';
import TwitterIcon from '../twitter-icon';
import LinkedinIcon from '../linkedin-icon';
import Button from '../button';
import styles from './styles';

const { object } = React.PropTypes;

@pureRender
export default class HomeScreen extends React.Component {

  static propTypes = {
    actions: object,
  }

  render() {
    const { actions } = this.props;

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
          <a className={styles.javaScriptIcon}
            href="https://developer.mozilla.org/docs/Web/JavaScript"
            alt="JavaScript">
            <JavaScriptIcon />
          </a>
          <a className={styles.reactIcon}
            href="https://facebook.github.io/react"
            alt="React">
            <ReactIcon />
          </a>

          <div className={styles.widgets}>
            <Button onClick={actions.gotoDemoPage}><strong>Check demo</strong></Button>
          </div>


          <div className={styles.websites}>
            <a className={styles.githubIcon}
              href="https://github.com/marcelbeumer/marcelbeumer.com"
              alt="Github">
              <GithubIcon />
            </a>

            <a className={styles.twitterIcon}
              href="https://twitter.com/marcelbeumer"
              alt="Twitter">
              <TwitterIcon />
            </a>

            <a className={styles.linkedinIcon}
              href="https://linkedin.com/in/marcelbeumer"
              alt="LinkedIn">
              <LinkedinIcon />
            </a>
          </div>

          <div className={styles.contact}>
            I’m based in Munich and looking for projects in Munich and Amsterdam.
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
