import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Swal from "sweetalert2";


const Card = ({ card, onBookmarkClick, onMarkAsRead }) => {
  const [isRead, setIsRead] = useState(false);

  const handleBookmarkClick = () => {
    if (isRead) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You have already marked this blog as read!',
      });
    } else {
      onBookmarkClick(parseInt(card.read_time, 10));
      onMarkAsRead(card.blog_title);
      setIsRead(true);
    }
  };
  const handleMarkAsRead = () => {
    if (!isRead) {
      onMarkAsRead(card.blog_title);
      setIsRead(true);
    }
  };

  return (
    <>
      <div
        className="card
      mt-4 bg-base-100 shadow-2xl"
      >
        <figure className="w-full">
          <img src={card.images.blog_cover_image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="flex gap-4 justify-between">
            <img
              className="w-16 rounded-full"
              src={card.images.author_image}
              alt=""
            />
            <div className="flex flex-col mr-60">
              <h4 className="font-bold">{card.author_name}</h4>
              <p>{card.publish_date}</p>
            </div>
            <div className="flex gap-3 items-center">
              <p>{card.read_time}</p>
              <FontAwesomeIcon icon={faBookmark} onClick={handleBookmarkClick} />
            </div>
          </div>

          <p className="text-3xl bold mt-4">{card.blog_title}</p>
          <a className="text-violet-500 underline" href="#" onClick={handleMarkAsRead}>
            Mark as read
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
