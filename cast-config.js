// Google Cast Custom Web Receiver application ID.
window.BOLZ_CAST_APP_ID = '86587653';

// Google TV / Android TV receivers require the Web Sender to explicitly
// declare Android receiver compatibility. The main page initializes Cast
// normally; this applies the compatibility flag as soon as CAF is ready.
(function enableAndroidTvDiscovery() {
  let attempts = 0;
  const timer = setInterval(() => {
    attempts += 1;
    if (window.cast?.framework?.CastContext && window.chrome?.cast) {
      const context = cast.framework.CastContext.getInstance();
      context.setOptions({
        receiverApplicationId: window.BOLZ_CAST_APP_ID,
        autoJoinPolicy: chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED,
        androidReceiverCompatible: true
      });
      clearInterval(timer);
    } else if (attempts >= 100) {
      clearInterval(timer);
    }
  }, 100);
})();
