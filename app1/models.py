from django.db import models

# Create your models here.


class Contact(models.Model):
    name=models.CharField(max_length=30)
    email=models.EmailField()
    phone=models.CharField(max_length=13)
    msg=models.TextField()

    def __str__(self):
        return self.name
    
class Apply_form(models.Model):
    name=models.CharField(max_length=40)
    email=models.EmailField()
    phone=models.CharField(max_length=13)
    college=models.CharField(max_length=80)
    depart=models.CharField(max_length=30)
    passed=models.IntegerField()
    domain=models.CharField(max_length=20)
    duration=models.CharField(max_length=15)
    status=models.BooleanField(blank=True,null=True)
    call_res=models.CharField(max_length=20,blank=True,null=True)

    def __str__(self):
        return self.name