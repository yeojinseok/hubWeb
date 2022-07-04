const EMPTY_RESULT = { entries: [], meta: {} }

function fetchReticulumAuthenticated(url, method = 'GET', payload) {
  const token =
    'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJyZXQiLCJleHAiOjE2NjI5NTMxNjMsImlhdCI6MTY1NTY5NTU2MywiaXNzIjoicmV0IiwianRpIjoiNzU2ZDMxZWMtZWI2OS00MWVmLTg5YmUtYjhhODE4NTY4ZTM5IiwibmJmIjoxNjU1Njk1NTYyLCJzdWIiOiIxMjU0NzkyNzk3NjIyMzcwMzgzIiwidHlwIjoiYWNjZXNzIn0.qV8BYfU_7t7BfHzlUFytaZhCabpQ99dk8GNS91Y8D4QNDIkfTnKHXJjlx4Vl7r_6w8Cex7KNodF8iwRIC9K85w'

  const retUrl = `https://imetanium.com${url}`
  const params = {
    headers: { 'content-type': 'application/json' },
    method,
  }
  if (token) {
    params.headers.authorization = `bearer ${token}`
  }
  if (payload) {
    params.body = JSON.stringify(payload)
  }
  return fetch(retUrl, params).then(async r => {
    const result = await r.text()
    try {
      return JSON.parse(result)
    } catch (e) {
      // Some reticulum responses, particularly DELETE requests, don't return json.
      return result
    }
  })
}

export async function fetchScene() {
  const result = fetch
    ? await fetchReticulumAuthenticated(
        `/api/v1/media/search?source=rooms&filter=public&cursor=0`
      )
    : EMPTY_RESULT
  console.log(result)
  return result
}
