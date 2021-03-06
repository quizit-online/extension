function init() {
  const {
    game: { player, data },
    user,
  } = getCurrentData();

  if (!player.hasJoinedTheGame) {
    alert("Can't get current game data. Make sure you joined the game");
    return;
  }

  window.open(
    `https://quizit.online/services/quizizz/answers?playerId=${player.playerId}&game=${data.roomHash}&mongoId=${user.profile.mongoId}`
  );
}

function getCurrentData() {
  const root = document.querySelector("#root");
  if (!root) {
    alert("Can't get current game data. Make sure you joined the game");
    return;
  }

  const { user, game } = root.__vue_app__.config.globalProperties.$store.state;

  return {
    game,
    user,
  };
}

(() => init())();
