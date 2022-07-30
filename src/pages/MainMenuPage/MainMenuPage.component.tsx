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
        { name: 'workouts', path: Routes.HOME },
        { name: 'coaches', path: Routes.HOME },
        { name: 'dictionary', path: Routes.HOME },
        { name: 'calendar', path: Routes.HOME },
        { name: 'timer', path: Routes.TIMER },
      ];
    case 'COACH':
      return [
        { name: 'addWorkout', path: Routes.HOME },
        { name: 'swimmers', path: Routes.HOME },
        { name: 'dictionary', path: Routes.DICTIONARY },
        { name: 'calendar', path: Routes.HOME },
        { name: 'timer', path: Routes.TIMER },
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
