import CalendarApp from '../../index';
import { events } from '../Data/Data';

export default function addNewEvent() {
  const newEvent = {
    day: null,
    time: null,
    participants: [],
    title: null,
    id: null,
  };

  document.querySelectorAll('.form-group').forEach((form) =>
    form.addEventListener('change', (e) => {
      switch (e.target.id) {
        case 'inputEventName':
          newEvent.title = e.target.value;
          break;
        case 'inputParticipants':
          newEvent.participants.push(e.target.value);
          break;
        case 'daySelect':
          newEvent.day = e.target.value;
          break;
        case 'timeSelect':
          newEvent.time = e.target.value;
      }
    }),
  );

  document.querySelector('.modal').addEventListener('click', (e) => {
    if (e.target.id === 'btn-add-event') {
      newEvent.id = newEvent.day + newEvent.time;
      /* Sanity check of added event */
      if (!newEvent.id) {
        document
          .getElementById('modal-error-empty')
          .classList.toggle('error-visible');
        e.target.removeEventListener('click');
      }

      if (!!events.filter((event) => event.id === newEvent.id).length) {
        document
          .getElementById('modal-error-occupied')
          .classList.toggle('error-visible');

        e.target.removeEventListener('click');
      }

      /* Sanity check passed, adding the event to calendar */
      events.push(newEvent);

      CalendarApp(events);
    }
  });
}
