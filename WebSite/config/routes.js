/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/homepage' },
  '/createEvent': { controller: 'SchedulePageController', action: 'createEvent', view: 'pages/homepage' },
  '/removeEvent': { controller: 'SchedulePageController', action: 'removeEvent', view: 'pages/homepage' },
  '/fetchEvents': { controller: 'SchedulePageController', action: 'fetchEvents', view: 'pages/homepage' },
  '/fetchAllEvents': { controller: 'SchedulePageController', action: 'fetchAllEvents', view: 'pages/homepage' },
  '/checklist': { view: 'pages/checklist'},
  '/campus_resources': { view: 'pages/campus_resources'},
  '/academic_resources': { view: 'pages/academic_resources'},



  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
