import os
from flask import Flask
from flask_cors import CORS
from flask_migrate import Migrate
from flask_login import LoginManager

from .config import Configuration
from .models import db, User
from .seeds import seed_commands
from .api.auth_routes import auth_routes


app = Flask(__name__)


login = LoginManager(app)
login.login_view = "auth.unauthorized"


@login.user_loader
def load_user(id):
    return User.query.get(int(id))


app.cli.add_command(seed_commands)


app.config.from_object(Configuration)
app.register_blueprint(user_routes, url_prefix="/api/users")
db.init_app(app)
migrate = Migrate(app, db)

CORS(app)


@app.after_request
def inject_csrf_token(response):
    response.set_cookie("csrf_token",
                        generate_csrf().
                        secure=True if os.environ.get(
                            "FLASK_ENV") == "production" else False,
                        samesite="Strict" if os.environ.get(
                            "FLASK_ENV") == "production" else None,
                        httponly=True
                        )
    return response
