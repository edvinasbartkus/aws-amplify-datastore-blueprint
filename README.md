# AWS Amplify sample project with AppSync and DataStore for React Native and Web

## Monorepo

The project uses `yarn` workspaces. It contains three projects:
- `packages/web` - react app
- `packages/mobile` - react native app
- `packages/components` - shared code for web and mobile

If you want to learn more about monorepo setup you can follow the article by [@brunolemos](https://dev.to/brunolemos/tutorial-100-code-sharing-between-ios-android--web-using-react-native-web-andmonorepo-4pej).


## Amplify
It is configured to use Amplify project that you need to setup. Here are the steps that were done to make it work:

```
cd packages/components
amplify init
amplify api add
amplify push
```

This project uses GraphQL API with the following schema:
```
type Blog @model @versioned {
  id: ID!
  name: String!
  posts: [Post] @connection(name: "BlogPosts")
}
type Post @model @versioned {
  id: ID!
  title: String!
  blog: Blog @connection(name: "BlogPosts")
  comments: [Comment] @connection(name: "PostComments")
}
type Comment @model @versioned {
  id: ID!
  content: String
  post: Post @connection(name: "PostComments")
}
```

**Important** include `@versioned` annotation for your models.

After those steps, you will get `packages/components/amplify` project filled with the right files and also `packages/components/aws-export.js` will be created.

DataStore itself does not need any remote configuration, it will use AppSync that you have created.

## Run

Next, you can run the projects:

### Start web
```
yarn workspaces web start
```

### Start iOS app
Launch metro builder:
```
yarn workspaces mobile start
```

Launch simulator with the app:
```
yarn workspaces mobile ios
```
