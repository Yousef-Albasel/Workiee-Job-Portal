document.addEventListener('DOMContentLoaded', function(){
    displayJobs();
    Search();
});


function Search(){
    let searchOption = document.querySelector("#exp").value.toLowerCase();
    let searchBar = document.querySelector(".search-input").value.toLowerCase();
    let jobSearch = document.querySelectorAll(".block");
    let jobTitleSearch = document.getElementsByTagName('h5');
    let yExpSearch = document.getElementsByClassName('y-exp');

    
    for (let i=0; i<jobTitleSearch.length; i++){
        if(jobTitleSearch[i].innerHTML.toLowerCase().indexOf(searchBar) >= 0 && yExpSearch[i].innerHTML.toLowerCase().indexOf(searchOption) >= 0){
            jobSearch[i].style.display = "";
        }
        else{
            jobSearch[i].style.display = "none";
        }
    }


}

function displayJobs(){
    let jobs = JSON.parse(localStorage.getItem('jobs')) || [];
    let listedJobs = document.querySelector('.content');

    jobs.forEach(function(job) {
        let jobBlock = document.createElement('div');
        jobBlock.classList.add('block');
        jobBlock.setAttribute('data-job-id', job.jobId); 

        let jobBlockHeader = document.createElement('div');
        jobBlockHeader.classList.add('comp-name');

        let image = document.createElement('img');
        image.setAttribute('src', '../images/company_logo.png');
        image.setAttribute('alt', 'Company Logo')

        let jobTitle = document.createElement('h5');
        jobTitle.classList.add('job-title');
        jobTitle.textContent = job.jobTitle;

        let compNameAddress = document.createElement('p');
        let compName = document.createElement('span');
        compName.classList.add('bolded');
        compName.textContent = job.CompanyName;
        compNameAddress.appendChild(compName);
        let compAddress = document.createElement('span');
        compAddress.textContent = ` - ${job.CompanyAddress}`;
        compNameAddress.appendChild(compAddress);
        

        jobBlockHeader.appendChild(image);
        jobBlockHeader.appendChild(jobTitle);
        jobBlockHeader.appendChild(compNameAddress);

        let jobDescription = document.createElement('p');
        jobDescription.classList.add('discription')
        jobDescription.textContent = job.jobDescription;

        let yearsOfExperience = document.createElement('p');
        yearsOfExperience.classList.add('experiences');
        let yExp = document.createElement('span');
        yExp.classList.add('y-exp');
        yExp.textContent = job.yearsOfExperience;
        yearsOfExperience.appendChild(yExp);
        let yText = document.createElement('span');
        yText.textContent = ` Years of Experience.`;
        yearsOfExperience.appendChild(yText);
        

        let Salary = document.createElement('p');
        Salary.classList.add('salary');
        let salaryNum = document.createElement('span');
        salaryNum.classList.add('bolded');
        salaryNum.textContent = `E£${job.jobSalary}`;
        Salary.appendChild(salaryNum);
        let perMonth = document.createElement('span');
        perMonth.textContent = ` / month`
        Salary.appendChild(perMonth)

        let Buttons = document.createElement('div');
        Buttons.classList.add('job-buttons');

        let applyButton = document.createElement('button');
        applyButton.setAttribute('onclick', "location.href='#'");
        applyButton.textContent = 'Apply'

        let detailsButton = document.createElement('button');
        detailsButton.setAttribute('onclick', "getJobId(this)");
        detailsButton.textContent = 'Details'

        Buttons.appendChild(applyButton);
        Buttons.appendChild(detailsButton);

        jobBlock.appendChild(jobBlockHeader);
        jobBlock.appendChild(jobDescription);
        jobBlock.appendChild(yearsOfExperience);
        jobBlock.appendChild(Salary);
        jobBlock.appendChild(Buttons);

        listedJobs.appendChild(jobBlock);

    });
}

function getJobId(button) {
    let selectedJobId = button.parentElement.parentElement.getAttribute('data-job-id');
    sessionStorage.setItem('selectedJobId', selectedJobId);
    window.location.href = 'jobDescription.html';
}

