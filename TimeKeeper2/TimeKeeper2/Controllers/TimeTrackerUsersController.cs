using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using TimeKeeper2.API.Models;

namespace TimeKeeper2.API.Controllers
{
    public class TimeTrackerUsersController : ApiController
    {
        private TimeTrackerEntities db = new TimeTrackerEntities();

        // GET: api/TimeTrackerUsers
        public IQueryable<TimeTrackerUser> GetTimeTrackerUsers()
        {
            return db.TimeTrackerUsers;
        }

        // GET: api/TimeTrackerUsers/5
        [ResponseType(typeof(TimeTrackerUser))]
        public IHttpActionResult GetTimeTrackerUser(int id)
        {
            TimeTrackerUser timeTrackerUser = db.TimeTrackerUsers.Find(id);
            if (timeTrackerUser == null)
            {
                return NotFound();
            }

            return Ok(timeTrackerUser);
        }

        // PUT: api/TimeTrackerUsers/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutTimeTrackerUser(int id, TimeTrackerUser timeTrackerUser)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != timeTrackerUser.UserId)
            {
                return BadRequest();
            }

            db.Entry(timeTrackerUser).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TimeTrackerUserExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/TimeTrackerUsers
        [ResponseType(typeof(TimeTrackerUser))]
        public IHttpActionResult PostTimeTrackerUser(TimeTrackerUser timeTrackerUser)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.TimeTrackerUsers.Add(timeTrackerUser);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = timeTrackerUser.UserId }, timeTrackerUser);
        }

        // DELETE: api/TimeTrackerUsers/5
        [ResponseType(typeof(TimeTrackerUser))]
        public IHttpActionResult DeleteTimeTrackerUser(int id)
        {
            TimeTrackerUser timeTrackerUser = db.TimeTrackerUsers.Find(id);
            if (timeTrackerUser == null)
            {
                return NotFound();
            }

            db.TimeTrackerUsers.Remove(timeTrackerUser);
            db.SaveChanges();

            return Ok(timeTrackerUser);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool TimeTrackerUserExists(int id)
        {
            return db.TimeTrackerUsers.Count(e => e.UserId == id) > 0;
        }
    }
}