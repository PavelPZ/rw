using System;
using System.Web;

namespace rw.design {
  public class DataHandler : IHttpHandler {
    //public bool IsReusable { get { return true; } }
    public bool IsReusable { get => true; }

    public void ProcessRequest(HttpContext ctx) {
      var path = ctx.Request.Url.AbsolutePath; 
      ctx.Response.WriteFile(@"D:\rw\data"+ path.Replace('/','\\'));
    }

  }
}
