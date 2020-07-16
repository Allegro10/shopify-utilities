// FILTER FUNCTON 
_filterThumbnail: function(variant) {
    $('[data-thumbnail-color]').hide();
    if (variant.featured_media != null && variant.featured_media.alt != null) {
        var selected_color = variant.featured_media.alt;
        var thumbnail_selector = '[data-thumbnail-color="' + selected_color + '"]';
        $(thumbnail_selector).show();
    }
    else {
        $('[data-thumbnail-color]').show();
    }
},

// SELECT CHANGE
this._filterThumbnail(variant);

// PAGE LOAD
this._filterThumbnail(this.currentVariant);

// DATA ATTRIBUTE
data-thumbnail-color="{{ media.alt }}"

