---
layout: post
title: Common terms used on the site
tags: Tips 
---
There are quilting terms that I use frequently that my non-quilting friends might not be familiar with. Thought I'd give you the low-down!

<dl>
    <dt>Quilt<dt>
    <dd>A finished product that consists of a top and bottom layer of fabric, with batting in between, and quilting to hold it all in place.<dd>    
    <dt>Quilting<dt>
    <dd>What I call the activity as a whole - cutting and piecing fabrics, adding binding, sewing, etc. When I say II'm going to do some quilting, typically that's what I mean.<dd>
    <dd>Sewing by hand or machine to hold all the parts of a quilt together. These sewing lines are often decorative.</dd>
    <dt>Fat quarter<dt>
    <dd>A piece of fabric that is a quater of a yard. Instead of four long cuts, you cut it to have four pieces of fabrics that are a more "fat" rectangle, nearly square.<dd>
    <dt>Flimsy<dt>
    <dd>Also known as "top", this refers to the finished patchwork top part of what will be a quilt.<dd>
    <dt>Basting<dt>
    <dd>Getting two or more pieces of fabric holding together before piecing them or quilting them. Using pins, thread, or glue.<dd>
    <dt>Block<dt>
    <dd>Part of a flimsy. Typically pieced from two or more pieces of fabric. These are the "building blocks" of a quilt.<dd>
</dl>
    

## More tips and tricks

  {% for tag in page.tags %}
  <a class="post" href="/tag/{{tag}}">Other posts with the #{{tag}} tag</a>{% unless forloop.last %}, {% endunless %}
  {% endfor %}
