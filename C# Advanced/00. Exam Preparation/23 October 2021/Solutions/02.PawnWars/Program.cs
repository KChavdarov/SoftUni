using System;

namespace _02.PawnWars
{
    internal class Program
    {
        static char[,] board = new char[8, 8];
        static Position white;
        static Position black;
        static bool isWhiteTurn = true;
        static void Main(string[] args)
        {
            for (int i = 0; i < 8; i++)
            {
                char[] line = Console.ReadLine().ToCharArray();
                for (int j = 0; j < 8; j++)
                {
                    char @char = line[j];
                    board[i, j] = @char;
                    if (@char == 'w')
                    {
                        white = new Position(i, j, "White", 'w');
                    }
                    else if (@char == 'b')
                    {
                        black = new Position(i, j, "Black", 'b');
                    }
                }
            }

            while (true)
            {
                Position player = isWhiteTurn ? white : black;
                Position opponent = isWhiteTurn ? black : white;

                if (checkDiagonals(player, opponent))
                {
                    board[player.Row, player.Col] = player.Sign;
                    Console.WriteLine($"Game over! {player.Name} capture on {getCoordinates(player)}.");
                    return;
                }

                if (Move(player))
                {
                    Console.WriteLine($"Game over! {player.Name} pawn is promoted to a queen at {getCoordinates(player)}.");
                    return;
                }

                board[player.Row, player.Col] = player.Sign;
                isWhiteTurn = !isWhiteTurn;
            }
        }

        static bool checkDiagonals(Position player, Position opponent)
        {
            int diagonalACol = player.Col + 1;
            int diagonalBCol = player.Col - 1;
            int diagonalRow = isWhiteTurn ? player.Row - 1 : player.Row + 1;

            if (diagonalRow == opponent.Row)
            {
                if (diagonalACol == opponent.Col || diagonalBCol == opponent.Col)
                {
                    board[player.Row, player.Col] = '-';
                    player.Row = opponent.Row;
                    player.Col = opponent.Col;
                    return true;
                }
            }
            return false;
        }
        static bool Move(Position player)
        {
            int currentRow = player.Row;

            if (isWhiteTurn)
            {
                currentRow--;
            }
            else
            {
                currentRow++;
            }

            if (isValidRow(currentRow))
            {
                board[player.Row, player.Col] = '-';
                player.Row = currentRow;
                return false;
            }
            else
            {
                return true;
            }
        }

        static string getCoordinates(Position position)
        {
            return $"{(char)('a' + position.Col)}{8 - position.Row}";
        }

        static bool isValidRow(int row)
        {
            return row >= 0 && row < board.GetLength(0);
        }

        class Position
        {
            public Position(int row, int col, string name, char sign)
            {
                Row = row;
                Col = col;
                Name = name;
                Sign = sign;
            }

            public int Row { get; set; }
            public int Col { get; set; }
            public string Name { get; set; }
            public char Sign { get; set; }
        }
    }
}
