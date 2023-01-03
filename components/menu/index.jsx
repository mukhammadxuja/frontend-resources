import { RoundedButton } from 'components';
import { useCardContext } from 'context/cardContext';

import { menus } from 'data/menus';

const Menu = () => {
  const { setCardTag } = useCardContext();

  return (
    <div className="container relative mx-auto overflow-x-scroll scrollbar-hide">
      <div className="flex w-full items-center space-x-2 sm:max-w-7xl md:mx-auto md:mt-16 md:flex-wrap md:justify-center">
        {menus.map((menu, index) => (
          <div key={index}>
            <RoundedButton
              menu={menu}
              subMenu={menu.subMenu}
              setCardTag={setCardTag}
              title={menu.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
