---
title: Getting Started with React and JavaScript
excerpt: Learn how to set up and use React with TypeScript for better development experience.
author: Jane Smith
date: 2024-03-15
imageUrl: https://images.unsplash.com/photo-1633356122544-f134324a6cee
readTime: 5 min read
---

# Getting Started with React and TypeScript

React and TypeScript are a powerful combination that can help you write more maintainable and scalable applications. In this post, we'll explore how to get started with this dynamic duo.

## Why TypeScript?

TypeScript adds static typing to JavaScript, which can help catch errors early in development and provide better tooling support. Here are some key benefits:

1. Better IDE support
2. Catch errors at compile time
3. Improved code maintainability
4. Enhanced code documentation

## Setting Up Your Project

To start a new React + TypeScript project, you can use Create React App with the TypeScript template:

```bash
npx create-react-app my-app --template typescript
```

## Basic TypeScript Usage in React

Here's a simple example of a typed React component:

```typescript
interface Props {
   name: string;
   age: number;
}

const UserProfile: React.FC<Props> = ({ name, age }) => {
   return (
      <div>
         <h1>{name}</h1>
         <p>Age: {age}</p>
      </div>
   );
};
```

## Conclusion

TypeScript and React make a great team for building robust applications. Start small and gradually add more type safety to your components as you become more comfortable with TypeScript.
