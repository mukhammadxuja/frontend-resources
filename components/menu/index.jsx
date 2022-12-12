import { RoundedButton } from 'components';
import { useCardContext } from 'context/cardContext';

const Menu = () => {
  const { setCardTag } = useCardContext();

  return (
    <div className="flex items-center justify-center">
      <div className="mt-16 space-x-2 space-y-2 md:space-y-3">
        <RoundedButton setCardTag={setCardTag} title="All" />
        <RoundedButton setCardTag={setCardTag} title="Tools" />
        <RoundedButton setCardTag={setCardTag} title="Style" />
        <RoundedButton setCardTag={setCardTag} title="Creative" />
        <RoundedButton setCardTag={setCardTag} title="Ideas" />
        <RoundedButton setCardTag={setCardTag} title="Best Practices" />
        <RoundedButton setCardTag={setCardTag} title="News" />
        <RoundedButton setCardTag={setCardTag} title="Books" />
        <RoundedButton setCardTag={setCardTag} title="Jobs" />
        <RoundedButton setCardTag={setCardTag} title="Podcast" />
        <br />
        <div className="flex items-center justify-center space-x-2">
          <RoundedButton setCardTag={setCardTag} title="Icons" />
          <RoundedButton setCardTag={setCardTag} title="Fonts" />
          <RoundedButton setCardTag={setCardTag} title="Design" />
          <RoundedButton setCardTag={setCardTag} title="Templates" />
          <RoundedButton setCardTag={setCardTag} title="Photos" />
        </div>
      </div>
    </div>
  );
};

export default Menu;
