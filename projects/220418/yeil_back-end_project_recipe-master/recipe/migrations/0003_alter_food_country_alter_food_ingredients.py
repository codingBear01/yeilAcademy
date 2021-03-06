# Generated by Django 4.0.3 on 2022-04-16 13:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('recipe', '0002_food_recipeurl'),
    ]

    operations = [
        migrations.AlterField(
            model_name='food',
            name='country',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='food',
            name='ingredients',
            field=models.ManyToManyField(related_name='ingredients', to='recipe.ingredients'),
        ),
    ]
