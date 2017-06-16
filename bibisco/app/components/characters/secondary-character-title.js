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
component('secondarycharactertitle', {
  templateUrl: 'components/characters/secondary-character-title.html',
  controller: SecondaryCharacterTitleController
});

function SecondaryCharacterTitleController($location, $routeParams,
  SecondaryCharacterService, LoggerService) {
  LoggerService.debug('Start SecondaryCharacterTitleController...');

  var self = this;

  self.$onInit = function() {

    // common bradcrumb root
    self.breadcrumbItems = [];
    self.breadcrumbItems.push({
      label: 'jsp.projectFromScene.nav.li.characters'
    });

    if ($routeParams.operation == 'edit') {
      let secondarycharacter = SecondaryCharacterService.getSecondaryCharacter(
        $routeParams.id);

      // edit breadcrumb items
      self.breadcrumbItems.push({
        labelvalue: secondarycharacter.name
      });
      self.breadcrumbItems.push({
        label: 'jsp.character.dialog.title.updateTitle'
      });

      self.exitpath = "/secondarycharacterdetail/" + $routeParams.id;
      self.name = secondarycharacter.name;
      self.pageheadertitle =
        'jsp.character.dialog.title.updateTitle';
    } else {

      // create breadcrumb items
      self.breadcrumbItems.push({
        label: 'jsp.characters.dialog.title.createSecondaryCharacter'
      });

      self.exitpath = "/project/characters";
      self.name = null;
      self.pageheadertitle =
        'jsp.characters.dialog.title.createSecondaryCharacter';
    }
  }

  self.save = function(title) {
    if ($routeParams.operation == 'edit') {
      let secondarycharacter = SecondaryCharacterService.getSecondaryCharacter(
        $routeParams.id);
      secondarycharacter.name = title;
      SecondaryCharacterService.update(secondarycharacter);
    } else {
      SecondaryCharacterService.insert({
        name: title
      });
    }
  }

  LoggerService.debug('End SecondaryCharacterTitleController...');
}