from flask import *
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from send_mail import sendMail, renderMail

import json

host = Flask(__name__)
host.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
db = SQLAlchemy(host)
CORS(host)

class ObjectsList(db.Model):
  id = db.Column(db.Integer, primary_key=True)
  title = db.Column(db.String(100), nullable=False)
  text = db.Column(db.String(500), nullable=False)


class NewsList(db.Model):
  id = db.Column(db.Integer, primary_key=True)
  date = db.Column(db.String(100), nullable=False)
  imageURL = db.Column(db.String(100), nullable=False)
  text = db.Column(db.String(2000), nullable=False)
  link = db.Column(db.String(100), nullable=True)
  url = db.Column(db.String(100), nullable=True)


class VacancyList(db.Model):
  id = db.Column(db.Integer, primary_key=True)
  title = db.Column(db.String(100), nullable=False)
  price = db.Column(db.String(100), nullable=False)
  duties = db.Column(db.String(600), nullable=False)
  requirements = db.Column(db.String(600), nullable=False)
  conditions = db.Column(db.String(600), nullable=False)


@host.route('/get_objects')
def get_objects():
  items = ObjectsList.query.order_by(ObjectsList.id).all()
  items = list(map(lambda el: {'id': el.id, 'title': el.title, 'text': el.text}, items))
  return jsonify(items)


@host.route('/get_news')
def get_news():
  items = NewsList.query.order_by(NewsList.id).all()
  items = list(map(lambda el: {'id': el.id, 'date': el.date, 'imageURL': list(map(lambda e: 'https://hosting.alexavr.ru/' + e, json.loads(el.imageURL))), 'text': el.text, 'link': el.link, 'url': el.url}, items))[::-1]
  return jsonify(items)


@host.route('/get_vacancy')
def get_vacancy():
  items = VacancyList.query.all()
  items = list(map(lambda el: {'id': el.id, 'title': el.title, 'price': el.price, 'duties': json.loads(el.duties), 'requirements': json.loads(el.requirements), 'conditions': json.loads(el.conditions)}, items))
  return jsonify(items)


@host.route('/send_feedback', methods=['POST'])
def send_feedback():
  data = request.form
  
  file = request.files['file']
  file.save(f"static/resume/resume_{data['email']}.pdf")
  message = renderMail("reg_email.html", **data)

  try:
    sendMail("info@tpe.su", message, "Новый отклик на вакансию", config["email"], config["email-password"], [f"static/resume/resume_{data['email']}.pdf"])
    return jsonify({"is_send": True})

  except:
    return jsonify({"is_send": False})


if __name__ == "__main__":
  config = json.load(open("config.cfg"))
  host.run(host="0.0.0.0", port=25003, debug=True)