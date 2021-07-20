// tslint:disable
// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($id: String!) {
    onCreateUser(id: $id) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($id: String!) {
    onUpdateUser(id: $id) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($id: String!) {
    onDeleteUser(id: $id) {
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost($owner: String!) {
    onCreatePost(owner: $owner) {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost($owner: String!) {
    onUpdatePost(owner: $owner) {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost($owner: String!) {
    onDeletePost(owner: $owner) {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment($createdBy: String!) {
    onCreateComment(createdBy: $createdBy) {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment($createdBy: String!) {
    onUpdateComment(createdBy: $createdBy) {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment($createdBy: String!) {
    onDeleteComment(createdBy: $createdBy) {
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
export const onCreateImage = /* GraphQL */ `
  subscription OnCreateImage($owner: String!) {
    onCreateImage(owner: $owner) {
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
export const onUpdateImage = /* GraphQL */ `
  subscription OnUpdateImage($owner: String!) {
    onUpdateImage(owner: $owner) {
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
export const onDeleteImage = /* GraphQL */ `
  subscription OnDeleteImage($owner: String!) {
    onDeleteImage(owner: $owner) {
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
export const onCreateVote = /* GraphQL */ `
  subscription OnCreateVote($createdBy: String!) {
    onCreateVote(createdBy: $createdBy) {
      id
      postId
      createdBy
      createdAt
      vote
    }
  }
`;
export const onUpdateVote = /* GraphQL */ `
  subscription OnUpdateVote($createdBy: String!) {
    onUpdateVote(createdBy: $createdBy) {
      id
      postId
      createdBy
      createdAt
      vote
    }
  }
`;
export const onDeleteVote = /* GraphQL */ `
  subscription OnDeleteVote($createdBy: String!) {
    onDeleteVote(createdBy: $createdBy) {
      id
      postId
      createdBy
      createdAt
      vote
    }
  }
`;
export const onCreateFollowing = /* GraphQL */ `
  subscription OnCreateFollowing($createdBy: String!) {
    onCreateFollowing(createdBy: $createdBy) {
      id
      followerId
      followingId
      createdAt
    }
  }
`;
export const onUpdateFollowing = /* GraphQL */ `
  subscription OnUpdateFollowing($createdBy: String!) {
    onUpdateFollowing(createdBy: $createdBy) {
      id
      followerId
      followingId
      createdAt
    }
  }
`;
export const onDeleteFollowing = /* GraphQL */ `
  subscription OnDeleteFollowing($createdBy: String!) {
    onDeleteFollowing(createdBy: $createdBy) {
      id
      followerId
      followingId
      createdAt
    }
  }
`;
