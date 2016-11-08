// @flow
import React from 'react';
import StyleSheet from '../styles';
import withLinkTo from '../enhancer/withLinkTo';
import SiteLogo from '../base/SiteLogo';
import MediumIcon from '../base/MediumIcon';
import GithubIcon from '../base/GithubIcon';
import TwitterIcon from '../base/TwitterIcon';
import LinkedInIcon from '../base/LinkedInIcon';
import Link from '../base/Link';
import theme from '../theme';

export const styles = StyleSheet.create({
  root: {
    backgroundColor: theme.backgroundColor,
  },
});

const MediumLink = withLinkTo('https://medium.com/@marcelbeumer')(MediumIcon);
const GithubLink = withLinkTo('https://github.com/marcelbeumer')(GithubIcon);
const TwitterLink = withLinkTo('https://twitter.com/marcelbeumer')(TwitterIcon);
const LinkedInLink = withLinkTo('https://linkedin.com/in/marcelbeumer')(LinkedInIcon);

const App = () => (
  <div className={styles.root}>
    <SiteLogo color={theme.foregroundColor} />
    <p className={styles.heroText}>
      I love JavaScript and React. I make apps, write blog posts and do freelance gigs.
    </p>
    <div className={styles.icons}>
      <MediumLink color={theme.foregroundColor} />
      <GithubLink color={theme.foregroundColor} />
      <TwitterLink color={theme.foregroundColor} />
      <LinkedInLink color={theme.foregroundColor} backgroundColor={theme.backgroundColor} />
    </div>
    <p className={styles.footerText}>
      <Link to="mailto:marcel@marcelbeumer.com">marcel@marcelbeumer.com</Link>
    </p>
  </div>
);

export default App;
