import CalendarApp from '../../index';
import { events } from '../Data/Data';
import { data } from 'jquery';

export default function deleteEvent() {
  document.querySelector('.modal-wrapper').addEventListener('click', (e) => {
    if (e.target.id === 'btn-delete-event') {
      const indexToDelete = events.findIndex((ev) => ev.id === e.target.value);
      events.splice(indexToDelete, 1);

      CalendarApp(events);
    }
  });
}
