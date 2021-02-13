import CalendarApp from '../../index';
import { events } from '../Data/Data';

export default function filterByperson() {
  document.querySelector('.form-control').addEventListener('change', (e) => {
    const person = e.target.value;
    const inputData = person
      ? events.filter((ev) => ev.participants.includes(person))
      : events;
    CalendarApp(inputData, person);
  });
}
