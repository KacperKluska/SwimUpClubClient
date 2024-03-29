import { useContext } from 'react';
import { MainMenu } from '../../components/MainMenu/MainMenu.component';
import { UserContext } from '../../context/UserContext';
import { NotFoundPage } from '../NotFoundPage/NotFoundPage.component';
import { Routes } from '../Routing/Routes.type';

export interface MenuCardItem {
  name: string;
  path: string;
}

const getMenuItems = (
  role: 'USER' | 'COACH' | 'ADMIN' | undefined,
): MenuCardItem[] | null => {
  switch (role) {
    case 'USER':
      return [
        { name: 'workouts', path: Routes.USER_MY_WORKOUT_SESSIONS },
        { name: 'coaches', path: Routes.USER_MY_COACHES },
        { name: 'dictionary', path: Routes.DICTIONARY },
        { name: 'calendar', path: Routes.USER_CALENDAR },
        { name: 'timer', path: Routes.TIMER },
      ];
    case 'COACH':
      return [
        { name: 'swimmers', path: Routes.COACH_ALL_SWIMMERS },
        { name: 'mySwimmers', path: Routes.COACH_MY_SWIMMERS },
        { name: 'dictionary', path: Routes.DICTIONARY },
        { name: 'calendar', path: Routes.COACH_CALENDAR },
        { name: 'timer', path: Routes.TIMER },
        { name: 'workouts', path: Routes.COACH_MY_WORKOUT_SESSIONS },
      ];
    case 'ADMIN':
      return [
        { name: 'swimmers', path: Routes.ADMIN_SWIMMERS },
        { name: 'coaches', path: Routes.ADMIN_COACHES },
        { name: 'createAccount', path: Routes.REGISTER },
      ];
    default:
      return null;
  }
};

export const MainMenuPage = () => {
  const { userData } = useContext(UserContext);
  const { user } = { ...userData };

  const items = getMenuItems(user?.role);
  if (!items) return <NotFoundPage />;

  return <MainMenu items={items} />;
};
