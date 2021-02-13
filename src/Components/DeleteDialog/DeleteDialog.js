import bootstrap from 'bootstrap';
import { events } from '../Data/Data';

import './delete-dialog.sass';

export default function DeleteDialog(props) {
  const modal = document.querySelector('.modal-wrapper');
  return (modal.innerHTML = `
 <div
  class='modal fade'
  id='deleteEventModal'
  tabindex='-1'
  role='dialog'
  aria-labelledby='exampleModalLabel'
  aria-hidden='true'
>
  <div class='modal-dialog' role='document'>
    <div class='modal-content'>
      <div class='modal-header'>
        <button
          type='button'
          class='close'
          data-dismiss='modal'
          aria-label='Close'
        >
          <span aria-hidden='true'>&times;</span>
        </button>
      </div>

      <div class='modal-body'>
        <p>
          Are you sure you want to delete ${
            events.filter((e) => e.id === props)[0].title
          }?
        </p>
      </div>
      <div class='modal-footer'>
        <button type='button' class='btn btn-light' data-dismiss='modal'>
          No
        </button>

        <button type='submit' value = ${props} class='btn btn-secondary' data-dismiss='modal' id='btn-delete-event'>
          Yes
        </button>
      </div>
    </div>
  </div>
</div>

`);
}
