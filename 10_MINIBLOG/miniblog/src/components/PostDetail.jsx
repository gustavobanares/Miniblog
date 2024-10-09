import styles from './PostDetail.module.css';
import { Link } from 'react-router-dom';

const PostDetail = ({ post }) => {
  if (!post) {
    return <p>Post não encontrado!</p>;
  }

  return (
    <div>
      <img src={post.image} alt={post.title} />
      <h2>{post.title}</h2>
      <p>{post.createdBy}</p>
      <div>
        {post.tagsArray.map((tag) => (
          <p key={tag}>
            <span>#</span>{tag}
          </p>
        ))}
      </div>
      <Link to={`/posts/${post.id}`} className='btn btn-outline'>Ler</Link>
    </div>
  );
};

export default PostDetail;
