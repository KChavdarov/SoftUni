using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace StockMarket
{
    public class Investor
    {
        public Investor(string fullName, string emailAddress, decimal moneyToInvest, string brokerName)
        {
            Portfolio = new Dictionary<string, Stock>();
            FullName = fullName;
            EmailAddress = emailAddress;
            MoneyToInvest = moneyToInvest;
            BrokerName = brokerName;
        }

        public Dictionary<string, Stock> Portfolio { get; set; }
        public string FullName { get; set; }
        public string EmailAddress { get; set; }
        public decimal MoneyToInvest { get; set; }
        public string BrokerName { get; set; }
        public int Count => Portfolio.Count;
        public void BuyStock(Stock stock)
        {
            if (stock.MarketCapitalization > 10000 && MoneyToInvest >= stock.PricePerShare && !Portfolio.ContainsKey(stock.CompanyName))
            {
                Portfolio.Add(stock.CompanyName, stock);
                MoneyToInvest -= stock.PricePerShare;
            }
        }

        public string SellStock(string companyName, decimal sellPrice)
        {
            if (!Portfolio.ContainsKey(companyName))
            {
                return $"{companyName} does not exist.";
            }
            else
            {
                if (sellPrice < Portfolio[companyName].PricePerShare)
                {
                    return $"Cannot sell {companyName}.";
                }
                else
                {
                    Portfolio.Remove(companyName);
                    MoneyToInvest += sellPrice;
                    return $"{companyName} was sold.";
                }
            }
        }

        public Stock FindStock(string companyName)
        {
            return Portfolio.ContainsKey(companyName) ? Portfolio[companyName] : null;
        }

        public Stock FindBiggestCompany()
        {
            return Portfolio.OrderByDescending(a => a.Value.MarketCapitalization).FirstOrDefault().Value;
        }

        public string InvestorInformation()
        {
            StringBuilder result = new StringBuilder();
            result.AppendLine($"The investor {FullName} with a broker {BrokerName} has stocks:");
            foreach (var entry in Portfolio)
            {
                result.AppendLine(entry.Value.ToString());
            }
            return result.ToString().Trim();
        }
    }
}