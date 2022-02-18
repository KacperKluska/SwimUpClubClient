import { MainMenu } from '../../components/MainMenu/MainMenu.component';
import { Routes } from '../Routing/Routes.type';

export interface MenuCardItem {
  name: string;
  path: string;
}

const coachMenuItems: MenuCardItem[] = [
  { name: 'addWorkout', path: Routes.HOME },
  { name: 'swimmers', path: Routes.HOME },
  { name: 'dictionary', path: Routes.DICTIONARY },
  { name: 'calendar', path: Routes.HOME },
  { name: 'timer', path: Routes.TIMER },
];

// const swimmerMenuItems: MenuCardItem[] = [
//   { name: 'workouts', path: Routes.HOME },
//   { name: 'coaches', path: Routes.HOME },
//   { name: 'dictionary', path: Routes.HOME },
//   { name: 'calendar', path: Routes.HOME },
//   { name: 'timer', path: Routes.TIMER },
// ];

// const adminMenuItems: MenuCardItem[] = [
//   { name: 'swimmers', path: Routes.HOME },
//   { name: 'coaches', path: Routes.HOME },
//   { name: 'newsletter', path: Routes.HOME },
// ];

export const MainMenuPage = () => <MainMenu items={coachMenuItems} />;
