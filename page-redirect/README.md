# Shopify Utilities : Page Redirect
_Version: 1.0.0_

---

### General Instructions

1. Locate page.contact.liquid and add replace all the code in the conditional statement labelled `{%- if form.posted_successfully? -%}`. There will be a termination tag labelled `{%- endif -%}`. 

2. Create a page will the handle 'thank-you'. When initially creating the page, type `Thank you` and the handle will be populated.

3. Test the form.


---

**Please note** : The page redirect can be altered to any page by altering the line labelled `window.location = "/pages/thank-you";`. In essence, change the relative URL, which located between the apostrophes.

---
---

## Theme Specific Instructions

---
---

### Instructions for DEBUT (VERSION 16.5.6) 

1. Locate the file labelled form-status.liquid replace all from lines 11 to 15 with the provided code. 

2. Create a page will the handle 'thank-you'. When initially creating the page, type `Thank you` and the handle will be populated. To alter destination see note above.

3. Test the form.

---


