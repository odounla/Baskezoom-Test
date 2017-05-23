(function() {
    "use strict";

    // custom scrollbar

    $("html").niceScroll({styler:"fb",cursorcolor:"#27cce4", cursorwidth: '5', cursorborderradius: '10px', background: '#424f63', spacebarenabled:false, cursorborder: '0',  zindex: '1000'});

    $(".left-side").niceScroll({styler:"fb",cursorcolor:"#27cce4", cursorwidth: '3', cursorborderradius: '10px', background: '#424f63', spacebarenabled:false, cursorborder: '0'});


    $(".left-side").getNiceScroll();
    if ($('body').hasClass('left-side-collapsed')) {
        $(".left-side").getNiceScroll().hide();
    }



    // Toggle Left Menu
   jQuery('.menu-list > a').click(function() {

      var parent = jQuery(this).parent();
      var sub = parent.find('> ul');

      if(!jQuery('body').hasClass('left-side-collapsed')) {
         if(sub.is(':visible')) {
            sub.slideUp(200, function(){
               parent.removeClass('nav-active');
               jQuery('.main-content').css({height: ''});
               mainContentHeightAdjust();
            });
         } else {
            visibleSubMenuClose();
            parent.addClass('nav-active');
            sub.slideDown(200, function(){
                mainContentHeightAdjust();
            });
         }
      }
      return false;
   });

   function visibleSubMenuClose() {
      jQuery('.menu-list').each(function() {
         var t = jQuery(this);
         if(t.hasClass('nav-active')) {
            t.find('> ul').slideUp(200, function(){
               t.removeClass('nav-active');
            });
         }
      });
   }

   function mainContentHeightAdjust() {
      // Adjust main content height
      var docHeight = jQuery(document).height();
      if(docHeight > jQuery('.main-content').height())
         jQuery('.main-content').height(docHeight);
   }

   //  class add mouse hover
   jQuery('.custom-nav > li').hover(function(){
      jQuery(this).addClass('nav-hover');
   }, function(){
      jQuery(this).removeClass('nav-hover');
   });


   // Menu Toggle
   jQuery('.toggle-btn').click(function(){
       $(".left-side").getNiceScroll().hide();

       if ($('body').hasClass('left-side-collapsed')) {
           $(".left-side").getNiceScroll().hide();
       }
      var body = jQuery('body');
      var bodyposition = body.css('position');

      if(bodyposition != 'relative') {

         if(!body.hasClass('left-side-collapsed')) {
            body.addClass('left-side-collapsed');
            jQuery('.custom-nav ul').attr('style','');

            jQuery(this).addClass('menu-collapsed');

         } else {
            body.removeClass('left-side-collapsed chat-view');
            jQuery('.custom-nav li.active ul').css({display: 'block'});

            jQuery(this).removeClass('menu-collapsed');

         }
      } else {

         if(body.hasClass('left-side-show'))
            body.removeClass('left-side-show');
         else
            body.addClass('left-side-show');

         mainContentHeightAdjust();
      }

   });


   searchform_reposition();

   jQuery(window).resize(function(){

      if(jQuery('body').css('position') == 'relative') {

         jQuery('body').removeClass('left-side-collapsed');

      } else {

         jQuery('body').css({left: '', marginRight: ''});
      }

      searchform_reposition();

   });

   function searchform_reposition() {
      if(jQuery('.searchform').css('position') == 'relative') {
         jQuery('.searchform').insertBefore('.left-side-inner .logged-user');
      } else {
         jQuery('.searchform').insertBefore('.menu-right');
      }
   }
})(jQuery);

                      // Dropdowns Script
						$(document).ready(function() {
						  $(document).on('click', function(ev) {
						    ev.stopImmediatePropagation();
						    $(".dropdown-toggle").dropdown("active");
						  });
						});



  /************** Search ****************/
		$(function() {
	    var button = $('#loginButton');
	    var box = $('#loginBox');
	    var form = $('#loginForm');
	    button.removeAttr('href');
	    button.mouseup(function(login) {
	        box.toggle();
	        button.toggleClass('active');
	    });
	    form.mouseup(function() {
	        return false;
	    });
	    $(this).mouseup(function(login) {
	        if(!($(login.target).parent('#loginButton').length > 0)) {
	            button.removeClass('active');
	            box.hide();
	        }
	    });
	});
  /************** Test results ****************/
  var container = document.getElementById('example');
var baseUrl = "http://handsontable.com/static/";

