 interface ButtonProps {
  heading: string;
  color?: string;
  onClick?: () => null;
}

const Button = ({ heading, color }: ButtonProps) => {
  return (
    <div>
      {color ? (
        <button className="mr-5 border-2 rounded-sm px-4 py-2 bg-purple-700 hover:bg-purple-900 text-white ">
          {heading}
        </button>
      ) : (
        <button className="mr-5 border-2 rounded-lg border-black hover:border-white px-4 py-2 hover:bg-black hover:text-white ">
          {heading}
        </button>
      )}
    </div>
  );
};

export default Button;
