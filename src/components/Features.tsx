import EcosystemIcon from "../assets/icons/ecosystem.svg";

const features = [
  {
    title: "Integration Ecosystem",
    description:
      "Enhance your productivity by connecting with your tools, keeping your essentials in one place.",
  },
  {
    title: "Goal Setting and Tracking",
    description:
      "Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.",
  },
  {
    title: "Secure Data Encryption",
    description:
      "With end-to-end encryption, your data is securely stored and protected from unauthorized access.",
  },
];

export const Features = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-center font-bold text-5xl sm:text-6xl tracking-tighter">
          Everything you need
        </h2>
        <p className="text-center mt-5 text-xl text-white/70 max-w-xl mx-auto">
          Enjoy customizable lists, team work tools, and smart tracking all in
          one place. Set tasks, get reminders, and see your progress simply and
          quickly.
        </p>

        <div className="mt-5 flex flex-col sm:flex-row sm:flex-1 gap-4">
          {features.map(({ title, description }) => (
            <div
              className="border border-white/30 px-5 py-10 text-center rounded-xl"
              key={title}
            >
              <div className="inline-flex bg-white text-black h-14 w-14  justify-center items-center rounded-lg">
                <EcosystemIcon />
              </div>
              <h3 className="mt-5 font-bold">{title}</h3>
              <p className="text-white/70 mt-2">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
