/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBlog = /* GraphQL */ `
  subscription OnCreateBlog {
    onCreateBlog {
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
export const onUpdateBlog = /* GraphQL */ `
  subscription OnUpdateBlog {
    onUpdateBlog {
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
export const onDeleteBlog = /* GraphQL */ `
  subscription OnDeleteBlog {
    onDeleteBlog {
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
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
