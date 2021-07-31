namespace dummy_backend
{
    using Microsoft.AspNetCore.Hosting;
    using Microsoft.Extensions.Hosting;
    public class Program
    {
        public static void Main(string[] args)
        {
            CreateHostBuilder(args).Build().Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
          Host.CreateDefaultBuilder(args)
            .ConfigureWebHostDefaults(
              webBuilder =>
              {
                  webBuilder.UseStartup<Startup>().UseUrls("http://0.0.0.0:8080", "http://0.0.0.0:9090");
              });
    }
}
