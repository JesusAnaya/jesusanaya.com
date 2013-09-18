from django.views.generic import View
from django.shortcuts import redirect
from django.core.urlresolvers import reverse_lazy
from django.core.mail import EmailMultiAlternatives
from django.template.loader import render_to_string
from django.utils.html import strip_tags
from .forms import ContactForm


class SendEmail(View):
    def post(self, request, *args, **kwargs):
        form = ContactForm(request.POST)
        if form.is_valid():
            # render the template with the context
            html_content = render_to_string("email/response.html", form.cleaned_data)
            text_content = strip_tags(html_content)

            # send message
            message = EmailMultiAlternatives(
                "Jesusanaya.com message",
                text_content,
                "me@jesusanaya.com",
                ["me@jesusanaya.com", "jesus.anaya.dev@gmail.com"],
            )

            # Attach html content
            message.attach_alternative(html_content, "text/html")

            try:
                # send email
                message.send()
            except:
                print "Error sending email"

        return redirect(reverse_lazy("home"))
