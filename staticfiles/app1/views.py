from django.shortcuts import render, redirect
from .models import Apply_form
from .models import Contact

# Create your views here.

def home1(request):
    return render(request,"home1.html")

def confrim_form(request):
    return render(request,"confirm.html")

def apply_form(request):

    if request.method=='POST':
        name=request.POST["name"]
        email=request.POST["email"]
        phone=request.POST["phone"]
        college=request.POST["college"]
        depart=request.POST["depart"]
        passedout=request.POST["year"]
        domain=request.POST["domain"]
        duration=request.POST["duration"]

        print(name,email,phone,college,depart,passedout,domain,duration)

        
        Apply_form.objects.create(name=name,email=email,phone=phone,college=college,depart=depart,passed=passedout,domain=domain,duration=duration)
        return redirect("/")

    return render(request,"form.html")

def contact_sub(request):
    if request.method=='POST':
        name=request.POST['Full_name']
        email=request.POST['Full_name']
        phone=request.POST['Full_name']
        msg=request.POST['Full_name']

        Contact.objects.create(name=name,email=email,phone=phone,msg=msg)

        return redirect('/')