import { RoundedButton } from 'components';
import { useCardContext } from 'context/cardContext';

import { menu } from 'data/menu';

const Menu = () => {
  const { setCardTag } = useCardContext();

  return (
    <div className="container relative mx-auto overflow-x-scroll scrollbar-hide">
      <div className="flex w-full items-center space-x-2 sm:max-w-7xl md:mx-auto md:mt-16 md:flex-wrap md:justify-center">
        {menu.map((menu, index) => (
          <div key={index}>
            <RoundedButton setCardTag={setCardTag} title={menu.title} />
          </div>
        ))}
        <RoundedButton
          setCardTag={setCardTag}
          link="dashboard"
          title="More..."
        />
      </div>
    </div>
  );
};

export default Menu;
