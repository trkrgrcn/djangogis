from django.db import models
from django.contrib.gis.db import models

class Category(models.Model):
    category_name = models.CharField('Category Name', max_length=50)
    created_date = models.DateTimeField(auto_now_add=True)
    modified_date = models.DateTimeField(auto_now=True)
    class Meta:
        db_table = '"poiapp"."categories"'
    def __str__(self):
        return self.category_name

class SubCategory(models.Model):
    categories = models.ForeignKey('Category',on_delete=models.CASCADE)
    category_name = models.CharField('Category Name', max_length=50)
    created_date = models.DateTimeField(auto_now_add=True)
    modified_date = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = '"poiapp"."subcategories"'
    def __str__(self):
        return self.category_name

# Create your models here.
