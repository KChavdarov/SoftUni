using System;
using System.Collections.Generic;
using System.Text;

namespace StackOfStrings
{
    internal class StackOfStrings : Stack<string>
    {
        public bool IsEmpty()
        {
            return Count == 0;
        }

        public void AddRange(IEnumerable<string> elements)
        {
            foreach (var element in elements)
            {
                Push(element);
            }
        }
    }
}
