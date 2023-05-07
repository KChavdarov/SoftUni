using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _08._Generics
{
    internal class GenericBox<T>
    {
        public GenericBox(T value)
        {
            this.value = value;
        }
        public T value;

        public override string ToString()
        {
            return $"{value.GetType().Name}: {value}";
        }
    }
}
