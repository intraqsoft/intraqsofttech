# Generated by Django 5.1.6 on 2025-03-02 18:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app1', '0002_apply_form'),
    ]

    operations = [
        migrations.AlterField(
            model_name='apply_form',
            name='call_res',
            field=models.CharField(blank=True, max_length=20, null=True),
        ),
        migrations.AlterField(
            model_name='apply_form',
            name='phone',
            field=models.CharField(max_length=13),
        ),
        migrations.AlterField(
            model_name='apply_form',
            name='status',
            field=models.BooleanField(blank=True, null=True),
        ),
    ]
