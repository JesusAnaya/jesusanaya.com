from django import template
register = template.Library()


@register.inclusion_tag('header.html')
def render_header(page_tag):
    return {'page_tag': page_tag}
