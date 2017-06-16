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
component('breadcrumb', {
  templateUrl: 'components/common/uielements/breadcrumb/breadcrumb.html',
  controller: BreadcrumbController,
  bindings: {
    items: '<'
  }
});

function BreadcrumbController($location, LoggerService) {
  LoggerService.debug('Start BreadcrumbController...');

  var self = this;

  self.followlink = function(path) {
    $location.path(path);
  }

  LoggerService.debug('End BreadcrumbController...');
}