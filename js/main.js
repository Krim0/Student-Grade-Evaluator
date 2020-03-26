function grade() {
    var subjmath = document.getElementById("sub-math").value;
    var subjsci = document.getElementById("sub-science").value;
    var subjeng = document.getElementById("sub-english").value;
    var subjfili = document.getElementById("sub-filipino").value;
    var subjpe = document.getElementById("sub-pe").value;
   
    subjmath = parseInt(subjmath);
    subjsci = parseInt(subjsci);
    subjeng = parseInt(subjeng);
    subjfili = parseInt(subjfili);
    subjpe = parseInt(subjpe);
    
    
    if (subjmath <= 100 && subjmath >= 90)
    {
        document.querySelector("#math-Remark").textContent="Excellent";
    }
    else if (subjmath <= 89 && subjmath >= 80)
    {
        document.querySelector("#math-Remark").textContent="Good";
    }
    else if (subjmath <= 79 && subjmath >= 70)
    {
        document.querySelector("#math-Remark").textContent="Average";
    }
    else if (subjmath <= 69 && subjmath >= 60)
    {
        document.querySelector("#math-Remark").textContent="Poor";
    }
    else if (subjmath <= 59 && subjmath >= 0)
    {
        document.querySelector("#math-Remark").textContent="Fail";
    }
    else 
    {
        alert("Invalid Grade Input")
    }

     
    if (subjsci <= 100 && subjsci >= 90)
    {
        document.querySelector("#sci-Remark").textContent="Excellent";
    }
    else if (subjsci <= 89 && subjsci >= 80)
    {
        document.querySelector("#sci-Remark").textContent="Good";
    }
    else if (subjsci <= 79 && subjsci >= 70)
    {
        document.querySelector("#sci-Remark").textContent="Average";
    }
    else if (subjsci <= 69 && subjsci >= 60)
    {
        document.querySelector("#sci-Remark").textContent="Poor";
    }
    else if (subjsci <= 59 && subjsci >= 0)
    {
        document.querySelector("#sci-Remark").textContent="Fail";
    }
    else 
    {
        alert("Invalid Grade Input")
    }

    
    if (subjeng <= 100 && subjeng >= 90)
    {
        document.querySelector("#eng-Remark").textContent="Excellent";
    }
    else if (subjeng <= 89 && subjeng >= 80)
    {
        document.querySelector("#eng-Remark").textContent="Good";
    }
    else if (subjeng <= 79 && subjeng >= 70)
    {
        document.querySelector("#eng-Remark").textContent="Average";
    }
    else if (subjeng <= 69 && subjeng >= 60)
    {
        document.querySelector("#eng-Remark").textContent="Poor";
    }
    else if (subjeng <= 59 && subjeng >= 0)
    {
        document.querySelector("#eng-Remark").textContent="Fail";
    }
    else 
    {
        alert("Invalid Grade Input")
    }

     
    if (subjfili <= 100 && subjfili >= 90)
    {
        document.querySelector("#fil-Remark").textContent="Excellent";
    }
    else if (subjfili <= 89 && subjfili >= 80)
    {
        document.querySelector("#fil-Remark").textContent="Good";
    }
    else if (subjfili <= 79 && subjfili >= 70)
    {
        document.querySelector("#fil-Remark").textContent="Average";
    }
    else if (subjfili <= 69 && subjfili >= 60)
    {
        document.querySelector("#fil-Remark").textContent="Poor";
    }
    else if (subjfili <= 59 && subjfili >= 0)
    {
        document.querySelector("#fil-Remark").textContent="Fail";
    }
    else 
    {
        alert("Invalid Grade Input")
    }

    
    if (subjpe <= 100 && subjpe >= 90)
    {
        document.querySelector("#pe-Remark").textContent="Excellent";
    }
    else if (subjpe <= 89 && subjpe >= 80)
    {
        document.querySelector("#pe-Remark").textContent="Good";
    }
    else if (subjpe <= 79 && subjpe >= 70)
    {
        document.querySelector("#pe-Remark").textContent="Average";
    }
    else if (subjpe <= 69 && subjpe >= 60)
    {
        document.querySelector("#pe-Remark").textContent="Poor";
    }
    else if (subjpe <= 59 && subjpe >= 0)
    {
        document.querySelector("#pe-Remark").textContent="Fail";
    }
    else 
    {
        alert("Invalid Grade Input")
    }

    
    if (subjmath <= 100 && subjmath >= 90 && subjsci <= 100 && subjsci >= 90 && subjeng <= 100 && subjeng >= 90 && subjfili <= 100 && subjfili >= 90 && subjpe <= 100 && subjpe >= 90)
    {
        document.getElementById("stu-rank").textContent = "Top Honor Student"
    }
    else if (subjsci <= 69 && subjsci >= 0 && subjpe <= 69 && subjpe >= 0 && subjfili <= 69 && subjfili >= 0 && subjmath <= 69 && subjmath >= 0 && subjeng <= 69 && subjeng >= 0)
     {
         document.getElementById("stu-rank").textContent="Repeater";
     }
    else if ((subjmath <= 100 && subjmath >= 90 && subjsci <= 100 && subjsci >= 90 && subjpe <= 100 && subjpe >= 90) || (subjmath <= 100 && subjmath >= 90 && subjsci <= 100 && subjsci >= 90 && subjfili <= 100 && subjfili >= 90) ||(subjmath <= 100 && subjmath >= 90 && subjsci <= 100 && subjsci >= 90 && subjeng <= 100 && subjeng >= 90) || (subjmath <= 100 && subjmath >= 90 && subjfili <= 100 && subjfili >= 90 && subjpe <= 100 && subjpe >= 90) || (subjmath <= 100 && subjmath >= 90 && subjeng <= 100 && subjeng >= 90 && subjpe <= 100 && subjpe >= 90) || (subjmath <= 100 && subjmath >= 90 && subjfili <= 100 && subjfili >= 90 && subjeng <= 100 && subjeng >= 90) || (subjfili <= 100 && subjfili >= 90 && subjsci <= 100 && subjsci >= 90 && subjpe <= 100 && subjpe >= 90) || (subjeng <= 100 && subjeng >= 90 && subjsci <= 100 && subjsci >= 90 && subjpe <= 100 && subjpe >= 90) || (subjeng <= 100 && subjeng >= 90 && subjsci <= 100 && subjsci >= 90 && subjfili <= 100 && subjfili >= 90) ||(subjeng <= 100 && subjeng >= 90 && subjfili <= 100 && subjfili >= 90 && subjpe <= 100 && subjpe >= 90) )
    {
        document.getElementById("stu-rank").textContent="Second Honor Student";
    }
    else
     {
         document.getElementById("stu-rank").textContent="No Rank";
     }
}

function Stdname() {
    var studName = prompt("Enter Your Full Name:");

    if (studName != null)
    {
        document.getElementById("sub-header1").innerHTML = "Student Name:" + " " + studName;
    }
}