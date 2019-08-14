// Angular & Router ES6 Imports
import 'hammerjs';

import angular from 'angular';
import angularUIRouter from 'angular-ui-router';
import appComponents from './components/components.js';
import commonComponents from './common/components.js';
import appServices from './services/services.js';
import enableProdMode from '@angular/core';

import './main';
import appConfiguration from './app.config';

// Single Style Entry Point
import './universal-app/theme.scss';
const app = angular.module('app', ['ui.router']);


// Components Entrypoint
appComponents(app);

// Common Components Entrypoint
commonComponents(app);

// App Services Entrypoint
appServices(app);

// Router Configuration
// Components must be declared first since
// Routes reference controllers that will be bound to route templates.
// appConfiguration(app);
