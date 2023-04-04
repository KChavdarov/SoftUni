using System.Text.RegularExpressions;

HeroesOfCodeAndLogicVII();

void PasswordReset()
{

    string password = Console.ReadLine();
    string input = Console.ReadLine();

    while (input != "Done")
    {
        var tokens = input.Split(" ");
        string command = tokens[0];

        switch (command)
        {
            case "TakeOdd":
                password = TakeOdd(password);
                break;
            case "Cut":
                int index = int.Parse(tokens[1]);
                int length = int.Parse(tokens[2]);

                password = Cut(password, index, length);
                break;
            case "Substitute":
                string value = tokens[1];
                string replacement = tokens[2];
                password = Substitute(password, value, replacement);
                break;
        }

        input = Console.ReadLine();
    }

    Console.WriteLine($"Your password is: {password}");


    string TakeOdd(string input)
    {
        string result = new string(input.ToCharArray().Where((a, i) => i % 2 == 1).ToArray());
        Console.WriteLine(result);
        return result;
    }

    string Cut(string input, int index, int length)
    {
        string result = input.Remove(index, length);
        Console.WriteLine(result);
        return result;
    }

    string Substitute(string input, string value, string replacement)
    {
        string result = input;
        if (input.Contains(value))
        {
            result = input.Replace(value, replacement);
            Console.WriteLine(result);
        }
        else
        {
            Console.WriteLine("Nothing to replace!");
        }

        return result;
    }
}

void FancyBarcodes()
{
    int codes = int.Parse(Console.ReadLine());
    var pattern = new Regex(@"^@#+[A-Z][A-Za-z0-9]{4,}[A-Z]@#+$");

    for (int i = 0; i < codes; i++)
    {
        string group = "00";
        string barcode = Console.ReadLine();

        if (pattern.IsMatch(barcode))
        {
            var digits = barcode.Where(a => char.IsDigit(a)).ToArray();
            if (digits.Any())
            {
                group = new string(digits);
            }

            Console.WriteLine($"Product group: {group}");
        }
        else
        {
            Console.WriteLine("Invalid barcode");
        }

    }
}

void HeroesOfCodeAndLogicVII()
{
    int count = int.Parse(Console.ReadLine());
    Dictionary<string, Hero> heroes = new Dictionary<string, Hero>();

    for (int i = 0; i < count; i++)
    {
        string[] tokens = Console.ReadLine().Split(" ");
        var name = tokens[0];
        var hp = int.Parse(tokens[1]);
        var mana = int.Parse(tokens[2]);

        var hero = new Hero(name, hp, mana);
        heroes.Add(name, hero);
    }

    string input = Console.ReadLine();

    while (input != "End")
    {
        string[] tokens = input.Split(" - ");
        string action = tokens[0];
        string name = tokens[1];
        var hero = heroes[name];

        switch (action)
        {
            case "CastSpell":
                int mana = int.Parse(tokens[2]);
                string spell = tokens[3];
                hero.CastSpell(mana, spell);
                break;
            case "TakeDamage":
                int damage = int.Parse(tokens[2]);
                string attacker = tokens[3];
                hero.TakeDamage(damage, attacker);
                break;
            case "Recharge":
                int amount = int.Parse(tokens[2]);
                hero.Recharge(amount);
                break;
            case "Heal":
                amount = int.Parse(tokens[2]);
                hero.Heal(amount);
                break;
        }

        input = Console.ReadLine();
    }

    heroes.Values.Where(a => a.IsAlive).ToList().ForEach(a => Console.WriteLine(a.ToString()));
}
class Hero
{
    public Hero(string name, int hp, int mp)
    {
        Name = name;
        Health = hp;
        Mana = mp;
    }
    private int health;
    private int mana;

    public string Name { get; private set; }
    public int Health
    {
        get { return health; }
        set { health = Math.Min(100, value); }
    }

    public int Mana
    {
        get { return mana; }
        set { mana = Math.Min(200, value); }
    }

    public bool IsAlive { get => Health > 0; }

    public void CastSpell(int mana, string spell)
    {
        if (Mana >= mana)
        {
            Mana -= mana;
            Console.WriteLine($"{Name} has successfully cast {spell} and now has {Mana} MP!");
        }
        else
        {
            Console.WriteLine($"{Name} does not have enough MP to cast {spell}!");
        }
    }

    public void TakeDamage(int damage, string attacker)
    {
        Health -= damage;

        if (IsAlive)
        {
            Console.WriteLine($"{Name} was hit for {damage} HP by {attacker} and now has {Health} HP left!");
        }
        else
        {
            Console.WriteLine($"{Name} has been killed by {attacker}!");
        }
    }

    public void Recharge(int amount)
    {
        int manaOld = Mana;
        Mana += amount;

        Console.WriteLine($"{Name} recharged for {Mana - manaOld} MP!");
    }

    public void Heal(int amount)
    {
        int healthOld = Health;
        Health += amount;

        Console.WriteLine($"{Name} healed for {Health - healthOld} HP!");
    }

    public override string ToString()
    {
        string[] elements = { Name, $"  HP: {Health}", $"  MP: {Mana}" };
        return string.Join("\n", elements);
    }
}