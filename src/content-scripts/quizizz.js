(function () {
  const {
    game: { player, data },
    user,
  } = getCurrentData();

  if (!player.hasJoinedTheGame) {
    alert("Can't current game data. Make sure you joined the game");
    return;
  }

  const dataString = window.btoa(
    unescape(
      encodeURIComponent(
        JSON.stringify({
          playerId: player.playerId,
          mongoId: user.profile.mongoId || null,
          roomHash: data.roomHash,
        })
      )
    )
  );

  window.open(
    "https://quizit.online/services/quizizz/answers?data=" + dataString
  );
})();

function getCurrentData() {
  const root = document.querySelector("#root");
  if (!root) {
    alert("Can't current game data. Make sure you joined the game");
    return;
  }

  const { user, game } = root.__vue_app__.config.globalProperties.$store.state;

  return {
    game,
    user,
  };
}
