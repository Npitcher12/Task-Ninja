/**
 * SchedulePage.js
 *
 * @description :: Server-side actions for handling event schedule requests.
 */

module.exports =  {
  createEvent: async function (req, res) { // This is the action to create a new event
    try {
      const params = {
        subject: req.param('subject'), // This is the event name
        description: req.param('description'), //This is not currently collected
        eventDate: req.param('eventDate'), // This is the date of the event
        startTime: req.param('startTime'), // This is the start time of the event (if applicable)
        endTime: req.param('endTime'), // This is the end time of the event (if applicable)
        allDayEvent: req.param('allDayEvent'), // This is a boolean value that determines if the event is all day
        location: req.param('location'), // This is not currently collected
        isPrivate: req.param('private'), // This is not currently collected
        reoccuring: req.param('reoccuring') // This is the value that determines if the event is reoccuring ['NO', 'D', 'W', 'M'] NOT REOCCURING, DAILY, WEEKLY, MONTHLY
      };
      const eventRecord = {
        subject: params.subject,
        description: params.description ? params.description : 'No description provided',
        eventDate: params.eventDate,
        startTime: params.startTime ? params.startTime : null,
        endTime: params.endTime ? params.endTime : null,
        allDayEvent: params.allDayEvent ? true : false,
        location: params.location ? params.location : 'No location provided',
        isPrivate: params.isPrivate ? params.isPrivate : false,
        reoccuring: params.reoccuring
      };
      if (eventRecord.allDayEvent) {
        eventRecord.startTime = null;
        eventRecord.endTime = null;
      } else {
        if (!eventRecord.startTime || !eventRecord.endTime) {
          return res.send({
            error: 'Invalid parameters'
          });
        }
      }
      await EventSchedule.create(eventRecord);
      return res.redirect('/');
    } catch (error) {
      console.log(error);
      return res.send({
        error: error
      });
    }
  },
  removeEvent: async function (req, res) { // This is the action to remove an event
    try {
      const params = {
        id: req.param('id'), // This is the id of the event to be removed
        removeDate: req.param('removeDate'), // This is the date of the event to be removed (if applicable)
        removeAll: req.param('removeAll') // This is a boolean value that determines if all events should be removed (This will destroy the event record)
      };
      if (params.removeAll) {
        await EventSchedule.destroy({
          id: params.id
        });
      } else if (params.removeDate) {
        const event = await EventSchedule.findOne({
          id: params.id
        });
        const datesToExclude = event.datesToExclude;
        datesToExclude.push(params.removeDate);
        await EventSchedule.update({
          id: params.id
        }).set({
          datesToExclude
        });
      } else {
        return res.send({
          error: 'Invalid parameters'
        });
      }
      return res.redirect('/');
    } catch (error) {
      console.log(error);
      return res.send({
        error: error
      });
    }
  },
  fetchEvents: async function (req, res) { // This is the action to fetch events for a given date range
    try {
      const params = {
        startDate: req.param('startDate'), // This is the start date of the date range
        endDate: req.param('endDate') // This is the end date of the date range
      };
      const events = await EventSchedule.find({
        where: {
          eventDate: {
            '>=': params.startDate,
            '<=': params.endDate
          }
        }
      });
      return res.send({
        events
      });
    } catch (error) {
      console.log(error);
      return res.send({
        error: error
      });
    }
  },
  fetchAllEvents: async function (req, res) { // This is the action to fetch all events
    try {
      const events = await EventSchedule.find();
      return res.send({
        events
      });
    } catch (error) {
      console.log(error);
      return res.send({
        error: error
      });
    }
  }
};
