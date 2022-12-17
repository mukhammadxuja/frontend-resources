import { RoundedButton } from 'components';
import { useCardContext } from 'context/cardContext';

const Menu = () => {
  const { setCardTag } = useCardContext();

  return (
    <div className="container mx-auto overflow-x-scroll scrollbar-hide">
      <div className="mt-10 flex w-full items-center space-x-2 sm:max-w-7xl md:mx-auto md:mt-16 md:flex-wrap md:justify-center">
        <RoundedButton setCardTag={setCardTag} title="Recommended" />
        <RoundedButton setCardTag={setCardTag} title="Tools" />
        <RoundedButton setCardTag={setCardTag} title="Style" />
        <RoundedButton setCardTag={setCardTag} title="Ideas" />
        <RoundedButton setCardTag={setCardTag} title="Read" />
        <RoundedButton setCardTag={setCardTag} title="Creative" />
        <RoundedButton setCardTag={setCardTag} title="Best Practices" />
        <RoundedButton setCardTag={setCardTag} title="News" />
        <RoundedButton setCardTag={setCardTag} title="Books" />
        <RoundedButton setCardTag={setCardTag} title="Jobs" />
        <RoundedButton setCardTag={setCardTag} title="Podcast" />
        <RoundedButton setCardTag={setCardTag} title="Icons" />
        <RoundedButton setCardTag={setCardTag} title="Fonts" />
        <RoundedButton setCardTag={setCardTag} title="Design" />
        <RoundedButton setCardTag={setCardTag} title="Templates" />
        <RoundedButton setCardTag={setCardTag} title="Photos" />
      </div>
    </div>
  );
};

export default Menu;
