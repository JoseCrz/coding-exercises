// ! CLOSURES:
// ? An inner function has always access to the variables and parameter of its outer function,
// ? even after the outer function has returned


function interviewQuestion (job) {
    let greet = 'Hello there,'
    
    if (job === 'programmer') {
        return function (name) {
            console.log(`${greet} ${name}, tell us more about your experience as a ${job}, do you know the MERN stack?`)
        }
    } else if (job === 'dancer') {
        return function (name) {
            console.log(`${greet} ${name}, tell us more about your experience as a ${job}, do you dance salsa?`)
        }
    } else {
        return function (name) {
            console.log(`${greet} ${name}, tell us more about your experience as a ${job}`)
        }
    }

}

const programmerInterview = interviewQuestion('programmer')
programmerInterview('Jose')
interviewQuestion('dancer')('Oscar')