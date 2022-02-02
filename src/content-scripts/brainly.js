Object.keys(localStorage).forEach((key) => {
  if (key.startsWith("flexible-funnel")) {
    localStorage.removeItem(key);
  }
});