var dataSport = [
  [1,"Los Angeles Lakers","<img src='"+ baseUrl+ "images/logos/nba-teams/lakers.gif'>","2600","0.93","0.02","293","104.1"],
  [2,"New York Knicks","<img src='"+ baseUrl+ "images/logos/nba-teams/knicks.gif'>","2500","0.79","0.00","278","53.4"],
  [3,"Chicago Bulls","<img src='"+ baseUrl+ "images/logos/nba-teams/bulls.gif'>","2000","0.100","0.03","201","65.3"],
  [4,"Boston Celtics","<img src='"+ baseUrl+ "images/logos/nba-teams/celtic.gif'>","1700","0.94","0.09","173","54.9"],
  [5,"Los Angeles Clippers","<img src='"+ baseUrl+ "images/logos/nba-teams/clippers.gif'>","1600","0.178","0.00","146","20.1"],
  [6,"Brooklyn Nets","<img src='"+ baseUrl+ "images/logos/nba-teams/nets.gif'>","1500","0.92","0.019","212","-99.4"],
  [7,"Golden State Warriors","<img src='"+ baseUrl+ "images/logos/nba-teams/warriors.gif'>","1300","0.73","0.012","168","44.9"],
  [8,"Houston Rockets","<img src='"+ baseUrl+ "images/logos/nba-teams/rockets.gif'>","1250","0.61","0.08","175","38"],
  [9,"Miami Heat","<img src='"+ baseUrl+ "images/logos/nba-teams/heat.gif'>","1175","0.53","0.08","188","12.6"],
  [10,"Dallas Mavericks","<img src='"+ baseUrl+ "images/logos/nba-teams/mavericks.gif'>","1150","0.50","0.017","168","30.4"],
  [11,"San Antonio Spurs","<img src='"+ baseUrl+ "images/logos/nba-teams/spurs.gif'>","1000","0.52","0.08","172","40.9"],
  [12,"Portland Trail Blazers","<img src='"+ baseUrl+ "images/logos/nba-teams/blazers.gif'>","940","0.60","0.011","153","11.7"],
  [13,"Oklahoma City Thunder","<img src='"+ baseUrl+ "images/logos/nba-teams/thunder.gif'>","930","0.58","0.015","152","30.8"],
  [14,"Toronto Raptors","<img src='"+ baseUrl+ "images/logos/nba-teams/raptors.gif'>","920","0.77","0.016","151","17.9"],
  [15,"Cleveland Cavaliers","<img src='"+ baseUrl+ "images/logos/nba-teams/cavaliers.gif'>","915","0.78","0.022","149","20.6"],
  [16,"Phoenix Suns","<img src='"+ baseUrl+ "images/logos/nba-teams/suns.gif'>","910","0.61","0.020","145","28.2"],
  [17,"Washington Wizards","<img src='"+ baseUrl+ "images/logos/nba-teams/wizards.gif'>","900","0.86","0.014","143","10.1"],
  [18,"Orlando Magic","<img src='"+ baseUrl+ "images/logos/nba-teams/magic.gif'>","875","0.56","0.017","143","20.9"],
  [19,"Denver Nuggets","<img src='"+ baseUrl+ "images/logos/nba-teams/nuggets.gif'>","855","0.73","0.01","136","14"],
  [20,"Utah Jazz","<img src='"+ baseUrl+ "images/logos/nba-teams/jazz.gif'>","850","0.62","0.06","142","32.7"],
  [21,"Indiana Pacers","<img src='"+ baseUrl+ "images/logos/nba-teams/pacers.gif'>","830","0.75","0.018","139","25"],
  [22,"Atlanta Hawks","<img src='"+ baseUrl+ "images/logos/nba-teams/hawks.gif'>","825","0.94","0.021","133","14.8"],
  [23,"Detroit Pistons","<img src='"+ baseUrl+ "images/logos/nba-teams/pistons.gif'>","810","0.80","0.023","144","17.6"],
  [24,"Sacramento Kings","<img src='"+ baseUrl+ "images/logos/nba-teams/kings.gif'>","800","0.45","0.029","125","8.9"],
  [25,"Memphis Grizzlies","<img src='"+ baseUrl+ "images/logos/nba-teams/memphis.gif'>","750","0.66","0.023","135","10.5"],
  [26,"Charlotte Hornets","<img src='"+ baseUrl+ "images/logos/nba-teams/hornets.gif'>","725","0.77","0.021","130","1.2"],
  [27,"Philadelphia 76ers","<img src='"+ baseUrl+ "images/logos/nba-teams/76ers.gif'>","700","0.49","0.021","125","24.4"],
  [28,"New Orleans Pelicans","<img src='"+ baseUrl+ "images/logos/nba-teams/orleans.gif'>","650","0.55","0.019","131","19"],
  [29,"Minnesota Timberwolves","<img src='"+ baseUrl+ "images/logos/nba-teams/timberwolves.gif'>","625","0.45","0.016","128","6.9"],
  [30,"Milwaukee Bucks","<img src='"+ baseUrl+ "images/logos/nba-teams/bucks.gif'>","600","0.48","0.029","110","11.5"]
];

var hot = new Handsontable(container, {
  data: dataSport,
  colHeaders: ["Rank", "Team", "Logo", "Current Value ($M)", "1-Yr Change (%)", "Debt/Value (%)", "Revenue ($M)", "Income ($M)"],
  rowHeaders: false,
  columnSorting: true,
  contextMenu: true,
  autoWrapRow: true,
  columns: [
    {data: 0, type: 'numeric'},
    {data: 1, type: 'text'},
    {data: 2, renderer: 'html', width: 200},
    {data: 3, type: 'numeric', format: '$0,0.00'},
    {data: 4, type: 'numeric', format: '0.00%'},
    {data: 5, type: 'numeric', format: '0.00%'},
    {data: 6, type: 'numeric', format: '$0,0.00'},
    {data: 7, type: 'numeric', format: '$0,0.00'}
  ],
  cells: function (row, col, prop) {
    var cellProperties = {};
    cellProperties.className = 'htMiddle htCenter';
    return cellProperties;
  }
});
