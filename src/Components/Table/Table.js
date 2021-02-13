import { weekDays, timeSlots } from '../Data/Data';

import './table.sass';

export default function Table(props) {
  const tableWrapper = document.getElementsByClassName('calendar-wrapper');

  const cell = (slot, day) => {
    const filteredEvents = props
      .filter((ev) => ev.time === slot)
      .filter((ev) => ev.day === day);
    return filteredEvents.length
      ? `<td class='cell-filled' id=${filteredEvents[0].id} data-toggle='modal'
      data-target='#deleteEventModal'>${filteredEvents[0].title}</td>`
      : `<td></td>`;
  };

  const getCells = () =>
    timeSlots
      .map(
        (slot) =>
          (slot = `<tr scope="row"><td>${slot}</td>${weekDays
            .map((day) => (day = cell(slot, day)))
            .join('')}</tr>`),
      )
      .join('');

  return (tableWrapper.innerHTML = `
<table class="table">
<thead>
    <tr>
        <th scope="col">Name</th>
        ${weekDays.map((day) => (day = `<th scope="col">${day}</th>`)).join('')}
    </tr>
    </thead>
    ${getCells()}
</table>`);
}
