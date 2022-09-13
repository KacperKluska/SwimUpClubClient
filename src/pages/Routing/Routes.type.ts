export const Routes = {
  HOME: '/',
  MENU: '/main-menu',
  LOGIN: '/sign-in',
  REGISTER: '/register',
  SETTINGS: '/settings',
  DICTIONARY: '/dictionary',
  TIMER: '/timer',
  USER_MY_WORKOUT_SESSIONS: '/user/my-workout-sessions',
  USER_MY_WORKOUT_SESSION: '/user/my-workout-sessions/:sessionId',
  USER_MY_COACHES: '/user/my-coaches',
  USER_COACH_PROFILE: '/user/coach/:userEmail',
  USER_CALENDAR: '/user/calendar',
  ADMIN_SWIMMERS: '/admin/swimmers',
  ADMIN_COACHES: '/admin/coaches',
  ADMIN_USER_PROFILE: '/admin/user/:userEmail',
  COACH_MY_SWIMMERS: '/coach/my-swimmers',
  COACH_ALL_SWIMMERS: '/coach/all-swimmers',
  COACH_ADD_WORKOUT: '/coach/add-workout/:userEmail',
  COACH_SWIMMER_PROFILE: '/coach/user/:userEmail',
  COACH_MY_SWIMMER_PROFILE: '/coach/my-user/:userEmail',
  COACH_SWIMMER_WORKOUT_SESSIONS: '/coach/user/:userEmail/workout-sessions',
  COACH_SWIMMER_WORKOUT_SESSION:
    '/coach/user/:userEmail/workout-sessions/:sessionId',
  COACH_MY_WORKOUT_SESSIONS: '/coach/my-workout-sessions',
  COACH_MY_WORKOUT_SESSION: '/coach/my-workout-sessions/:sessionId',
  COACH_CALENDAR: '/coach/calendar',
};
