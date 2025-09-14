function Students() {
    let students = [
        {
            rollNo: 101,
            name: "Tanu ",
            fatherName: "Singh",
            marks: 80
        },
        {
            rollNo: 102,
            name: "Ashi",
            fatherName: "Ashok",
            marks: 78
        },
        {
            rollNo: 103,
            name: "Ritik",
            fatherName: "Tyagi",
            marks: 95
        },
        {
            rollNo: 104,
            name: "Anshika",
            fatherName: "Rathore",
            marks: 60
        },
        {
            rollNo: 105,
            name: "Aaditya",
            fatherName: "Rai",
            marks: 80
        },
    ];

    return (
        <div>
            <table border="2px" width="50%">
                <thead>
                    <tr>
                        <th>Roll No</th>
                        <th>Name</th>
                        <th>Father Name</th>
                        <th>Marks</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students
                     .filter(student => student.marks > 70)   
                     .map(student =>
                     <tr key={student.rollNo}>
                    <td>{student.rollNo}</td>
                    <td>{student.name}</td>
                    <td>{student.fatherName}</td>
                    <td>{student.marks}</td>
             </tr>
             )
         }
    </tbody>
     </table>
    </div>
    )
}
function App(){
   return(
    <div>
        <h1> We are going to use export</h1>
    </div>
   )
}
export  {Students ,App};
