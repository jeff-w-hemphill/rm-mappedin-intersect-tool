import axios, { AxiosResponse } from 'axios'

const AUTH_TOKEN =
  'Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJSZWFjdE1vYmlsZSIsImV4cCI6MTcyODA3OTEzNSwiaWF0IjoxNzI1NDg3MTM1LCJpc3MiOiJSZWFjdE1vYmlsZSIsImp0aSI6IjEyMzI1ODkwLTEyODMtNGFiOS04ZTg5LTM1MTlmOGFjZDRkZiIsIm5iZiI6MTcyNTQ4NzEzNCwicGVtIjp7fSwic3ViIjoie1wiYXZhdGFyXCI6XCJcIixcImVtYWlsXCI6XCJqZWZmZXJ5LmhlbXBoaWxsQHJlYWN0bW9iaWxlLmNvbVwiLFwiZmlyc3RfbmFtZVwiOlwiSmVmZmVyeVwiLFwibGFzdF9uYW1lXCI6XCJIZW1waGlsbFwiLFwidXNlcl9pZFwiOlwiNDRkNTY0MmUtNTE2My00OGIzLWJmYzktMGUxODgzNWMwYjFlXCJ9IiwidHlwIjoiYWNjZXNzIn0.cVV-4riNSNLlUUuugy34NhrR10OB3N7H-wO1TllPjtUqLzbzb3chD0-HjtpqRpQ-d8QeUWYbCQFCUNoKg9kbyg'
const RM_API_URL = 'https://api.dev.reactmobile-infra.net/api/v4'
const RM_SAMPLE_ORG_ID = '6e5a4fb3-d880-47c3-8be5-5b830ded5fdc' // Mapped Inn in Dev

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
