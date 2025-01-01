import {clsx} from 'clsx';

export const useSizeClasses = (
  size: 'sm' | 'lg',
  smClass: string,
  lgClass: string,
) =>
  clsx({
    [smClass]: size === 'sm',
    [lgClass]: size === 'lg',
  });
