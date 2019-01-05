/*
 * spa.js
 * ルート名前空間モジュール
*/

/*jslint browser : true, continue :true,
devel : true, indent ; 2, maxerr :50, newcap : true, nomen : true,
plusplus : true, regexp :true, sloppy : true, vars : true, white : true
*/
/*global $, spa:true */

var spa = (function(){

 //　パブリックメソッド/initModule/
 // 初期状態を設定し、機能を提供する
 var initModule = function( $container){
   // HTMLをレンダリングする
   spa.shell.initModule($container);
 };
 return { initModule : initModule};
}());
