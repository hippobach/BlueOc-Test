import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPosts } from '../../../redux/posts/postsSlice';

import './PostsForm.css';

const PostsForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addPosts({ title, body }));
    setTitle('');
    setBody('');
  };

  return (
    <form className="form-wrapper" onSubmit={handleSubmit}>
      <div className="input-container">
        <label htmlFor="title">Title</label>
        <input
          id="form-title"
          className="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="body-container">
        <label htmlFor="body">Body</label>
        <textarea
          id="form-body"
          className="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        />
      </div>
      <button className="submitBtn" type="submit">
        Submit
      </button>
    </form>
  );
};

export default PostsForm;
