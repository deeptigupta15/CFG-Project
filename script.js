let button = document.getElementById('btn');

//Add an event listener to the calculate button when user clicks it //
button.addEventListener('click', () => {
    const height = parseInt(document.getElementById('height').value);
    const weight = parseInt(document.getElementById('weight').value);
    const result = document.getElementById('output');
    let height_status=false, weight_status=false;
//if the height is equal to null or is not a number or less than 0 then display error message 
    if(height === '' || isNaN(height) || (height <= 0))  {
        document.getElementById('height_error').innerHTML = 'Please provide a valid height';
//if the height is valid then error message is blank//
    }else{
        document.getElementById('height_error').innerHTML = '';
        height_status=true;
    }
//if the weight is equal to null or is not a number or less than 0 then display error message 
    if(weight === '' || isNaN(weight) || (weight <= 0)){
        document.getElementById('weight_error').innerHTML = 'Please provide a valid weight';
    }else{
        document.getElementById('weight_error').innerHTML = '';
        weight_status=true;
    }
// Height and Weight are valid inputs calculate the bmi//
    if(height_status && weight_status){
        const bmi = (weight / ((height*height)/10000)).toFixed(2);
//bmi calculation//
        if(bmi < 18.6){
            result.innerHTML = 'Under weight : BMI is' +  bmi;
        }else if(bmi >= 18.6 && bmi < 24.9){
            result.innerHTML = 'Normal : BMI is ' + bmi;
        }else{
            result.innerHTML = 'Over weight : BMI is ' + bmi;
        }
    }else{
        alert('The form has errors');
        result.innerHTML = '';
    }
});

const acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");
    /* Toggle between hiding and showing the active panel */
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
