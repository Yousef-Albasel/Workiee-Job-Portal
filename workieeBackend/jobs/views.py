from django.shortcuts import render
from django.http import HttpResponse , HttpResponseRedirect
from django.template import loader
from .models import Jobs
from django.urls import reverse

def index(request):
  tmp= loader.get_template('index.html')
  alljobs=Jobs.objects.all().values()
  context = {
        'jobs' : alljobs,
    }
  return HttpResponse(tmp.render(context,request))


def add(request):
  template = loader.get_template('addJob.html')
  return HttpResponse(template.render())

def addrecord(request):
  jobTitle=request.POST.get('jobTitle')
  jobSalary=request.POST.get('jobSalary')
  jobStatus=request.POST.get('jobStatus')
  yearsOfExperience = request.POST.get('yearsOfExperience')
  companyName=request.POST.get('CompanyName')
  companyAddress=request.POST.get('CompanyAddress')
  jobDesc=request.POST.get('jobDescription')
  jobReq=request.POST.get('jobRequirements')
  

  job =Jobs(
    jobtitle =jobTitle , 
    jobsalary = jobSalary,
    jobstatus =jobStatus ,
    yearsofexperience=yearsOfExperience,
    companyname = companyName,
    companyaddress = companyAddress,
    jobdescription = jobDesc , 
    jobrequirements = jobReq
        ) 

  job.save()
  return HttpResponseRedirect(reverse('index'))

def delete(request, id):
  job = Jobs.objects.get(id=id)
  job.delete()
  return HttpResponseRedirect(reverse('index'))

def loadDashboard(request):
  tmp= loader.get_template('admin-dashboard.html')
  listOfJobs = Jobs.objects.all()
  context = {
        'jobs' : listOfJobs,
    }
  return HttpResponse(tmp.render(context,request))