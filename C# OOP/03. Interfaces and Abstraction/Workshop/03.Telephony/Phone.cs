using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace _03.Telephony
{
    public abstract class Phone : ICallable
    {
        public string Call(string number)
        {
            if (!number.All(char.IsDigit))
            {
                throw new ArgumentException("Invalid number!");
            }

            string action = number.Length == 10 ? "Calling" : "Dialing";
            return $"{action}... {number}";
        }
    }
}
