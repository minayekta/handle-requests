import { posts } from '../libs/constants/api';
import useHandleApi from '../libs/hooks/useHandleApi';

const BlogPost =()=> {
 
  const { data, loading, error, refetchData } = useHandleApi(posts);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div>
    {data?.map((item)=>
      <div>
       {item.title}
      </div>
    )}
    <button onClick={refetchData}>Refresh</button>
  </div>
  )
}

export default BlogPost