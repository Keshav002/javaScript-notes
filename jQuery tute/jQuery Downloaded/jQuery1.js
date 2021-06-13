$(document).ready(function () { //It will execute our jQuery code after the loading of the page document
    // Your jquery code here
    console.log("We are on a new file");

    console.log("We are using jQuery");
    // $('selector').action()

    // Clicks on all the p element. This is an example of element selection
    // $('p').click();

    // $('p').click(function () { //if someone clicks on p then,this function is called
    // console.log("You clicked on paragraph", this);
    // $('p').hide();
    //     console.log("You hided the paragraph");
    // $(this).hide(); //it will hide that paragraph that is clicked
    //     $('#id').hide();
    //     $('.class').hide();

    // }); // Do this when click on p

    // $('p').dblclick(function () { //if someone double clicks on p then,this function is called
    // console.log("You double clicked on paragraph", this);
    // $('p').hide();
    //     console.log("You hided the paragraph");
    // $(this).hide(); //it will hide that paragraph that is double clicked
    //     $('#id').hide();
    //     $('.class').hide();

    // }); // Do this when doubleclick on p

    // $('p').mouseenter(function () { //if someone double clicks on p then,this function is called
    // console.log("Your mouse pointer is entered at that place ", this);
    // $('p').hide();
    //     console.log("You hided the paragraph");
    // $(this).hide(); //it will hide that paragrah
    //     $('#id').hide();
    //     $('.class').hide();

    // }); // Do this when mouse pointer enters on p

    // $('p').hover(function () { //if someone hovers on p then,this function is called
    // console.log("Your mouse pointer is hovered at that place ", this);
    // $('p').hide();
    //     console.log("You hided the paragraph");
    // $(this).hide(); //it will hide that paragraph
    //     $('#id').hide();
    //     $('.class').hide();

    // }); // Do this when mouse hovered on p

    // There are three types of selectors in jquery
    // 1. element selector
    // 2. id selector
    // 3. class selector

    // 1. Element Selector - this is an element selector which clicks all the p
    // $('p').click();  //It will click all the p elements

    // 2. Id Selector - It selects the element with specific id
    // $('#second').click();

    // 3. Class Selector - It selects the elements of same class
    // $('.para').click();

    // Other selectors
    //$('*').click();  //It clicks al the elements
    //$('p.para').click();  //It clicks al the p elements with class para
    //$('p:first').click();  //It will click first para

    //Events in jquery - 
    //  Mouse Events - click, dblclick, hover, mouseenter, mouseleave, mousedown(When you clicks(button pressed)), mouseup(button goes up after pressing)
    //  Keyboard Events - keypress, keydown, MedianKeyStatusMap
    //  Form Events - SVGNumberList, change, focus, blur
    //  Document/Window Events - load, resize, scroll unload

    // Demoing the on method
    // $('p').on({
    //     click: function() {
    //         console.log('Thanks for clicking ', this);
    //     },
    //     mouseleave: function(){
    //         console.log('Thanks for mouse leave');
            
    //     }
    // })

    // $('#wiki').hide(2000, function(){     // Hide fn takes 2 arguments time to hide and function 
    //     console.log('Content is hidden');
        
    // })
    // $('#wiki').show(2000, function(){     // Show fn takes 2 arguments time to show and function 
    //     console.log('Content is showed');
        
    // })

    // $('#btn').click(function(){
    //     $('#wiki').toggle(1000);  //Toggle means if content is visible then it will hide it and vice-versa
    // })

    // $('#btn').click(function(){   // These all fade functions takes 2 arguments time and function
        // $('#wiki').fadeOut(1000);
        // $('#wiki').fadeIn(1000);
        // $('#wiki').fadeToggle(1000);
        // $('#wiki').fadeTo(1000);
    // })

    // $('#wiki').slideUp(1000, function(){  // These all slide functions takes 2 arguments time and function
    //     console.log('Slided up the content');
        
    // });   
    // $('#wiki').slideDown(1000);
    // $('#wiki').slideToggle(1000);

    // $('#wiki').animate({
    //     opacity:0.5,
    //     height: '400px',
    //     width: '350px',

    // }, 1000)   // We can also write fast and slow at the place of timing

    // we can also perform animate operation in queue
    // $('#wiki').animate({opacity:.1}, 4000);
    // $('#wiki').animate({opacity:.9}, 5000);
    // $('#wiki').animate({width:"500px"}, 12000);

    // $('#wiki').stop();  //  It will stop the animation

    // $('#wiki').text();   //  It will give the text of the wiki
    // $('#wiki').text('Menuplating the dom');  // It will change the text of wiki

    // $('body').html();  //It will give the html of the body
    // $('body').html('Changing the html of body') //It will ghange the html of the body

    // $('#ta').val();   //It will show the text of textarea
    // $('#ta').val('changing the text-area');    //It will change the text of textarea

    //  $('#wiki').empty();  //It will empty the text of wiki
    //  $('#wiki').text('I am good');

    // $('#wiki').remove();  //It will remove the element from dom
    // $('#wiki').addClass('myClass');
    // $('#wiki').addClass('myClass2');
    // $('#wiki').removeClass('myClass2');

    $('#wiki').css('background-color', 'red');  
    $('#wiki').css('background-color');  //It will give color of background when written on console
})



