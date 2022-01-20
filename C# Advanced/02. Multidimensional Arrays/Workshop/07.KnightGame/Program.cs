using System;

namespace _07.KnightGame
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            char[,] board = new char[n, n];

            for (int i = 0; i < board.GetLength(0); i++)
            {
                char[] row = Console.ReadLine().ToCharArray();
                for (int j = 0; j < board.GetLength(1); j++)
                {
                    board[i, j] = row[j];
                }
            }

            int removalCount = 0;
            int maxAttackCount = 0;
            int maxAttackRow = 0;
            int maxAttachColumn = 0;

            while (true)
            {
                for (int i = 0; i < board.GetLength(0); i++)
                {
                    for (int j = 0; j < board.GetLength(1); j++)
                    {
                        char piece = board[i, j];
                        if (piece == 'K')
                        {
                            int currentCount = GetAttackCount(board, i, j);
                            if (currentCount > maxAttackCount)
                            {
                                maxAttackCount = currentCount;
                                maxAttackRow = i;
                                maxAttachColumn = j;
                            }
                        }
                    }
                }

                if (maxAttackCount == 0)
                {
                    break;
                }

                maxAttackCount = 0;
                board[maxAttackRow, maxAttachColumn] = '0';
                removalCount++;
            }

            Console.WriteLine(removalCount);

            static int GetAttackCount(char[,] board, int i, int j)
            {
                int count = 0;
                if (i - 2 >= 0 && i - 2 < board.GetLength(0) && j - 1 >= 0 && j - 1 < board.GetLength(1))
                {
                    if (board[i - 2, j - 1] == 'K') count++;
                }

                if (i - 1 >= 0 && i - 1 < board.GetLength(0) && j - 2 >= 0 && j - 2 < board.GetLength(1))
                {
                    if (board[i - 1, j - 2] == 'K') count++;
                }

                if (i + 1 >= 0 && i + 1 < board.GetLength(0) && j - 2 >= 0 && j - 2 < board.GetLength(1))
                {
                    if (board[i + 1, j - 2] == 'K') count++;
                }

                if (i + 2 >= 0 && i + 2 < board.GetLength(0) && j - 1 >= 0 && j - 1 < board.GetLength(1))
                {
                    if (board[i + 2, j - 1] == 'K') count++;
                }

                if (i + 2 >= 0 && i + 2 < board.GetLength(0) && j + 1 >= 0 && j + 1 < board.GetLength(1))
                {
                    if (board[i + 2, j + 1] == 'K') count++;
                }

                if (i + 1 >= 0 && i + 1 < board.GetLength(0) && j + 2 >= 0 && j + 2 < board.GetLength(1))
                {
                    if (board[i + 1, j + 2] == 'K') count++;
                }

                if (i - 1 >= 0 && i - 1 < board.GetLength(0) && j + 2 >= 0 && j + 2 < board.GetLength(1))
                {
                    if (board[i - 1, j + 2] == 'K') count++;
                }

                if (i - 2 >= 0 && i - 2 < board.GetLength(0) && j + 1 >= 0 && j + 1 < board.GetLength(1))
                {
                    if (board[i - 2, j + 1] == 'K') count++;
                }


                return count;
            }

        }
    }
}
