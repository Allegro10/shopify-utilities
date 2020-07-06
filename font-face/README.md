# Shopify Utilities : @Fontface
_Version: 1.0.0_

---

### Instructions

1. Create the required font files. *I recommend uploading your licensed font to `https://transfonter.org/` to create the required files. Esure that you have files for `.eot, .eot2, .woff, .woff2, .ttf & .svg`.*
2. Upload the files to the Shopify file CDN.
3. Locate main theme stylesheet *(normally named theme.scss or style.scss)*.
4. Copy @font-face code and paste at top of stylesheet.
5. Replace all text labelled `please-replace-me` with the name of the file. Be sure to not include the file extension. As an example using Arial, you would need to replace `please-replace-me.eot` would become `arial.eot`. The process would need to be repeated for each file type.
6. The font will now be accessible.

---

**Please note** : If you prefer to add the font to the theme files, you will need to replace the URL filter `file_url` with `asset_url`.

---


