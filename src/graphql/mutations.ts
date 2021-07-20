// tslint:disable
// eslint-disable
// this is an auto generated file. This will be overwritten

export const voteForPost = /* GraphQL */ `
  mutation VoteForPost($input: ItemVoteInput) {
    voteForPost(input: $input) {
      id
      createdAt
      updatedAt
      title
      content
      author
      images {
        id
        owner
      }
      votes
      owner
      comments {
        nextToken
      }
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      username
      avatar {
        bucket
        region
        key
      }
      posts {
        id
        createdAt
        updatedAt
        title
        content
        author
        votes
        owner
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      username
      avatar {
        bucket
        region
        key
      }
      posts {
        id
        createdAt
        updatedAt
        title
        content
        author
        votes
        owner
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      username
      avatar {
        bucket
        region
        key
      }
      posts {
        id
        createdAt
        updatedAt
        title
        content
        author
        votes
        owner
      }
      createdAt
      updatedAt
    }
  }
`;
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      title
      content
      author
      images {
        id
        owner
      }
      votes
      owner
      comments {
        nextToken
      }
    }
  }
`;
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      title
      content
      author
      images {
        id
        owner
      }
      votes
      owner
      comments {
        nextToken
      }
    }
  }
`;
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      title
      content
      author
      images {
        id
        owner
      }
      votes
      owner
      comments {
        nextToken
      }
    }
  }
`;
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      content
      createdBy
      votes
      post {
        id
        createdAt
        updatedAt
        title
        content
        author
        votes
        owner
      }
    }
  }
`;
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      content
      createdBy
      votes
      post {
        id
        createdAt
        updatedAt
        title
        content
        author
        votes
        owner
      }
    }
  }
`;
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      content
      createdBy
      votes
      post {
        id
        createdAt
        updatedAt
        title
        content
        author
        votes
        owner
      }
    }
  }
`;
export const createImage = /* GraphQL */ `
  mutation CreateImage(
    $input: CreateImageInput!
    $condition: ModelImageConditionInput
  ) {
    createImage(input: $input, condition: $condition) {
      id
      file {
        bucket
        region
        key
      }
      fullsize {
        key
        width
        height
      }
      thumbnail {
        key
        width
        height
      }
      owner
    }
  }
`;
export const updateImage = /* GraphQL */ `
  mutation UpdateImage(
    $input: UpdateImageInput!
    $condition: ModelImageConditionInput
  ) {
    updateImage(input: $input, condition: $condition) {
      id
      file {
        bucket
        region
        key
      }
      fullsize {
        key
        width
        height
      }
      thumbnail {
        key
        width
        height
      }
      owner
    }
  }
`;
export const deleteImage = /* GraphQL */ `
  mutation DeleteImage(
    $input: DeleteImageInput!
    $condition: ModelImageConditionInput
  ) {
    deleteImage(input: $input, condition: $condition) {
      id
      file {
        bucket
        region
        key
      }
      fullsize {
        key
        width
        height
      }
      thumbnail {
        key
        width
        height
      }
      owner
    }
  }
`;
export const createVote = /* GraphQL */ `
  mutation CreateVote(
    $input: CreateVoteInput!
    $condition: ModelVoteConditionInput
  ) {
    createVote(input: $input, condition: $condition) {
      id
      postId
      createdBy
      createdAt
      vote
    }
  }
`;
export const updateVote = /* GraphQL */ `
  mutation UpdateVote(
    $input: UpdateVoteInput!
    $condition: ModelVoteConditionInput
  ) {
    updateVote(input: $input, condition: $condition) {
      id
      postId
      createdBy
      createdAt
      vote
    }
  }
`;
export const deleteVote = /* GraphQL */ `
  mutation DeleteVote(
    $input: DeleteVoteInput!
    $condition: ModelVoteConditionInput
  ) {
    deleteVote(input: $input, condition: $condition) {
      id
      postId
      createdBy
      createdAt
      vote
    }
  }
`;
export const createFollowing = /* GraphQL */ `
  mutation CreateFollowing(
    $input: CreateFollowingInput!
    $condition: ModelFollowingConditionInput
  ) {
    createFollowing(input: $input, condition: $condition) {
      id
      followerId
      followingId
      createdAt
    }
  }
`;
export const updateFollowing = /* GraphQL */ `
  mutation UpdateFollowing(
    $input: UpdateFollowingInput!
    $condition: ModelFollowingConditionInput
  ) {
    updateFollowing(input: $input, condition: $condition) {
      id
      followerId
      followingId
      createdAt
    }
  }
`;
export const deleteFollowing = /* GraphQL */ `
  mutation DeleteFollowing(
    $input: DeleteFollowingInput!
    $condition: ModelFollowingConditionInput
  ) {
    deleteFollowing(input: $input, condition: $condition) {
      id
      followerId
      followingId
      createdAt
    }
  }
`;
