import { graphqlOperation } from '@aws-amplify/api';
import {
  Box,
  Button,
  FormHelperText,
  TextField,
  Typography
} from '@material-ui/core';
import { API } from 'aws-amplify';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import Form from 'Components/Form/Form';
import { Link } from 'Components/Link';
import { createPost } from 'graphql/mutations';

type FormData = {
  title: string;
  content: string;
  generic: string;
};

export default () => {
  const { handleSubmit, register, errors, setError } = useForm<FormData>();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: FormData) => {
    console.log(data);
    setLoading(true);
    try {
      const input = {
        ...data,
        createdAt: new Date(),
        updatedAt: new Date()
      };
      const response = await API.graphql(
        graphqlOperation(createPost, { input })
      );
      console.log(response);
    } catch (e) {
      setError('generic', e.name, e.message);
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Box m={2}>
        <Typography>Write Post</Typography>
        <TextField
          autoComplete="off"
          error={!!errors.title}
          helperText={errors.title?.message || ' '}
          inputRef={register}
          label="Title"
          name="title"
          fullWidth
          required
        />
        <TextField
          autoComplete="off"
          error={!!errors.content}
          helperText={errors.content?.message || ' '}
          inputRef={register}
          label="Content"
          name="content"
          fullWidth
          multiline
          required
        />
        {errors.generic && (
          <FormHelperText error>{errors.generic.message}</FormHelperText>
        )}
        <Link css={{ marginLeft: 'auto' }} to="/posts">
          <Button variant="contained" fullWidth>
            Cancel
          </Button>
        </Link>
        <Button type="submit" variant="contained" fullWidth>
          Write
        </Button>
      </Box>
    </Form>
  );
};
