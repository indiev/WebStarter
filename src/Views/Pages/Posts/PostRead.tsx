import { Box, Button, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

import { Link } from 'Components/Link';

export default () => {
  const { postId = '' } = useParams<{ postId: string }>();
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
