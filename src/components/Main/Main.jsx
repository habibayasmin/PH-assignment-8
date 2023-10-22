
import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const Main = () => {
  const [cards, setCards] = useState([]);
  const [totalReadTime, setTotalReadTime] = useState(0);
  const [readBlogs, setReadBlogs] = useState([]);

  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setCards(data));
  }, []);

  const handleBookmarkClick = (readTime) => {
    setTotalReadTime(totalReadTime + readTime);
  };

  const handleMarkAsRead = (blogTitle) => {
    setReadBlogs([...readBlogs, blogTitle]);
  };

  return (
    <div className='flex gap-10'>
      <div className='w-8/12'>
        {cards.map(card => (
          <Card
            key={card.id}
            card={card}
            onBookmarkClick={handleBookmarkClick}
            onMarkAsRead={handleMarkAsRead}
          />
        ))}
      </div>

      <div className='w-4/12'>
        <div className='bg-violet-200 text-violet-500 w-25 h-12 text-center mt-6 font-bold'>
          <h1 className='mt-2'>Spent Time on read: {totalReadTime} minutes</h1>
        </div>
        <div className='bg-gray-200 mt-6 w-50 border-2'>
          <h1 className='font-bold text-2xl text-center'>Bookmarked Blogs: {readBlogs.length}</h1>
          {readBlogs.map((blog, index) => (
            <p className='text-center mt-4 mb-4 ' key={index}>{blog}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;

