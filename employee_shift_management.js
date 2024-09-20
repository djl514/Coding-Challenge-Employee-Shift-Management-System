//1. Create an Employees Array of Employee Objects
const employees = [
    { name: 'John', shifts: [{ day: 'Monday', hours: 8 }, { day: 'Wednesday', hours: 6 }] },
    { name: 'Sara', shifts: [{ day: 'Tuesday', hours: 5 }, { day: 'Thursday', hours: 7 }] },
    { name: 'David', shifts: [{ day: 'Monday', hours: 8 }] },
    { name: 'Emily', shifts: [{ day: 'Friday', hours: 8 }] }
];

//2. Create a function to Display Employee Shift Details
function displayEmployeeShifts(employee){
    return employee;
}

console.log(displayEmployeeShifts(employees[1]));

//3. Create a Function to assign a new shift
function assignShift(employeeName, days, numHours){
    let empName = employees.find(worker => worker.name == employeeName)
    let shiftArray = empName.shifts;
    shiftArray.forEach(shift => {
        if (shift.day === days){
            return `${empName} is already assigned a shift for ${days}`;
        } else if (shiftArray.day != days){
            shiftArray.push(
                { day: days, hours: numHours}
            );
    
        }
    });

}


console.log(assignShift('John', 'Monday', 3));
console.log(employees);
