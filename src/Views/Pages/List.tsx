import {
  API,
  GRAPHQL_AUTH_MODE,
  graphqlOperation,
  GraphQLResult
} from '@aws-amplify/api';
import React, { useEffect, useState } from 'react';

import Text from 'Components/Text/Text';
import { FlexView } from 'Components/View';
import Container from 'Components/View/Container';
import * as queries from 'graphql/queries';

type PostType = {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  owner: string;
};

type ListPostData = {
  data: {
    listPosts: {
      items: PostType[];
    };
  };
};

export default () => {
  const [posts, setPosts] = useState([] as PostType[]);
  useEffect(() => {
    (async () => {
      const response = (await API.graphql({
        ...graphqlOperation(queries.listPosts),
        authMode: GRAPHQL_AUTH_MODE.AWS_IAM
      })) as ListPostData;
      console.log(response);
      setPosts(response.data?.listPosts.items);
    })();
  }, []);

  return (
    <Container>
      {posts.map((post) => (
        <FlexView key={post.id} css={{ padding: 20 }}>
          <Text weight="bold">{post.title}</Text>
          <Text>{post.content}</Text>
          <Text>{post.createdAt}</Text>
          <Text>{post.owner}</Text>
        </FlexView>
      ))}
    </Container>
  );
};
