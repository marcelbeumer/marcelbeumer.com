import { trackEvent } from '../ga';

export const trackLink = e => {
  const el = e.currentTarget;
  const href = el.href;
  const alt = el.getAttribute('alt') || href;
  trackEvent('Links', 'Click', alt, href);
};
