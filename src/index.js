import filterByperson from './Components/Listeners/select-listener';
import ModalAddEvent from './Components/Modal/Modal';
import SelectPerson from './Components/Select/Select';
import Table from './Components/Table/Table';

import addNewEvent from './Components/Listeners/modal-listener';
import openDeleteEvent from './Components/Listeners/table-listener';
import deleteEvent from './Components/Listeners/delete-event-listener';
import { events } from './Components/Data/Data';

import './index.sass';

function Calendar(eventsList, defaultPerson) {
  return (document.body.innerHTML = `
  <div class='app-wrapper'>
  <div class='modal-wrapper'></div>
    <div class='head-wrapper'>
      <h2>Calendar</h2>
      <div class = 'options-wrapper'>
        <form id='select-person' class='select-person'>
        ${SelectPerson(defaultPerson)}
        </form>
        ${ModalAddEvent()}
      </div>
    </div>
      <div class = 'calendar-wrapper'>
      ${Table(eventsList)}
    </div>
  </div>`);
}
function CalendarApp(eventsList, defaultPerson) {
  Calendar(eventsList, defaultPerson);
  filterByperson();
  addNewEvent();
  openDeleteEvent();
  deleteEvent();
}
CalendarApp(events);

export default CalendarApp;
