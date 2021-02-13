import bootstrap from 'bootstrap'
import { participants, weekDays, timeSlots } from '../Data/Data';

import './modal.sass';

export default function ModalAddEvent() {
  const optionstWrapper = document.getElementsByClassName('options-wrapper');

  return (optionstWrapper.innerHTML = `
    <div>
      <button
        type='button'
        class='btn btn-light'
        data-toggle='modal'
        data-target='#addEventModal'
      >
        Add event
      </button>


      <div
        class='modal fade'
        id='addEventModal'
        tabindex='-1'
        role='dialog'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div class='modal-dialog' role='document'>
          <div class='modal-content'>
            <div class='modal-header'>
              <h5 class='modal-title' id='exampleModalLabel'>
                Here you can add new event
              </h5>
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

            <div class="form-group row">
            <label for="inputEventName" class="col-sm-5 col-form-label">Name of the event:</label>
                <div class="col-sm-7">
                    <input type="text" class="form-control" id="inputEventName" placeholder="Event name">
                </div>
            </div>
            
            <div class="form-group row">
            <label for="inputParticipants" class="col-sm-5 col-form-label">Participants:</label>
                <div class="col-sm-7">
                <select class="form-control" id="inputParticipants" multiple>
                ${participants.map(
                  (person) =>
                    (person = `<option value=${person}>${person}</option>`),
                )}
                </select>
                </div>
            </div>

            <div class="form-group row">
            <label for="daySelect" class="col-sm-5 col-form-label">Day:</label>
                <div class="col-sm-7">
                <select class="form-control" id="daySelect">
                <option>Select day</option>
                ${weekDays.map(
                  (day) => (day = `<option value=${day}>${day}</option>`),
                )}
                </select>
                </div>
            </div>

            <div class="form-group row">
            <label for="timeSelect" class="col-sm-5 col-form-label">Time:</label>
                <div class="col-sm-7">
                <select class="form-control" id="timeSelect">
                <option>Select time</option>
                ${timeSlots.map(
                  (time) => (time = `<option value=${time}>${time}</option>`),
                )}
                </select>
                </div>
            </div>
<p class='error-hidden' id='modal-error-empty'>Please check your inputs: day and/or time is missing</p>
<p class='error-hidden' id='modal-error-occupied'>The room is already booked for this time</p>
</div>


           
            <div class='modal-footer'>
              <button
                type='button'
                class='btn btn-light'
                data-dismiss='modal'
              >
                Cancel
              </button>

              <button type='submit' class='btn btn-secondary' id='btn-add-event'>
                Create
              </button>

            </div>
            </div>
        </div>
      </div>
    </div>`);
}
