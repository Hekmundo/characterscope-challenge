import Prismic from '@prismicio/client';

const apiEndpoint =
  'https://characterscope-engineering-recruitment.cdn.prismic.io/api/v2';

const accessToken =
  'MC5ZRzhYTkJNQUFDSUFpa09f.77-9Tg3vv70B77-977-9GSzvv70V77-9GBdB77-977-9HRUS77-9F--_vVfvv73vv706ARDvv73vv73vv70';

const Client = Prismic.client(apiEndpoint, { accessToken });

export const fetchData = async () => {
  const response = await Client.query(
    Prismic.Predicates.at('document.id', 'YG76KxMAACEAiboY')
  );
  if (response) {
    return response.results[0].data;
  }
};
