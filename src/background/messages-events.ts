enum EventTypes {
  EdpuzzleToken = "edpuzzleToken",
}

export type IErrorResponse = {
  success: false;
  message: string;
};

export type ISuccessResponse = {
  success: true;
  data: any;
};

export type IResponse = IErrorResponse | ISuccessResponse;

const getEdpuzzleToken = async (
  request: any,
  sender: chrome.runtime.MessageSender,
  response: (response?: IResponse) => void
) => {
  const cookies = await chrome.cookies.getAll({
    url: "https://edpuzzle.com",
  });

  const tokens = cookies
    .map((cookie) => {
      if (cookie.name == "token") {
        return cookie.value;
      }
    })
    .filter((_) => _);

  if (tokens.length === 0) {
    response({
      success: false,
      message: "No tokens found. Try to log in on your edpuzzle account.",
    });
    return;
  }

  response({ success: true, data: tokens });
};

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  switch (request.type) {
    case EventTypes.EdpuzzleToken:
      getEdpuzzleToken(request, sender, sendResponse);
  }
  return true;
});
