// @flow
import React from 'react';
import StyleSheet, {px} from '../styles';
import SiteLogo from '../base/SiteLogo';
import MediumIcon from '../base/MediumIcon';
import GithubIcon from '../base/GithubIcon';
import TwitterIcon from '../base/TwitterIcon';
import LinkedInIcon from '../base/LinkedInIcon';
import Link from '../base/Link';
import theme from '../theme';

export const styles = StyleSheet.create({
  root: {
    color: theme.textColor,
    fontSize: px(14),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'space-around',
    minWidth: px(320),
    flex: 1,

    [theme.media.midSize]: {
      fontSize: px(16),
    },
  },
  content: {
    marginTop: px(60),
    maxWidth: px(500),
    [theme.media.midSize]: {
      marginTop: px(100),
    },
    [theme.media.fullSize]: {
      marginTop: px(200),
    },
  },
  logo: {
    margin: '0 auto',
    width: px(225),
    [theme.media.midSize]: {
      width: px(350),
    },
  },
  heroText: {
    fontSize: px(18),
    margin: `${px(theme.gutter * 4)} ${px(theme.gutter)}`,

    [theme.media.midSize]: {
      fontSize: px(24),
      margin: `${px(theme.gutter * 6)} ${px(theme.gutter)}`,
      lineHeight: '1.25em',
    },
  },
  footerText: {
    margin: `${px(theme.gutter)} 0`,
    [theme.media.midSize]: {
      margin: `${px(theme.gutter * 2)} 0`,
    },
  },
  icons: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: px(38),
    margin: `0 ${px(theme.gutter / 2)}`,

    [theme.media.midSize]: {
      width: px(58),
      margin: `0 ${px(theme.gutter)}`,
    },
  },
});

const App = () => (
  <div className={styles.root}>
    <div className={styles.content}>
      <div className={styles.logo}>
        <SiteLogo />
      </div>
      <p className={styles.heroText}>
        I make apps and do freelance gigs.<br />
        I love JavaScript and React.
      </p>
      <div className={styles.icons}>
        <Link href="https://medium.com/@marcelbeumer" className={styles.icon}>
          <MediumIcon />
        </Link>
        <Link href="https://medium.com/@marcelbeumer" className={styles.icon}>
          <GithubIcon />
        </Link>
        <Link href="https://medium.com/@marcelbeumer" className={styles.icon}>
          <TwitterIcon />
        </Link>
        <Link href="https://medium.com/@marcelbeumer" className={styles.icon}>
          <LinkedInIcon />
        </Link>
      </div>
      <p className={styles.footerText}>
        <Link href="mailto:marcel@marcelbeumer.com">marcel@marcelbeumer.com</Link>
      </p>
    </div>
  </div>
);

export default App;
