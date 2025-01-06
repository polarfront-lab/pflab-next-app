import clsx, {ClassValue} from 'clsx';
import {twMerge} from 'tailwind-merge';
import tunnel from 'tunnel-rat';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const r3f = tunnel();
