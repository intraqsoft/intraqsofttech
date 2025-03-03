from django.urls import path
from .import views

urlpatterns=[
    path('',views.home1,name="/"),
    path('internship_confirm_form',views.confrim_form,name="confirm_form"),
    path('internship_apply_form',views.apply_form,name="apply_form"),
    path('submit/',views.contact_sub,name="contact_sub"),
]