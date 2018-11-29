# Generated by Django 2.1.3 on 2018-11-28 19:05

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0009_auto_20181128_1900'),
    ]

    operations = [
        migrations.AlterField(
            model_name='flashcard',
            name='parentdeck',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='flashcards', to='api.Deck'),
        ),
    ]