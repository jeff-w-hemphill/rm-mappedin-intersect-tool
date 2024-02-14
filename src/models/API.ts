import axios, { AxiosResponse } from 'axios'

const AUTH_TOKEN =
  'Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJSZWFjdE1vYmlsZSIsImV4cCI6MTcwOTIzNDI1OSwiaWF0IjoxNzA2NjQyMjU5LCJpc3MiOiJSZWFjdE1vYmlsZSIsImp0aSI6ImI0OTI1NTEzLTg0M2ItNDNjNy05ZDczLTRjNTMxOGE0ODE0ZiIsIm5iZiI6MTcwNjY0MjI1OCwicGVtIjp7fSwic3ViIjoie1wiYXZhdGFyXCI6XCJodHRwczovL2F2YXRhcnMuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3UvMjYyODk3MjU_dj00XCIsXCJlbWFpbFwiOlwiamVmZmVyeXdoZW1waGlsbEBnbWFpbC5jb21cIixcImZpcnN0X25hbWVcIjpcIkplZmZlcnkgSGVtcGhpbGxcIixcImxhc3RfbmFtZVwiOlwiSGVtcGhpbGxcIixcInVzZXJfaWRcIjpcIjE2ODFhMmQyLTExMDAtNGRiNi1hMWJiLTYwZTA5Mzg4ZTExN1wifSIsInR5cCI6ImFjY2VzcyJ9.iJW5OZmDFDjYSu83d26qNfV6fGefkftxPHuS56maaMFae1ZsOvMWCQRUMe6q40hAKOkTgGwNP7SKTWXQNiK6Ww'
const RM_API_URL = 'https://api.dev.reactmobile-infra.net/api/v4'
const RM_SAMPLE_ORG_ID = '3b54ce47-2ff6-4e00-87c6-04885bea4d8c' // Property1 in Dev

export const getBeacons = async (orgId: string): Promise<any[]> => {
  const config = {
    headers: {
      Authorization: AUTH_TOKEN,
      org_id: orgId,
    },
  }

  try {
    const response: AxiosResponse<any> = await axios.get(`${RM_API_URL}/beacons`, config)
    return response.data.data
  } catch (e) {
    console.error('Error fetching beacons:', e)
    return []
  }
}
