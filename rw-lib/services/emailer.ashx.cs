using System;
using System.Configuration;
using System.Net.Mail;
using System.Web;

namespace services {

  public class emailer : IHttpHandler {
    public void ProcessRequest(HttpContext context) {
      processRequest.run<sendEmailIN, serviceOUT>(context, inPar => {
        MailMessage mailObj = new MailMessage();
        mailObj.From = new MailAddress(inPar.from);
        mailObj.To.Add(inPar.to);
        if (inPar.cc != null) mailObj.CC.Add(inPar.cc);
        if (inPar.bcc != null) mailObj.Bcc.Add(inPar.bcc);
        mailObj.IsBodyHtml = inPar.isBodyHtml==true;
        mailObj.Subject = inPar.subject;
        mailObj.Body = inPar.body;
        SmtpClient smtpClient = new SmtpClient(ConfigurationManager.AppSettings["Email.SmtpHost"], int.Parse(ConfigurationManager.AppSettings["Email.SmtpPort"]));
        smtpClient.Credentials = new System.Net.NetworkCredential(ConfigurationManager.AppSettings["Email.SmtpUsername"], ConfigurationManager.AppSettings["Email.SmtpPassword"]);
        smtpClient.EnableSsl = ConfigurationManager.AppSettings["Email.SmtpSsl"] == "true";
        try {
          smtpClient.Send(mailObj);
          //https://msdn.microsoft.com/en-us/library/system.net.mail.smtpexception.statuscode(v=vs.110).aspx
        } catch (SmtpFailedRecipientsException ex) {
          for (int i = 0; i < ex.InnerExceptions.Length; i++) {
            SmtpStatusCode status = ex.InnerExceptions[i].StatusCode;
            return new serviceOUT { error = "SmtpFailedRecipientsException: " + status.ToString() };
            //if (status == SmtpStatusCode.MailboxBusy || status == SmtpStatusCode.MailboxUnavailable) {
            //  //Console.WriteLine("Delivery failed - retrying in 5 seconds.");
            //  System.Threading.Thread.Sleep(5000);
            //  //client.Send(message);
            //} else {
            //  //Console.WriteLine("Failed to deliver message to {0}", ex.InnerExceptions[i].FailedRecipient);
            //}
          }
        } catch (Exception ex) {
          return new serviceOUT { error = "Exception: " + ex.Message };
          //Console.WriteLine("Exception caught in RetryIfBusy(): {0}", ex.ToString());
        }
        return null;
      });
    }

    public bool IsReusable { get { return true; } }
  }
}