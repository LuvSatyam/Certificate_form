const subjectsContainer = document.querySelector("#subjectsContainer");


function selectCourse() {
  const course = document.querySelector("#course").value;
    
    
    subjectsContainer.innerHTML = '';
    
    // Add subject input fields based on selected course
    if (course === 'course1') {
      addSubjectInput('Subject1');
      addSubjectInput('Subject2');
      addSubjectInput('Subject3');
      addSubjectInput('Subject4');
      addSubjectInput('Subject5');
      addSubjectInput('Subject6');
      addSubjectInput('Subject7');
      addSubjectInput('Subject8');
      // Add more subjects for Course 1 as needed
    } else if (course === 'course2') {
      addSubjectInput('Subject1');
      addSubjectInput('Subject2');
      addSubjectInput('Subject3');
      addSubjectInput('Subject4');
      addSubjectInput('Subject5');
      addSubjectInput('Subject6');
      addSubjectInput('Subject7');
      addSubjectInput('Subject8');
      // Add more subjects for Course 2 as needed
    }else if (course === 'course3') {
      addSubjectInput('Subject1');
      addSubjectInput('Subject2');
      addSubjectInput('Subject3');
      addSubjectInput('Subject4');
      addSubjectInput('Subject5');
      addSubjectInput('Subject6');
      addSubjectInput('Subject7');
      addSubjectInput('Subject8');
      // Add more subjects for Course 3 as needed
    }else if (course === 'course4') {
      addSubjectInput('Subject1');
      addSubjectInput('Subject2');
      addSubjectInput('Subject3');
      addSubjectInput('Subject4');
      addSubjectInput('Subject5');
      addSubjectInput('Subject6');
      addSubjectInput('Subject7');
      addSubjectInput('Subject8');
      // Add more subjects for Course 4 as needed
    }else if (course === 'course5') {
      addSubjectInput('Subject1');
      addSubjectInput('Subject2');
      addSubjectInput('Subject3');
      addSubjectInput('Subject4');
      addSubjectInput('Subject5');
      addSubjectInput('Subject6');
      addSubjectInput('Subject7');
      addSubjectInput('Subject8');
      // Add more subjects for Course 5 as needed
    }else if (course === 'course6') {
      addSubjectInput('Subject1');
      addSubjectInput('Subject2');
      addSubjectInput('Subject3');
      addSubjectInput('Subject4');
      addSubjectInput('Subject5');
      addSubjectInput('Subject6');
      addSubjectInput('Subject7');
      addSubjectInput('Subject8');
      // Add more subjects for Course 6 as needed
    }
    else if (course === 'course7') {
      addSubjectInput('Subject1');
      addSubjectInput('Subject2');
      addSubjectInput('Subject3');
      addSubjectInput('Subject4');
      addSubjectInput('Subject5');
      addSubjectInput('Subject6');
      addSubjectInput('Subject7');
      addSubjectInput('Subject8');
      // Add more subjects for Course 7 as needed
    }
    else if (course === 'course8') {
      addSubjectInput('Subject1');
      addSubjectInput('Subject2');
      addSubjectInput('Subject3');
      addSubjectInput('Subject4');
      addSubjectInput('Subject5');
      addSubjectInput('Subject6');
      addSubjectInput('Subject7');
      addSubjectInput('Subject8');
      // Add more subjects for Course 8 as needed
    }
    
    subjectsContainer.style.display = 'block';
  }
  
  function addSubjectInput(subjectName) {
    
    const label = document.createElement('label');
    label.textContent = `${subjectName} :- Marks : `;
    const input = document.createElement('input');
    input.type = 'number';
    input.name = subjectName.toLowerCase().replace(/\s+/g, '');
    input.min = 20;
    input.max = 50;
    input.required = true;
    label.appendChild(input);
    subjectsContainer.appendChild(label);
  }
  
  const form = document.getElementById('certificateForm');
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log('Form submitted!');
  });























