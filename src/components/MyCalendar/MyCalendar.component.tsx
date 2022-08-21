import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

export interface CalendarEvent {
  start: Date;
  end: Date;
  title: string;
}

interface Props {
  events?: CalendarEvent[];
}

export const MyCalendar = ({ events }: Props) => {
  const localizer = momentLocalizer(moment);

  return (
    <div>
      <Calendar
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={events}
        style={{ height: `calc(100vh - 72px)`, width: '80vw' }}
      />
    </div>
  );
};
