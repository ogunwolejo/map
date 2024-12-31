import {JSX, useMemo, memo} from 'react';
import {clsx} from 'clsx';

type TProfile = {
  name: string;
  imageUrl?: string;
  size?: 'sm' | 'md' | 'lg';
  bgColor?: string;
};

const Profile = memo(
  ({imageUrl, size, name, bgColor}: TProfile): JSX.Element => {
    const abbreviation = useMemo(
      () =>
        name
          .split(' ')
          .map((word) => word[0])
          .join('')
          .toUpperCase(),
      [name],
    );

    const sizeClasses = useMemo(
      () =>
        clsx({
          'w-7 h-7 text-sm': size === 'sm',
          'w-8 h-8 text-base': size === 'md',
          'w-12 h-12 text-lg': size === 'lg',
        }),
      [size],
    );

    const textClasses = useMemo(
      () =>
        clsx({
          'text-xs': size === 'sm',
          'text-sm': size === 'md',
          'text-base': size === 'lg',
        }),
      [size],
    );

    return (
      <>
        <div
          className={clsx(
            bgColor ? bgColor : 'bg-gray-200',
            'flex items-center justify-center rounded-full text-gray-800',
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
            <span className={clsx(textClasses, 'font-semibold')}>
              {abbreviation}
            </span>
          )}
        </div>
      </>
    );
  },
);

export default Profile;
