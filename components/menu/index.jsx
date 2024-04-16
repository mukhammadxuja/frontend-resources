import { RoundedButton } from 'components';
import { useMainContext } from 'context/MainContext';

import { menus } from 'data/menus';

const Menu = () => {
  const { setCardTag } = useMainContext();

  return (
    <div className="container relative mx-auto">
      <div className="flex w-full items-center space-x-2 sm:max-w-7xl md:mx-auto md:flex-wrap md:justify-center md:py-16">
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
