import { MdArrowBackIosNew } from 'react-icons/md';

const RoundedButton = ({
  setCardTag,
  menu,
  title,
  subMenu,
  link = `#${title}`,
}) => {
  const handleSetTagName = () => setCardTag(title);

  console.log(menu);

  return (
    <div className='relative' onClick={handleSetTagName}>
      <button className="group flex items-center justify-between whitespace-nowrap rounded-xl border-2 border-slate-300 px-8 py-2 font-semibold text-slate-700 duration-200 hover:border-morePurple md:mt-3">
        <span>{title}</span>
        {subMenu && <MdArrowBackIosNew className="mt-1 ml-2 -rotate-90" />}
        <ul className="absolute -bottom-10 left-1/2 z-40 -translate-x-1/2 hidden rounded-lg p-2 group-hover:block">
          {menu.subMenu?.map((sub) => (
            <li>{sub.title}</li>
          ))}
        </ul>
      </button>
    </div>
  );
};

export default RoundedButton;
