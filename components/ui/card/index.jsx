import Image from 'next/image';
import { useCardContext } from 'context/cardContext';

const Card = (props) => {
  const {
    image,
    name,
    tag,
    description,
    link,
    colors,
    hashtags,
    trend,
    index,
  } = props;
  const { cardTag, colorVariants } = useCardContext();
  console.log(name);

  const tagColors = tag === cardTag ? `${colors.tagColors}` : '';

  return (
    <div
      key={index}
      className={`group w-full space-y-3 overflow-x-hidden rounded-xl border-2 border-border bg-transparent p-3 shadow transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:p-4 lg:p-5`}
    >
      <div className="flex items-center justify-between">
        <div className="flex h-16 w-full items-center">
          <div className="rounded-xl bg-slate-50 p-1 dark:bg-transparent">
            <Image
              src={image}
              className="rounded-lg"
              width={45}
              height={45}
              layout="fixed"
              alt=""
            />
          </div>
          <h4 className="ml-2 w-full text-lg font-semibold text-primary md:ml-3 md:text-xl">
            {name}
          </h4>
        </div>
        <div className="flex items-center space-x-2">
          {trend.favorite && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6 text-yellow-400"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </div>
      </div>
      <div className="space-y-3">
        <p className="text-base text-muted line-clamp-2 md:text-base !leading-tight">
          {description}
        </p>
        <div className="flex items-center space-x-2">
          {hashtags.map((hashtag, index) => (
            <span
              key={index}
              className={`text-[13px flex w-fit select-none items-center whitespace-nowrap rounded-[8px] bg-background px-2 py-1 text-center font-semibold leading-[1.3em] tracking-[-0.1px] text-primary duration-300 hover:bg-opacity-95 active:translate-y-0.5 md:w-fit`}
            >
              #{hashtag}
            </span>
          ))}
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn_primary w-full"
        >
          Go to Page
        </a>
        <button className="btn btn_ghost flex w-fit items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
          <span className="mb-1">{trend.like}</span>
        </button>
      </div>
    </div>
  );
};

export default Card;
