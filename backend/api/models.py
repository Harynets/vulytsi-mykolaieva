from django.db import models


class Person(models.Model):
    CATEGORY_CHOICES = [
        ("military", "Військова справа"),
        ("politics", "Політика"),
        ("science", "Наука"),
        ("business", "Бізнес"),
        ("culture", "Культура"),
        ("writers", "Письменницька діяльність"),
        ("sport", "Спорт"),
        ("public", "Громадська діяльність"),
        ("religion", "Релігія"),
        ("other", "Інше")
    ]

    name = models.CharField(max_length=120)
    date_of_birth = models.DateField(null=True, blank=True)
    date_of_death = models.DateField(null=True, blank=True)
    photo = models.ImageField(blank=True, upload_to="person_image/")
    short_biography = models.TextField(blank=True)
    biography = models.TextField(blank=True)
    quote = models.CharField(max_length=320, blank=True)
    category = models.CharField(max_length=30, choices=CATEGORY_CHOICES)

    def __str__(self):
        return self.name


class Street(models.Model):
    name = models.CharField(max_length=120)
    person = models.ForeignKey(Person, on_delete=models.SET_NULL, null=True, blank=True)

    def __str__(self):
        return self.name