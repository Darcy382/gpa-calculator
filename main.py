from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def index_page():
    return render_template("index.html")


@app.route('/college')
def college_page():
    return render_template("college-gpa.html", calc_type="college")


@app.route('/highschool')
def high_school_page():
    return render_template("highschool-gpa.html", calc_type="highschool")


if __name__ == '__main__':
    app.run()
