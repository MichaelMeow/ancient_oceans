import './sass/styles.scss';
import ancient-oceans from '../assets/video/ancient-oceans.mp4';


$('.txt').html(function(i, html) {
  var chars = $.trim(html).split("");

  return '<span>' + chars.join('</span><span>') + '</span>';
});
