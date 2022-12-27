import { useState } from 'react';
import { MdArrowBackIosNew } from 'react-icons/md';
import {
  TbThumbUp,
  TbApi,
  TbMathFunction,
  TbBrandCss3,
  TbBrandJavascript,
  TbBrandAngular,
} from 'react-icons/tb';
import { RxColorWheel } from 'react-icons/rx';
import { BiGitBranch } from 'react-icons/bi';
import { FaReact, FaVuejs } from 'react-icons/fa';
import { AiOutlineHtml5 } from 'react-icons/ai';
import { TfiLightBulb } from 'react-icons/tfi';

import { useCardContext } from 'context/cardContext';
import SubMenu from './SubMenu';
import { menus } from 'data/menus';

const icons = [
  TbThumbUp,
  TbApi,
  TbMathFunction,
  RxColorWheel,
  AiOutlineHtml5,
  TbBrandCss3,
  BiGitBranch,
  TbBrandJavascript,
  FaReact,
  FaVuejs,
  TbBrandAngular,
  TfiLightBulb,
];

const Sidebar = ({ children }) => {
  const [open, setOpen] = useState(0);
  const { setCardTag, cardTag } = useCardContext();

  const handleClick = (menuId, tag) => {
    setOpen(menuId);
    setCardTag(tag);
  };

  return (
    <div className="container mx-auto flex gap-5">
      <aside className="my-10">
        {menus.map((menu, index) => {
          const Icon = icons[index];
          return (
            <ul className="md:w-72" key={index}>
              <li>
                <div
                  onClick={() => setCardTag(menu.title)}
                  onDoubleClick={() => setOpen(0)}
                  className="flex cursor-pointer items-center justify-between rounded-lg p-2 hover:bg-gray-100"
                >
                  <div className="flex items-center space-x-2">
                    <Icon className="rounded-lg bg-gray-200 p-2 text-4xl text-gray-600" />
                    <a
                      className={`${
                        cardTag === menu.title ? 'text-black' : ''
                      } whitespace-nowrap text-lg font-semibold text-gray-500`}
                    >
                      {menu.title}
                    </a>
                  </div>
                  {menu.subMenu && (
                    <MdArrowBackIosNew
                      onClick={() => setOpen(menu.id)}
                      className={
                        open === menu.id
                          ? 'mt-1 mr-2 rotate-90'
                          : 'mt-1 mr-2 -rotate-90'
                      }
                    />
                  )}
                </div>
                <SubMenu menu={menu} open={open} />
              </li>
            </ul>
          );
        })}
      </aside>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
