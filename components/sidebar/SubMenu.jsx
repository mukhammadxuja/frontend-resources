import { useCardContext } from 'context/cardContext';

const SubMenu = ({ menu, open }) => {
  const { setCardTag, cardTag } = useCardContext();
  return (
    <>
      {menu.subMenu && (
        <div className="ml-5 border-l-2 pl-4">
          {menu.subMenu.map((subMenu, index) => (
            <div
              className={`${open === menu.id ? '' : 'hidden'} my-2`}
              key={index}
              onClick={() => setCardTag(subMenu.title)}
            >
              <a
                className={`cursor-pointer whitespace-nowrap rounded-lg text-lg font-semibold w-full text-gray-500 hover:bg-gray-100`}
              >
                {subMenu.title}
              </a>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default SubMenu;
