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
    <div className="group relative" onClick={handleSetTagName}>
      <button className="flex items-center justify-between whitespace-nowrap rounded-xl border-2 border-slate-300 px-8 py-2 font-semibold text-slate-700 duration-200 hover:border-morePurple md:mt-3">
        <span>{title}</span>
        {subMenu && <MdArrowBackIosNew className="mt-1 ml-2 -rotate-90" />}
      </button>
      <ul className="absolute top-0 left-0 z-50 hidden -translate-x-1/2 bg-white text-center rounded-lg p-2 group-hover:block">
        {menu.subMenu?.map((sub, index) => (
          <li key={index}>{sub.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default RoundedButton;
