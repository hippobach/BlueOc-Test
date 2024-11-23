import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../../../redux/posts/postsSlice';

import './PostsList.css';

const PostsList = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const status = useSelector((state) => state.posts.status);
  const error = useSelector((state) => state.posts.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPosts());
    }
  }, [dispatch, status]);

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'failed') return <p>Error: {error}</p>;

  return (
    <div className="list-wrapper">
      <ul className="list-posts">
        {posts.map((post) => (
          <li key={post.id} className="list-posts-item">
            <h3 className="list-post-title">{post.title}</h3>
            <p className="list-post-body">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsList;
