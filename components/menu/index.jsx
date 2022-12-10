import { RoundedButton } from 'components';

const Menu = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="mt-16 space-x-2 space-y-2 md:space-y-3">
        <RoundedButton title="All" />
        <RoundedButton title="Tools" />
        <RoundedButton title="Style" />
        <RoundedButton title="Creative" />
        <RoundedButton title="Ideas" />
        <RoundedButton title="Best Practices" />
        <RoundedButton title="News" />
        <RoundedButton title="Books" />
        <RoundedButton title="Jobs" />
        <RoundedButton title="Podcast" />
        <br />
        <div className="flex items-center justify-center space-x-2">
          <RoundedButton title="Icons" />
          <RoundedButton title="Fonts" />
          <RoundedButton title="Templates" />
          <RoundedButton title="Photos" />
        </div>
      </div>
    </div>
  );
};

export default Menu;
