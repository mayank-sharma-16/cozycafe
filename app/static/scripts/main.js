
var bottom_bar_menu = function(bar_element){
    var bar_texts = bar_element.getElementsByTagName('p');

    bar_element.addEventListener('mouseover', function(){

        bar_element.style.background = "#9F8D88";
        for (text of bar_texts) {
            text.style.color = "#EAD5C2";
        }
    });

    bar_element.addEventListener('mouseout', function(){

        bar_element.style.background = "";
        for (text of bar_texts) {
            text.style.color = "";
        }
    });

};

var bottom_bar1_menu = function(){
    bottom_bar_menu(document.getElementById('bottom_bar1'));
};

var bottom_bar2_menu = function(){
    bottom_bar_menu(document.getElementById('bottom_bar2'));
};

bottom_bar1_menu();
bottom_bar2_menu();
