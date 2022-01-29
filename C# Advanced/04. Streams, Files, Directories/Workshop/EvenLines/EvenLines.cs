namespace EvenLines
{
    using System;
    using System.IO;
    using System.Linq;
    using System.Text;

    public class EvenLines
    {
        static void Main(string[] args)
        {
            string inputFilePath = @"..\..\..\text.txt";

            Console.WriteLine(ProcessLines(inputFilePath));
        }

        public static string ProcessLines(string inputFilePath)
        {
            using StreamReader reader = new StreamReader(inputFilePath);
            StringBuilder result = new StringBuilder();
            int count = 0;

            while (!reader.EndOfStream)
            {
                if (count % 2 == 0)
                {
                    string line = reader.ReadLine();
                    line = ReplaceSymbols(line);
                    result.AppendLine(ReverseWords(line));
                }
                count++;
            }

            return result.ToString();
        }
        private static string ReverseWords(string replacedSymbols)
        {
            string[] parts = replacedSymbols.Split(' ', StringSplitOptions.RemoveEmptyEntries);
            parts = parts.Reverse().ToArray();
            return string.Join(' ', parts);
        }

        private static string ReplaceSymbols(string line)
        {
            char[] values = { '-', ',', '.', '!', '?' };

            foreach (var @char in values)
            {
                line = line.Replace(@char, '@');
            }

            return line;
        }
    }

}
