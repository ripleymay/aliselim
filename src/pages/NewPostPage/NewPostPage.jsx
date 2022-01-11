import React from 'react';
import NewPostForm from '../../components/NewPostForm/NewPostForm';

export default function NewPostPage() {

  return (
    <>
      <h1 className="welcome">Make a new post!</h1>
      <hr />
      <NewPostForm />
    </>
  );
}