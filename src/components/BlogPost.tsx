import React from 'react';
import { posts } from '../libs/constants/api';
import useHandleApi from '../libs/hooks/useHandleApi';
import '../assets/css/BlogPost.css';

const BlogPost = () => {
  const { data, loading, error, refetchData } = useHandleApi(posts);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const renderCards = (start:number, end:number) => {
    return data?.slice(start, end).map(item => (
      <div key={item.id} className='card'>
        <div className='card-body'>
          <div className='card-title'>
            <h2>{item.title}</h2>
          </div>
          <div className='card-text'>
            <p>{item.body}</p>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className='blog-body'>
      <div className='container'>
        <button className='btn' onClick={refetchData}>Refresh</button>
        <div className="box">{renderCards(0, 2)}</div>
        <div className="box">{renderCards(2, 4)}</div>
        <div className="box">{renderCards(4, 6)}</div>
        <div className="box">{renderCards(6, 8)}</div>
      </div>
    </div>
  );
};

export default BlogPost;