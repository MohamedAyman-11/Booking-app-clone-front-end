import {
  CircleArrowLeft,
  Handbag,
  Heart,
  UserRound,
  UserStar,
} from 'lucide-react';
import type { IDropMenu } from '../interfaces';

export const dropDownMenuData: IDropMenu[] = [
  {
    text: 'My account',
    icon: UserRound,
  },
  {
    text: 'Bookings & Trips',
    icon: Handbag,
  },
  {
    text: 'Reviews',
    icon: UserStar,
  },
  {
    text: 'Saved',
    icon: Heart,
  },
  {
    text: 'Sign out',
    icon: CircleArrowLeft,
  },
];
