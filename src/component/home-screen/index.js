import React from 'react';
import pureRender from 'pure-render-decorator';
import refs from '../refs-decorator';
import ImmutablePropTypes from 'react-immutable-proptypes';
import SiteLogo from '../site-logo';
import SpeechBubble from '../speech-bubble';
import JavaScriptIcon from '../javascript-icon';
import ReactIcon from '../react-icon';
import GithubIcon from '../github-icon';
import TwitterIcon from '../twitter-icon';
import LinkedinIcon from '../linkedin-icon';
import HomeScreenWidgets from './widgets';
import styles from './styles';

const { number, object } = React.PropTypes;
const { recordOf } = ImmutablePropTypes;

@refs
@pureRender
export default class HomeScreen extends React.Component {

  static propTypes = {
    actions: object,
    list: recordOf({
      length: number,
      start: number,
      end: number,
    }),
  }

  render() {
    const { list, actions } = this.props;

    return (
      <div className={styles.root}>
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
          alt="JavaScript"
          target="_blank">
          <JavaScriptIcon />
        </a>
        <a className={styles.reactIcon}
          href="https://facebook.github.io/react"
          alt="React"
          target="_blank">
          <ReactIcon />
        </a>

        <div className={styles.widgets}>
          <HomeScreenWidgets list={list} actions={actions} />
        </div>

        <div className={styles.websites}>
          <a className={styles.githubIcon}
            href="https://github.com/marcelbeumer"
            alt="Github"
            target="_blank">
            <GithubIcon />
          </a>

          <a className={styles.twitterIcon}
            href="https://twitter.com/marcelbeumer"
            alt="Twitter"
            target="_blank">
            <TwitterIcon />
          </a>

          <a className={styles.linkedinIcon}
            href="https://linkedin.com/in/marcelbeumer"
            alt="LinkedIn"
            target="_blank">
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
    );
  }
}
