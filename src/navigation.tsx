import chatIcon from '@/assets/icons/chats.svg';
import gridIcon from '@/assets/icons/grid-2.svg';
import iconIcon from '@/assets/icons/icon.svg';
import moneyIcon from '@/assets/icons/money-1.svg';
import inventoryIcon from '@/assets/icons/box.svg';
import signDocIcon from '@/assets/icons/sign-doc.svg';
import calendarIcon from '@/assets/icons/calendar-alt.svg';
import cartIcon from '@/assets/icons/cart.svg';
import settingIcon from '@/assets/icons/settings.svg';

export default [
  {
    name: 'Dashboard',
    to: '/',
    icon: <img src={gridIcon} className="w-4 h-4 lg:w-6 lg:h-6" />,
    subRoutes: [],
  },
  {
    name: 'Inventory',
    icon: (
      <img
        src={inventoryIcon}
        className="w-4 h-4 lg:w-6 lg:h-6 text-gray-500 hover:text-blue-500 active:text-green-600"
      />
    ),
    subRoutes: [],
  },
  {
    name: 'Procurement',
    to: '/procurement',
    icon: <img src={cartIcon} className="w-4 h-4 lg:w-6 lg:h-6" />,
    subRoutes: [
      {
        name: 'Quotes',
        to: '/procurement/quotes',
      },
      {
        name: 'Orders',
        to: '/procurement/order',
      },
    ],
  },
  {
    name: 'Finance',
    to: '/finance',
    icon: <img src={moneyIcon} className="w-4 h-4 lg:w-6 lg:h-6" />,
    subRoutes: [],
  },
  {
    name: 'Communication',
    to: '/chat',
    icon: <img src={chatIcon} className="w-4 h-4 lg:w-6 lg:h-6" />,
    subRoutes: [],
  },
  {
    name: 'Calender',
    to: '/calender',
    icon: <img src={calendarIcon} className="w-4 h-4 lg:w-6 lg:h-6" />,
    subRoutes: [],
  },
  {
    name: 'Contracts',
    to: '/contracts',
    icon: <img src={signDocIcon} className="w-4 h-4 lg:w-6 lg:h-6" />,
    subRoutes: [],
  },
];

export const secondaryNav = [
  {
    name: 'Support',
    to: '/contracts',
    icon: <img src={iconIcon} className="w-4 h-4 lg:w-6 lg:h-6" />,
    subRoutes: [],
  },
  {
    name: 'Settings',
    to: '/settings',
    icon: <img src={settingIcon} className="w-4 h-4 lg:w-6 lg:h-6" />,
    subRoutes: [],
  },
];
