import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import React, { useState } from 'react';
import { Mutation, Query, QueryResult } from 'react-apollo';
import { useTranslation } from 'react-i18next';
import { Route, Switch, useHistory } from 'react-router-dom';

import { Button } from 'Components/Button';
import { Link } from 'Components/Link';
import { Text } from 'Components/Text';
import { FlexView, View } from 'Components/View';
import Container from 'Components/View/Container';
import { timeDifferenceForDate } from 'Utils/time';

type LinkType = {
  id: string;
  description: string;
  url: string;
  createdAt: string;
  votes: { user: { id: string } }[];
  postedBy?: {
    id: string;
    name: string;
  };
};

type LinkProps = {
  link: LinkType;
};

const AUTH_TOKEN = 'auth-token';

const FEED_QUERY = gql`
  {
    feed {
      links {
        id
        createdAt
        url
        description
        postedBy {
          id
          name
        }
        votes {
          id
          user {
            id
          }
        }
      }
    }
  }
`;

const POST_MUTATION = gql`
  mutation PostMutation($description: String!, $url: String!) {
    post(description: $description, url: $url) {
      id
      createdAt
      url
      description
    }
  }
`;

const VOTE_MUTATION = gql`
  mutation VoteMutation($linkId: ID!) {
    vote(linkId: $linkId) {
      id
      link {
        id
        votes {
          id
          user {
            id
          }
        }
      }
      user {
        id
      }
    }
  }
`;

const FEED_SEARCH_QUERY = gql`
  query FeedSearchQuery($filter: String!) {
    feed(filter: $filter) {
      links {
        id
        url
        description
        createdAt
        postedBy {
          id
          name
        }
        votes {
          id
          user {
            id
          }
        }
      }
    }
  }
`;

const NEW_LINKS_SUBSCRIPTION = gql`
  subscription {
    newLink {
      id
      url
      description
      createdAt
      postedBy {
        id
        name
      }
      votes {
        id
        user {
          id
        }
      }
    }
  }
`;

const LinkItem = ({ index, link }: LinkProps & { index: number }) => {
  const authToken = localStorage.getItem(AUTH_TOKEN);
  const [upVote] = useMutation(VOTE_MUTATION, {
    update(cache, { data: { vote } }) {
      const data1: {
        feed: { links: LinkType[] };
      } | null = cache.readQuery({ query: FEED_QUERY });

      if (!data1) {
        return;
      }
      const votedLink = data1.feed.links.find(
        (value: LinkType) => value.id === link.id
      ) || { votes: [] };
      votedLink.votes = vote.link.votes;

      cache.writeQuery({ query: FEED_QUERY, data: data1 });
    }
  });

  return (
    <View>
      <Text css={{ marginRight: 5 }} weight="bold">
        {index + 1}
      </Text>
      {link.description} ({link.url}) {`by ${link.postedBy?.name || 'Unknown'}`}
      {authToken && (
        <Button
          css={{ marginLeft: 5 }}
          onClick={() => upVote({ variables: { linkId: link.id } })}
        >
          ▲
        </Button>
      )}
      <Text css={{ marginLeft: 5 }}>{link.votes.length}</Text>
      <Text css={{ marginLeft: 5 }}>
        {timeDifferenceForDate(link.createdAt)}
      </Text>
    </View>
  );
};

export const CreateLinkItem = () => {
  const history = useHistory();
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('');

  return (
    <FlexView css={{ marginTop: 15 }}>
      <input
        placeholder="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        placeholder="url"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <Mutation
        mutation={POST_MUTATION}
        variables={{ description, url }}
        onCompleted={() => history.push('/')}
      >
        {(postMutation: any) => <Button onClick={postMutation}>Submit</Button>}
      </Mutation>
    </FlexView>
  );
};

