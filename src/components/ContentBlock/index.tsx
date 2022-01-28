import React from "react";
import { Description } from "../../types";

interface Props {
  title: string;
  description: Description;
  clickHandler?: (data: Description) => void;
}

const ContentBlock: React.FC<Props> = ({
  title,
  description,
  clickHandler,
}) => {
  const isClickable = !!clickHandler;

  return (
    <div>
      <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
        <div className="flex flex-wrap justify-center">
          <div className="w-full lg:w-9/12 px-4">
            <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
              {title}
            </h3>
            {Array.isArray(description) && description.length ? (
              <div
                className={`grid portrait:grid-cols-1 gap-4 ${
                  description.length > 2 ? " grid-cols-3" : " grid-cols-2"
                }`}
              >
                {description.map((desc: Description) => (
                  <p
                    className={`mb-4 text-lg leading-relaxed text-blueGray-700 text-center text-sm font-semibold text-indigo-700 dark:text-indigo-400 ${
                      isClickable ? "hover:underline cursor-pointer" : ""
                    }`}
                    onClick={() => clickHandler?.(desc)}
                  >
                    {desc?.name ?? desc}
                  </p>
                ))}
              </div>
            ) : (
              <p
                className={`mb-4 text-lg leading-relaxed text-blueGray-700 text-center text-sm font-semibold text-indigo-700 dark:text-indigo-400 ${
                  isClickable ? "hover:underline cursor-pointer" : ""
                }`}
                onClick={() => clickHandler?.(description)}
              >
                {description?.name ?? description}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentBlock;
