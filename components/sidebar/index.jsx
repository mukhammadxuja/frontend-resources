import { useState } from 'react';
import { RiArrowDownSLine } from 'react-icons/ri';

import SubMenu from './SubMenu';
import { menu } from 'data/menu';

const Sidebar = ({ children }) => {
  const [open, setOpen] = useState(0);

  return (
    <div className="container  mx-auto flex">
      <aside className="my-20">
        {menu.map((menu, index) => (
          <ul className="" key={index}>
            <li>
              <span
                onClick={() => setOpen(menu.id)}
                className="flex cursor-pointer items-center space-x-2"
              >
                <a>{menu.title}</a>
                {menu.subMenu && <RiArrowDownSLine />}
              </span>
              <SubMenu menu={menu} open={open} />
            </li>
          </ul>
        ))}
      </aside>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
