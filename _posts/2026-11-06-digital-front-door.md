---
layout: post
title: The digital front door is part of healthcare
summary: An inaccessible website or app can stop a disabled patient from getting healthcare. Every step matters, from booking an appointment to reading treatment instructions. Clinics are responsible for making their systems accessible, including software they buy. Testing with disabled people helps clinics find and fix problems that prevent patients from getting care.

excerpt: An unlabeled form or a video platform without captions can stop a patient from getting healthcare. Clinics are responsible for making the whole service accessible, from booking an appointment to reading follow-up instructions.
---
Bob (not his real name) is blind. He couldn't even create an account on his doctor's office's new appointment platform. The clinic hadn't connected the form fields to their labels in the code, so his screen reader couldn't tell him what information belonged where. And Wendy (also not her real name) is Deaf. She couldn't have a video visit because the platform had no captions and wouldn't let her add an interpreter to the call.

<figure>
    <img src="/img/braille-writer.jpg" alt="A person using a refreshable braille display beside a computer keyboard.">
    <figcaption>Photo by <a href="https://unsplash.com/@sigmund?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Compagnons</a> on <a href="https://unsplash.com/photos/person-using-braille-writer-4MoIpDcSlr4?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>s</figcaption>
</figure>


One inaccessible step can stop a patient from getting care. The portal and video platform are part of how the clinic provides that care, including before and after the consultation. The clinic is responsible for making that digital front door accessible, including the software it buys from vendors.

## Who encounters these barriers?

The [CDC reports that more than one in four US adults is disabled](https://www.cdc.gov/disability-and-health/about/index.html). Disabled people also use healthcare more often. A [2025 study of US adults](https://pubmed.ncbi.nlm.nih.gov/40214987/) found that disabled adults had more outpatient visits and filled more prescriptions. For patients managing several conditions, using the clinic's inaccessible system becomes a recurring part of getting treatment.

And [healthcare happens when people aren't at their best](https://nicolas-steenhout.com/healthcare-digital-accessibility/). Reading a long intake form on a small phone gets harder when you're in pain and worried about the appointment. Recovering from hand surgery can mean temporarily using a keyboard instead of a mouse.

“Just call us” comes up often as an answer to an inaccessible website. Many Deaf, hard of hearing and speech-disabled people cannot use phone calls. Some neurodivergent people struggle with phone calls. Patients who can use the phone still have to fit calls around office hours, sometimes spending half a lunch break on hold. The clinic saves itself the work of fixing the form, and the patient takes on the work of getting around it.

## Getting in

An inaccessible map can prevent patients from finding a nearby clinic. The clinic details are unavailable when the pins cannot be reached with a keyboard or read with a screen reader. A list alongside the map would give patients another way to find a clinic.

Verification codes block login when they expire before the patient can retrieve and enter them. Requesting another code gives the patient the same task with the same time limit.

Login can also require remembering a password or transcribing a code. [WCAG 2.2's Accessible Authentication criterion, 3.3.8](https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-minimum.html), addresses those cognitive demands. Supporting password managers and pasting codes helps patients complete these tasks, but the time allowed is a separate issue.

## Booking and intake

Calendar pickers can work with a mouse and fail with a keyboard. Screen reader users cannot tell which date they are selecting when buttons have no accessible names. Available appointments are useless to a patient who cannot select one.

A Deaf patient requesting an interpreter needs confirmation that the clinic has arranged one. Submitting a request in a comments field provides no assurance that anyone has acted on it.

Then the clinic sends an intake PDF to print, sign, scan, and upload. The patient has to supply the equipment and be able to handle the paperwork. Getting help with the form can mean sharing private medical information with a friend or family member. The clinic is asking the patient to give up privacy to get its form filled in.

## The visit

Wendy got as far as the video visit. Her clinician was available, but Wendy couldn't communicate through the platform the clinic had chosen.

The interpreter cannot participate if the software blocks additional attendees. The patient loses access to the interpreter when screen sharing hides the interpreter's video.

Platforms that offer captions still create a barrier when only the clinician can turn them on. The patient then depends on the clinician knowing where the control is.

Clinicians sometimes put medication names or follow-up dates in chat. A screen reader user cannot read that information if they cannot open the chat panel. The clinician has shared instructions without making them available to the patient.

Patients using communication devices take time to compose their answers. A fixed appointment length cuts the consultation short when the patient needs longer to explain their symptoms. The clinician then has only part of the information.

## After the visit

Lab results uploaded only as images are unreadable with a screen reader. Poorly built results tables present numbers without identifying which test each number belongs to.

Displaying a pickup code only as an image forces a blind patient to get help retrieving it. Small, faint medication instructions are difficult to read with low vision. As an illustration, a hard-to-read decimal point could make a 0.5 mg instruction look like 5 mg. I expect clinics to treat a dose patients can misread as a safety defect.

The patient cannot read a care plan supplied as an inaccessible attachment and has to ask staff for usable instructions.

## The clinic's responsibility

Clinics often buy scheduling from one company and video visits from another. Testing each product separately misses problems patients encounter moving between them. I would test the complete service, from registration through reading the follow-up instructions, using the systems patients will actually encounter.

Keyboard and screen reader checks would have identified several of the barriers described here. Testing with voice control covers how patients operate these systems by speech. Disabled testers can identify steps where they must seek help or use a workaround to finish. Paying them for their time belongs in the testing budget.

Staff can check the following tasks as part of a practice appointment:

- Join as an interpreter, then have the clinician share a screen. Confirm that the interpreter can enter the call and remain visible to the patient throughout screen sharing.
- Try the caption controls from both the patient and clinician sides. Confirm who controls them and that the patient can read them during the call.
- Request a longer appointment and confirm that the booking system reserves the extra time.
- Enlarge the medication instructions and check that decimal points remain clearly visible.

### Purchasing and accountability

A clinic can commit to years of using an inaccessible platform before discovering its vendor cannot or will not fix it. Asking vendors to demonstrate complete tasks before signing gives the buyer evidence to assess alongside accessibility reports. The contract should specify the vendor's responsibility for fixing accessibility defects.

The clinic should record where disabled patients stop and what help they require, even when they eventually finish. Wendy could book but couldn't have her consultation. Bob couldn't register. Neither failure would show up in a count of successful bookings.
