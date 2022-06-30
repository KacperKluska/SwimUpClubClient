import { Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from '../../components/ProtectedRoute/ProtectedRoute.component';
import { DictionaryPage } from '../DictionaryPage/DictionaryPage.component';
import { HomePage } from '../HomePage/HomePage.component';
import { LoginPage } from '../LoginPage/LoginPage.component';
import { MainMenuPage } from '../MainMenuPage/MainMenuPage.component';
import { NotFoundPage } from '../NotFoundPage/NotFoundPage.component';
import { RegisterPage } from '../RegisterPage/RegisterPage.component';
import { SettingsPage } from '../SettingsPage/SettingsPage.component';
import { TimerPage } from '../TimerPage/TimerPage.component';
import { Routes as temp } from './Routes.type';

export const Routing = () => (
  <Routes>
    <Route path={temp.HOME} element={<HomePage />} />
    <Route element={<ProtectedRoute authNotAllowed />}>
      <Route path={temp.LOGIN} element={<LoginPage />} />
    </Route>
    <Route element={<ProtectedRoute />}>
      <Route path={temp.MENU} element={<MainMenuPage />} />
      <Route path={temp.DICTIONARY} element={<DictionaryPage />} />
      <Route path={temp.TIMER} element={<TimerPage />} />
      <Route path={temp.SETTINGS} element={<SettingsPage />} />
      <Route element={<ProtectedRoute requiredRole="ADMIN" />}>
        <Route path={temp.REGISTER} element={<RegisterPage />} />
      </Route>
    </Route>
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);
