import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://pixabay.com/api',

  params: {
    per_page: 12,
    key: '32279926-0d812a3ead796d9ba9346efbd',
    image_type: 'photo',
    orientation: 'horizontal',
  },
});

export const searchImages = async (q, page = 1) => {
  const { data } = await instance.get('/?&', {
    params: {
      q,
      page,
    },
  });
  return data.hits;
};
