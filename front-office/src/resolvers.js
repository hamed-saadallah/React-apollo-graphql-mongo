import gql from 'graphql-tag';

export default {
    Mutation: {
      addImage: (_, { message }, { cache }) => {
        const query = gql`
          query list{
            viewer{
              images{
            list {
              message
            }
          }}}
        `;
        const previous = cache.readQuery({ query });console.log('previous ', previous );
        const newImage = {
          id: 2,
          message,
          completed: false,
          __typename: 'viewer',
        };console.log('newImage', newImage)
        const prev_list = previous.viewer.images.list
        const data = {
          listImages: prev_list.concat(newImage),
        };
        console.log('data', data)
        cache.writeData({ data });
        const newc = cache.readQuery({ query }); console.log('new', newc);
        return newImage;
  }
}
}

