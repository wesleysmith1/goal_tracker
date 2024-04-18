from django.db import models

# Create your models here.
class Goal(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    SATISFACTION_CHOICES = (
        (1, 'Very Unsatisfied'),
        (2, 'Unsatisfied'),
        (3, 'Neutral'),
        (4, 'Satisfied'),
        (5, 'Very Satisfied'),
    )
    title = models.CharField(max_length=200, blank=True) # description
    duration = models.IntegerField()
    satisfaction = models.IntegerField(choices=SATISFACTION_CHOICES, default=3)
    notes = models.CharField(max_length=500, blank=True)