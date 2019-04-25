import './index.scss';

document.addEventListener('DOMContentLoaded', () => {
  let forms = '';
  for (let i = 0; i < 20; i++) {
    let radios = ''
    for (let j = 0; j < 3; j++) {
      let radioTemplate = `<label for="answer--${j}">answer--${j} </label>
        <input required id="answer--${j}" type="radio" name="form-group-${i}">
        <div class="additional-txt" id="addition--${j}">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
        <br>`;
        radios+=radioTemplate;
    }
    let formTemplate = `
    <form action="submit" class="forms ${(i === 0 ? 'first' : '')}" id="form--${i}">
      <h2>From ${i}</h2>
      <div class="grp">
      ${radios}
      </div>
      <hr>
    </form>
    `;
    forms+= formTemplate;
  }
  document.querySelector('#target').innerHTML = forms;
});