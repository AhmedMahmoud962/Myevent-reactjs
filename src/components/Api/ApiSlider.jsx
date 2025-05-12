import axios from 'axios';

const fetchSliders = async () => {
  try {
    const response = await axios.get('https://myevnt.ai/api/v1/web/sliders', {
      headers: {
        Authorization: 'Bearer wAiJvweNwHa2wNTSvueijYQuqjCRckTsNSvK5AOdJK4h0j2bJ7Yyh7tsZhgi',
      },
    });
    return response.data.data; // رجّع المصفوفة اللي جوا data
  } catch (error) {
    console.error('Error fetching sliders:', error);
    return [];
  }
};

export default fetchSliders;