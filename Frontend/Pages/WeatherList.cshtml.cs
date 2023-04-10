using Frontend.ViewModels;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Newtonsoft.Json;

namespace Frontend.Pages
{
    public class WeatherListModel : PageModel
    {
        private readonly ILogger<WeatherListModel> _logger;
        public List<WeatherListViewModel> WeatherList { get; set; }
        public WeatherListModel(ILogger<WeatherListModel> logger)
        {
            _logger = logger;
        }

        public async Task OnGetAsync() {
            using (var client = new HttpClient())
            {
                HttpResponseMessage response = await client.GetAsync("http://localhost:5256/WeatherForecast");

                if (response.IsSuccessStatusCode)
                {
                    string content = await response.Content.ReadAsStringAsync();
                    WeatherList = JsonConvert.DeserializeObject<List<WeatherListViewModel>>(content);
                }else
                {
                    WeatherList = new List<WeatherListViewModel>();
                }
            }

        }
    }
}