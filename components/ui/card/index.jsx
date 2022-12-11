import { RoundedButton } from 'components';

const Card = () => {
  return (
    <div className="group w-full space-y-3 lg:space-y-5 rounded-xl border-2 border-gray-300 p-3 duration-300 hover:border-morePurple hover:shadow-lg hover:shadow-purple-200 md:p-4 lg:p-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img
            className="h-16 w-16 rounded-xl"
            src="https://designresourc.es/assets/image/5ea6cfa29a5ca9162765aed7_5ea04e67bc13ef6060f34b23_figma.png"
            alt=""
          />
          <p className="ml-2 text-lg font-semibold text-gray-700 md:ml-3 md:text-xl">
            Figma
          </p>
        </div>
        <div className="flex items-center space-x-2">
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

          <span className="rounded-xl bg-purple-200 px-4 py-1.5 font-semibold text-purple-600 duration-200 hover:bg-purple-300">
            Design
          </span>
        </div>
      </div>
      <div className="space-y-2">
        <h1 className="text-lg font-bold text-gray-800 duration-200 group-hover:text-purple-500 md:text-2xl lg:font-extrabold">
          Curated colors in context.
        </h1>
        <div className='flex items-center space-x-2'>
          <button className="rounded-lg border-2 border-slate-300 px-4 py-0.5 font-semibold text-slate-700">
            billie
          </button>
          <button className="rounded-lg border-2 border-slate-300 px-4 py-0.5 font-semibold text-slate-700">
            billie
          </button>
          <button className="rounded-lg border-2 border-slate-300 px-4 py-0.5 font-semibold text-slate-700">
            billie
          </button>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <button className="w-full rounded-xl bg-gray-800 py-2 px-8 text-lg font-semibold text-white duration-200 hover:bg-gray-900">
          Go to Page
        </button>
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
          <span className="mb-1">0</span>
        </button>
      </div>
    </div>
  );
};

export default Card;
