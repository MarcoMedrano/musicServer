using Microsoft.AspNetCore.Razor.TagHelpers;

namespace musicServer.TagHelpers
{
    [HtmlTargetElement("script", Attributes = "to_babel")]
    public class ScriptTagHelper : TagHelper
    {
        public override void Process(TagHelperContext context, TagHelperOutput output)
        {
            output.Attributes.SetAttribute("type", "text/babel");
        }
    }
}
