import CalendarApp from '../../index';
import DeleteDialog from '../DeleteDialog/DeleteDialog';
import { data } from 'jquery';

export default function openDeleteEvent() {
  document.querySelectorAll('td').forEach((cell) =>
    cell.addEventListener('click', (e) => {
      if (e.target.id) DeleteDialog(e.target.id);
    }),
  );
}
