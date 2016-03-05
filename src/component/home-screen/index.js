import React from 'react';
import cx from 'classnames';
import pureRender from 'pure-render-decorator';
import SiteLogo from '../site-logo';
import SpeechBubble from '../speech-bubble';
import JavaScriptIcon from '../javascript-icon';
import ReactIcon from '../react-icon';
import GithubIcon from '../github-icon';
import TwitterIcon from '../twitter-icon';
import LinkedinIcon from '../linkedin-icon';
import HomeScreenWidgets from './widgets';
import Button from '../button';
import styles from './styles';
import { listType } from './types';

const { object, bool } = React.PropTypes;

@pureRender
export default class HomeScreen extends React.Component {

  static propTypes = {
    actions: object,
    showBackground: bool,
    list: listType,
  }

  render() {
    const { showBackground, list, actions } = this.props;

    return (
      <div className={styles.root}>
        <div className={cx(styles.foreground, { [styles.foregroundOpen]: showBackground })}>
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

          <Button onClick={actions.showBackground}>Explain</Button>

          <div className={styles.websites}>
            <a className={styles.githubIcon}
              href="https://github.com/marcelbeumer/marcelbeumer.com"
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
        <div className={cx(styles.background, { [styles.backgroundShown]: showBackground })}>
          <div className={styles.backgroundControls}>
            <Button type="inverse" onClick={actions.hideBackground}>Back</Button>
          </div>
          <div className={styles.backgroundContent}>
            <p>
              <strong>Hello.</strong> Just drag and scroll around with the widgets.
              It's not supposed to make sense: is purely a tech demo wiring widgets together.
            </p>

            <p>
              What you see is backed by an efficient frontend
              architecture based on React and Flux/Redux that has
              no problem scaling up for very big and complex
              applications. The page you are looking at is pre-rendered
              by the server.
            </p>

            <p>
              Widgets use relative (em/vw/vh) units while rendering and pixel values in
              the stylesheet so it's possible to use media queries <strong>and</strong> do
              full server pre-rendering.
              Widget event handlers convert relative values to pixel values.
              Other tricks include pixel perfect scrollbar hiding on both the client and server,
              drag and support using react-draggable and JS-based
              stylesheet generation using stilr.
            </p>

            <p>
              Feel free to peek at
              the <a target="_blank" href="https://github.com/marcelbeumer/marcelbeumer.com">
                source in Github
              </a>. This website is based
              on <a target="_blank" href="https://github.com/marcelbeumer/react-blueprint">
                @marcelbeumer/react-blueprint.
              </a>
            </p>

          </div>
        </div>
      </div>
    );
  }
}
