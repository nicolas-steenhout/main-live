---
layout: page
title: test
permalink: /test/
---

## Testing permalinks and using aria-current

Permalink: {{ permalink }}

Page url: {{ page.url }}

{% if page.url == "/test/" %}
aria-current="page"
{% endif %}