'use strict';

angular.module('EAT.version', [
  'EAT.version.interpolate-filter',
  'EAT.version.version-directive'
])

.value('version', '0.1');
