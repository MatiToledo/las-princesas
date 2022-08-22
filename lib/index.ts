export const contentFetcher = async (content: string) => {
  const url = `https://cdn.contentful.com/spaces/aly420otq74v/environments/master/entries?access_token=HYuCeaD_m0pLp1FMJuD5Mho9CJYOdRZ-7l6U_4TO8Rc&content_type=${content}`;
  let call = await fetch(url);
  let res = await call.json();

  try {
    if (call.status >= 200 && call.status < 300) {
      return res;
    } else {
      throw {
        message: "Hubo un error",
        status: res.status,
      };
    }
  } catch (error) {
    console.error(error);
  }
};
