import os
from flask import Flask, render_template, request, jsonify
from supabase import create_client, Client
from dotenv import load_dotenv

# 1. Setup and Initialization
load_dotenv()
app = Flask(__name__, template_folder='templates', static_folder='static')

url = os.environ.get("SUPABASE_URL")
key = os.environ.get("SUPABASE_KEY")
supabase: Client = create_client(url, key)

# 2. Routes for Pages
@app.route('/')
def home():
    return render_template('index.html')

@app.route('/signup')
def signup_page():
    return render_template('login.html')

# 3. Auth API Routes
@app.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    response = supabase.auth.sign_up({"email": data['email'], "password": data['password']})
    # Check if user exists in response
    message = "Check your email for confirmation" if response.user else "Sign up successful"
    return jsonify({"message": message}), 200

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    response = supabase.auth.sign_in_with_password({"email": data['email'], "password": data['password']})
    return jsonify({"token": response.session.access_token}), 200

# 4. Data API Routes
@app.route('/api/get_character/<char_key>')
def get_char(char_key):
    # This queries your Supabase 'characters' table
    response = supabase.table("characters").select("*").eq("char_key", char_key).execute()
    return jsonify(response.data)

@app.route('/profile')
def get_profile():
    # Placeholder: In a real app, get user_id from the JWT token
    user_id = request.headers.get("Authorization") 
    profile = supabase.table("profiles").select("*").eq("id", user_id).execute()
    return jsonify(profile.data)

if __name__ == '__main__':
    app.run(debug=True)
