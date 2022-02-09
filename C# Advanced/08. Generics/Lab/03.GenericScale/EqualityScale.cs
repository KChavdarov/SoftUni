using System;
using System.Collections.Generic;
using System.Text;

namespace _03.GenericScale
{
    internal class EqualityScale<T>
        where T : class
    {
        private T left;
        private T right;

        public EqualityScale(T left, T right)
        {
            this.left = left;
            this.right = right;
        }

        public bool AreEqual()
        {
            return left == right;
            //return left.Equals(right);
        }
    }
}
