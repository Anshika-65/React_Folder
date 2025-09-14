function Loop(){
    // let numbers=[10,20,30,40]
    let employees=[
        {
            empid:102,
            name:'Anshika',
            salary:1000000

        },
         {
            empid:102,
            name:'Karishma',
            salary:200000

        },
         {
            empid:102,
            name:'Tanu',
            salary:500000

        }
    ]
    return(
        // <div>
        //     {
        //         numbers.map((number)=><h1>{number}</h1>)
        // }

        // </div>
        <div>
            <table border='2px' width='40%'>
                <tr>
                    <th>Emp Id</th>
                     <th>Emp Name</th>
                      <th>Emp Salary</th>
                </tr>
                {
                    employees.map((employee)=>
                    <tr>
                        <td>{employee.name}</td>
                        <td>{employee.empid}</td>
                        <td>{employee.salary}</td>
                    </tr>
                    )
                }
            </table>
        </div>
        // <div>
        //     {
        //         employees.map((employee)=><h1>{employee.name}</h1>)
        //     }
        // </div>
    )
}
export default Loop