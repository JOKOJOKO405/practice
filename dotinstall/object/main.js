'use strict';

{
  const posts = [
    {
        text: 'studing javascript',
        likeCount: 0,
    },
    {
      text: 'studing php',
      likeCount: 0,
    },
  ];
  
  function show(post){
    console.log(`${post.text} - ${post.likeCount}`);
  }

  show(posts[1]);
}