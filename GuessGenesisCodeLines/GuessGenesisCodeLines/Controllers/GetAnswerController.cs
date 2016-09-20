using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Description;
using GuessGenesisCodeLines.API.Models;

namespace GuessGenesisCodeLines.API.Controllers
{
    [EnableCors(origins: "http://localhost:49254", headers: "*", methods: "*")]
    public class GetAnswerController : ApiController
    {

        private GuessGenesisEntities2 db = new GuessGenesisEntities2();

        // GET: api/Answer
        [ResponseType(typeof(UserAnswer))]
        public IHttpActionResult GetAnswer()
        {
            UserAnswer userAnswer = new UserAnswer();
            var answers = db.UserAnswers;
            if (answers.Any(r => r.answer < 198692))
            {
                userAnswer = answers.OrderByDescending(r => r.answer).First(r => r.answer <= 198692);
            }
            else
            {
                //Get The closest that is greater then
                userAnswer = answers.OrderBy(r => r.answer).First();
            }
            if (userAnswer == null)
            {
                return NotFound();
            }

            return Ok(userAnswer);
        }
    }
}
