using Newtonsoft.Json;
using System;
using System.IO;
using System.Web;

namespace services {
  public class serviceOUT {
    public string error;
  }

  public static class processRequest {
    public static void run<TIN, TOUT>(HttpContext context, Func<TIN, TOUT> inToOut) where TOUT : serviceOUT, new() {
      var res = context.Request.ToString();
      using (var rdr = new StreamReader(context.Request.InputStream)) {
        context.Response.ContentType = "application/json";
        TIN jsonIN; TOUT jsonOUT;
        try {
          var json = rdr.ReadToEnd();
          jsonIN = JsonConvert.DeserializeObject<TIN>(json);
          jsonOUT = inToOut(jsonIN);
        } catch (Exception err) {
          jsonOUT = new TOUT { error = err.Message };
        }
        context.Response.Write(JsonConvert.SerializeObject(jsonOUT));
      }
    }
  }

}