import axios from 'axios'

const fetchNewEvents = async () => {
  try {
    const response = await axios.get(
      'https://myevnt.ai/api/v1/web//events?type=new',
      {
        headers: {
          Authorization:
            'Bearer wAiJvweNwHa2wNTSvueijYQuqjCRckTsNSvK5AOdJK4h0j2bJ7Yyh7tsZhgi',
        },
      },
    )
    return response.data.data
  } catch (error) {
    console.error('Error fetching categories:', error)
    return []
  }
}

export default fetchNewEvents
