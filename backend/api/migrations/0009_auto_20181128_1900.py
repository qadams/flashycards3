# Generated by Django 2.1.3 on 2018-11-28 19:00

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0008_deck_description'),
    ]

    operations = [
        migrations.RenameField(
            model_name='flashcard',
            old_name='parentDeck',
            new_name='parentdeck',
        ),
    ]
