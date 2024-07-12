const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if (isNaN(height) || height <= 0) {
        results.innerHTML = `Please provide a valid height.`;
    } else if (isNaN(weight) || weight <= 0) {
        results.innerHTML = `Please provide a valid weight.`;
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        let message;

        if (bmi <= 18.6) {
            message = "You are underweight.";
        } else if (bmi > 18.6 && bmi <= 24.9) {
            message = "Congratulations, your BMI is normal.";
        } else {
            message = "You are overweight.";
        }

        results.innerHTML = `<span>${message}</span><br/><span>Your BMI is ${bmi}</span>`;
    }
});


// const form = document.querySelector('form')
// //this usecase will give you empty values
// // const height = parseInt(document.querySelector('#height').value)


// form.addEventListener('submit', function(e){
//     e.preventDefault()

//     const height = parseInt(document.querySelector('#height').value)
//     const weight = parseInt(document.querySelector('#weight').value) 
//     const results = document.querySelector('#results')

//     if (height === '' || height < 0  || isNaN(height)) {
//         results.innerHTML = `Please give a valid height" ${height}`;
//     } else if (weight === '' || weight < 0  || isNaN(weight)) {
//         results.innerHTML = `Please give a valid weight" ${weight}`;
//     } else{
//        const bmi = (weight / ((height*height)/10000)).toFixed(2)
//        // show the result
//        results.innerHTML = `<span>${bmi}</span>`;
//     }
    
   
// });