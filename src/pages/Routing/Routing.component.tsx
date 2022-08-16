import { Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from '../../components/ProtectedRoute/ProtectedRoute.component';
import { AddWorkoutPage } from '../AddWorkoutPage/AddWorkoutPage';
import { CoachesPage } from '../Admin/CoachesPage/CoachesPage.component';
import { SwimmersPage } from '../Admin/SwimmersPage/SwimmersPage.component';
import { UserPage } from '../Admin/UserPage/UserPage.component';
import { AllSwimmersPage } from '../AllSwimmersPage/AllSwimmersPage';
import { WorkoutSessionPage } from '../Coach/WokoutSessionPage/WokoutSessionPage';
import { WorkoutSessionsPage } from '../Coach/WokoutSessionsPage/WokoutSessionsPage';
import { DictionaryPage } from '../DictionaryPage/DictionaryPage.component';
import { HomePage } from '../HomePage/HomePage.component';
import { LoginPage } from '../LoginPage/LoginPage.component';
import { MainMenuPage } from '../MainMenuPage/MainMenuPage.component';
import { MySwimmersPage } from '../MySwimmersPage/MySwimmersPage';
import { NotFoundPage } from '../NotFoundPage/NotFoundPage.component';
import { ProfilePage } from '../ProfilePage/ProfilePage.component';
import { RegisterPage } from '../RegisterPage/RegisterPage.component';
import { SettingsPage } from '../SettingsPage/SettingsPage.component';
import { TimerPage } from '../TimerPage/TimerPage.component';
import { MyCoachesPage } from '../User/MyCoachesPage/MyCoachesPage';
import { MyWorkoutSessionPage } from '../User/MyWorkoutSessionPage/MyWorkoutSessionPage';
import { MyWorkoutSessionsPage } from '../User/MyWorkoutSessionsPage/MyWorkoutSessionsPage';
import { Routes as routes } from './Routes.type';

export const Routing = () => (
  <Routes>
    <Route element={<ProtectedRoute authNotNeeded />}>
      <Route path={routes.HOME} element={<HomePage />} />
    </Route>
    <Route element={<ProtectedRoute authNotAllowed />}>
      <Route path={routes.LOGIN} element={<LoginPage />} />
    </Route>
    <Route element={<ProtectedRoute />}>
      <Route path={routes.MENU} element={<MainMenuPage />} />
      <Route path={routes.DICTIONARY} element={<DictionaryPage />} />
      <Route path={routes.SETTINGS} element={<SettingsPage />} />
      <Route path={routes.TIMER} element={<TimerPage />} />
      <Route element={<ProtectedRoute requiredRole="USER" />}>
        <Route path={routes.USER_MY_COACHES} element={<MyCoachesPage />} />
        <Route
          path={routes.USER_MY_WORKOUT_SESSION}
          element={<MyWorkoutSessionPage />}
        />
        <Route
          path={routes.USER_MY_WORKOUT_SESSIONS}
          element={<MyWorkoutSessionsPage />}
        />
        <Route path={routes.USER_COACH_PROFILE} element={<ProfilePage />} />
      </Route>
      <Route element={<ProtectedRoute requiredRole="COACH" />}>
        <Route path={routes.COACH_SWIMMER_PROFILE} element={<ProfilePage />} />
        <Route path={routes.COACH_MY_SWIMMERS} element={<MySwimmersPage />} />
        <Route path={routes.COACH_ADD_WORKOUT} element={<AddWorkoutPage />} />
        <Route path={routes.COACH_ALL_SWIMMERS} element={<AllSwimmersPage />} />
        <Route
          path={routes.COACH_MY_WORKOUT_SESSIONS}
          element={<WorkoutSessionsPage />}
        />
        <Route
          path={routes.COACH_MY_WORKOUT_SESSION}
          element={<WorkoutSessionPage />}
        />
      </Route>
      <Route element={<ProtectedRoute requiredRole="ADMIN" />}>
        <Route path={routes.REGISTER} element={<RegisterPage />} />
        <Route path={routes.ADMIN_SWIMMERS} element={<SwimmersPage />} />
        <Route path={routes.ADMIN_COACHES} element={<CoachesPage />} />
        <Route path={routes.ADMIN_USER_PROFILE} element={<UserPage />} />
      </Route>
    </Route>
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);
