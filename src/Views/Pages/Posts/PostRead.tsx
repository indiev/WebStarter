import { Box, Button, Typography } from '@material-ui/core';
import React from 'react';
import { useParams } from 'react-router-dom';

import { Link } from 'Components/Link';

export default () => {
  const { postId = '' } = useParams();
  return (
    <Box m={4}>
      Post: {postId}
      <Link to="/posts">
        <Button>List</Button>
      </Link>
      <Typography>Title</Typography>
      <Typography>Content</Typography>
    </Box>
  );
};
