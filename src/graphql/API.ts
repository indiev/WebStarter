/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type ItemVoteInput = {
  type: VoteType,
  id: string,
};

export enum VoteType {
  up = "up",
  down = "down",
}


export type CreateUserInput = {
  id?: string | null,
  username: string,
  avatar?: S3ObjectInput | null,
  createdAt: string,
  updatedAt: string,
};

export type S3ObjectInput = {
  bucket: string,
  region: string,
  key: string,
};

export type ModelUserConditionInput = {
  username?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UpdateUserInput = {
  id: string,
  username?: string | null,
  avatar?: S3ObjectInput | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteUserInput = {
  id?: string | null,
};

export type CreatePostInput = {
  id?: string | null,
  createdAt: string,
  updatedAt: string,
  title: string,
  content: string,
  author?: string | null,
  votes?: number | null,
};

export type ModelPostConditionInput = {
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  title?: ModelStringInput | null,
  content?: ModelStringInput | null,
  author?: ModelStringInput | null,
  votes?: ModelIntInput | null,
  and?: Array< ModelPostConditionInput | null > | null,
  or?: Array< ModelPostConditionInput | null > | null,
  not?: ModelPostConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdatePostInput = {
  id: string,
  createdAt?: string | null,
  updatedAt?: string | null,
  title?: string | null,
  content?: string | null,
  author?: string | null,
  votes?: number | null,
};

export type DeletePostInput = {
  id?: string | null,
};

export type CreateCommentInput = {
  id?: string | null,
  createdAt: string,
  updatedAt: string,
  content: string,
  createdBy: string,
  votes?: number | null,
  commentPostId?: string | null,
};

export type ModelCommentConditionInput = {
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  content?: ModelStringInput | null,
  votes?: ModelIntInput | null,
  and?: Array< ModelCommentConditionInput | null > | null,
  or?: Array< ModelCommentConditionInput | null > | null,
  not?: ModelCommentConditionInput | null,
};

export type UpdateCommentInput = {
  id: string,
  createdAt?: string | null,
  updatedAt?: string | null,
  content?: string | null,
  createdBy?: string | null,
  votes?: number | null,
  commentPostId?: string | null,
};

export type DeleteCommentInput = {
  id?: string | null,
};

export type CreateImageInput = {
  id?: string | null,
  file: S3ObjectInput,
  fullsize: S3InfoInput,
  thumbnail: S3InfoInput,
};

export type S3InfoInput = {
  key: string,
  width: number,
  height: number,
};

export type ModelImageConditionInput = {
  and?: Array< ModelImageConditionInput | null > | null,
  or?: Array< ModelImageConditionInput | null > | null,
  not?: ModelImageConditionInput | null,
};

export type UpdateImageInput = {
  id: string,
  file?: S3ObjectInput | null,
  fullsize?: S3InfoInput | null,
  thumbnail?: S3InfoInput | null,
};

export type DeleteImageInput = {
  id?: string | null,
};

export type CreateVoteInput = {
  id?: string | null,
  postId: string,
  createdBy: string,
  createdAt: string,
  vote?: VoteType | null,
};

export type ModelVoteConditionInput = {
  postId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  vote?: ModelVoteTypeInput | null,
  and?: Array< ModelVoteConditionInput | null > | null,
  or?: Array< ModelVoteConditionInput | null > | null,
  not?: ModelVoteConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelVoteTypeInput = {
  eq?: VoteType | null,
  ne?: VoteType | null,
};

export type UpdateVoteInput = {
  id: string,
  postId?: string | null,
  createdBy?: string | null,
  createdAt?: string | null,
  vote?: VoteType | null,
};

export type DeleteVoteInput = {
  id?: string | null,
};

export type CreateFollowingInput = {
  id?: string | null,
  followerId: string,
  followingId: string,
  createdAt: string,
};

export type ModelFollowingConditionInput = {
  followerId?: ModelIDInput | null,
  followingId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelFollowingConditionInput | null > | null,
  or?: Array< ModelFollowingConditionInput | null > | null,
  not?: ModelFollowingConditionInput | null,
};

export type UpdateFollowingInput = {
  id: string,
  followerId?: string | null,
  followingId?: string | null,
  createdAt?: string | null,
};

export type DeleteFollowingInput = {
  id?: string | null,
};

export type ModelVoteFilterInput = {
  id?: ModelIDInput | null,
  postId?: ModelIDInput | null,
  createdBy?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  vote?: ModelVoteTypeInput | null,
  and?: Array< ModelVoteFilterInput | null > | null,
  or?: Array< ModelVoteFilterInput | null > | null,
  not?: ModelVoteFilterInput | null,
};

export type ModelFollowingFilterInput = {
  id?: ModelIDInput | null,
  followerId?: ModelIDInput | null,
  followingId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelFollowingFilterInput | null > | null,
  or?: Array< ModelFollowingFilterInput | null > | null,
  not?: ModelFollowingFilterInput | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  username?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelPostFilterInput = {
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  title?: ModelStringInput | null,
  content?: ModelStringInput | null,
  author?: ModelStringInput | null,
  votes?: ModelIntInput | null,
  and?: Array< ModelPostFilterInput | null > | null,
  or?: Array< ModelPostFilterInput | null > | null,
  not?: ModelPostFilterInput | null,
};

export type ModelCommentFilterInput = {
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  content?: ModelStringInput | null,
  createdBy?: ModelStringInput | null,
  votes?: ModelIntInput | null,
  and?: Array< ModelCommentFilterInput | null > | null,
  or?: Array< ModelCommentFilterInput | null > | null,
  not?: ModelCommentFilterInput | null,
};

export type ModelImageFilterInput = {
  id?: ModelIDInput | null,
  and?: Array< ModelImageFilterInput | null > | null,
  or?: Array< ModelImageFilterInput | null > | null,
  not?: ModelImageFilterInput | null,
};

export type VoteForPostMutationVariables = {
  input?: ItemVoteInput | null,
};

export type VoteForPostMutation = {
  voteForPost:  {
    __typename: "Post",
    id: string,
    createdAt: string,
    updatedAt: string,
    title: string,
    content: string,
    author: string | null,
    images:  Array< {
      __typename: "Image",
      id: string,
      owner: string | null,
    } | null > | null,
    votes: number | null,
    owner: string | null,
    comments:  {
      __typename: "ModelCommentConnection",
      nextToken: string | null,
    } | null,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser:  {
    __typename: "User",
    id: string,
    username: string,
    avatar:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    posts:  Array< {
      __typename: "Post",
      id: string,
      createdAt: string,
      updatedAt: string,
      title: string,
      content: string,
      author: string | null,
      votes: number | null,
      owner: string | null,
    } >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser:  {
    __typename: "User",
    id: string,
    username: string,
    avatar:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    posts:  Array< {
      __typename: "Post",
      id: string,
      createdAt: string,
      updatedAt: string,
      title: string,
      content: string,
      author: string | null,
      votes: number | null,
      owner: string | null,
    } >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser:  {
    __typename: "User",
    id: string,
    username: string,
    avatar:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    posts:  Array< {
      __typename: "Post",
      id: string,
      createdAt: string,
      updatedAt: string,
      title: string,
      content: string,
      author: string | null,
      votes: number | null,
      owner: string | null,
    } >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePostMutationVariables = {
  input: CreatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type CreatePostMutation = {
  createPost:  {
    __typename: "Post",
    id: string,
    createdAt: string,
    updatedAt: string,
    title: string,
    content: string,
    author: string | null,
    images:  Array< {
      __typename: "Image",
      id: string,
      owner: string | null,
    } | null > | null,
    votes: number | null,
    owner: string | null,
    comments:  {
      __typename: "ModelCommentConnection",
      nextToken: string | null,
    } | null,
  } | null,
};

export type UpdatePostMutationVariables = {
  input: UpdatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type UpdatePostMutation = {
  updatePost:  {
    __typename: "Post",
    id: string,
    createdAt: string,
    updatedAt: string,
    title: string,
    content: string,
    author: string | null,
    images:  Array< {
      __typename: "Image",
      id: string,
      owner: string | null,
    } | null > | null,
    votes: number | null,
    owner: string | null,
    comments:  {
      __typename: "ModelCommentConnection",
      nextToken: string | null,
    } | null,
  } | null,
};

export type DeletePostMutationVariables = {
  input: DeletePostInput,
  condition?: ModelPostConditionInput | null,
};

export type DeletePostMutation = {
  deletePost:  {
    __typename: "Post",
    id: string,
    createdAt: string,
    updatedAt: string,
    title: string,
    content: string,
    author: string | null,
    images:  Array< {
      __typename: "Image",
      id: string,
      owner: string | null,
    } | null > | null,
    votes: number | null,
    owner: string | null,
    comments:  {
      __typename: "ModelCommentConnection",
      nextToken: string | null,
    } | null,
  } | null,
};

export type CreateCommentMutationVariables = {
  input: CreateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type CreateCommentMutation = {
  createComment:  {
    __typename: "Comment",
    id: string,
    createdAt: string,
    updatedAt: string,
    content: string,
    createdBy: string,
    votes: number | null,
    post:  {
      __typename: "Post",
      id: string,
      createdAt: string,
      updatedAt: string,
      title: string,
      content: string,
      author: string | null,
      votes: number | null,
      owner: string | null,
    } | null,
  } | null,
};

export type UpdateCommentMutationVariables = {
  input: UpdateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type UpdateCommentMutation = {
  updateComment:  {
    __typename: "Comment",
    id: string,
    createdAt: string,
    updatedAt: string,
    content: string,
    createdBy: string,
    votes: number | null,
    post:  {
      __typename: "Post",
      id: string,
      createdAt: string,
      updatedAt: string,
      title: string,
      content: string,
      author: string | null,
      votes: number | null,
      owner: string | null,
    } | null,
  } | null,
};

export type DeleteCommentMutationVariables = {
  input: DeleteCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type DeleteCommentMutation = {
  deleteComment:  {
    __typename: "Comment",
    id: string,
    createdAt: string,
    updatedAt: string,
    content: string,
    createdBy: string,
    votes: number | null,
    post:  {
      __typename: "Post",
      id: string,
      createdAt: string,
      updatedAt: string,
      title: string,
      content: string,
      author: string | null,
      votes: number | null,
      owner: string | null,
    } | null,
  } | null,
};

export type CreateImageMutationVariables = {
  input: CreateImageInput,
  condition?: ModelImageConditionInput | null,
};

export type CreateImageMutation = {
  createImage:  {
    __typename: "Image",
    id: string,
    file:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    },
    fullsize:  {
      __typename: "S3Info",
      key: string,
      width: number,
      height: number,
    },
    thumbnail:  {
      __typename: "S3Info",
      key: string,
      width: number,
      height: number,
    },
    owner: string | null,
  } | null,
};

export type UpdateImageMutationVariables = {
  input: UpdateImageInput,
  condition?: ModelImageConditionInput | null,
};

export type UpdateImageMutation = {
  updateImage:  {
    __typename: "Image",
    id: string,
    file:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    },
    fullsize:  {
      __typename: "S3Info",
      key: string,
      width: number,
      height: number,
    },
    thumbnail:  {
      __typename: "S3Info",
      key: string,
      width: number,
      height: number,
    },
    owner: string | null,
  } | null,
};

export type DeleteImageMutationVariables = {
  input: DeleteImageInput,
  condition?: ModelImageConditionInput | null,
};

export type DeleteImageMutation = {
  deleteImage:  {
    __typename: "Image",
    id: string,
    file:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    },
    fullsize:  {
      __typename: "S3Info",
      key: string,
      width: number,
      height: number,
    },
    thumbnail:  {
      __typename: "S3Info",
      key: string,
      width: number,
      height: number,
    },
    owner: string | null,
  } | null,
};

export type CreateVoteMutationVariables = {
  input: CreateVoteInput,
  condition?: ModelVoteConditionInput | null,
};

export type CreateVoteMutation = {
  createVote:  {
    __typename: "Vote",
    id: string,
    postId: string,
    createdBy: string,
    createdAt: string,
    vote: VoteType | null,
  } | null,
};

export type UpdateVoteMutationVariables = {
  input: UpdateVoteInput,
  condition?: ModelVoteConditionInput | null,
};

export type UpdateVoteMutation = {
  updateVote:  {
    __typename: "Vote",
    id: string,
    postId: string,
    createdBy: string,
    createdAt: string,
    vote: VoteType | null,
  } | null,
};

export type DeleteVoteMutationVariables = {
  input: DeleteVoteInput,
  condition?: ModelVoteConditionInput | null,
};

export type DeleteVoteMutation = {
  deleteVote:  {
    __typename: "Vote",
    id: string,
    postId: string,
    createdBy: string,
    createdAt: string,
    vote: VoteType | null,
  } | null,
};

export type CreateFollowingMutationVariables = {
  input: CreateFollowingInput,
  condition?: ModelFollowingConditionInput | null,
};

export type CreateFollowingMutation = {
  createFollowing:  {
    __typename: "Following",
    id: string | null,
    followerId: string,
    followingId: string,
    createdAt: string,
  } | null,
};

export type UpdateFollowingMutationVariables = {
  input: UpdateFollowingInput,
  condition?: ModelFollowingConditionInput | null,
};

export type UpdateFollowingMutation = {
  updateFollowing:  {
    __typename: "Following",
    id: string | null,
    followerId: string,
    followingId: string,
    createdAt: string,
  } | null,
};

export type DeleteFollowingMutationVariables = {
  input: DeleteFollowingInput,
  condition?: ModelFollowingConditionInput | null,
};

export type DeleteFollowingMutation = {
  deleteFollowing:  {
    __typename: "Following",
    id: string | null,
    followerId: string,
    followingId: string,
    createdAt: string,
  } | null,
};

export type GetVoteQueryVariables = {
  id: string,
};

export type GetVoteQuery = {
  getVote:  {
    __typename: "Vote",
    id: string,
    postId: string,
    createdBy: string,
    createdAt: string,
    vote: VoteType | null,
  } | null,
};

export type ListVotesQueryVariables = {
  filter?: ModelVoteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListVotesQuery = {
  listVotes:  {
    __typename: "ModelVoteConnection",
    items:  Array< {
      __typename: "Vote",
      id: string,
      postId: string,
      createdBy: string,
      createdAt: string,
      vote: VoteType | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetFollowingQueryVariables = {
  id: string,
};

export type GetFollowingQuery = {
  getFollowing:  {
    __typename: "Following",
    id: string | null,
    followerId: string,
    followingId: string,
    createdAt: string,
  } | null,
};

export type ListFollowingsQueryVariables = {
  filter?: ModelFollowingFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFollowingsQuery = {
  listFollowings:  {
    __typename: "ModelFollowingConnection",
    items:  Array< {
      __typename: "Following",
      id: string | null,
      followerId: string,
      followingId: string,
      createdAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type VotesByUserQueryVariables = {
  createdBy?: string | null,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelVoteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type VotesByUserQuery = {
  votesByUser:  {
    __typename: "ModelVoteConnection",
    items:  Array< {
      __typename: "Vote",
      id: string,
      postId: string,
      createdBy: string,
      createdAt: string,
      vote: VoteType | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type ListFollowingQueryVariables = {
  followerId?: string | null,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelFollowingFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFollowingQuery = {
  listFollowing:  {
    __typename: "ModelFollowingConnection",
    items:  Array< {
      __typename: "Following",
      id: string | null,
      followerId: string,
      followingId: string,
      createdAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser:  {
    __typename: "User",
    id: string,
    username: string,
    avatar:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    posts:  Array< {
      __typename: "Post",
      id: string,
      createdAt: string,
      updatedAt: string,
      title: string,
      content: string,
      author: string | null,
      votes: number | null,
      owner: string | null,
    } >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      username: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type ListPostsQueryVariables = {
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostsQuery = {
  listPosts:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      createdAt: string,
      updatedAt: string,
      title: string,
      content: string,
      author: string | null,
      votes: number | null,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetPostQueryVariables = {
  id: string,
};

export type GetPostQuery = {
  getPost:  {
    __typename: "Post",
    id: string,
    createdAt: string,
    updatedAt: string,
    title: string,
    content: string,
    author: string | null,
    images:  Array< {
      __typename: "Image",
      id: string,
      owner: string | null,
    } | null > | null,
    votes: number | null,
    owner: string | null,
    comments:  {
      __typename: "ModelCommentConnection",
      nextToken: string | null,
    } | null,
  } | null,
};

export type GetCommentQueryVariables = {
  id: string,
};

export type GetCommentQuery = {
  getComment:  {
    __typename: "Comment",
    id: string,
    createdAt: string,
    updatedAt: string,
    content: string,
    createdBy: string,
    votes: number | null,
    post:  {
      __typename: "Post",
      id: string,
      createdAt: string,
      updatedAt: string,
      title: string,
      content: string,
      author: string | null,
      votes: number | null,
      owner: string | null,
    } | null,
  } | null,
};

export type ListCommentsQueryVariables = {
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCommentsQuery = {
  listComments:  {
    __typename: "ModelCommentConnection",
    items:  Array< {
      __typename: "Comment",
      id: string,
      createdAt: string,
      updatedAt: string,
      content: string,
      createdBy: string,
      votes: number | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetImageQueryVariables = {
  id: string,
};

export type GetImageQuery = {
  getImage:  {
    __typename: "Image",
    id: string,
    file:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    },
    fullsize:  {
      __typename: "S3Info",
      key: string,
      width: number,
      height: number,
    },
    thumbnail:  {
      __typename: "S3Info",
      key: string,
      width: number,
      height: number,
    },
    owner: string | null,
  } | null,
};

export type ListImagesQueryVariables = {
  filter?: ModelImageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListImagesQuery = {
  listImages:  {
    __typename: "ModelImageConnection",
    items:  Array< {
      __typename: "Image",
      id: string,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  id: string,
};

export type OnCreateUserSubscription = {
  onCreateUser:  {
    __typename: "User",
    id: string,
    username: string,
    avatar:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    posts:  Array< {
      __typename: "Post",
      id: string,
      createdAt: string,
      updatedAt: string,
      title: string,
      content: string,
      author: string | null,
      votes: number | null,
      owner: string | null,
    } >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  id: string,
};

export type OnUpdateUserSubscription = {
  onUpdateUser:  {
    __typename: "User",
    id: string,
    username: string,
    avatar:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    posts:  Array< {
      __typename: "Post",
      id: string,
      createdAt: string,
      updatedAt: string,
      title: string,
      content: string,
      author: string | null,
      votes: number | null,
      owner: string | null,
    } >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  id: string,
};

export type OnDeleteUserSubscription = {
  onDeleteUser:  {
    __typename: "User",
    id: string,
    username: string,
    avatar:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    posts:  Array< {
      __typename: "Post",
      id: string,
      createdAt: string,
      updatedAt: string,
      title: string,
      content: string,
      author: string | null,
      votes: number | null,
      owner: string | null,
    } >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePostSubscriptionVariables = {
  owner: string,
};

export type OnCreatePostSubscription = {
  onCreatePost:  {
    __typename: "Post",
    id: string,
    createdAt: string,
    updatedAt: string,
    title: string,
    content: string,
    author: string | null,
    images:  Array< {
      __typename: "Image",
      id: string,
      owner: string | null,
    } | null > | null,
    votes: number | null,
    owner: string | null,
    comments:  {
      __typename: "ModelCommentConnection",
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnUpdatePostSubscriptionVariables = {
  owner: string,
};

export type OnUpdatePostSubscription = {
  onUpdatePost:  {
    __typename: "Post",
    id: string,
    createdAt: string,
    updatedAt: string,
    title: string,
    content: string,
    author: string | null,
    images:  Array< {
      __typename: "Image",
      id: string,
      owner: string | null,
    } | null > | null,
    votes: number | null,
    owner: string | null,
    comments:  {
      __typename: "ModelCommentConnection",
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnDeletePostSubscriptionVariables = {
  owner: string,
};

export type OnDeletePostSubscription = {
  onDeletePost:  {
    __typename: "Post",
    id: string,
    createdAt: string,
    updatedAt: string,
    title: string,
    content: string,
    author: string | null,
    images:  Array< {
      __typename: "Image",
      id: string,
      owner: string | null,
    } | null > | null,
    votes: number | null,
    owner: string | null,
    comments:  {
      __typename: "ModelCommentConnection",
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnCreateCommentSubscriptionVariables = {
  createdBy: string,
};

export type OnCreateCommentSubscription = {
  onCreateComment:  {
    __typename: "Comment",
    id: string,
    createdAt: string,
    updatedAt: string,
    content: string,
    createdBy: string,
    votes: number | null,
    post:  {
      __typename: "Post",
      id: string,
      createdAt: string,
      updatedAt: string,
      title: string,
      content: string,
      author: string | null,
      votes: number | null,
      owner: string | null,
    } | null,
  } | null,
};

export type OnUpdateCommentSubscriptionVariables = {
  createdBy: string,
};

export type OnUpdateCommentSubscription = {
  onUpdateComment:  {
    __typename: "Comment",
    id: string,
    createdAt: string,
    updatedAt: string,
    content: string,
    createdBy: string,
    votes: number | null,
    post:  {
      __typename: "Post",
      id: string,
      createdAt: string,
      updatedAt: string,
      title: string,
      content: string,
      author: string | null,
      votes: number | null,
      owner: string | null,
    } | null,
  } | null,
};

export type OnDeleteCommentSubscriptionVariables = {
  createdBy: string,
};

export type OnDeleteCommentSubscription = {
  onDeleteComment:  {
    __typename: "Comment",
    id: string,
    createdAt: string,
    updatedAt: string,
    content: string,
    createdBy: string,
    votes: number | null,
    post:  {
      __typename: "Post",
      id: string,
      createdAt: string,
      updatedAt: string,
      title: string,
      content: string,
      author: string | null,
      votes: number | null,
      owner: string | null,
    } | null,
  } | null,
};

export type OnCreateImageSubscriptionVariables = {
  owner: string,
};

export type OnCreateImageSubscription = {
  onCreateImage:  {
    __typename: "Image",
    id: string,
    file:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    },
    fullsize:  {
      __typename: "S3Info",
      key: string,
      width: number,
      height: number,
    },
    thumbnail:  {
      __typename: "S3Info",
      key: string,
      width: number,
      height: number,
    },
    owner: string | null,
  } | null,
};

export type OnUpdateImageSubscriptionVariables = {
  owner: string,
};

export type OnUpdateImageSubscription = {
  onUpdateImage:  {
    __typename: "Image",
    id: string,
    file:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    },
    fullsize:  {
      __typename: "S3Info",
      key: string,
      width: number,
      height: number,
    },
    thumbnail:  {
      __typename: "S3Info",
      key: string,
      width: number,
      height: number,
    },
    owner: string | null,
  } | null,
};

export type OnDeleteImageSubscriptionVariables = {
  owner: string,
};

export type OnDeleteImageSubscription = {
  onDeleteImage:  {
    __typename: "Image",
    id: string,
    file:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    },
    fullsize:  {
      __typename: "S3Info",
      key: string,
      width: number,
      height: number,
    },
    thumbnail:  {
      __typename: "S3Info",
      key: string,
      width: number,
      height: number,
    },
    owner: string | null,
  } | null,
};

export type OnCreateVoteSubscriptionVariables = {
  createdBy: string,
};

export type OnCreateVoteSubscription = {
  onCreateVote:  {
    __typename: "Vote",
    id: string,
    postId: string,
    createdBy: string,
    createdAt: string,
    vote: VoteType | null,
  } | null,
};

export type OnUpdateVoteSubscriptionVariables = {
  createdBy: string,
};

export type OnUpdateVoteSubscription = {
  onUpdateVote:  {
    __typename: "Vote",
    id: string,
    postId: string,
    createdBy: string,
    createdAt: string,
    vote: VoteType | null,
  } | null,
};

export type OnDeleteVoteSubscriptionVariables = {
  createdBy: string,
};

export type OnDeleteVoteSubscription = {
  onDeleteVote:  {
    __typename: "Vote",
    id: string,
    postId: string,
    createdBy: string,
    createdAt: string,
    vote: VoteType | null,
  } | null,
};

export type OnCreateFollowingSubscriptionVariables = {
  createdBy: string,
};

export type OnCreateFollowingSubscription = {
  onCreateFollowing:  {
    __typename: "Following",
    id: string | null,
    followerId: string,
    followingId: string,
    createdAt: string,
  } | null,
};

export type OnUpdateFollowingSubscriptionVariables = {
  createdBy: string,
};

export type OnUpdateFollowingSubscription = {
  onUpdateFollowing:  {
    __typename: "Following",
    id: string | null,
    followerId: string,
    followingId: string,
    createdAt: string,
  } | null,
};

export type OnDeleteFollowingSubscriptionVariables = {
  createdBy: string,
};

export type OnDeleteFollowingSubscription = {
  onDeleteFollowing:  {
    __typename: "Following",
    id: string | null,
    followerId: string,
    followingId: string,
    createdAt: string,
  } | null,
};
