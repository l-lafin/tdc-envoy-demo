namespace Philips.CodeQuality.Dashboard.Api.Controllers.v1
{
    using System;
    using Microsoft.AspNetCore.Mvc;

    [Route("/v1/[controller]")]
    [ApiController]
    public class DummyController : ControllerBase
    {
        /// <summary>
        /// Get a new Uuid value.
        /// </summary>
        [HttpGet]
        public ActionResult<string> GetRandomUuid()
        {
            return Ok(Guid.NewGuid().ToString());
        }
    }
}