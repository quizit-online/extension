(() => {
  const { userProfile } = JSON.parse(localStorage.getItem("previousContext"));

  fetch("https://quizizz.com/_api/main/v4/students/running")
    .then((res) => res.json())
    .then(({ data }) =>
      chrome.runtime.sendMessage({
        type: "quizizz",
        dataString: btoa(
          unescape(
            encodeURIComponent(
              JSON.stringify({
                roomHash: data.items[0]._id,
                playerId: data.items[0].attempts[0].playerId,
                mongoId: userProfile.mongoId,
              })
            )
          )
        ),
      })
    );
})();
