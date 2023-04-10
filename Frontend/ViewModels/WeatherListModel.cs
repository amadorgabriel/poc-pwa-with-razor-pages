using System.ComponentModel.DataAnnotations;

namespace Frontend.ViewModels
{
    public class WeatherListViewModel
    {
        public DateTime Date { get; set; }

        public int TemperatureC { get; set; }

        public int TemperatureF { get; set; }

        public string? Summary { get; set; }
    }
}
