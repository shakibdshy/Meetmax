import React, { useState } from 'react'
import useFetch from '../hooks/useFetch';
import PostItem from './PostItem';


const Post = () => {
  const [userData] = useFetch();
  const { user, posts } = userData;
  const [counter, setCounter] = useState({ like: 10 });
  const [active, setActive] = useState({ like: false });

  const handleLike = () => {
    if (active.like) {
      setCounter({ like: counter.like - 1 });
      setActive({ like: false });
    } else {
      setCounter({ like: counter.like + 1 });
      setActive({ like: true });
    }
  }

  return (
    <>
      <div>
        {
          posts?.map((post) => (
            <PostItem post={post} user={user} />
          ))
        }
      </div>
    </>
  )
}

export default Post