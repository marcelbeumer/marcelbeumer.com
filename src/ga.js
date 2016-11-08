/* eslint-disable */
module.exports = function(gaTrackingId) {
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
  ga('create', gaTrackingId, 'auto');
  ga('send', 'pageview');
};

module.exports.trackEvent = function(category, action, label, value) {
  const ga = global.ga;
  if (ga) ga('send', 'event', category, action, label, value);
}
