import { GRAPHQL_AUTH_MODE, graphqlOperation } from '@aws-amplify/api';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography
} from '@material-ui/core';
import {
  ExpandMore as ExpandMoreIcon,
  Favorite as FavoriteIcon,
  MoreVert as MoreVertIcon,
  Share as ShareIcon
} from '@material-ui/icons';
import { API } from 'aws-amplify';
import React, { useEffect, useState } from 'react';

import { Link } from 'Components/Link';
import { listPosts } from 'graphql/queries';

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

export const PostItem = () => {
  const [expanded, setExpanded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([] as PostType[]);
  const handleExpandClick = () => {
    setExpanded((value) => !value);
  };

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = (await API.graphql({
          ...graphqlOperation(listPosts, { sort: { createdAt: 'gte' } }),
          authMode: GRAPHQL_AUTH_MODE.AWS_IAM
        })) as ListPostData;
        console.log(response);
        setList(response.data.listPosts.items);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <>
      {list.map((post) => (
        <Card key={post.id}>
          <Link to={`/posts/${post.id}`}>
            <CardHeader
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              avartar={<Avatar aria-label="recipe">R</Avatar>}
              subheader={post.createdAt}
              title={post.title}
            />
            <CardMedia
              css={{ height: 0, paddingTop: '56.25%' }}
              image="https://cdn.pixabay.com/photo/2019/09/14/09/44/cat-4475583_1280.png"
              title="Paella dish"
            />
            <CardContent>
              <Typography color="textSecondary" component="p" variant="body2">
                by {post.owner}
                <br />
                {post.content}
              </Typography>
            </CardContent>
          </Link>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <IconButton
              aria-expanded={expanded}
              aria-label="show more"
              css={{
                transform: 'rotate(0deg)',
                marginLeft: 'auto',
                transition: 'transform 0.3s',
                // transition: theme.transitions.create('transform', {
                //   duration: theme.transitions.duration.shortest
                // }),
                ...(expanded && { transform: 'rotate(180deg)' })
              }}
              // className={clsx(classes.expand, {
              //   [classes.expandOpen]: expanded
              // })}
              onClick={handleExpandClick}
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
        </Card>
      ))}
    </>
  );
};

export default () => {
  return (
    <Box>
      PostList
      <Link css={{ marginLeft: 'auto' }} to="/posts/write">
        <Button>write</Button>
      </Link>
      <PostItem />
    </Box>
  );
};
