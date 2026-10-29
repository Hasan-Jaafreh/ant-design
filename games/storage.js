// Best-score helpers. localStorage can be unavailable (private mode), so every call is guarded.
window.GameStore = {
  get: function (key, fallback) {
    try {
      var value = localStorage.getItem('games:' + key);
      return value === null ? fallback : JSON.parse(value);
    } catch (e) {
      return fallback;
    }
  },
  set: function (key, value) {
    try {
      localStorage.setItem('games:' + key, JSON.stringify(value));
    } catch (e) {
      // ignore
    }
  },
};
