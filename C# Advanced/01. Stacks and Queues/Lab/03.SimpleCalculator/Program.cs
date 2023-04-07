using System;
using System.Collections.Generic;
using System.Text;

namespace _03.SimpleCalculator
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string expression = "((1+2)*3+100)/2";
            //string expression = Console.ReadLine();
            double result = Evaluate(expression);

            Console.WriteLine(result);

        }

        static double Evaluate(string expression)
        {
            string allowedOperators = "+-/*^";
            Stack<double> numbers = new Stack<double>();
            Stack<char> operators = new Stack<char>();

            for (int i = 0; i < expression.Length; i++)
            {
                char @char = expression[i];

                if (@char == '(')
                {
                    operators.Push(@char);
                }
                else if (@char == ')')
                {
                    while (operators.Peek() != '(')
                    {
                        var op = operators.Pop();
                        var param2 = numbers.Pop();
                        var param1 = numbers.Pop();
                        var newValue = ApplyOperation(op, param1, param2);
                        numbers.Push(newValue);
                    }
                    operators.Pop(); // get rid of opening ( to complete the operation
                }
                else if (allowedOperators.Contains(@char))
                {
                    while (operators.Count > 0 && Priority(operators.Peek()) >= Priority(@char))
                    {
                        var op = operators.Pop();
                        var param2 = numbers.Pop();
                        var param1 = numbers.Pop();
                        var newValue = ApplyOperation(op, param1, param2);
                        numbers.Push(newValue);
                    }
                    operators.Push(@char);
                }
                else if (char.IsDigit(@char) || @char == '.')
                {
                    StringBuilder number = new StringBuilder();
                    while (expression[i] == '.' || char.IsDigit(expression[i]))
                    {
                        number.Append(expression[i]);
                        i++;

                        if (i >= expression.Length)
                        {
                            break;
                        }
                    }
                    numbers.Push(double.Parse(number.ToString()));
                    i--;
                }

            }
            while (operators.Count > 0)
            {
                var op = operators.Pop();
                var param2 = numbers.Pop();
                var param1 = numbers.Pop();
                var newValue = ApplyOperation(op, param1, param2);
                numbers.Push(newValue);
            }

            return numbers.Pop();
        }

        static double ApplyOperation(char operation, double operand1, double operand2)
        {
            switch (operation)
            {
                case '+': return operand1 + operand2;
                case '-': return operand1 - operand2;
                case '*': return operand1 * operand2;
                case '/': return operand1 / operand2;
                case '^': return Math.Pow(operand1, operand2);
                default: return 0;
            }
        }

        static int Priority(char operation)
        {
            switch (operation)
            {
                case '+': return 1;
                case '-': return 1;
                case '*': return 2;
                case '/': return 2;
                case '^': return 3;
                default: return 0;
            }
        }
    }
}