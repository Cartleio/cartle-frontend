"use client";
type ReasonProps = {
  title: string;
  content: string;
};
const Reason: React.FC<ReasonProps> = ({ title, content }) => {
  return (
    <div className="border-2 px-4 py-10 rounded-br-[30%] max-w-xs relative">
      <div className="h-10 w-10 absolute bg-primary-500 -top-5 rounded-br-[30%]"></div>
      <h2 className="mb-2 text-lg font-semibold">{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default Reason;
