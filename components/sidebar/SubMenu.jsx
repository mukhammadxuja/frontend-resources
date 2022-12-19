const SubMenu = ({ menu, open }) => {
  return (
    <>
      {menu.subMenu && (
        <span>
          {menu.subMenu.map((subMenu, index) => (
            <a
              key={index}
              className={
                open === menu.id
                  ? 'flex scale-100 cursor-pointer flex-col'
                  : 'hidden'
              }
            >
              {subMenu.title}
            </a>
          ))}
        </span>
      )}
    </>
  );
};

export default SubMenu;
