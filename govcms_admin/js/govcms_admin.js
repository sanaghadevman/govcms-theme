/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var Drupal = Drupal || {};

(function($, Drupal){
    jQuery(document).ready(function($) {
        if(CKEDITOR != null) {
            CKEDITOR.dtd.a.h2 = 1;
            CKEDITOR.dtd.a.div = 1;
            CKEDITOR.dtd.$removeEmpty.i = 0;
        }
    });

})(jQuery, Drupal);



