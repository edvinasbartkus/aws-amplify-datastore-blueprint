/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBlog = /* GraphQL */ `
  mutation CreateBlog(
    $input: CreateBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    createBlog(input: $input, condition: $condition) {
      id
      name
      posts {
        items {
          id
          title
          _version
          _deleted
          _lastChangedAt
          version
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      version
    }
  }
`;
export const updateBlog = /* GraphQL */ `
  mutation UpdateBlog(
    $input: UpdateBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    updateBlog(input: $input, condition: $condition) {
      id
      name
      posts {
        items {
          id
          title
          _version
          _deleted
          _lastChangedAt
          version
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      version
    }
  }
`;
export const deleteBlog = /* GraphQL */ `
  mutation DeleteBlog(
    $input: DeleteBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    deleteBlog(input: $input, condition: $condition) {
      id
      name
      posts {
        items {
          id
          title
          _version
          _deleted
          _lastChangedAt
          version
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      version
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
      title
      blog {
        id
        name
        posts {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        version
      }
      comments {
        items {
          id
          content
          _version
          _deleted
          _lastChangedAt
          version
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      version
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
      title
      blog {
        id
        name
        posts {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        version
      }
      comments {
        items {
          id
          content
          _version
          _deleted
          _lastChangedAt
          version
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      version
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
      title
      blog {
        id
        name
        posts {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        version
      }
      comments {
        items {
          id
          content
          _version
          _deleted
          _lastChangedAt
          version
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      version
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
      content
      post {
        id
        title
        blog {
          id
          name
          _version
          _deleted
          _lastChangedAt
          version
        }
        comments {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        version
      }
      _version
      _deleted
      _lastChangedAt
      version
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
      content
      post {
        id
        title
        blog {
          id
          name
          _version
          _deleted
          _lastChangedAt
          version
        }
        comments {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        version
      }
      _version
      _deleted
      _lastChangedAt
      version
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
      content
      post {
        id
        title
        blog {
          id
          name
          _version
          _deleted
          _lastChangedAt
          version
        }
        comments {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        version
      }
      _version
      _deleted
      _lastChangedAt
      version
    }
  }
`;
