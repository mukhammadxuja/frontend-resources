const Button = ({ children }) => {
  function createRipple(event) {
    const button = event.currentTarget;

    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add('ripple');

    const ripple = button.getElementsByClassName('ripple')[0];

    if (ripple) {
      ripple.remove();
    }

    button.appendChild(circle);
  }

  return (
    <button
      className="relative overflow-hidden rounded-lg bg-blue-200 px-6 py-3 text-xl font-semibold text-white text-blue-500 outline-none transition duration-300 hover:bg-blue-300 active:bg-blue-200"
      onClick={createRipple}
    >
      {children}
    </button>
  );
};

export default Button;
