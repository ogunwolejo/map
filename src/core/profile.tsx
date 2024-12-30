import { JSX, useMemo, memo } from "react";
import { clsx } from "clsx";

type TProfile = {
  name: string;
  imageUrl?: string;
  size?: "sm" | "md" | "lg";
};

const Profile = memo(({ imageUrl, size, name }: TProfile): JSX.Element => {
  const abbreviation = useMemo(
    () =>
      name
        .split(" ")
        .map((word) => word[0])
        .join("")
        .toUpperCase(),
    [name],
  );

  const sizeClasses = useMemo(
    () =>
      clsx({
        "w-6 h-6 text-sm": size === "sm",
        "w-8 h-8 text-base": size === "md",
        "w-12 h-12 text-lg": size === "lg",
      }),
    [size],
  );

  return (
    <>
      <div
        className={clsx(
          "flex items-center justify-center rounded-full bg-gray-200 text-gray-800 font-poppins",
          sizeClasses,
        )}
      >
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={name}
            className="rounded-full object-cover h-full w-full"
          />
        ) : (
          <span className="font-poppins font-medium">{abbreviation}</span>
        )}
      </div>
    </>
  );
});

export default Profile;
