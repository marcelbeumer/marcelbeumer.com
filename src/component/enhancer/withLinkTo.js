// @flow
import React from 'react';
import Link from '../base/Link';

export default (href: string) => (Component: React.Element) =>
  (props: Object) => <Link to={href}><Component {...props} /></Link>;
