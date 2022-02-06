if (document.querySelector(".root-component")) {
  const { game, user } = document.querySelector(".root-component").__vue__.$store.state;
  const { player, data } = game;

  if (player.hasJoinedTheGame) {
    const dataString = window.btoa(
      unescape(
        encodeURIComponent(
          JSON.stringify({ playerId: player.playerId, mongoId: user.profile.mongoId || null, roomHash: data.roomHash })
        )
      )
    );
    window.open("https://quizit.online/services/quizizz/answers?data=" + dataString);
  }
}
