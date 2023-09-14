import React from "react";

type ListProps = {
  title: string;
  items: { title: string; description: string }[];
};

const List: React.FC<ListProps> = ({ items, title }) => {
  return (
    <div className="mt-24 grid-area-[span_1_/_span_6_/_span_1_/_span_6] sm:pr-[8vw]">
      <h3 className="text-xl font-bold">{title}</h3>

      <ul className="flex flex-col gap-6 pt-12">
        {items.map(({ title, description }) => (
          <li key={title + description}>
            <h4 className="text-sm font-bold">{title}</h4>
            <p className="text-xs text-neutral-400">{description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
