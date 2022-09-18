export const Config = (token: string | any = null, img: boolean = false) => {
  let getConfig;
  if (token) {
    if (img) {
      getConfig = {
        headers: {
          "Accept": "application/json",
          "Content-Type": "multipart/form-data; ",
          Authorization: token,
        },
      };
    } else {
      getConfig = {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      };
    }

  } else {
    if (img) {
      getConfig = {
        headers: {
          "Accept": "application/json",
          "Content-Type": "multipart/form-data; ",
        },
      };
    } else {
      getConfig = {
        headers: {
          "Content-Type": "application/json",
        },
      };
    }


  }
  return getConfig;
};

export const imageUploadConfig = {
  headers: {
    "Accept": "application/json",
    "Content-Type": "multipart/form-data; ",
  },
};

export const URL = "http://52.255.49.203/api/v1";
