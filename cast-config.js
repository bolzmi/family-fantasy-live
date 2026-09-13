// Google Cast Custom Web Receiver application ID.
window.BOLZ_CAST_APP_ID = '86587653';

// Google requires this callback to exist before cast_sender.js loads.
// Keep the Web Receiver configuration minimal: app ID + join policy.
window.__onGCastApiAvailable = function(isAvailable) {
  if (!isAvailable) return;

  cast.framework.CastContext.getInstance().setOptions({
    receiverApplicationId: window.BOLZ_CAST_APP_ID,
    autoJoinPolicy: chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED
  });
};

// index.html originally hid the launcher with display:none and relied on a
// later callback to reveal it. Once initialization was moved into this file,
// that callback could fire while <head> was still parsing, before the launcher
// existed. Override that old rule here so the framework button is visible.
(function makeCastButtonDistinct() {
  const style = document.createElement('style');
  style.textContent = `
    google-cast-launcher#castButton {
      display: inline-block !important;
      width: 2.75vw;
      height: 2.75vw;
      min-width: 42px;
      min-height: 42px;
      padding: 5px;
      border: 2px solid #fff3c4;
      border-radius: 9px;
      background: #ffcc4d;
      box-shadow: 0 0 0 2px rgba(255,204,77,.22), 0 4px 12px rgba(0,0,0,.28);
      --disconnected-color: #07111d;
      --connected-color: #07111d;
    }
    google-cast-launcher#castButton:hover {
      background: #ffe08a;
    }
    body.receiver google-cast-launcher#castButton {
      display: none !important;
    }
  `;
  document.head.appendChild(style);
})();
