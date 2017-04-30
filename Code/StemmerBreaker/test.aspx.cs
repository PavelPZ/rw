using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace StemmerBreaker
{
	public partial class test : System.Web.UI.Page
	{
		protected void Page_Load(object sender, EventArgs e)
		{
			Runner.test(HttpContext.Current.Server.MapPath("~") + @"Code\StemmerBreaker\dlls\");
		}
	}
}