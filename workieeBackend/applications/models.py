from django.db import models
from authentication.models import User
from jobs.models import Jobs

class jobApplication(models.Model):
    job_id = models.IntegerField(null=True, blank=True)
    user_id = models.IntegerField(null=True, blank=True)