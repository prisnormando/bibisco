/*
 * Copyright (C) 2014-2017 Andrea Feccomandi
 *
 * Licensed under the terms of GNU GPL License;
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.gnu.org/licenses/gpl-2.0.html
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY.
 * See the GNU General Public License for more details.
 *
 */
angular.
module('bibiscoApp').
component('detailfooter', {
  templateUrl: 'components/common/uielements/detail-footer/detail-footer.html',
  controller: DetailFooterController,
  bindings: {
    backfunction: '&',
    changetitleenabled: '<',
    changetitlefunction: '&',
    changetitlelabel: '@',
    characters: '<',
    deleteconfirmmessage: '@',
    deleteenabled: '<',
    deletefunction: '&',
    dirty: '<',
    extrabuttons: '<',
    mode: '<',
    savefunction: '&',
    words: '<',
    wordscharactersenabled: '<'
  }
});


function DetailFooterController($uibModal, LoggerService) {

  LoggerService.debug('Start DetailFooterController...');

  var self = this;

  self.delete = function() {
    var modalInstance = $uibModal.open({
      animation: true,
      component: 'modalconfirm',
      resolve: {
        message: function() {
          return self.deleteconfirmmessage;
        }
      }
    });

    modalInstance.result.then(function(selectedItem) {
      self.deletefunction();
    }, function() {
      // cancel
    });
  };

  LoggerService.debug('End DetailFooterController...');
}