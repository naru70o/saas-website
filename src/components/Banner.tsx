import "./banner.css";
export const Banner = () => {
  return (
    <div className="py-3 text-center banner">
      <div className="container">
        <p className="font-medium">
          <span className="hidden sm:inline-block">
            Introducing a completely redesigned interface —
          </span>
          <a href="#" className="underline underline-offset-4 font-medium">
            Explore the Demo
          </a>
        </p>
      </div>
    </div>
  );
};
