# Shopify Utilities : Simple Trust Badges
_Version: 1.0.0_

---

### Instructions

1. Locate theme.liquid and add `{{ 'trust-badges.scss' | asset_url | stylesheet_tag }}` before the `</head>` tag.
2. Add `trust-badges.scss.liquid` to the Assets folder
3. Add `trust-badges.liquid` to the Snippets folder
4. Locate the position that you would like the Trust Badges to be located and add `{% include 'trust-badges' %}`

---

**Please note** : The badges are based on the available payment gateways that are activated in your store. The payment gateways will need to activated to appear on the store front. 

---


