from flask import *
from flask_cors import CORS
from send_mail import sendMail, renderMail

host = Flask(__name__)
CORS(host)

@host.route('/send_feedback', methods=['POST'])
def send_feedback():
  data = request.form
  print(data, request.files)
  
  file = request.files['file']
  file.save(f"resume_{data['email']}.pdf")
  message = renderMail("reg_email.html", **data)
  print(data)

  try:
    sendMail("eianisimov@inbox.ru", message, "Новый отклик на вакансию", config["email"], config["email-password"], [f"resume_{data['email']}.pdf"])
    return jsonify({"is_send": True})

  except:
    return jsonify({"is_send": False})


if __name__ == "__main__":
  config = json.load(open("config.cfg"))
  host.run(host="0.0.0.0", debug=True)