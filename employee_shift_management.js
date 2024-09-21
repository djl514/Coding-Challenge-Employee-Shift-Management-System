//1. Create an Employees Array of Employee Objects
const employees = [
    { name: 'John', shifts: [{ day: 'Monday', hours: 8 }, { day: 'Wednesday', hours: 6 }] },
    { name: 'Sara', shifts: [{ day: 'Tuesday', hours: 5 }, { day: 'Thursday', hours: 7 }] },
    { name: 'David', shifts: [{ day: 'Monday', hours: 8 }] },
    { name: 'Emily', shifts: [{ day: 'Friday', hours: 8 }] }
];

//2. Create a function to Display Employee Shift Details
function displayEmployeeShifts(employee){
    console.log(employee);
}

displayEmployeeShifts(employees[1]);


//3. Create a Function to assign a new shift
function assignShift(employeeName, days, numHours){
    let empName = employees.find(worker => worker.name == employeeName);
    if (!empName) {
        return `Error: ${employeeName} not found.`
    }
    const shiftArray = empName.shifts.some(shift => shift.day == days);
    if (!shiftArray) {
        empName.shifts.push({ day: days, hours: numHours });
    } else {
        return `${employeeName} already scheduled on ${days}`;
    }
    return `${employeeName} successfully schedule on ${days} for ${numHours} hours.` 

}


console.log(assignShift('John', 'Tuesday', 3));
console.log(employees);

//4. Create a function to calculate total hours worked

