export const options = {
  method: "GET",
  headers: {
    Authorization: "Bearer 697|zdfnsAKkLGTfZpbiui11kPpcaybwuMWFvgPOtTEx",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
