import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useTranslations } from '../../translations/src';

export interface CalendarEvent {
  start: Date;
  end: Date;
  title: string;
  coachEmail: string;
  swimmerEmail: string;
}

interface Props {
  events?: CalendarEvent[];
  onClickEvent?: (swimmerEmail: string, coachEmail: string) => void;
}

export const MyCalendar = ({ events, onClickEvent }: Props) => {
  const localizer = momentLocalizer(moment);
  const translate = useTranslations();

  return (
    <div>
      <Calendar
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={events}
        style={{ height: `calc(100vh - 72px)`, width: '80vw' }}
        onSelectEvent={(event) => {
          if (onClickEvent) {
            if (
              // eslint-disable-next-line no-restricted-globals
              confirm(
                translate('calendarPage.createSession', {
                  value: event.swimmerEmail,
                }),
              )
            ) {
              onClickEvent(event.swimmerEmail, event.coachEmail);
            }
          }
        }}
      />
    </div>
  );
};
