function init() {
  const gameData = getCurrentData()
  if (!gameData) {
    return
  }

  const {
    game: { player, data },
    user,
  } = gameData

  if (!player.hasJoinedTheGame) {
    alert("Can't get current game data. Make sure you joined the game")
    return
  }

  window.open(`https://quizit.online/services/quizizz/answers/${data.roomHash}`)
}

function getCurrentData() {
  const root = document.querySelector('#root')
  if (!root) {
    alert("Can't get current game data. Make sure you joined the game")
    return
  }

  // @ts-ignore
  const { user, game } = root.__vue_app__.config.globalProperties.$store.state

  return {
    game,
    user,
  }
}

;(() => init())()
