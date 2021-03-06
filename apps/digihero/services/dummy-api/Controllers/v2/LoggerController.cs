namespace dummy_api.Controllers.v2
{
    using dummy_api.Request;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.Extensions.Logging;

    [Route("/v2/[controller]")]
    [ApiController]
    public class LoggerController : ControllerBase
    {
        private readonly ILogger<LoggerController> _logger;

        public LoggerController(ILogger<LoggerController> logger)
        {
            _logger = logger;
        }

        [HttpPost]
        public ActionResult LogAction([FromHeader] string authorization, [FromBody] LoggerAction action)
        {
            _logger.LogInformation($"Log performed for the token '{authorization}'.");
            _logger.LogInformation(action.Message);
            return Ok();
        }

    }
}