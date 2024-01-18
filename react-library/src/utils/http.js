const BASE_URL = 'https://openlibrary.org'

export const HTTP_GET = async (endpoint) => {
  const res = await fetch(`${BASE_URL}${endpoint}`);
  const data = await res.json()

  return data
}