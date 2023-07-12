from django.contrib import admin
from .models import Category,SubCategory

# Register your models here.

#admin.site.register(Category)
#admin.site.register(SubCategory)

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display=["category_name"]
    class Meta:
        model = Category

@admin.register(SubCategory)
class SubCategoryAdmin(admin.ModelAdmin):
    list_display=["categories","category_name"]
    search_fields=["categories"]
    class Meta:
        model = SubCategory
