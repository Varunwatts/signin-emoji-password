# 😄 Emotion-Based Sign-In System

An innovative and fun authentication system where your **facial expressions become your password** — literally! This project uses real-time face detection and emotion recognition to generate emoji-based passwords from your expressions. 🧠🎭🔐

---

## 📸 Live Demo
 
🎥 Supports real-time camera access and expression-based emoji authentication.

---

## 🧠 How It Works

1. The webcam captures your **facial expressions** in real time.
2. `face-api.js` detects your emotion (happy, sad, angry, etc.).
3. Each detected expression is converted into an **emoji**.
4. Multiple snaps allow you to form an emoji string as your password.
5. Emoji string = your secret login key! 🔐

---

## 🔧 Technologies Used

| Technology      | Purpose                             |
|-----------------|-------------------------------------|
| **HTML5/CSS3**  | UI layout and styling               |
| **JavaScript**  | Core logic and DOM manipulation     |
| **face-api.js** | Face detection and expression recognition |
| **Webcam API**  | Real-time video input from user     |

---

## 📂 Folder Structure

emotion-signin/
├── index.html
├── style.css
├── script.js
└── models/
├── face_expression_model-*
└── tiny_face_detector_model-*

> 📦 Make sure the `/models` folder contains all the required pre-trained model files from `face-api.js`.

---

## 🛠 Features

- 🎥 Webcam-based real-time expression capture
- 😄 Emoji-based password generation
- 📸 Multi-expression capture to form complex emoji strings
- 🔁 Reset functionality to clear emoji password
- ✨ Smooth animations and responsive UI

---

## 🚀 How to Run

1. **Clone the repo**
   git clone https://github.com/your-username/emotion-signin.git
   cd emotion-signin
2. **Download the models (or use the provided ones)**
   tiny_face_detector_model
   face_expression_model
3. **Start a Live Server**
   Open index.html with Live Server (VS Code extension recommended)
   Allow webcam access and start snapping your expressions!
   
---

**🧠 Use Cases**
> Touchless Sign-In Systems
> Accessibility Applications
> Emotion-based Interaction in Games or Apps
> Just-for-Fun Secure UI Projects

---

**📌 To Do / Future Enhancements**
🔐 Add backend support (Firebase, Node.js)

📄 Create Register/Login with emoji password validation

👤 Save user sessions with localStorage or database

🧑‍💻 Author
Developed with ❤️ by Varun_watts
Drop a ⭐ if you like the project or fork it to build on top of it!


