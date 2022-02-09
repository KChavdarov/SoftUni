using System;
using System.Collections.Generic;
using System.Text;

namespace Generics
{
    internal class CustomTuple<T1, T2, T3>
    {
        public T1 First { get; set; }
        public T2 Second { get; set; }
        public T3 Third { get; set; }

        public CustomTuple(T1 first, T2 second, T3 third)
        {
            First = first;
            Second = second;
            Third = third;
        }

        public override string ToString()
        {
            return $"{First} -> {Second} -> {Third}";
        }
    }
}
