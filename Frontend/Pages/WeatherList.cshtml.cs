using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace Frontend.Pages
{
    public class WeatherListModel : PageModel
    {
        private readonly ILogger<WeatherListModel> _logger;

        public WeatherListModel(ILogger<WeatherListModel> logger)
        {
            _logger = logger;
        }

        public void OnGet()
        {
        }
    }
}