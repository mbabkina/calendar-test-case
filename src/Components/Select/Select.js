import { participants } from '../Data/Data';

import './select.sass';

export default function SelectPerson(props) {
  const selectWrapper = document.getElementsByClassName('select-person');

  return (selectWrapper.innerHTML = `
  
  <select class='form-control' id='personSelectForFiltering'>
  <option value='' selected = ${
    props ? 'selected' : 'false'
  } >All participants</option>
  ${participants.map(
    (person) =>
      (person = `<option value=${person} ${
        person === props ? 'selected' : ''
      }>${person}</option>`),
  )}
  </select>
  `);
}
