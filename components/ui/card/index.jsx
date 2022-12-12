import Image from 'next/image';
import { useCardContext } from 'context/cardContext';

const Card = (props) => {
  const { cardTag } = useCardContext();

  return (
    <div
      key={props.index}
      className={
        props.tag === cardTag
          ? 'group w-full space-y-3 rounded-xl border-2 border-gray-300 p-3 duration-300 hover:-translate-y-1 hover:border-morePurple hover:shadow-lg hover:shadow-purple-200 md:p-4 lg:space-y-5 lg:p-5'
          : 'hidden'
      }
    >
      <div className="flex items-center justify-between">
        <div className="flex h-16 w-16 items-center">
          <div className="rounded-xl bg-slate-50 p-1">
            <Image
              src={props.image}
              className="rounded-lg"
              width={45}
              height={45}
              layout="fixed"
              alt=""
            />
          </div>
          <p className="ml-2 text-lg font-semibold text-gray-700 md:ml-3 md:text-xl">
            {props.name}
          </p>
        </div>
        <div className="flex items-center space-x-2">
          {props.trend.favorite && (
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

          <span
            className={`rounded-xl bg-[${props.color.background}] px-4 py-1.5 font-semibold text-[#+${props.color.text}]`}
          >
            {props.tag}
          </span>
        </div>
      </div>
      <div className="space-y-2">
        <h1 className="text-lg font-bold text-gray-800 duration-200 line-clamp-2 md:text-lg lg:font-extrabold">
          {props.description}
        </h1>
        <div className="flex items-center space-x-2">
          {props.hashtags.map((hashtag) => (
            <button className="rounded-lg border-2 border-slate-300 px-4 py-0.5 font-semibold text-slate-700">
              #{hashtag}
            </button>
          ))}
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <a
          href={props.link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full rounded-xl border-2 border-gray-300 bg-white py-2 px-8 text-center text-lg font-semibold text-gray-800 duration-200 hover:border-gray-600"
        >
          Go to Page
        </a>
        <button className="flex w-fit items-center space-x-2 rounded-xl bg-gray-800 py-2 px-4 font-semibold text-white duration-200 hover:bg-gray-900">
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
          <span className="mb-1">{props.trend.like}</span>
        </button>
      </div>
    </div>
  );
};

export default Card;
