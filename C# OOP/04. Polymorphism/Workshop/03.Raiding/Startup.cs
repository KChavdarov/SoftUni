using _03.Raiding.Core;
using System;

namespace _03.Raiding
{
    internal class Startup
    {
        static void Main(string[] args)
        {
            var engine = new Engine();
            engine.Run();
        }
    }
}
