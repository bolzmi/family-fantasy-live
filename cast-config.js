// Google Cast Custom Web Receiver application ID.
window.BOLZ_CAST_APP_ID = '86587653';

// IMPORTANT: Google requires the Web Sender callback to exist BEFORE the
// Cast Sender SDK is loaded. index.html loads this file immediately before
// cast_sender.js, so initialize the receiver filter here at SDK startup.
window.__onGCastApiAvailable = function(isAvailable) {
  if (!isAvailable) return;

  const context = cast.framework.CastContext.getInstance();
  const options = new cast.framework.CastOptions();
  options.receiverApplicationId = window.BOLZ_CAST_APP_ID;
  options.autoJoinPolicy = chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED;
  options.androidReceiverCompatible = true;
  context.setOptions(options);

  const castButton = document.getElementById('castButton');
  if (castButton) castButton.style.display = 'block';
};
