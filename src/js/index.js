/**
 * Created by wfsovereign on 15-5-1.
 */

$(function (){
   $('.module-button').on('click',function (){

       console.log('-----');
       $(this).next('.module-content').toggle();
   })
});