from flask import Flask
app = Flask(__name__)

@app.route("/")
def hello():
    return "Hello World z Azure! Zadanie Moduł 1 wykonane."

if __name__ == "__main__":
    app.run()