from smtplib import SMTP_SSL
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from email.mime.application import MIMEApplication
import os

def renderMail(html, **kwargs):
    raw = open("templates/" + html).read()
    split_raw = raw.split("}}")
    sp = []
    for i in split_raw:
        sp.extend(i.split("{{"))
    mail = []
    for i in sp:
        if i in kwargs:
            mail.append(kwargs[i])
        else:
            mail.append(i)
    return "".join(mail)

def sendMail(client_mail, message, header, server_mail, server_pass, files=[]):
    msg = MIMEMultipart()
    msg['Subject'] = header
    msg['From'] = server_mail
    msg['To'] = client_mail
    msg.attach(MIMEText(message, "html", "utf-8"))
    for i in files:
        with open(i, "rb") as f:
            part = MIMEApplication(f.read(), Name=os.path.basename(i))
        part['Content-Disposition'] = f'attachment; filename="{os.path.basename(i)}"'
        msg.attach(part)
    smtp = SMTP_SSL('smtp.yandex.ru')
##    smtp = SMTP_SSL('smtp.gmail.com')
    smtp.login(server_mail, server_pass)
    smtp.sendmail(server_mail, client_mail, msg.as_string())
    smtp.quit()
