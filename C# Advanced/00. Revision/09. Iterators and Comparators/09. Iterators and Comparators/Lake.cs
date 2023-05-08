using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _09._Iterators_and_Comparators
{
    internal class Lake : IEnumerable<int>
    {
        public Lake(int[] stones)
        {
            this.stones = stones;
        }
        private int[] stones;
        public IEnumerator<int> GetEnumerator()
        {
            var forward = new Queue<int>();
            var reverse = new Stack<int>();
            for (int i = 0; i < stones.Length; i++)
            {
                var step = stones[i];
                if (step % 2 == 0)
                {
                    forward.Enqueue(step);
                }
                else
                {
                    reverse.Push(step);
                }
            }
            while (forward.Count > 0)
            {
                yield return forward.Dequeue();
            };
            while (reverse.Count > 0)
            {
                yield return reverse.Pop();
            }
        }

        IEnumerator IEnumerable.GetEnumerator() => GetEnumerator();
    }
}