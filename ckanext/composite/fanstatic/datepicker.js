var dates = $('.scheming-datepicker');
var dateOptions;
var currentLang;

// Create datepicker instance for every date field
if (dates) {
    dateOptions = {
        time: false,
        weekStart: 1,
        inputFormat: 'DD-MM-YYYY'
    };
    currentLang = $('html').attr('lang') || 'en';

    moment.locale(currentLang);

    dates.each(function (i, dateElement) {
        rome(dateElement, dateOptions);
    });
}