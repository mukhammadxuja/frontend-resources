import { useMainContext } from 'context/MainContext';

const SubMenu = ({ menu, open }) => {
  const { setCardTag } = useMainContext();
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
                className={`flex w-full flex-grow cursor-pointer whitespace-nowrap rounded-lg p-2 text-lg font-semibold text-gray-500 hover:bg-gray-100`}
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
