namespace PlayersAndMonsters
{
    public class StartUp
    {
        public static void Main(string[] args)
        {
            DarkKnight hero = new BladeKnight("kiro", 99);
            System.Console.WriteLine(hero.ToString());
        }
    }
}