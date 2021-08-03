namespace dummy_api.Controllers.v1
{
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.Extensions.Logging;
    using System;

    [Route("/v1/[controller]")]
    [ApiController]
    public class LoggerController : ControllerBase
    {
        private readonly ILogger<LoggerController> _logger;

        public LoggerController(ILogger<LoggerController> logger) => _logger = logger;

        [Obsolete]
        [HttpPost]
        public ActionResult LogAction()
        {
            _logger.LogInformation("LogAction - fixed old log.");
            return Ok();
        }
    }
}