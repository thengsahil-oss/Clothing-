from flask import Flask, render_template, jsonify

app = Flask(__name__)

# Character Database
characters_data = {
    "thor": {
        "name": "Thor Odinson",
        "background": "The Odinson",
        "group": "Avengers, Gods of Asgard",
        "image": "thor_thumbnail.png" 
    },
    "captain_america": {
        "name": "Steven Rogers",
        "background": "Steven Rogers, Nomad",
        "group": "Avengers",
        "image": "cap_thumbnail.png"
    },
    "iron_man": {
        "name": "Tony Stark",
        "background": "Genius, Billionaire, Playboy, Philanthropist",
        "group": "Avengers",
        "image": "ironman_thumbnail.png"
    }
}

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/api/character/<character_id>')
def get_character(character_id):
    character = characters_data.get(character_id)
    if character:
        return jsonify(character)
    return jsonify({"error": "Character not found"}), 404

if __name__ == '__main__':
    app.run(debug=True)