const LinkList = () => {
  const subscribeToNewLinks = async (subscribeToMore: any) => {
    subscribeToMore({
      document: NEW_LINKS_SUBSCRIPTION,
      updateQuery: (prev: any, { subscriptionData }: any) => {
        if (!subscriptionData.data) return prev;
        const { newLink } = subscriptionData.data;
        const exists = prev.feed.links.find(({ id }: any) => id === newLink.id);
        if (exists) return prev;

        return {
          ...prev,
          feed: {
            links: [newLink, ...prev.feed.links],
            count: prev.feed.links.length + 1,
            __typename: prev.feed.__typename
          }
        };
      }
    });
  };

  return (
    <FlexView css={{ marginTop: 10 }}>
      <Query query={FEED_QUERY}>
        {({
          loading,
          error,
          data,
          subscribeToMore
        }: QueryResult<{
          feed: { links: LinkType[] };
        }>) => {
          if (loading) return <View>Fetching</View>;
          if (error) return <View>Error</View>;

          subscribeToNewLinks(subscribeToMore);

          const linksToRender = data?.feed.links!;

          return (
            <>
              {linksToRender.map((link, index) => (
                <LinkItem key={link.id} index={index} link={link} />
              ))}
            </>
          );
        }}
      </Query>
    </FlexView>
  );
};

export const Login = () => {
  const history = useHistory();
  const [login, setLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const SIGNUP_MUTATION = gql`
    mutation SignupMutation(
      $email: String!
      $password: String!
      $name: String!
    ) {
      signup(email: $email, password: $password, name: $name) {
        token
      }
    }
  `;

  const LOGIN_MUTATION = gql`
    mutation LoginMutation($email: String!, $password: String!) {
      login(email: $email, password: $password) {
        token
      }
    }
  `;

  const saveUserData = (token: string) => {
    localStorage.setItem(AUTH_TOKEN, token);
  };
  const confirm = (data: {
    login?: { token: string };
    signup?: { token: string };
  }) => {
    const { token } = login ? data.login! : data.signup!;
    saveUserData(token);
    history.push('/');
  };

  return (
    <FlexView css={{ margin: 20 }}>
      <Text>{login ? 'Login' : 'Sign Up'}</Text>
      <FlexView>
        {!login && (
          <input
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        )}
        <input
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <FlexView row>
          <Mutation
            mutation={login ? LOGIN_MUTATION : SIGNUP_MUTATION}
            variables={{ email, password, name }}
            onCompleted={(data: {
              login?: { token: string };
              signup?: { token: string };
            }) => confirm(data)}
          >
            {(mutation: any) => (
              <Button onClick={mutation}>
                {login ? 'login' : 'Create Account'}
              </Button>
            )}
          </Mutation>
          <View css={{ width: 5 }} />
          <Button onClick={() => setLogin((value) => !value)}>
            {login ? 'need to create an account?' : 'already have an account?'}
          </Button>
        </FlexView>
      </FlexView>
    </FlexView>
  );
};

const Search = () => {
  const [links, setLinks] = useState([]);
  const [filter, setFilter] = useState('');

  return (
    <View>
      <Text>Search</Text>
      <input onChange={(e) => setFilter(e.currentTarget.value)} />
      <Button onClick={() => {}}>OK</Button>
    </View>
  );
};

const MenuList = () => {
  const history = useHistory();
  const authToken = localStorage.getItem(AUTH_TOKEN);

  return (
    <FlexView css={{ margin: 10 }} row>
      <Link to="/">list</Link>
      <View css={{ width: 5 }} />
      <Link to="/create">submit</Link>
      <View css={{ width: 5 }} />
      {authToken ? (
        <Button
          onClick={() => {
            localStorage.removeItem(AUTH_TOKEN);
            history.push('/');
          }}
        >
          logout
        </Button>
      ) : (
        <Link to="/login">login</Link>
      )}
    </FlexView>
  );
};

export default () => {
  const [t] = useTranslation('main');
  return (
    <Container>
      {t('title')}
      <MenuList />
      <Switch>
        {/* <Route component={LinkList} path="/" exact />
        <Route component={CreateLinkItem} path="/create" exact />
        <Route component={Login} path="/login" exact /> */}
      </Switch>
    </Container>
  );
};
