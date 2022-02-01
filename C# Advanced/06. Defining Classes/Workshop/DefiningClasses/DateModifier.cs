using System;
using System.Collections.Generic;
using System.Text;

namespace DefiningClasses
{
    internal class DateModifier
    {
        public static int GetDaysBetweenDates(string dateA, string dateB)
        {
            DateTime first = DateTime.Parse(dateA);
            DateTime second = DateTime.Parse(dateB);

            return Math.Abs((int)(first - second).TotalDays);
        }
    }
}
