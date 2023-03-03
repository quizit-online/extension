;(() => {
  if (document.querySelector('script[quizit]')) return

  const script = document.createElement('script')
  script.setAttribute('quizit', '')

  script.text = `
    const main = RegExp.prototype.test;
    RegExp.prototype.test = function (s) {
      const str = this.toString();
      if (str.includes("native code") && str.includes("function")) return true;
      return main.call(this, s);
    };
    document.hasFocus = () => true;
    const questionElements = document.querySelectorAll('.question_essence > p')
    if (!document.querySelectorAll('.quizit-p').length) {
      const info = document.createElement('p')
      info.textContent = "Click the question to copy it"
      info.style.fontSize = "10px"
      info.style.color = "#50C878"
      info.style.marginTop = "-10px"
      info.className = "quizit-p"
      
      if (questionElements.length)
        questionElements[0].parentNode.append(info)
    }
    let questionText = ''
    for (element of questionElements) {
      questionText += ' ' + element.textContent
    }
    for (element of questionElements) {
      element.style.cursor = 'pointer'
      element.addEventListener("click", () => {
        window.navigator.clipboard.writeText(questionText)
      })
    }
  `

  document.body.appendChild(script)
})()
