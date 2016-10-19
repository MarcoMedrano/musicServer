using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;

namespace musicServer
{
    public class Program
    {
        public static void Main(string[] args)
        {
           var config = new ConfigurationBuilder()
                .AddCommandLine(args)
                .AddEnvironmentVariables(prefix: "ASPNETCORE_")
                .Build();

            var host = new WebHostBuilder()
                .UseConfiguration(config)
                .UseUrls("http://*:5000/")
                .UseKestrel()
                .UseContentRoot(Path.Combine(Directory.GetCurrentDirectory(), "server"))
                //.UseIISIntegration()
                .UseStartup<Startup>()
                .Build();

            host.Run();

        }
    }
}
