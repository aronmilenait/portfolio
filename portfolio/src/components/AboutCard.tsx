import { ReactNode } from "react";

interface AboutCardProps {
  icon: ReactNode;
  text: ReactNode;
}

const AboutCard = ({ icon, text }: AboutCardProps) => (
  <div className="max-w-lg text-pink-800 bg-pink-100 bg-opacity-70 p-6 rounded-lg border-2 border-pink-500 shadow-lg flex flex-col items-center">
    {icon}
    <p className="text-lg font-semibold">{text}</p>
  </div>
);

export default AboutCard;
