---
layout: post
title: Alt text for avatars or user photos
summary: User photos and avatars are informational images. Do use clear and concise alternate text to describe them. Otherwise blind screen reader users won't have access to the same information as sighted people.
excerpt: User photos and avatars are informational images. Do use clear and concise alternate text to describe them. Otherwise blind screen reader users won't have access to the same information as sighted people.
---
People relying on screen readers should have access to the same kind of information sighted folks have when looking at an image. This is not a new concept. [alt text for images was introduced in HTML back in 1993](https://en.wikipedia.org/wiki/Alt_attribute). It's not new. And yet we're still talking about it. Having to teach about it.

"How to best caption user avatars or user photos?" is a question that's coming up more and more.

<figure>
    <img src="/img/blank-avatar-alt.png" alt="Blank avatar with text that reads alt=Stylized head and shoulder avatar in a circle.">
    </figure>

## How has it been handled historically?

I've seen a couple trends over the years. They kind of make sense to some level, but they aren't enough to really provide the same level of information for people with vision impairments as for sighted people.

1. Use empty or null alt text. This would be using something like alt="". This basically tells screen readers that the image is decorative and not worth worrying about. This is the lazy way out.
2. Use the person's name as alt text. This would be using something like alt="Nicolas Steenhout". It's somewhat useful if a screen reader user is trying to find an image of the person. But it doesn't tell them anything about what the person looks like.

It's not something that has been picked up by accessibility auditors much. At least, I've not seen it raised in audits from different accessibility companies, or discussed between accessibility experts much. But it is something that I'm hearing more and more blind folks asking for. 

## Informative image

A user avatar or photo is an informative image. The image was selected specifically to say something about the person. You probably have spent a bit of time pondering what image or photo of yourself to use on social media. You've probably changed that image several times over the time you've been on social media. Each time you change, there's a reason for it. Maybe you don't look like you did back when you last uploaded an image. Maybe you want to suggest a different mood. But these images are not just decoration. They are there to provide some kind of information.

### What information do you get from these images?

Imagine you're blind. Your screen reader is able to announce alt text. But the image on these screenshots have been marked with alt=""

![Screenshot with the outline of a photo but the photo is left blank. Text on the screenshot reads: Robin Williams. CEO.](/img/robin-williams-nopix.png)

![Screenshot with the outline of a photo but the photo is left blank. Text on the screenshot reads: Robin Wright. CEO.](/img/robin-wright-nopix.png)

What can you tell me about either Robin Williams or Robin Wright, apart from their name and the fact they are CEOs?

Now let's look at the same screenshots. But we're sighted. So we have access to the information available visually in the photos.

What can you now tell me about Robin Williams and Robin Wright? 

Did you assume that Robin Williams was a man and Robin Wright was a woman? It would be easy to do so considering they are famous actors. 

You probably can tell their gender. You can tell their approximate age. You can tell what their race is. You can tell if they use assistive devices such as glasses or hearing aids. There's a lot of information about someone that comes through photos.

![Screenshot with an outlined head and shoulder portrait of an elderly white woman with short grey hair. She is wearing black glasses. Text on the screenshot reads: Robin Williams. CEO.](/img/robin-williams-pix.png)

![Screenshot with an outlined head and shoulder portrait of an younger black man. He has very short hair and a dignified black beard. He is wearing hearing aids. Text on the screenshot reads: Robin Wright. CEO.](/img/robin-wright-pix.png)

This is why avatars or photos of people are considered informational. They require clear and concise alt text that describes the individual. This is in order to at least give part of the same information to blind screen reader users as we get as sighted users.

Note: These photos were AI generated and are not anyone real.

## What information is important?

Sighted users can typically tell the following information just by looking at a photo:

* Age range
* Gender
* Race
* Clothing style
* Hair style
* Facial hair
* Does the person use glasses or hearing aids or other assistive tech?
* Anything else that is striking about this person that says something!

This information helps us form a mental image of the person we're interacting with.

## Brief and concise, but accurate

It's easier to determine what alt text to write if you're describing your own photo. For situations where HR might be writing alt text for all the employee photos on the corporate website, this might be trickier. 

<div class="inline-quote" aria-hidden="true">Keep in mind that alt text should be brief, concise, and accurate.</div>

Keep in mind that alt text should be brief, concise, and accurate. There's no actual limit to the length of alt text you can write. Unless a specific platform limits the number of characters. For example, LinkedIn limits you to 1,000 characters. But while there's no character limit, we do want to keep it concise. A super long text alternative becomes cumbersome and maybe less useful.

