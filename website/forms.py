from django import forms


class ContactForm(forms.Form):
    name = forms.CharField()
    email = forms.EmailField()
    url = forms.URLField()
    message = forms.CharField()
