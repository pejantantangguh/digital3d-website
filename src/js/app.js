import jquery from 'jquery';
import 'popper.js';
import 'bootstrap';

const $ = jquery;
    // ------------------------------------------------------- //
    //   Make a sticky navbar on scrolling
    // ------------------------------------------------------ //
    $(window).scroll(function () {

        var body = $('body'),
            stickyNavbar = $('nav.navbar-sticky'),
            header = $('.header'),
            topbar = $('.top-bar');

        function makeItFixed(x) {
            if ($(window).scrollTop() > x) {
                stickyNavbar.addClass('fixed-top');
                if (!header.hasClass('header-absolute')) {
                    body.css('padding-top', stickyNavbar.outerHeight());
                    body.data('smooth-scroll-offset', stickyNavbar.outerHeight());
                }
            } else {
                stickyNavbar.removeClass('fixed-top');
                body.css('padding-top', '0');
            }
        }

        // if .top-bar exists, affix the navbar when we scroll past .top-bar
        // else affix it immediately
        if (stickyNavbar.length > 0 && topbar.length > 0) {
            makeItFixed(topbar.outerHeight());
        } else if (stickyNavbar.length > 0) {
            makeItFixed(0);
        }
    });