/*onsen alap oldalról betéve - kell*/

window.fn = {};

window.fn.toggleMenu = function () {
  document.getElementById('appSplitter').right.toggle();
};

window.fn.loadView = function (index) {
  document.getElementById('appTabbar').setActiveTab(index);
  document.getElementById('sidemenu').close();
};

window.fn.loadLink = function (url) {
  window.open(url, '_blank');
};

window.fn.pushPage = function (page, anim) {
  if (anim) {
    document.getElementById('appNavigator').pushPage(page.id, { data: { title: page.title }, animation: anim });
  } else {
    document.getElementById('appNavigator').pushPage(page.id, { data: { title: page.title } });
  }
};


/*vége*/

ons.ready(function () {
  const sidemenu = document.getElementById('appSplitter');
  ons.platform.isAndroid() ? sidemenu.right.setAttribute('animation', 'overlay') : sidemenu.right.setAttribute('animation', 'reveal');

  document.querySelector('#tabbar-page').addEventListener('postchange', function(event) {
    if (event.target.matches('#appTabbar')) {
      event.currentTarget.querySelector('ons-toolbar .center').innerHTML = event.tabItem.getAttribute('label');
    }
  });
});

    //képek
window.onload = function(){   
    //Check File API support
    if(window.File && window.FileList && window.FileReader)
    {
        $('#files').live("change", function(event) {
            var files = event.target.files; //FileList object
            var output = document.getElementById("result");
            for(var i = 0; i< files.length; i++)
            {
                var file = files[i++];
                //Only pics
              
                if(file.type.match('image.*')){
                    if(this.files[0].size < 2097152){    
                  // continue;
                    var picReader = new FileReader();
                    picReader.addEventListener("load",function(event){
                        var picFile = event.target;
                        var div = document.createElement("div");
                        div.innerHTML = "<img class='thumbnail' src='" + picFile.result + "'" +
                                "title='preview image'/>";
                        output.insertBefore(div,null);    
                        //ha betöltötte a képet ne mutassa a fájl kiválasztást
                        $('#files').hide();  

                       
                    });
                    //ha betölti a képet, akkor mutassa a clear-t és a a képet is
                    $('#clear, #result').show();
                    picReader.readAsDataURL(file);

                  }
                    else{
                        alert("Image Size is too big. Minimum size is 2MB.");
                        $(this).val("");
                        $('#files').show();
                    }

                }else{
                alert("You can only upload image file.");
                $(this).val("");
            }
            }                               
           
        }); //file.type.match
    }
    else
    {
        console.log("Your browser does not support File API");
    }
}


  

    $('#clear').live("click", function() {
        $('.thumbnail').parent().remove();
        $('#result').hide();
        $('#files').show();
        $(this).hide();
    });


    //képfeltöltés vége


    //forms-page

    document.getElementById('forms-page').onInit('index', function (event) {
          if (ons.platform.isAndroid()) {
            const inputItems = document.querySelectorAll('.input-items');
            for (i = 0; i < inputItems.length; i++) {
              inputItems[i].hasAttribute('modifier') ?
                inputItems[i].setAttribute('modifier', inputItems[i].getAttribute('modifier') + ' nodivider') :
                inputItems[i].setAttribute('modifier', 'nodivider');
            }
          }
          var nameInput = document.getElementById('name-input');
          var searchInput = document.getElementById('search-input');
          var updateInputs = function (event) {
            nameInput.value = event.target.value;
            searchInput.value = event.target.value;
            document.getElementById('name-display').innerHTML = event.target.value !== '' ? `Hello ${event.target.value}!` : 'Hello anonymous!';
          }
          nameInput.addEventListener('input', updateInputs);
          searchInput.addEventListener('input', updateInputs);
          document.getElementById('model-switch').addEventListener('change', function (event) {
            if (event.value) {
              document.getElementById('switch-status').innerHTML = `&nbsp;(on)`;
              document.getElementById('enabled-label').innerHTML = `Enabled switch`;
              document.getElementById('disabled-switch').disabled = false;
            } else {
              document.getElementById('switch-status').innerHTML = `&nbsp;(off)`;
              document.getElementById('enabled-label').innerHTML = `Disabled switch`;
              document.getElementById('disabled-switch').disabled = true;
            }
          });
          document.getElementById('select-input').addEventListener('change', function (event) {
            document.getElementById('awesome-platform').innerHTML = `${event.target.value}&nbsp;`;
          });
          var ocurrentFruitId = 'radio-1';
          document.querySelectorAll('.radio-fruit').forEach(function (radio) {
            radio.addEventListener('change', function (event) {
              if (event.target.id !== currentFruitId) {
                document.getElementById('fruit-love').innerHTML = `I love ${event.target.value}!`;
                document.getElementById(currentFruitId).checked = false;
                currentFruitId = event.target.id;
              }
            })
          });
          var currentColors = ['Green', 'Blue'];
          document.querySelectorAll('.checkbox-color').forEach(function (checkbox) {
            checkbox.addEventListener('change', function (event) {
              if (!currentColors.includes(event.target.value)) {
                currentColors.push(event.target.value);
              } else {
                var index = currentColors.indexOf(event.target.value);
                currentColors.splice(index, 1);
              }
              document.getElementById('checkboxes-header').innerHTML = currentColors;
            })
          });
          document.getElementById('range-slider').addEventListener('input', function (event) {
            document.getElementById('volume-value').innerHTML = `&nbsp;${event.target.value}`;
            if (event.target.value > 80) {
              document.getElementById('careful-message').style.display = 'inline-block';
            } else {
              document.getElementById('careful-message').style.display = 'none';
            }
          })
        })



    /*img editors*/

    /*image resize*/
