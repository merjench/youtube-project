import axios from 'axios'

export default axios.create({
  baseURL: 'https://www.googlepapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 10,
    key: 'API Key'
  }
})
