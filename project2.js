const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');

    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML = `please enter valid height ${height}`;
    }else if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = `please enter valid weight ${weight}`;
    }
    else{
        const BMI = (weight / ((height*height) / 10000)).toFixed(2); 
        result.innerHTML = `<span> ${BMI} </span>`
    }

    if(BMI > 24.9){
        result.innerHTML = `you are overweight`;
    }else if(BMI > 18.6 && BMI < 24.9){
        result.innerHTML = `you are in normal range`;
    }else{
        result.innerHTML = `you are underweight`;
    }
});


