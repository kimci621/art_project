const postData = async (url, data) => {
  let result = await fetch(url, {
    method: "POST",
    body: data
  });

  return result.text();
};

const getData = async (url) => {
  let result = await fetch(url);

  if (!result.ok) {
    throw new Error(`Could not fetch ${url}, status: ${result.status}`);
  }

  return result.json();
};

export {postData, getData};