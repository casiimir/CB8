const BASE_URL = "https://movie-api-vz75.onrender.com";

export const HTTP_GET = async (path) => {
  const res = await fetch(`${BASE_URL}${path}`);
  const data = await res.json();

  return data;
};

export const HTTP_POST = async (path, body) => {
  const res = await fetch(`${BASE_URL}${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const data = await res.json();

  return data;
};

export const HTTP_DELETE = async (path, id) => {
  const res = await fetch(`${BASE_URL}${path}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();

  return data;
};
