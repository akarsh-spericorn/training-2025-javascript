let developers = JSON.parse(localStorage.getItem('developers'));

document.addEventListener('DOMContentLoaded', () => {
  renderDevelopers();
  //   console.log('DOMContentLoaded');

  // handle Page Loader
  handlePageLoader();

  // Initialize Elements
  const addDeveloperButton = getElement('id', 'add-dev-btn');
  const modal = getElement('id', 'developerModal');
  const modalBtnCloseElems = document.querySelectorAll('.modalclose');
  const developer_form = getElement('id', 'developer-form');

  const skill_form = getElement('id', 'skillModal');

  // Custom Event listners
  addDeveloperButton.addEventListener('click', () => {
    // show Modal
    modal.classList.remove('fade');
    modal.style.display = 'block';
  });
  modalBtnCloseElems.forEach((modalBtnClose) => {
    modalBtnClose.addEventListener('click', () => {
      modal.classList.add('fade');
      modal.style.display = 'none';
      removePrevErrorsMsg();
      developer_form.reset();
    });
  });
  developer_form.addEventListener('submit', (e) => {
    e.preventDefault();
    const elementsToValidate = Array.from(developer_form.elements).filter((e) =>
      Array.from(e.classList).includes('validate'),
    );

    removePrevErrorsMsg();

    let hasErrorElements = document.querySelectorAll('.hasError');
    hasErrorElements.forEach((e) => {
      e.classList = Array.from(e.classList)
        .filter((s) => s !== 'hasError')
        .join(' ');
    });

    const inputDataValidator = {
      text: ['required', 'min', 'max', 'regex'],
      radio: ['required'],
      select: ['required'],
    };
    elementsToValidate.forEach((e) => {
      // Identify input type

      const inputType = e.getAttribute('type');
      const validators = inputDataValidator[inputType];
      validators.forEach((validate) => {
        if (
          e.hasAttribute(`data-${validate}`) &&
          !Array.from(e.classList).includes('hasError')
        ) {
          switch (validate) {
            case 'required':
              validateRequiredField(e);
              // debugger;
              break;
            case 'min':
              validateMinLength(e);
              break;
            case 'max':
              validateMaxLength(e);
              break;
            case 'regex':
              validateRegPattern(e);
              break;
          }
        }
      });
    });
    hasErrorElements = document.querySelectorAll('.hasError');
    if (!hasErrorElements.length) {
      const submitButton = document.querySelector("form button[type='submit']");
      const buttonSpinner = document.querySelector(
        "form button[type='submit'] span",
      );
      buttonSpinner.style.display = 'block';
      setTimeout(() => {
        buttonSpinner.style.display = 'none';

        const formData = new FormData(developer_form);
        const formValues = Object.fromEntries(formData.entries());
        developers = [
          ...developers,
          {
            ...formValues,
            skill: [formValues.skill],
          },
        ];

        renderDevelopers();
      }, 1000);
    }
  });
});

function renderDevelopers() {
  const tbody = document.getElementById('developers-tbody');
  tbody.innerHTML = null;
  const elems = developers.map((dev, index) => {
    const tr = document.createElement('tr');
    // Build skills HTML
    const skillsHtml = dev.skill
      .map(
        (skill) => `<span class="badge bg-info text-dark me-1">${skill}</span>`,
      )
      .join('');

    // Remote icon
    const remoteIcon = dev.isremote
      ? `<i class="fas fa-house-laptop text-success"></i>`
      : '';

    // Construct row innerHTML
    tr.innerHTML = `
        <td><input type="checkbox" class="row-checkbox" data-id="${index}"></td>
        <td>${dev.name}</td>
        <td>${skillsHtml}</td>
        <td>${dev.country}</td>
        <td>${dev['dev-level']}</td>
        <td>${remoteIcon}</td>
        <td>
            <button class="btn btn-sm btn-outline-primary me-1 edit-btn" data-id="${index}" title="Edit">
                <i class="fas fa-pen"></i>
            </button>
            <button class="btn btn-sm btn-outline-danger delete-btn" data-id="${index}" title="Delete">
                <i class="fas fa-trash"></i>
            </button>
             <button class="btn btn-sm btn-outline-danger addskill-btn" data-id="${index}" title="Add Skill">
                <i class="fas fa-add"></i>
            </button>
        </td>
    `;
    return tr;
  });
  const elemsNew = elems.map((e) => e.outerHTML);
  tbody.innerHTML = elemsNew;

  document.querySelectorAll('.modalclose')[0].click();
}
const handlePageLoader = () => {
  const pageLoader = getElement('id', 'page-loader');
  setTimeout(() => {
    pageLoader.style.display = 'none';
  }, 250);
};

function addErrorMsg(e, message) {
  const type = e.type;
  let p = document.createElement('p');
  p.style.color = 'red';
  p.classList.add('errorText');
  p.textContent = message;
  e.classList.add('hasError');
  if (type === 'radio') {
    let parent = e.parentElement;
    parent.parentElement.insertAdjacentElement('afterend', p);
  } else {
    e.parentElement.appendChild(p);
  }
}

function removePrevErrorsMsg() {
  const errorElements = document.querySelectorAll('.errorText');
  errorElements.forEach((e) => e.remove());
}

function validateRequiredField(e) {
  let message = '';
  let inputType = e.type;
  if (inputType === 'radio') {
    const name = e.getAttribute('name');
    const checked = document.querySelector(`input[name="${name}"]:checked`);
    if (!checked) {
      message = 'This should be required';
      addErrorMsg(e, message);
    }
  } else if (!e.value.trim().length) {
    message = 'This should be required';
    addErrorMsg(e, message);
  }
}

function validateMinLength(e) {
  if (e.value.trim().length < parseInt(e.getAttribute('data-min'))) {
    let message = `This should be minimum of length ${e.getAttribute(
      'data-min',
    )}`;
    addErrorMsg(e, message);
  }
}

function validateMaxLength(e) {
  if (e.value.trim().length > parseInt(e.getAttribute('data-max'))) {
    let message = `This should be maximum of length ${e.getAttribute(
      'data-max',
    )}`;
    addErrorMsg(e, message);
  }
}

function validateRegPattern(e) {
  const pattern = new RegExp(e.getAttribute('data-regex'));
  if (!pattern.test(e.value)) {
    let message = 'Enter a valid value';
    addErrorMsg(e, message);
  }
}
