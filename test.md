---
layout: page
title: test
permalink: /test/
---

## Testing permalinks and using aria-current

{% if permalink == "test" %}
aria-current="page"
{% else %}
not aria-current
{% endif %}