using _01.Vehicles.Core;
using _01.Vehicles.Models;
using System;

namespace _01.Vehicles
{
    internal class StartUp
    {
        static void Main(string[] args)
        {
            Engine engine = new Engine();
            engine.Run();
        }
    }
}
