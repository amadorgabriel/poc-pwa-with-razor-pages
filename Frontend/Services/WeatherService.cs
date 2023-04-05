using Frontend.Interfaces;
using Frontend.ViewModels;
using System.Text.Json.Serialization;

namespace Frontend.Services
{
    public class WeatherService : IWeather
    {
        public async Task<List<WeatherViewModel>> GetWeathersAsync()
        {
            using (var client = new HttpClient())
            {
                var endpoint = "http://localhost:5256/WeatherForecast";
                var json = await client.GetStringAsync(endpoint);
                return JsonConvert.DeserializeObject<List<WeatherViewModel>>(json);
            }
        }
    }
}
