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

import { useMainContext } from 'context/MainContext';
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
  const { setCardTag, cardTag, colorVariants } = useMainContext();
  console.log();

  const handleClick = (menuId, tag) => {
    setOpen(menuId);
    setCardTag(tag);
  };

  return (
    <aside>
      {menus.map((menu, index) => {
        console.log(menu.color);
        const Icon = icons[index];
        return (
          <ul className="md:w-72" key={index}>
            <li>
              <div
                onClick={() => setCardTag(menu.title)}
                onDoubleClick={() => setOpen(0)}
                className={`flex cursor-pointer items-center justify-between rounded-lg p-2 hover:bg-gray-100 ${
                  cardTag === menu.title && colorVariants[menu.color]
                }`}
              >
                <div className="flex items-center space-x-2">
                  <Icon
                    className={`bg-[${menu.color}] ${
                      cardTag === menu.title ? colorVariants[menu.color] : ''
                    } rounded-lg p-2 text-4xl text-gray-600 hover:!bg-transparent`}
                  />
                  <a
                    className={`${
                      cardTag === menu.title ? colorVariants[menu.color] : ''
                    } whitespace-nowrap text-lg font-semibold text-gray-500 hover:!bg-transparent`}
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
  );
};

export default Sidebar;
