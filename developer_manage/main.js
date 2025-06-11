document.addEventListener('DOMContentLoaded', () => {
  //   console.log('DOMContentLoaded');

  // handle Page Loader
  handlePageLoader();

  // Initialize Elements
  const addDeveloperButton = getElement('id', 'add-dev-btn');
  const modal = getElement('id', 'developerModal');
  const modalBtnCloseElems = document.querySelectorAll('.modalclose');
  const developer_form = getElement('id', 'developer-form');

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
    });
  });
  developer_form.addEventListener('submit', (e) => {
    e.preventDefault();
    const elementsToValidate = Array.from(developer_form.elements).filter((e) =>
      Array.from(e.classList).includes('validate'),
    );

    const errorElements = document.querySelectorAll('.errorText');
    errorElements.forEach((e) => e.remove());

    const hasErrorElements = document.querySelectorAll('.hasError');
    hasErrorElements.forEach((e) => {
      e.classList = Array.from(e.classList)
        .filter((s) => s !== 'hasError')
        .join(' ');
    });

    const inputDataValidator = {
      text: ['required', 'min', 'max', 'regex'],
      radio: ['handleradio'],
    };
    elementsToValidate.forEach((e) => {
      // Identify input type
      const inputType = e.getAttribute('type');
      switch (inputType) {
        case 'text':
          if (inputDataValidator['text']) {
            const validators = inputDataValidator['text'];
            validators.forEach((validate) => {
              if (
                e.hasAttribute(`data-${validate}`) &&
                !Array.from(e.classList).includes('hasError')
              ) {
                switch (validate) {
                  case 'required':
                    const value = e.value;
                    if (!e.value.trim().length) {
                      const p = document.createElement('p');
                      p.style.color = 'red';
                      p.classList.add('errorText');
                      p.textContent = 'This should be required';
                      e.parentElement.appendChild(p);
                      e.classList.add('hasError');
                    }
                    // debugger;
                    break;
                  case 'min':
                    if (
                      e.value.trim().length <
                      parseInt(e.getAttribute('data-min'))
                    ) {
                      const p = document.createElement('p');
                      p.style.color = 'red';
                      p.classList.add('errorText');
                      p.textContent = `This should be minimum of length ${e.getAttribute(
                        'data-min',
                      )}`;
                      e.parentElement.appendChild(p);
                      e.classList.add('hasError');
                    }
                    break;
                }
              }
            });
            // debugger;
          }
          break;
      }
      console.log(inputType);
    });

    // console.log(elementsToValidate);
  });
});

const handlePageLoader = () => {
  const pageLoader = getElement('id', 'page-loader');
  setTimeout(() => {
    pageLoader.style.display = 'none';
  }, 1500);
};
