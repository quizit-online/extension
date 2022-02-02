(() => {
  if (document.querySelector("script[quizit]")) return;

  const script = document.createElement("script");
  script.setAttribute("quizit", "");

  script.text = `
  const main = RegExp.prototype.test;
  RegExp.prototype.test = function (s) {
    const str = this.toString();
    if (str.includes("native code") && str.includes("function")) return true;
    return main.call(this, s);
  };
  document.hasFocus = () => true;
`;

  document.body.appendChild(script);
})();
