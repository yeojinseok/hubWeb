const EMPTY_RESULT = { entries: [], meta: {} }

function fetchReticulumAuthenticated(url, method = 'GET', payload) {
  const token =
    'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJyZXQiLCJleHAiOjE2NjMyMjIyNDQsImlhdCI6MTY1NTk2NDY0NCwiaXNzIjoicmV0IiwianRpIjoiMzY4MDNkN2MtZWU1OS00MTRiLTljYjYtMmMwNGU3MjljMTVhIiwibmJmIjoxNjU1OTY0NjQzLCJzdWIiOiIxMjEyNTM5NTE3NTA0ODQ4MDcwIiwidHlwIjoiYWNjZXNzIn0.JwahtuyF3nLUs4L2FbeONHfgs88QlfL6xu_NHc8fXvIlN1xzyO93OnTq5ls7GpnvL_1WU5hRHcv0FW_GMO4f7Q'
  const retUrl = `https://devops.imetacloud.net${url}`
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
