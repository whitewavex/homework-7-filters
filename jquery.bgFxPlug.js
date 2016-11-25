(function($){

	$.fn.bgFxPlug = function(conf){


		var conf = $.extend({
			filter: 'blur',
            value: '10px'
		}, conf)



		var start = function(){

			var section = $(this).parent();
			var bgImg = $(this).css('background-image');
			var img = $(this).find( 'img' );
            var srcImg = $(img).attr('src');
            var urlImg = 'url('+ srcImg +')';
            console.log(urlImg);
            console.log(bgImg);
			section.append('<div class="bgPlug">');
            
            if( bgImg == 'none' ){
                $('.bgPlug').css('background-image', urlImg );
                $('#bgFxPlug').css('background-image', urlImg );
            }
            else{
			$('.bgPlug').css('background-image', bgImg);
            }

            switch( conf.filter ){
                case 'grayscale':
                    $('.bgPlug').css('-webkit-filter', 'grayscale('+ conf.value +')');
                    $('.bgPlug').css('-moz-filter', 'grayscale(+ conf.value +)');
                    $('.bgPlug').css('filter', 'grayscale(+ conf.value +)');
                break;
                
                case 'sepia':
                    $('.bgPlug').css('-webkit-filter', 'sepia('+ conf.value +')');
                    $('.bgPlug').css('-moz-filter', 'sepia('+ conf.value +')');
                    $('.bgPlug').css('filter', 'sepia('+ conf.value +')');
                break;
                    
                case 'saturate':
                    $('.bgPlug').css('-webkit-filter', 'saturate('+ conf.value +')');
                    $('.bgPlug').css('-moz-filter', 'saturate('+ conf.value +')');
                    $('.bgPlug').css('filter', 'saturate('+ conf.value +')');
                break;
                    
                case 'hue-rotate':
                    $('.bgPlug').css('-webkit-filter', 'hue-rotate('+ conf.value +')');
                    $('.bgPlug').css('-moz-filter', 'hue-rotate('+ conf.value +')');
                    $('.bgPlug').css('filter', 'hue-rotate('+ conf.value +')');
                break;
                    
                case 'invert':
                    $('.bgPlug').css('-webkit-filter', 'invert('+ conf.value +')');
                    $('.bgPlug').css('-moz-filter', 'invert('+ conf.value +')');
                    $('.bgPlug').css('filter', 'invert('+ conf.value +')');
                break;
                    
                case 'opacity':
                    $('.bgPlug').css('-webkit-filter', 'opacity('+ conf.value +')');
                    $('.bgPlug').css('-moz-filter', 'opacity('+ conf.value +')');
                    $('.bgPlug').css('filter', 'opacity('+ conf.value +')');
                break;
                    
                case 'brightness':
                    $('.bgPlug').css('-webkit-filter', 'brightness('+ conf.value +')');
                    $('.bgPlug').css('-moz-filter', 'brightness('+ conf.value +')');
                    $('.bgPlug').css('filter', 'brightness('+ conf.value +')');
                break;
                    
                case 'contrast':
                    $('.bgPlug').css('-webkit-filter', 'contrast('+ conf.value +')');
                    $('.bgPlug').css('-moz-filter', 'contrast('+ conf.value +')');
                    $('.bgPlug').css('filter', 'contrast('+ conf.value +')');
                break;
                    
                default:
                    $('.bgPlug').css('-webkit-filter', 'blur('+ conf.value +')');
                    $('.bgPlug').css('-moz-filter', 'blur('+ conf.value +')');
                    $('.bgPlug').css('filter', 'blur('+ conf.value +')');
            }
            

		}

		return this.each(start)
	}

}(jQuery))