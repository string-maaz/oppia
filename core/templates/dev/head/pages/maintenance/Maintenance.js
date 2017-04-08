// Copyright 2017 The Oppia Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview The controller for the maintenance page.
 */

oppia.controller('Maintenance', [
  '$scope', '$rootScope',
  function($scope, $rootScope) {
    $scope.currentLang = 'en';
    $rootScope.DEV_MODE = GLOBALS.DEV_MODE;
    // Listener function to catch the change in language preference.
    $rootScope.$on('$translateChangeSuccess', function(evt, response) {
      $scope.currentLang = response.language;
    });
  }
]);
