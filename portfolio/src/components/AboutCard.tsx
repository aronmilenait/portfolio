import { ReactNode } from "react";

interface AboutCardProps {
  icon: ReactNode;
  text: ReactNode;
}

const AboutCard = ({ icon, text }: AboutCardProps) => (
  <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg flex flex-col items-center">
    {icon}
    <p className="text-lg text-white font-semibold">{text}</p>
  </div>
);

export default AboutCard;