$('#button').click(function(){
    $('#img1').animate({height: '85%', width: '85%', margin: '10px 0 0 10px'});
    //this method increases the height to 72px
});

$('#button2').click(function(){
    $('#img1').animate({height: '40%', width: '88%', margin: '5% 5% 5% 5%'});
    //This method keeps increasing the height by 36px
});

$('#button3').click(function(){
    $('#img1').animate({height: '88%', width: '40%', margin: '5% 5% 5% 5%'});
    //This method keeps increasing the height by 36px
});

$('#button4').click(function(){
    $('#img2').animate({height: '88%', width: '88%', margin: '5% 5% 5% 5%'});
    //This method keeps increasing the height by 36px
});

$('#button5').click(function(){
    $('#img2').animate({height: '88%', width: '40%', margin: '5% 5% 5% 5%'});
    //This method keeps increasing the height by 36px
});

$('#button6').click(function(){
    $('#img2').animate({height: '40%', width: '88%', margin: '5% 5% 5% 5%'});
    //This method keeps increasing the height by 36px
});
/*image resize end*/


/*image rotate jquery*/
  
   $(document).ready(function() {


  var degrees = 0;
  $('.imgRotation1').click(function rotateMe(e) {

    degrees += 90;

    //$('.img').addClass('rotated'); // for one time rotation

    $('#img1').css({

      'transform': 'rotate(' + degrees + 'deg)',
      '-ms-transform': 'rotate(' + degrees + 'deg)',
      '-moz-transform': 'rotate(' + degrees + 'deg)',
      '-webkit-transform': 'rotate(' + degrees + 'deg)',
      '-o-transform': 'rotate(' + degrees + 'deg)'
    });

  })
});


   $(document).ready(function() {


  var degrees = 0;
  $('.imgRotation2').click(function rotateMe(e) {

    degrees += 90;

    //$('.img').addClass('rotated'); // for one time rotation

    $('#img2').css({

      'transform': 'rotate(' + degrees + 'deg)',
      '-ms-transform': 'rotate(' + degrees + 'deg)',
      '-moz-transform': 'rotate(' + degrees + 'deg)',
      '-webkit-transform': 'rotate(' + degrees + 'deg)',
      '-o-transform': 'rotate(' + degrees + 'deg)'
    });

  })
});

  /*image rotate jquery end*/