import React from 'react';
import user from '../../assets/user.jpg'

const Header = () => {
    return (
        <>
            <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case font-bold text-3xl">Programmers Zone</a>
  </div>
  <div className="flex-none gap-2">
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={user} />
        </div>
      </label>
    </div>
  </div>
</div>
 <hr className='border-1' />
        </>
    );
};

export default Header;