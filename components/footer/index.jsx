const Footer = () => {
  return (
    <footer className="container mx-auto my-5 flex flex-col items-center justify-between md:!my-10 md:flex-row">
      <ul className="md:justify-normal flex w-full items-center space-x-2 md:space-x-3">
        <li className="link hover:underline">
          <a href="#">Contact</a>
        </li>
        <li className="link hover:underline">
          <a href="#">Github</a>
        </li>
        <li className="link hover:underline">
          <a href="#">Telegram</a>
        </li>
        <li className="link hover:underline">
          <a href="#">Linkedin</a>
        </li>
      </ul>
      <div className="flex items-center space-x-2">
        {/* <img
          className="w-8 cursor-pointer hover:opacity-80 duration-500 hover:rotate-180"
          src="./logo.svg"
          alt="Anvarov Mukhammad logo"
        /> */}
        <p className="paragraph md:text-start mt-4 whitespace-nowrap text-center text-sm md:mt-0 md:text-base">
          ©2024
          <span className="mx-1">|</span>
          <span>
            Made by
            <a
              className="link mx-1 text-muted"
              href="https://mukhammadjohn.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Anvarov M
            </a>
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
