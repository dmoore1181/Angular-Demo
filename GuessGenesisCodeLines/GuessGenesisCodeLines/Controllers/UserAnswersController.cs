﻿using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using GuessGenesisCodeLines.Models;
using System.Web.Http.Cors;

namespace GuessGenesisCodeLines.Controllers
{
    [EnableCors(origins: "http://localhost:49254", headers: "*", methods: "*")]
    public class UserAnswersController : ApiController
    {
        private GuessGenesisEntities2 db = new GuessGenesisEntities2();

        // GET: api/UserAnswers
        public IQueryable<UserAnswer> GetUserAnswers()
        {
            return db.UserAnswers.OrderByDescending(x=>x.answer);
        }

        // GET: api/UserAnswers/5
        [ResponseType(typeof(UserAnswer))]
        public IHttpActionResult GetUserAnswer(int id)
        {
            UserAnswer userAnswer = db.UserAnswers.Find(id);
            if (userAnswer == null)
            {
                return NotFound();
            }

            return Ok(userAnswer);
        }

        // PUT: api/UserAnswers/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutUserAnswer(int id, UserAnswer userAnswer)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != userAnswer.UserID)
            {
                return BadRequest();
            }

            db.Entry(userAnswer).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserAnswerExists(id))
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

        // POST: api/UserAnswers
        [ResponseType(typeof(UserAnswer))]
        public IHttpActionResult PostUserAnswer(UserAnswer userAnswer)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.UserAnswers.Add(userAnswer);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = userAnswer.UserID }, userAnswer);
        }

        // DELETE: api/UserAnswers/5
        [ResponseType(typeof(UserAnswer))]
        public IHttpActionResult DeleteUserAnswer(int id)
        {
            UserAnswer userAnswer = db.UserAnswers.Find(id);
            if (userAnswer == null)
            {
                return NotFound();
            }

            db.UserAnswers.Remove(userAnswer);
            db.SaveChanges();

            return Ok(userAnswer);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool UserAnswerExists(int id)
        {
            return db.UserAnswers.Count(e => e.UserID == id) > 0;
        }
    }
}