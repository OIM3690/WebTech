from flask import Flask, render_template

app = Flask(__name__)


@app.route("/hello/<name>")
@app.route("/")
def hello_world(name=None):
    if name:
        return render_template("home.html", name=name)
    return "<p>Hello, World!</p>"


if __name__ == "__main__":
    app.run(debug=True)
