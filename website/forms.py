# -*- encoding: utf-8 -*-
from django import forms
from django.conf import settings

STATIC_URL = settings.STATIC_URL

class ContactForm(forms.Form):
    name = forms.CharField()
    email = forms.EmailField()
    url = forms.URLField()
    message = forms.CharField()


class TinyMceWidget(forms.Textarea):
    """ This allows us to use our own TinyMCE setup script. """

    class Media:
        js = (
            "%sjs/tiny_mce/tiny_mce.js" % STATIC_URL,
            "%sjs/tinymceconfig.js" % STATIC_URL,
        )

    def __init__(self, *args, **kwargs):
        super(TinyMceWidget, self).__init__(*args, **kwargs)
        self.attrs["class"] = "mceEditor"
